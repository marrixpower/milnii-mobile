import React, { useEffect, useRef, useState } from 'react'
import { FlatList, ListRenderItem } from 'react-native'

import { useIsFocused } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'

import { EScreens } from '@/app/navigation'

import { useTypedSelector } from '@/app/store'

import { TaskEntity } from '@/entities/tasks'

import { ETaskStatus, TTask } from '@/entities/tasks/models'

import { getUserSelector } from '@/entities/user/store'

import { useNavigation } from '@/shared/hooks'

import { Input } from '@/shared/ui/input'
import { EColors, Typography } from '@/shared/ui/styled'
import { FlexWrapper, Hr } from '@/shared/ui/styled/Styled'

import { useGetTask } from '../../hook'

import { getMonthText } from './helper'
import { PaddingContainer, styles } from './styles'
import { Filter } from './ui'

export const MainList = () => {
  const { t } = useTranslation()
  const flatListRef = useRef<FlatList>(null)
  const [filter, setFilter] = useState<ETaskStatus>()

  const { tasks, getFirstPage, search, setSearch, flatListProps } = useGetTask({
    filter,
  })
  const { user } = useTypedSelector(getUserSelector)

  const { navigate } = useNavigation()
  const isFocused = useIsFocused()

  useEffect(() => {
    if (isFocused) {
      getFirstPage()
    }
  }, [isFocused])

  const onTaskPress = (task: TTask) => {
    navigate(EScreens.TasksTask, { task })
  }

  const renderItem: ListRenderItem<TTask> = ({ item, index }) => {
    const showCategory =
      index === 0 || tasks[index].dateType !== tasks[index - 1].dateType
    return (
      <React.Fragment key={item._id}>
        {showCategory && (
          <FlexWrapper
            style={styles.textHead}
            flexDirection={'column'}
            align={'flex-start'}>
            <Typography.BodyM1B mBottom={'5px'}>
              {t('tasks.list_title', {
                value: getMonthText(item.dateType, user?.weddingDate),
              })}
            </Typography.BodyM1B>
            <Typography.BodyM4R color={EColors.grey_700}>
              {t(`tasks.timeline.${item.dateType}`)
                .replace('(lowest priority)', '')
                .toUpperCase()}
            </Typography.BodyM4R>
          </FlexWrapper>
        )}

        <TaskEntity.ListItem
          onRefresh={getFirstPage}
          onPress={() => onTaskPress(item)}
          {...item}
        />
        <Hr />
      </React.Fragment>
    )
  }

  const onSetFilter = (value: ETaskStatus | undefined) => {
    setFilter(value)

    if (tasks.length > 0) {
      flatListRef.current?.scrollToIndex({
        index: 0,
        animated: true,
      })
    }
  }

  return (
    <>
      <PaddingContainer>
        <Input.Standard
          mTop="17px"
          mBottom="14px"
          minimal
          placeholder={t('tasks.search')}
          value={search}
          onChange={setSearch}
        />
      </PaddingContainer>
      <PaddingContainer>
        <Filter filter={filter} setFilter={onSetFilter} />
      </PaddingContainer>
      <FlatList
        ref={flatListRef}
        style={styles.list}
        data={tasks}
        renderItem={renderItem}
        {...flatListProps}
      />
    </>
  )
}
