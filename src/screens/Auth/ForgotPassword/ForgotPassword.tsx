import React from 'react'

import { CommonActions, useRoute } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'

import { EScreens } from '@/app/navigation'
import { TScreenQueryProps } from '@/app/navigation/types'

import { useTypedSelector } from '@/app/store'

import { Header } from '@/widgets/header'

import { UserFeature } from '@/features/user'
import { TNewPasswordForm } from '@/features/user/ui/NewPasswordForm/types'

import { UserService } from '@/entities/user/services'

import { getUserSelector } from '@/entities/user/store'

import { useNavigation } from '@/shared/hooks'
import { Background } from '@/shared/ui/background'
import { H2 } from '@/shared/ui/styled/Text'

import { styles } from '../Login/styles'

export const ForgotPassword = () => {
  const { t } = useTranslation()

  const { customToken } =
    useRoute<TScreenQueryProps<EScreens.AuthForgotPassword>>().params
  const { email } = useTypedSelector(getUserSelector)

  const navigation = useNavigation()
  const onSubmit = async (val: TNewPasswordForm) => {
    try {
      await UserService.postConfirmResetPassword({
        password: val.newPassword,
        resetToken: customToken,
        email,
      })

      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: EScreens.AuthLogin }],
        }),
      )
    } catch (e) {
      console.log('ForgotPassword error =>', e)
    }
  }
  return (
    <>
      <Header.Auth />
      <Background.Scroll style={styles.background}>
        <H2 mTop="55px" mBottom="22px">
          {t('auth.new_password')}
        </H2>

        <UserFeature.NewPasswordForm onSubmit={onSubmit} />
      </Background.Scroll>
    </>
  )
}
