import React, { useEffect } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useIsFocused } from '@react-navigation/native'
import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import Toast from 'react-native-toast-message'

import { useDispatch } from 'react-redux'

import { UserService } from '@/entities/user/services'

import { userActions } from '@/entities/user/store'

import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { EColors } from '@/shared/ui/styled'
import { Touchable } from '@/shared/ui/styled/Styled'
import { BodyM1SB, BodyM5SB } from '@/shared/ui/styled/Text'

import { TLoginFormProps } from './types'

import { loginFormValidation } from './validation'

export const LoginForm = ({ onSubmit }: TLoginFormProps) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const isFocused = useIsFocused()
  const { control, handleSubmit, trigger, getValues, reset } = useForm({
    resolver: zodResolver(loginFormValidation(t)),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  useEffect(() => {
    if (!isFocused) {
      reset()
    }
  }, [isFocused])

  const onForgotPasswordPress = async () => {
    const email = getValues('email')

    if (!email) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Enter email',
      })

      return
    }

    dispatch(
      userActions.setState({
        email: email,
      }),
    )

    await UserService.postResetPassword({ email })

    Toast.show({
      type: 'success',
      text1: 'OK!',
      text2: 'Check your email',
    })

    // navigate(EScreens.AuthForgotPassword)
  }
  return (
    <>
      <Controller
        render={({
          field: { onChange, value, onBlur },
          fieldState: { error, isTouched },
        }) => (
          <Input.Standard
            placeholderTextColor={EColors.dark_grey_300}
            onFocus={() => {
              trigger('email')
              onBlur()
            }}
            withValidator
            onChange={email => {
              onChange(email)
              trigger('email')
              onBlur()
            }}
            isTouched={isTouched}
            error={error?.message}
            value={value}
            mTop="22px"
            placeholder={t('auth.create_account.email')}
          />
        )}
        name="email"
        control={control}
      />
      <Controller
        render={({
          field: { onChange, value, onBlur },
          fieldState: { error, isTouched },
        }) => (
          <Input.Standard
            placeholderTextColor={EColors.dark_grey_300}
            onFocus={() => {
              trigger('password')
              onBlur()
            }}
            withValidator
            isTouched={isTouched}
            error={error?.message}
            value={value}
            onChange={pass => {
              onChange(pass)
              trigger('password')
              onBlur()
            }}
            mTop="22px"
            placeholder={t('auth.create_account.password')}
          />
        )}
        name="password"
        control={control}
      />

      <Touchable mTop="14px" onPress={onForgotPasswordPress}>
        <BodyM5SB color={EColors.primary}>{t('auth.forgot_password')}</BodyM5SB>
      </Touchable>
      <Button.Standard onPress={handleSubmit(onSubmit)} mTop="30px">
        <BodyM1SB color={EColors.white}>{t('auth.login')}</BodyM1SB>
      </Button.Standard>
    </>
  )
}
