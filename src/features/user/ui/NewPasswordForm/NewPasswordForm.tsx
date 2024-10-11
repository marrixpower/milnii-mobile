import React from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'

import { useTranslation } from 'react-i18next'

import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { EColors } from '@/shared/ui/styled'
import { BodyM1SB } from '@/shared/ui/styled/Text'

import { TNewPasswordForm, TNewPasswordFormProps } from './types'

import { newPasswordFormValidation } from './validation'

export const NewPasswordForm = ({ onSubmit }: TNewPasswordFormProps) => {
  const { t } = useTranslation()
  const { control, trigger, handleSubmit } = useForm<TNewPasswordForm>({
    resolver: zodResolver(newPasswordFormValidation(t)),
    defaultValues: {
      newPassword: '',
      confirmPassword: '',
    },
  })
  return (
    <>
      <Controller
        render={({
          field: { onChange, value, onBlur },
          fieldState: { error, isTouched },
        }) => (
          <Input.Standard
            onFocus={() => {
              trigger('newPassword')
              onBlur()
            }}
            withValidator
            onChange={value => {
              onChange(value)
              trigger('newPassword')
              onBlur()
            }}
            isTouched={isTouched}
            error={error?.message}
            value={value}
            mTop="22px"
            placeholder={t('auth.enter_new_password')}
          />
        )}
        name="newPassword"
        control={control}
      />
      <Controller
        render={({
          field: { onChange, value, onBlur },
          fieldState: { error, isTouched },
        }) => (
          <Input.Standard
            onFocus={() => {
              trigger('confirmPassword')
              onBlur()
            }}
            withValidator
            isTouched={isTouched}
            error={error?.message}
            value={value}
            onChange={value => {
              onChange(value)
              trigger('confirmPassword')
              onBlur()
            }}
            mTop="22px"
            placeholder={t('auth.confirm_password')}
          />
        )}
        name="confirmPassword"
        control={control}
      />

      <Button.Standard onPress={handleSubmit(onSubmit)} mTop="30px">
        <BodyM1SB color={EColors.white}>
          {t('button.confirm').toUpperCase()}
        </BodyM1SB>
      </Button.Standard>
    </>
  )
}
