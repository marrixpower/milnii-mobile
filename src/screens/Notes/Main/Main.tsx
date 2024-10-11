import React, { useEffect, useState } from 'react'

import { FlatList, ListRenderItem } from 'react-native'

import { useIsFocused } from '@react-navigation/native'
import { format } from 'date-fns'
import { useTranslation } from 'react-i18next'

import { EScreens } from '@/app/navigation'

import { Header } from '@/widgets/header'

import { useGetNote } from '@/features/note'

import { TNote } from '@/entities/note'

import { useNavigation } from '@/shared/hooks'
import { Background } from '@/shared/ui/background'
import { BottomBar } from '@/shared/ui/BottomBar'
import { Button } from '@/shared/ui/button'

import { Icon } from '@/shared/ui/Icon'
import { Divider, FlexWrapper } from '@/shared/ui/styled/Styled'
import {
  BodyL1SB,
  BodyL2R,
  BodyL4R,
  BodyM3SB,
  BodyM4SB,
  CaptionM1R,
} from '@/shared/ui/styled/Text'

import { ESortTypes } from './config'
import {
  DividerWrapper,
  EmptyContainer,
  Note,
  Separator,
  SortButton,
  SortButtonWrapper,
  SortItem,
  SortListWrapper,
  styles,
} from './styles'

export const Main = () => {
  const { t } = useTranslation()
  const { navigate } = useNavigation()
  const [sortType, setSortType] = useState(ESortTypes.date_edited)
  const [sortOpen, setSortOpen] = useState(false)

  const isFocused = useIsFocused()
  const onCreatePress = () => {
    navigate(EScreens.NotesNote, {})
  }

  const { notes, getFirstPage, canGetMoreItems, getMore, totalCount } =
    useGetNote({
      sort: sortType,
    })

  const sortData = [
    {
      key: ESortTypes.date_edited,
      value: t('notes.date_edited'),
    },
    { key: ESortTypes.date_created, value: t('notes.date_created') },
    { key: ESortTypes.title, value: t('notes.title') },
  ]

  const onChangePress = (id: string, text: string) => {
    navigate(EScreens.NotesNote, { id, text })
  }

  useEffect(() => {
    isFocused && getFirstPage()
  }, [isFocused, sortType])

  const onGetMore = () => {
    if (canGetMoreItems) {
      getMore()
    }
  }

  const renderEmptyComponent = () => {
    return (
      <EmptyContainer>
        <BodyL2R>{t('notes.empty')}</BodyL2R>
        <Button.Standard
          onPress={onCreatePress}
          mTop="30px"
          height="42px"
          secondary
          text={t('notes.add_note').toUpperCase()}
        />
      </EmptyContainer>
    )
  }

  const renderItem: ListRenderItem<TNote> = ({ item }) => {
    const date = format(new Date(item.createdAt), 'yyyy-MM-dd')

    const lines = item.text.split('\n')
    const title = lines[0] || ''
    const restOfText = lines.slice(1).join('\n') || ''
    return (
      <Note onPress={() => onChangePress(item._id, item.text)}>
        <BodyM4SB numberOfLines={2}>{title || ''}</BodyM4SB>
        <FlexWrapper mTop="2px" justify="flex-start">
          <CaptionM1R>{date}</CaptionM1R>
          <CaptionM1R style={styles.item_text} numberOfLines={2} mLeft="12px">
            {restOfText || ''}
          </CaptionM1R>
        </FlexWrapper>
      </Note>
    )
  }

  return (
    <>
      <Header.Nested
        title={t('more.notes')}
        rightIcon="Plus"
        onRightIconPress={onCreatePress}
      />

      <Background.Standard style={styles.main}>
        <FlatList
          ItemSeparatorComponent={() => <Separator />}
          bounces={false}
          data={notes}
          ListEmptyComponent={renderEmptyComponent}
          renderItem={renderItem}
          onEndReached={onGetMore}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
        />
      </Background.Standard>

      <BottomBar containerStyle={styles.bottomBar}>
        <DividerWrapper>
          <Divider />
        </DividerWrapper>

        <BodyL4R mTop="16px">{t('notes.count', { count: totalCount })}</BodyL4R>
        <SortButtonWrapper>
          <SortButton onPress={() => setSortOpen(prev => !prev)}>
            <BodyL1SB style={styles.sort_text}>...</BodyL1SB>
          </SortButton>
          {sortOpen && (
            <SortListWrapper>
              <BodyM3SB mLeft="17px" mBottom="12px">
                {t('notes.sort_by')}
              </BodyM3SB>
              {sortData.map(({ key, value }, index) => (
                <>
                  <SortItem
                    last={index === sortData.length - 1}
                    key={key}
                    onPress={() => {
                      setSortType(key)
                      setSortOpen(false)
                    }}>
                    <BodyM3SB mRight="8px">{value}</BodyM3SB>
                    {sortType === key && <Icon name="Done" size={9} />}
                  </SortItem>
                </>
              ))}
            </SortListWrapper>
          )}
        </SortButtonWrapper>
      </BottomBar>
    </>
  )
}
