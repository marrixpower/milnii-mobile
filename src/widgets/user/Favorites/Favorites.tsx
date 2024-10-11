import React, { useCallback } from 'react'

import { FlatList, ListRenderItem } from 'react-native'

import { useTranslation } from 'react-i18next'

import { EScreens, EStacks } from '@/app/navigation'

import { PaddingContainer } from '@/screens/Home/Main/styles'

import { useGetFavoritesCategories } from '@/entities/favorite'

import { TFavoriteCategory } from '@/entities/favorite/models'

import { useNavigation } from '@/shared/hooks'
import { getTranslate } from '@/shared/lib'
import { Button } from '@/shared/ui/button'
import { Image } from '@/shared/ui/image'
import { EColors } from '@/shared/ui/styled'
import { FlexWrapper, Touchable } from '@/shared/ui/styled/Styled'
import { BodyM1SB, BodyM2B, BodyM5SB } from '@/shared/ui/styled/Text'

import { Separator, styles } from './styles'

export const Favorites = () => {
  const { t } = useTranslation()
  const navigation = useNavigation()

  const { savedCategory } = useGetFavoritesCategories()

  const onPressView = () => {
    navigation.navigate(EStacks.Favorites, {
      screen: EScreens.FavoritesMain,
      params: {},
    })
  }

  const onPressCard = useCallback((categoryId: string, title: string) => {
    navigation.navigate(EStacks.Favorites, {
      screen: EScreens.VendorsResult,
      params: {
        category: categoryId,
        title,
        isFavorite: true,
      },
      initial: false,
    })
  }, [])

  const renderItem: ListRenderItem<TFavoriteCategory> = ({ item }) => {
    const title = getTranslate(item.category.name)
    return (
      <Touchable onPress={() => onPressCard(item.category._id, title)}>
        <FlexWrapper width={'85px'} flexDirection="column">
          <Image.Standard
            type={'category'}
            width={`85px`}
            height={`85px`}
            borderRadius={8}
            source={item.category.image}
          />
          <BodyM5SB mTop="4px" align={'center'}>
            {title}
          </BodyM5SB>
        </FlexWrapper>
      </Touchable>
    )
  }

  return (
    <>
      <BodyM1SB mLeft="44px" mBottom="18px" mTop="23px">
        {t('home.favorites.title')}
      </BodyM1SB>
      <FlatList
        contentContainerStyle={styles.list}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <Separator />}
        horizontal
        data={savedCategory}
        renderItem={renderItem}
      />
      <PaddingContainer>
        <Button.Standard mTop="28px" onPress={onPressView}>
          <BodyM2B color={EColors.white}>
            {t('home.favorites.button').toUpperCase()}
          </BodyM2B>
        </Button.Standard>
      </PaddingContainer>
    </>
  )
}
