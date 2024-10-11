import React from 'react'

import { Header } from '..'
import { Logo, Wrapper } from './styles'
import { Png } from '@assets/png'
import { EColors } from '@/shared/ui/styled'
import { Touchable } from '@/shared/ui/styled/Styled'
import { BodyM3R } from '@/shared/ui/styled/Text'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@/shared/hooks'
import { EScreens } from '@/app/navigation'

type TAuthHeaderProps = {
  isLogin?: boolean
}

export const Auth = ({ isLogin = false }: TAuthHeaderProps) => {
  const { t } = useTranslation()
  const { navigate } = useNavigation()
  const onRightContentPress = () => {
    navigate(isLogin ? EScreens.AuthCreateAccount : EScreens.AuthLogin)
  }
  return (
    <Header.Container color={EColors.beige_200}>
      <Wrapper>
        <Logo source={Png.LogoHorizontal} />
        <Touchable onPress={onRightContentPress}>
          <BodyM3R color={EColors.primary}>
            {isLogin ? t('auth.sign_up_free') : t('auth.login')}
          </BodyM3R>
        </Touchable>
      </Wrapper>
    </Header.Container>
  )
}
