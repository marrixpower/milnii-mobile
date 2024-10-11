import React from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'

import { useTranslation } from 'react-i18next'

import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { EColors } from '@/shared/ui/styled'
import { BodyM1SB } from '@/shared/ui/styled/Text'

import { TChangePasswordForm, TChangePasswordFormProps } from './types'

import { changePasswordFormValidation } from './validation'

export const ChangePasswordForm = ({ onSubmit }: TChangePasswordFormProps) => {
  const { t } = useTranslation()
  const {
    handleSubmit,
    control,
    watch,
    setError,
    formState: { errors },
  } = useForm<TChangePasswordForm>({
    resolver: zodResolver(changePasswordFormValidation(t)),
    defaultValues: {
      newPassword: '',
      confirmPassword: '',
    },
  })
  console.log(errors)
  return (
    <>
      <BodyM1SB>{t('change_password.new_password')}</BodyM1SB>
      <Controller
        name={'newPassword'}
        control={control}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <Input.Standard
            mTop="18px"
            minimal
            value={value}
            onChange={onChange}
            error={error?.message}
            placeholder={t('change_password.type_new_password')}
          />
        )}
      />
      <BodyM1SB mTop="20px">{t('change_password.confirm_password')}</BodyM1SB>
      <Controller
        name={'confirmPassword'}
        control={control}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <Input.Standard
            mTop="18px"
            minimal
            value={value}
            onChange={onChange}
            error={error?.message}
            placeholder={t('change_password.retype_new_password')}
          />
        )}
      />

      <Button.Standard
        mTop="26px"
        onPress={handleSubmit(values => {
          if (values.newPassword === values.confirmPassword) {
            onSubmit(values)
          } else {
            setError('confirmPassword', {
              message: t('change_password.password_dont_match'),
            })
          }
        })}>
        <BodyM1SB color={EColors.white}>
          {t('button.save').toUpperCase()}
        </BodyM1SB>
      </Button.Standard>
    </>
  )
}
