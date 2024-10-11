import React from 'react'

import { Platform } from 'react-native'

import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import Toast from 'react-native-toast-message'

import { useTypedSelector } from '@/app/store'

import { UserService } from '@/entities/user/services'
import { getUserSelector } from '@/entities/user/store'

import { Button } from '@/shared/ui/button'
import { Checkbox } from '@/shared/ui/Checkbox/Checkbox'
import { Input } from '@/shared/ui/input'
import { EColors, Typography } from '@/shared/ui/styled'
import { FlexWrapper } from '@/shared/ui/styled/Styled'
import { BodyM1SB, BodyM4R, BodyM4SB } from '@/shared/ui/styled/Text'

import { checkPermission } from './helper'
import { styles } from './styles'

import { TContactForm } from './types'

import { contactFormValidation } from './validation'

export const ContactForm = () => {
  const { t } = useTranslation()
  const { user } = useTypedSelector(getUserSelector)
  const defaultValues = {
    name: user?.name,
    email: user?.email,
    message: '',
    terms: false,
  }
  const { control, handleSubmit, reset } = useForm<TContactForm>({
    resolver: zodResolver(contactFormValidation(t)),
    defaultValues,
  })

  const onSubmit = async (values: TContactForm) => {
    try {
      console.log(values)

      const status = await checkPermission()

      await UserService.postSupport({
        name: values.name,
        message: values.message,
        email: values.email,
        device: Platform.OS,
        osVersion: (Platform.constants.Release || '') + '',
        permissions: status,
      })

      reset(defaultValues)

      Toast.show({
        type: 'success',
        text1: t('toasts.success'),
        text2: t('toasts.support_message'),
      })
    } catch (e) {
      console.log('[ContactUs] error =>', e)
    }
  }
  return (
    <>
      <Controller
        render={({ field, fieldState: { error } }) => (
          <Input.Standard
            minimal
            error={error?.message}
            mTop="33px"
            {...field}
            placeholder={t('contact_us.name')}
          />
        )}
        name="name"
        control={control}
      />
      <Controller
        render={({ field, fieldState: { error } }) => (
          <Input.Standard
            minimal
            error={error?.message}
            mTop="14px"
            {...field}
            placeholder={t('auth.create_account.email')}
          />
        )}
        name="email"
        control={control}
      />

      <Controller
        render={({ field, fieldState: { error } }) => (
          <Input.Standard
            inputContainerStyle={styles.input_container}
            mTop="14px"
            minimal
            error={error?.message}
            multiline
            placeholder={t('contact_us.type_your_question')}
            {...field}
          />
        )}
        name="message"
        control={control}
      />

      <Controller
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <>
            <FlexWrapper justify="flex-start" mTop="19px" width="auto">
              <Checkbox
                active={value}
                onPress={() => onChange(!value)}
                size={20}
                type="circle"
              />
              <FlexWrapper
                wrap="wrap"
                mLeft="9px"
                width="90%"
                justify="flex-start">
                <BodyM4R>
                  {t('contact_us.accept_terms')}
                  <BodyM4SB color={EColors.primary}>
                    {t('contact_us.terms_of_use')}{' '}
                  </BodyM4SB>
                  {t('contact_us.and')}{' '}
                </BodyM4R>
                <BodyM4SB color={EColors.primary}>
                  {t('contact_us.privacy')}{' '}
                </BodyM4SB>
                <BodyM4SB color={EColors.primary}>
                  {t('contact_us.policy')}
                </BodyM4SB>
              </FlexWrapper>
            </FlexWrapper>
            {!!error?.message && (
              <Typography.BodyL3R mTop={'12px'} color={EColors.primary}>
                {error.message}
              </Typography.BodyL3R>
            )}
          </>
        )}
        name="terms"
        control={control}
      />

      <Button.Standard onPress={handleSubmit(onSubmit)} mTop="21px">
        <BodyM1SB color={EColors.white}>
          {t('button.send').toUpperCase()}
        </BodyM1SB>
      </Button.Standard>
    </>
  )
}
