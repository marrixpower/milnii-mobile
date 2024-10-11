import React from 'react'

import { FlatList, ListRenderItem, View } from 'react-native'

import { useRoute } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'

import { EScreens, EStacks } from '@/app/navigation'
import { TScreenQueryProps } from '@/app/navigation/types'

import { Header } from '@/widgets/header'

import { useGetSavedFromCategory } from '@/entities/favorite/hooks/useGetSavedFromCategory'
import { VendorEntity } from '@/entities/vendor'

import { useGetVendors } from '@/entities/vendor/hooks/useGetVardors'

import { TVendor } from '@/entities/vendor/models/common'

import { useNavigation } from '@/shared/hooks'
import { Background } from '@/shared/ui/background'
import { Input } from '@/shared/ui/input'
import { FlexWrapper } from '@/shared/ui/styled/Styled'
import { BodyM4R, BodyM4SB } from '@/shared/ui/styled/Text'

import { styles } from './styles'

export const Result = () => {
  const { t } = useTranslation()

  const { navigate, goBack } = useNavigation()

  const { category, title, isFavorite } =
    useRoute<TScreenQueryProps<EScreens.VendorsResult>>().params

  const useHook = !!isFavorite ? useGetSavedFromCategory : useGetVendors

  const { vendors, search, setSearch, totalCount, flatListProps, refresh } =
    useHook({
      category,
    })

  const renderItem: ListRenderItem<TVendor> = ({ item }) => {
    return (
      <VendorEntity.ListCard
        vendor={item}
        onRefresh={refresh}
        isDefSaved={!!isFavorite}
      />
    )
  }

  const showViewAll = !!isFavorite

  const onViewAll = () => {
    navigate(EStacks.Vendors, { screen: EScreens.VendorsMain })
  }

  const onGoToFavorite = () => {
    if (isFavorite) {
      goBack()
      return
    }
    navigate(EStacks.Budget)
  }

  return (
    <>
      <Header.Nested
        title={title}
        rightIcon="Heart"
        onRightIconPress={onGoToFavorite}
      />
      <Background.Standard isList pHorizontal={16} style={styles.background}>
        <FlexWrapper justify={'space-between'}>
          <BodyM4SB>{t('vendors.results', { count: totalCount })}</BodyM4SB>

          {showViewAll && (
            <BodyM4R onPress={onViewAll}>{t('home.vendors.view_all')}</BodyM4R>
          )}
        </FlexWrapper>

        <Input.Double nameValue={search} onChangeName={setSearch} />
        <FlatList
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          style={styles.list}
          data={vendors}
          renderItem={renderItem}
          {...flatListProps}
        />
      </Background.Standard>
    </>
  )
}
