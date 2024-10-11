import React from 'react'

import { View, FlatList, ListRenderItem } from 'react-native'

import { useTranslation } from 'react-i18next'

import { EScreens, EStacks } from '@/app/navigation'

import { Header } from '@/widgets/header'

import { useTotalCounts, useVendorsList } from '@/entities/vendor'

import { TVendorCategory } from '@/entities/vendor/models/common'

import { useNavigation } from '@/shared/hooks'
import { getTranslate } from '@/shared/lib/tools'
import { Background } from '@/shared/ui/background'
import { Icon } from '@/shared/ui/Icon'
import { Image } from '@/shared/ui/image'
import { Progress } from '@/shared/ui/Progress'

import { Divider } from '@/shared/ui/styled/Styled'
import { BodyM1SB } from '@/shared/ui/styled/Text'

import { IconWrapper, TouchableItemContainer, styles } from './styles'

export const Main = () => {
  const { t } = useTranslation()
  const { category, flatListProps } = useVendorsList()
  const { totalCount: vendorsCount, favoriteCount } = useTotalCounts()

  const { navigate } = useNavigation()

  const renderItem: ListRenderItem<TVendorCategory> = ({ item }) => {
    const title = getTranslate(item.name)
    return (
      <TouchableItemContainer
        onPress={() =>
          navigate(EScreens.VendorsResult, {
            category: item._id,
            title,
          })
        }>
        <IconWrapper>
          <Image.Standard
            type={'category'}
            source={item.image}
            width="48px"
            height="48px"
            borderRadius={8}
          />
          {/* <Icon name="Vendors" size={28} /> */}
        </IconWrapper>
        <BodyM1SB mLeft="19px">{getTranslate(item.name)}</BodyM1SB>
      </TouchableItemContainer>
    )
  }

  const onGoToFavorite = () => {
    navigate(EStacks.Budget)
  }
  return (
    <>
      <Header.Nested
        rightIcon="Heart"
        onRightIconPress={onGoToFavorite}
        withGoBack={false}
        title={t('vendors.search')}
      />
      <Background.Standard isList style={styles.background}>
        <View style={[styles.padding_container, styles.header_margin]}>
          <Progress
            title={t('home.vendors.vendors_booked')}
            filled={favoriteCount}
            total={vendorsCount}
          />
        </View>
        {/* <View style={styles.padding_container}>
          <Input.Double />
        </View> */}
        <FlatList
          style={styles.padding_container}
          data={category}
          ItemSeparatorComponent={() => <Divider />}
          renderItem={renderItem}
          {...flatListProps}
        />
      </Background.Standard>
    </>
  )
}
