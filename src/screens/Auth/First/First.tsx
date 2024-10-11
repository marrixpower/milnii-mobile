import { Background } from '@/shared/ui/background'
import { EColors } from '@/shared/ui/styled'
import { Png } from '@assets/png'
import React from 'react'

import { ButtonsWrapper, Logo, styles } from './styles'
import { BodyM1R, BodyM5R } from '@/shared/ui/styled/Text'

import { Button } from '@/shared/ui/button'
import { Touchable } from '@/shared/ui/styled/Styled'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useTranslation } from 'react-i18next'

import { EScreens } from '@/app/navigation'
import { useNavigation } from '@/shared/hooks'

export const First = () => {
  const { t } = useTranslation()
  const { bottom } = useSafeAreaInsets()
  const { navigate } = useNavigation()
  const onLoginPress = () => {
    navigate(EScreens.AuthLogin)
  }
  return (
    <>
      <Background.Standard color={EColors.primary}>
        <Logo source={Png.LogoVertical} />
        <BodyM1R color={EColors.beige_200} mTop="33px" align="center">
          {t('auth.first.title_line_1')}
        </BodyM1R>
        <BodyM1R mTop="4px" color={EColors.beige_200}>
          {t('auth.first.title_line_2')}
        </BodyM1R>
        <ButtonsWrapper bottom={bottom}>
          <Button.Standard style={styles.button}>
            <BodyM1R color={EColors.beige_200}>
              {t('auth.first.plan_wedding')}
            </BodyM1R>
          </Button.Standard>
          <Touchable mTop="23px" onPress={onLoginPress}>
            <BodyM5R color={EColors.beige_200}>{t('auth.first.login')}</BodyM5R>
          </Touchable>
        </ButtonsWrapper>
      </Background.Standard>
    </>
  )
}
