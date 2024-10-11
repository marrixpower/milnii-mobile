import React, { useCallback, useRef } from 'react'

import { FlatList, ListRenderItem } from 'react-native'

import { useTranslation } from 'react-i18next'

import { i18n } from '@/app/i18n'

import { EScreens } from '@/app/navigation'

import { Header } from '@/widgets/header'

import { useGetFavoritesCategories } from '@/entities/favorite'
import { TFavoriteCategory } from '@/entities/favorite/models'
import { useVendorsList } from '@/entities/vendor'

import { useNavigation } from '@/shared/hooks'
import { getTranslate } from '@/shared/lib'
import { Background } from '@/shared/ui/background'
import { Button } from '@/shared/ui/button'
import { Image } from '@/shared/ui/image'
import { Input } from '@/shared/ui/input'
import { Modal } from '@/shared/ui/modal'
import { TBaseModalRef } from '@/shared/ui/modal/Base'
import { EColors, Typography } from '@/shared/ui/styled'
import { FlexWrapper, Touchable } from '@/shared/ui/styled/Styled'
import { BodyM4SB } from '@/shared/ui/styled/Text'

import { cardCol, cardSize } from './config'
import * as S from './styles'

export const Main = () => {
  const { t } = useTranslation()
  const { navigate } = useNavigation()

  const { category } = useVendorsList()

  const { savedCategory, flatListProps } = useGetFavoritesCategories()

  const createVendorList = category.map(item => ({
    label:
      item.name.find(nameItem => nameItem.lang === i18n.language)?.value || '',
    value: item._id,
  }))

  const ref = useRef<TBaseModalRef>(null)

  const onOpenModal = () => {
    ref.current?.open()
  }

  const renderListHeader = useCallback(() => {
    return (
      <Button.Standard
        secondary
        height="42px"
        mBottom="24px"
        mTop="40px"
        onPress={onOpenModal}
        text={`+ ${t('home.favorites.new_section').toUpperCase()}`}
      />
    )
  }, [])

  const onPressCard = useCallback((categoryId: string, title: string) => {
    navigate(EScreens.VendorsResult, {
      category: categoryId,
      title,
      isFavorite: true,
    })
  }, [])

  const renderItem: ListRenderItem<TFavoriteCategory> = ({ item }) => {
    const title = getTranslate(item.category.name)
    return (
      <Touchable onPress={() => onPressCard(item.category._id, title)}>
        <FlexWrapper width="auto" flexDirection="column">
          <Image.Standard
            type={'category'}
            width={`${cardSize}px`}
            height={`${cardSize}px`}
            borderRadius={8}
            source={item.category.image}
          />
          <BodyM4SB mTop="4px">{title}</BodyM4SB>
          <Typography.BodyM4R mTop="4px">
            {t('saved', { count: item.count })}
          </Typography.BodyM4R>
        </FlexWrapper>
      </Touchable>
    )
  }
  return (
    <>
      <Header.Nested title={t('more.favorites')} />

      <Background.Standard>
        <FlatList
          style={S.styles.list}
          data={savedCategory}
          ListHeaderComponent={renderListHeader}
          keyExtractor={item => item.category._id}
          numColumns={cardCol}
          columnWrapperStyle={S.styles.columnWrapper}
          renderItem={renderItem}
          {...flatListProps}
        />
      </Background.Standard>

      <Modal.Base ref={ref}>
        <FlexWrapper flexDirection={'column'}>
          <Typography.BodyL1R>
            {t('home.favorites.new_section')}
          </Typography.BodyL1R>

          <Input.DropDown
            selectedTextStyle={S.styles.dropDownText}
            style={S.styles.dropDownBottomLine}
            placeholder={'Select Category'}
            items={createVendorList}
          />

          <FlexWrapper justify={'space-between'} mTop={'16px'}>
            <Button.Standard
              style={[S.styles.cancel, S.styles.buttonBorder]}
              height={'35px'}
              color={EColors.translation}
              width={'48%'}>
              <Typography.BodyM2B color={EColors.primary}>
                {t('button.cancel').toUpperCase()}
              </Typography.BodyM2B>
            </Button.Standard>
            <Button.Standard
              height={'35px'}
              style={S.styles.buttonBorder}
              width={'48%'}>
              <Typography.BodyM2B color={EColors.white}>
                {t('button.save').toUpperCase()}
              </Typography.BodyM2B>
            </Button.Standard>
          </FlexWrapper>
        </FlexWrapper>
      </Modal.Base>
    </>
  )
}
