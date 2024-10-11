import React, { useRef, useState } from 'react'

import { View } from 'react-native'

import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'

import { useTranslation } from 'react-i18next'

import { useTypedSelector } from '@/app/store'

import { BS } from '@/widgets/bottomSheet'

import { getUserSelector } from '@/entities/user/store'

import { TBottomSheetModalRef } from '@/shared/ui/bottomSheet/Modal'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { EColors } from '@/shared/ui/styled'
import { Divider } from '@/shared/ui/styled/Styled'
import { BodyM1SB, BodyM2B } from '@/shared/ui/styled/Text'

import { TouchableInputWrapper } from './styles'
import { TEditProfileForm, TEditProfileFormProps } from './types'

import { editProfileFormValidation } from './validation'

export const EditProfileForm = ({ onSubmit }: TEditProfileFormProps) => {
  const { t } = useTranslation()
  const { user } = useTypedSelector(getUserSelector)
  const dateRef = useRef<TBottomSheetModalRef>(null)
  const countryRef = useRef<TBottomSheetModalRef>(null)
  const cityRef = useRef<TBottomSheetModalRef>(null)
  const [selectedCountry, setSelectedCountry] = useState<string | undefined>('')

  const { handleSubmit, control, setValue } = useForm<TEditProfileForm>({
    defaultValues: {
      weddingDate: user?.weddingDate,
      name: user?.name,
      country: user?.country,
      city: user?.city,
      email: user?.email,
      phone: user?.phone ?? '',
      partner: user?.partner ?? '',
    },
    resolver: zodResolver(editProfileFormValidation(t)),
  })
  return (
    <>
      <BodyM2B mTop="30px">{t('auth.create_account.wedding_date')}</BodyM2B>
      <Controller
        name="weddingDate"
        control={control}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <View>
            <TouchableInputWrapper onPress={() => dateRef.current?.open()} />
            <Input.Standard
              value={value?.slice(0, 10).split('-').reverse().join('.')}
              mTop="16px"
              mBottom="26px"
              height="38px"
              minimal
              error={error?.message}
              placeholder={t('edit_profile.date')}
            />
            <BS.Date
              ref={dateRef}
              dateValue={value}
              setDate={value => onChange(value)}
              minimumDate={new Date()}
            />
          </View>
        )}
      />
      <Divider />
      <BodyM2B mTop="30px">{t('edit_profile.personal_info')}</BodyM2B>
      <Controller
        name="country"
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <View>
            <TouchableInputWrapper onPress={() => countryRef.current?.open()} />
            <Input.Standard
              mTop="16px"
              minimal
              placeholder={t('auth.create_account.country')}
              {...{ value }}
              error={error?.message}
            />
            <BS.Location
              onChange={value => {
                onChange(value)
                setValue('city', '')
              }}
              ref={countryRef}
              setSelectedCountry={setSelectedCountry}
            />
          </View>
        )}
      />
      <Controller
        name="city"
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <View>
            <TouchableInputWrapper onPress={() => cityRef.current?.open()} />
            <Input.Standard
              mTop="10px"
              minimal
              error={error?.message}
              placeholder={t('auth.create_account.city')}
              {...{ onChange, value }}
            />
            <BS.Location
              {...{ onChange, value }}
              selectedCountry={selectedCountry}
              ref={cityRef}
            />
          </View>
        )}
      />
      <Controller
        name="email"
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Input.Standard
            mTop="10px"
            minimal
            disabled
            error={error?.message}
            placeholder={t('auth.create_account.email')}
            {...{ onChange, value }}
          />
        )}
      />
      <Controller
        name="phone"
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Input.Standard
            maxLength={20}
            mTop="10px"
            minimal
            placeholder={t('edit_profile.phone')}
            error={error?.message}
            {...{ onChange, value }}
          />
        )}
      />
      <Controller
        name="partner"
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Input.Standard
            mTop="10px"
            minimal
            placeholder={t('edit_profile.partners_name')}
            error={error?.message}
            {...{ onChange, value }}
          />
        )}
      />

      <Button.Standard onPress={handleSubmit(onSubmit)} mTop="34px">
        <BodyM1SB color={EColors.white}>
          {t('button.save').toUpperCase()}
        </BodyM1SB>
      </Button.Standard>
    </>
  )
}
