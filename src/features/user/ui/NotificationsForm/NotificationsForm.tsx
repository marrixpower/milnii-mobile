import { useTypedSelector } from '@/app/store'
import { getUserSelector } from '@/entities/user/store'
import { wp } from '@/shared/lib'
import { Checkbox } from '@/shared/ui/Checkbox/Checkbox'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { EColors } from '@/shared/ui/styled'
import { Divider, FlexWrapper } from '@/shared/ui/styled/Styled'
import { BodyM1SB, BodyM2R } from '@/shared/ui/styled/Text'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { TNotificationForm, TNotificationFormProps } from './types'
import { zodResolver } from '@hookform/resolvers/zod'
import { notificationFormValidation } from './validation'

export const NotificationsForm = ({ onSubmit }: TNotificationFormProps) => {
  const { t } = useTranslation()
  const { user } = useTypedSelector(getUserSelector)
  const { control, handleSubmit } = useForm<TNotificationForm>({
    defaultValues: {
      email: user?.email,
      updates: true,
      news: true,
      offers: true,
    },
    resolver: zodResolver(notificationFormValidation(t)),
  })
  return (
    <>
      <BodyM1SB>{t('notifications.send_to')}</BodyM1SB>
      <Controller
        control={control}
        name="email"
        render={({ field, fieldState: { error } }) => (
          <Input.Standard
            minimal
            {...field}
            mTop="17px"
            error={error?.message}
            mBottom="28px"
          />
        )}
      />
      <Divider />
      <BodyM1SB mTop="24px">{t('notifications.manage')}</BodyM1SB>
      <FlexWrapper mTop="31px" justify="flex-start" align="flex-start">
        <Controller
          control={control}
          name="updates"
          render={({ field: { value, onChange } }) => (
            <Checkbox
              type="circle"
              active={value}
              onPress={() => onChange(!value)}
              size={25}
            />
          )}
        />
        <FlexWrapper
          justify="flex-start"
          width={`${wp(100) - 125}px`}
          mLeft="12px">
          <BodyM2R>{t('notifications.update')}</BodyM2R>
        </FlexWrapper>
      </FlexWrapper>
      <FlexWrapper mTop="31px" justify="flex-start" align="flex-start">
        <Controller
          control={control}
          name="news"
          render={({ field: { value, onChange } }) => (
            <Checkbox
              type="circle"
              active={value}
              onPress={() => onChange(!value)}
              size={25}
            />
          )}
        />
        <FlexWrapper
          justify="flex-start"
          width={`${wp(100) - 125}px`}
          mLeft="12px">
          <BodyM2R>{t('notifications.news')}</BodyM2R>
        </FlexWrapper>
      </FlexWrapper>
      <FlexWrapper mTop="31px" justify="flex-start" align="flex-start">
        <Controller
          control={control}
          name="offers"
          render={({ field: { value, onChange } }) => (
            <Checkbox
              type="circle"
              active={value}
              onPress={() => onChange(!value)}
              size={25}
            />
          )}
        />
        <FlexWrapper
          justify="flex-start"
          width={`${wp(100) - 125}px`}
          mLeft="12px">
          <BodyM2R>{t('notifications.offers')}</BodyM2R>
        </FlexWrapper>
      </FlexWrapper>
      <Button.Standard onPress={handleSubmit(onSubmit)} mTop="44px">
        <BodyM1SB color={EColors.white}>
          {t('button.save').toUpperCase()}
        </BodyM1SB>
      </Button.Standard>
    </>
  )
}
