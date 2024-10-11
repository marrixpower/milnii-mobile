import React from 'react'

import { FlatList, ListRenderItem, View } from 'react-native'

import { useTranslation } from 'react-i18next'

import { EScreens, EStacks } from '@/app/navigation'
import { useTypedSelector } from '@/app/store'

import { Header } from '@/widgets/header'

import { useGetFavorites } from '@/entities/favorite'
import { getFavoriteSelector } from '@/entities/favorite/store'
import { useTotalCounts, VendorEntity } from '@/entities/vendor'

import { TVendor } from '@/entities/vendor/models/common'

import { useNavigation } from '@/shared/hooks'
import { getTranslate } from '@/shared/lib'
import { Background } from '@/shared/ui/background'
import { Input } from '@/shared/ui/input'
import { Progress } from '@/shared/ui/Progress'
import { EColors } from '@/shared/ui/styled'
import { FlexWrapper, Hr } from '@/shared/ui/styled/Styled'
import { BodyM1SB, BodyM4R } from '@/shared/ui/styled/Text'

import { styles } from './styles'

export const Vendors = () => {
  const { t } = useTranslation()
  const { navigate } = useNavigation()
  const { search, setSearch, refresh, flatListProps } = useGetFavorites()
  const { favorites } = useTypedSelector(getFavoriteSelector)

  const { totalCount: vendorsCount, favoriteCount } = useTotalCounts()

  const renderItem: ListRenderItem<TVendor> = ({ item, index }) => {
    const showCategory =
      index === 0 ||
      favorites[index].category._id !== favorites[index - 1].category._id

    const categoryCount = showCategory
      ? favorites.filter(fav => fav.category === item.category).length
      : 0

    return (
      <React.Fragment key={item._id}>
        {showCategory && (
          <>
            <FlexWrapper
              style={styles.padding_container}
              mTop={index === 0 ? '43px' : '27px'}
              mBottom="27px"
              align="flex-start"
              justify="space-between">
              <FlexWrapper
                flexDirection="column"
                width="auto"
                align="flex-start">
                <BodyM1SB>{getTranslate(item.category.name)}</BodyM1SB>
                <BodyM4R style={styles.saved_count} color={EColors.grey_700}>
                  {categoryCount} {t('home.vendors.booked')}
                </BodyM4R>
              </FlexWrapper>
            </FlexWrapper>

            <Hr mBottom={'16px'} />
          </>
        )}
        <View style={styles.padding_container}>
          <VendorEntity.ListCard
            vendor={item}
            booked
            mBottom={'16px'}
            onRefresh={refresh}
          />
        </View>
      </React.Fragment>
    )
  }

  const onViewAll = () => {
    navigate(EStacks.Vendors, { screen: EScreens.VendorsMain })
  }

  return (
    <>
      <Header.Nested title={t('home.vendors.title')} />
      <Background.Standard isList style={styles.background}>
        <View style={styles.padding_container}>
          <Progress
            title={t('home.vendors.vendors_booked')}
            filled={favoriteCount}
            total={vendorsCount}
            onViewAllPress={onViewAll}
          />
        </View>
        <View style={styles.padding_container}>
          <Input.Standard
            minimal
            mTop="23px"
            value={search}
            onChange={setSearch}
            placeholder={t('home.vendors.search')}
          />
        </View>
        <FlatList data={favorites} renderItem={renderItem} {...flatListProps} />
      </Background.Standard>
    </>
  )
}
