import React, { useEffect } from 'react'

import { FlatList } from 'react-native'

import { useIsFocused } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'

import { useDispatch } from 'react-redux'

import { TIconsKeys } from '@assets/svg'

import { EScreens, EStacks } from '@/app/navigation'

import { useTypedSelector } from '@/app/store'

import { getTaskSelector, tasksActions } from '@/entities/tasks/store'

import { useTotalCounts } from '@/entities/vendor'

import { useNavigation } from '@/shared/hooks'
import { Icon } from '@/shared/ui/Icon'
import { EColors } from '@/shared/ui/styled'

import { BodyL3R, BodyM1SB } from '@/shared/ui/styled/Text'

import { ItemContainer, Separator, styles } from './styles'
import { THomeLinksProps } from './types'

export const Links = ({
  guestDone = 0,
  guestCount = 0,
  budgetCount = 0,
  budgetDone = 0,
}: THomeLinksProps) => {
  const { t } = useTranslation()
  const { navigate } = useNavigation()
  const dispatch = useDispatch()
  const isFocused = useIsFocused()

  const { totalCount, doneCount } = useTypedSelector(getTaskSelector)
  const { totalCount: vendorsCount, favoriteCount } = useTotalCounts()

  useEffect(() => {
    if (isFocused) {
      dispatch(tasksActions.getDoneStatusRequest())
      dispatch(tasksActions.getTotalCountRequest())
    }
  }, [isFocused])

  const data: {
    title: string
    icon: TIconsKeys
    count: string
    onPress: () => void
  }[] = [
    {
      title: t('home.links.vendors').toUpperCase(),
      icon: 'Vendors',
      count: `${favoriteCount} / ${vendorsCount}`,
      onPress: () => navigate(EScreens.HomeVendors),
    },
    {
      title: t('home.links.tasks').toUpperCase(),
      icon: 'Tasks',
      count: `${doneCount} / ${totalCount}`,
      onPress: () => navigate(EStacks.Tasks, { screen: EScreens.TasksMain }),
    },
    {
      title: t('home.links.budget').toUpperCase(),
      icon: 'Calc',
      count: `${budgetDone} / ${budgetCount}`,
      onPress: () => navigate(EStacks.Budget),
    },
    {
      title: t('home.links.guests').toUpperCase(),
      icon: 'Guests',
      count: `${guestDone} / ${guestCount}`,
      onPress: () => navigate(EStacks.Guests),
    },
  ]
  return (
    <FlatList
      data={data}
      numColumns={2}
      style={styles.list}
      columnWrapperStyle={styles.column_wrapper}
      ItemSeparatorComponent={() => <Separator />}
      renderItem={({ item }) => {
        return (
          <ItemContainer onPress={item.onPress}>
            <Icon name={item.icon} size={item.icon === 'Guests' ? 60 : 50} />
            <BodyM1SB color={EColors.beige_200} mTop="10px">
              {item.title}
            </BodyM1SB>
            <BodyL3R color={EColors.beige_200} mTop="2px">
              {item.count}
            </BodyL3R>
          </ItemContainer>
        )
      }}
    />
  )
}
