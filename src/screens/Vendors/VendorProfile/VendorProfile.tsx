import React from 'react'

import { View } from 'react-native'

import { useRoute } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'

import { EScreens } from '@/app/navigation'
import { TScreenQueryProps } from '@/app/navigation/types'

import { Header } from '@/widgets/header'

import { useControlFavorite } from '@/features/favorite/hooks'

import { EFavoriteType } from '@/entities/favorite/models'
import { useVendor } from '@/entities/vendor/hooks/useVendor'

import { wp } from '@/shared/lib'
import { Background } from '@/shared/ui/background'

import { BottomBar } from '@/shared/ui/BottomBar'
import { Button } from '@/shared/ui/button'
import { Icon } from '@/shared/ui/Icon'
import { EColors } from '@/shared/ui/styled'
import { Divider, FlexWrapper } from '@/shared/ui/styled/Styled'
import { BodyM2SB } from '@/shared/ui/styled/Text'

import * as UI from './components'

import { styles } from './styles'

export const VendorProfile = () => {
  const { t } = useTranslation()

  const { vendor: initial } =
    useRoute<TScreenQueryProps<EScreens.VendorsVendorProfile>>().params

  const { vendor, getAction } = useVendor({ vendor: initial })

  const { onPressFavorite } = useControlFavorite({ id: initial._id })

  const isFavorite =
    vendor?.favorite?.map(item => item.type).includes(EFavoriteType.favorite) ||
    false

  const isSaved =
    vendor?.favorite?.map(item => item.type).includes(EFavoriteType.saved) ||
    false

  const onPressBooking = async () => {
    if (!vendor) {
      return
    }

    await onPressFavorite(isFavorite, EFavoriteType.favorite, vendor?.email)

    getAction()
  }

  const onPressSaved = async () => {
    if (!vendor) {
      return
    }

    await onPressFavorite(isSaved, EFavoriteType.saved)

    getAction()
  }

  return (
    <>
      <Header.Nested title={vendor?.name || ''} />
      <Background.Scroll>
        <UI.Slider {...vendor} />

        <UI.Info {...vendor} />
      </Background.Scroll>

      <BottomBar>
        <View>
          <Divider />
          <FlexWrapper
            width={`${wp(100) - 16}px`}
            mTop="20px"
            justify="space-between">
            <Button.Standard
              style={!isSaved ? [] : styles.button}
              secondary={!isSaved}
              onPress={onPressSaved}
              width={`${wp(45)}px`}
              height="42px">
              {isSaved && <Icon name={'CheckSmall'} size={10} />}
              <BodyM2SB
                mLeft={isSaved ? '10px' : '0px'}
                color={isSaved ? EColors.white : EColors.primary}>
                {t(isSaved ? 'vendors.saved' : 'vendors.save').toUpperCase()}
              </BodyM2SB>
            </Button.Standard>
            <Button.Standard
              style={styles.button}
              width={`${wp(45)}px`}
              onPress={onPressBooking}
              height="42px">
              <BodyM2SB color={EColors.white}>
                {t(
                  isFavorite ? 'button.delete' : 'vendors.book_now',
                ).toUpperCase()}
              </BodyM2SB>
            </Button.Standard>
          </FlexWrapper>
        </View>
      </BottomBar>
    </>
  )
}
