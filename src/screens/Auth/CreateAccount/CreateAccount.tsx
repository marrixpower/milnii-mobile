import React, { useContext } from 'react'

import auth from '@react-native-firebase/auth'
import { captureException } from '@sentry/react-native'
import { useTranslation } from 'react-i18next'

import { useDispatch } from 'react-redux'

import { LoaderContext } from '@/app/contexts/Loader'
import { ETab } from '@/app/navigation'

import { Header } from '@/widgets/header'

import { UserFeature } from '@/features/user'
import { TCreateAccountForm } from '@/features/user/ui/CreateAccountForm/types'

import { ERoles } from '@/entities/user/models/common'
import { UserService } from '@/entities/user/services'

import { userActions } from '@/entities/user/store'

import { useNavigation } from '@/shared/hooks'

import { firebaseErrors } from '@/shared/lib/config'
import { useToast } from '@/shared/lib/hooks'
import { Background } from '@/shared/ui/background'
import { H2 } from '@/shared/ui/styled/Text'

import { styles } from '../Login/styles'

export const CreateAccount = () => {
  const { t } = useTranslation()
  const { navigate } = useNavigation()
  const dispatch = useDispatch()
  const { setLoading } = useContext(LoaderContext)
  const { callToast } = useToast()
  const onSubmit = async (values: TCreateAccountForm) => {
    setLoading(true)

    try {
      await auth().createUserWithEmailAndPassword(values.email, values.password)
      await auth().signInWithEmailAndPassword(values.email, values.password)
      const { data } = await UserService.postUser({
        name: values.fullName,
        role: values.role?.key as ERoles,
        category: '',
        type: 'user',
        email: values.email,
        weddingDate: values.weddingDate,
        country: values.country,
        city: values.city,
      })

      dispatch(userActions.setUser(data))
      navigate(ETab.Main)
    } catch (error) {
      const err = error as { code?: string; message?: string }

      if (err.code) {
        const existError = firebaseErrors.includes(err.code)

        if (existError) {
          console.log('CreateAccount onSubmit Firebase error=>', error)

          callToast({
            type: 'error',
            message: `firebase_error.${err.code}`,
          })
        }
      } else {
        console.log('CreateAccount onSubmit error=>', error)

        callToast({
          type: 'error',
          message: error?.message ?? error?.toString(),
        })
      }

      captureException(error)
    } finally {
      setLoading(false)
    }
    setLoading(false)
  }
  return (
    <>
      <Header.Auth />
      <Background.Scroll style={styles.background}>
        <H2 mTop="55px" mBottom="26px">
          {t('auth.create_account.title')}
        </H2>
        {/* <UserFeature.SocialAuth /> */}
        <UserFeature.CreateAccountForm onSubmit={onSubmit} />
      </Background.Scroll>
    </>
  )
}
