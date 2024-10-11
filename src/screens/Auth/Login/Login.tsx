import React, { useContext } from 'react'

import auth from '@react-native-firebase/auth'
import { captureException } from '@sentry/react-native'
import { useTranslation } from 'react-i18next'

import { useDispatch } from 'react-redux'

import { LoaderContext } from '@/app/contexts/Loader'
import { ETab } from '@/app/navigation'

import { Header } from '@/widgets/header'

import { UserFeature } from '@/features/user'
import { TLoginForm } from '@/features/user/ui/LoginForm/types'

import { UserService } from '@/entities/user/services'
import { userActions } from '@/entities/user/store'

import { useNavigation } from '@/shared/hooks'

import { firebaseErrors } from '@/shared/lib/config'
import { useToast } from '@/shared/lib/hooks'
import { Background } from '@/shared/ui/background'
import { H2 } from '@/shared/ui/styled/Text'

import { styles } from './styles'
export const Login = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { navigate } = useNavigation()
  const { setLoading } = useContext(LoaderContext)
  const { callToast } = useToast()
  const onSubmit = async (values: TLoginForm) => {
    try {
      setLoading(true)
      await auth().signInWithEmailAndPassword(values.email, values.password)

      const { data } = await UserService.getUserMe()
      console.log(JSON.stringify(data, null, 2))
      dispatch(userActions.setUser(data))
      navigate(ETab.Main)
    } catch (e) {
      const err = e as { code?: string; message?: string }

      if (err.code) {
        const existError = firebaseErrors.includes(err.code)

        if (existError) {
          callToast({
            type: 'error',
            message: `firebase_error.${err.code}`,
          })
        }
      }

      console.log('LoginonSubmit error =>', e)
      captureException(e)
    } finally {
      setLoading(false)
    }
  }
  return (
    <>
      <Header.Auth isLogin />
      <Background.Scroll style={styles.background}>
        <H2 mTop="55px" mBottom="22px">
          {t('auth.login')}
        </H2>
        {/* <UserFeature.SocialAuth /> */}
        {/* <BodyM3R mTop="27px" align="center">
          {t('auth.or_with_email')}
        </BodyM3R> */}
        <UserFeature.LoginForm onSubmit={onSubmit} />
      </Background.Scroll>
    </>
  )
}
