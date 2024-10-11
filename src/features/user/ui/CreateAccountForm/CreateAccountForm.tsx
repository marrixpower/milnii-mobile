import React, { useRef, useState } from 'react'

import { View } from 'react-native'

import { zodResolver } from '@hookform/resolvers/zod'

import { Controller, useForm } from 'react-hook-form'

import { useTranslation } from 'react-i18next'

import { BS } from '@/widgets/bottomSheet'

import { ERoles } from '@/entities/user/models/common'

import { isIos } from '@/shared/lib'
import { TBottomSheetModalRef } from '@/shared/ui/bottomSheet/Modal'
import { Button } from '@/shared/ui/button'
import { Checkbox } from '@/shared/ui/Checkbox/Checkbox'
import { Input } from '@/shared/ui/input'
import { EColors } from '@/shared/ui/styled'
import { FlexWrapper, Touchable } from '@/shared/ui/styled/Styled'
import { BodyM1SB, BodyM3SB, BodyM5SB } from '@/shared/ui/styled/Text'

import {
  RoleItem,
  RolesContainer,
  RolesIconWrapper,
  RolesList,
  RolesTouchable,
  TouchableInputMask,
  styles,
} from './styles'
import { TCreateAccountForm, TCreateAccountFormProps } from './types'
import { createAccountValidation } from './validation'

import { Icon } from '@/shared/ui/Icon'

export const CreateAccountForm = ({ onSubmit }: TCreateAccountFormProps) => {
  const { t } = useTranslation()
  const [roleOpen, setRoleOpen] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState<string | undefined>('')
  const roles = {
    planning: {
      key: ERoles.planning,
      title: t('auth.create_account.roles.planning'),
    },
    browsing: {
      key: ERoles.browsing,
      title: t('auth.create_account.roles.browsing'),
    },
  }
  const weddingDateRef = useRef<TBottomSheetModalRef>(null)
  const countryRef = useRef<TBottomSheetModalRef>(null)
  const cityRef = useRef<TBottomSheetModalRef>(null)
  const platformMargin = isIos ? '27px' : '14px'
  const {
    control,
    handleSubmit,
    trigger,
    setValue,
    formState: { errors },
  } = useForm<TCreateAccountForm>({
    resolver: zodResolver(createAccountValidation(t)),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      role: null,
      weddingDate: '',
      country: '',
      city: '',
      terms: false,
      promotion: false,
    },
  })

  return (
    <>
      <Controller
        name={'fullName'}
        control={control}
        render={({
          fieldState: { error, isTouched },
          field: { onChange, onBlur, value },
        }) => (
          <Input.Standard
            onFocus={() => {
              onBlur()
              trigger('fullName')
            }}
            value={value}
            isTouched={isTouched}
            onChange={value => {
              onBlur()
              onChange(value)
              trigger('fullName')
            }}
            placeholder={t('auth.create_account.full_name')}
            withValidator
            placeholderTextColor={EColors.dark_grey_300}
            error={error?.message}
          />
        )}
      />
      <Controller
        name="email"
        control={control}
        render={({
          fieldState: { error, isTouched },
          field: { value, onChange, onBlur },
        }) => (
          <Input.Standard
            onFocus={() => {
              onBlur()
              trigger('email')
            }}
            value={value}
            isTouched={isTouched}
            onChange={value => {
              onBlur()
              onChange(value)
              trigger('email')
            }}
            mTop={platformMargin}
            placeholder={t('auth.create_account.email')}
            withValidator
            error={error?.message}
            placeholderTextColor={EColors.dark_grey_300}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({
          fieldState: { error, isTouched },
          field: { value, onChange, onBlur },
        }) => (
          <Input.Standard
            onFocus={() => {
              onBlur()
              trigger('password')
            }}
            value={value}
            isTouched={isTouched}
            onChange={value => {
              onBlur()
              onChange(value)
              trigger('password')
            }}
            mTop={platformMargin}
            placeholder={t('auth.create_account.password')}
            withValidator
            placeholderTextColor={EColors.dark_grey_300}
            error={error?.message}
          />
        )}
      />
      <Controller
        name="role"
        control={control}
        render={({ field: { value, onChange } }) => (
          <>
            <RolesContainer>
              <RolesTouchable onPress={() => setRoleOpen(!roleOpen)} />
              <Input.Standard
                disabled
                RightIconComponent={() => (
                  <Icon
                    name={roleOpen ? 'AngleArrowTop' : 'AngleArrowBottom'}
                  />
                )}
                placeholderTextColor={
                  errors.role ? EColors.primary : EColors.dark_grey_300
                }
                placeholder={t('auth.create_account.role')}
                value={value?.title}
                {...{ onChange }}
              />
            </RolesContainer>
            {roleOpen && (
              <RolesList>
                <RoleItem
                  onPress={() => {
                    onChange(roles.planning)
                    setRoleOpen(false)
                  }}>
                  <BodyM3SB color={EColors.dark_grey_300}>
                    {roles.planning.title}
                  </BodyM3SB>
                </RoleItem>
                <RoleItem
                  onPress={() => {
                    onChange(roles.browsing)
                    setRoleOpen(false)
                  }}
                  mTop="10px">
                  <BodyM3SB color={EColors.dark_grey_300}>
                    {roles.browsing.title}
                  </BodyM3SB>
                </RoleItem>
              </RolesList>
            )}
          </>
        )}
      />
      <Controller
        name="weddingDate"
        control={control}
        render={({
          fieldState: { error, isTouched },
          field: { value, onChange, onBlur },
        }) => {
          return (
            <View>
              <TouchableInputMask
                onPress={() => {
                  weddingDateRef?.current?.open()
                  trigger('weddingDate')
                  onBlur()
                }}
              />
              <Input.Standard
                isTouched={isTouched}
                mTop={platformMargin}
                placeholder={t('auth.create_account.wedding_date')}
                withValidator
                placeholderTextColor={EColors.dark_grey_300}
                value={value?.slice(0, 10).split('-').reverse().join('.')}
                error={error?.message}
              />
              <BS.Date
                minimumDate={new Date()}
                ref={weddingDateRef}
                dateValue={value}
                setDate={value => {
                  onChange(value)
                  onBlur()
                  trigger('weddingDate')
                }}
              />
            </View>
          )
        }}
      />
      <Controller
        name="country"
        control={control}
        render={({
          fieldState: { error, isTouched },
          field: { value, onChange, onBlur },
        }) => (
          <View>
            <TouchableInputMask
              onPress={() => {
                countryRef?.current?.open()
                onBlur()
                trigger('country')
              }}
            />
            <Input.Standard
              isTouched={isTouched}
              mTop={platformMargin}
              placeholder={t('auth.create_account.country')}
              withValidator
              placeholderTextColor={EColors.dark_grey_300}
              error={error?.message}
              {...{ value }}
            />
            <BS.Location
              onChange={value => {
                onChange(value)
                setValue('city', '')
                trigger('country')
                trigger('city')
                onBlur()
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
        render={({
          fieldState: { error, isTouched },
          field: { value, onChange, onBlur },
        }) => (
          <View>
            <TouchableInputMask
              onPress={() => {
                cityRef?.current?.open()
                onBlur()
                trigger('city')
              }}
            />
            <Input.Standard
              isTouched={isTouched}
              mTop={platformMargin}
              placeholder={t('auth.create_account.city')}
              withValidator
              placeholderTextColor={EColors.dark_grey_300}
              error={error?.message}
              {...{ value }}
            />
            <BS.Location
              onChange={value => {
                onChange(value)
                trigger('city')
                onBlur()
              }}
              ref={cityRef}
              selectedCountry={selectedCountry}
            />
          </View>
        )}
      />

      <Controller
        name="terms"
        control={control}
        render={({ fieldState: { error }, field: { value, onChange } }) => (
          <FlexWrapper align="flex-start" justify="flex-start" mTop="24px">
            <Checkbox
              onPress={() => onChange(!value)}
              active={value as boolean}
            />
            <Touchable onPress={() => onChange(!value)}>
              <BodyM5SB
                style={styles.checkbox_text}
                color={errors.terms ? EColors.primary : EColors.grey_900}
                mLeft="7px">
                {t('auth.create_account.terms')}
              </BodyM5SB>
            </Touchable>
          </FlexWrapper>
        )}
      />

      <Button.Standard onPress={handleSubmit(onSubmit)} mTop="20px">
        <BodyM1SB color={EColors.white}>
          {t('auth.create_account.sign_up')}
        </BodyM1SB>
      </Button.Standard>

      <Controller
        name="promotion"
        control={control}
        render={({ field: { value, onChange } }) => (
          <FlexWrapper
            style={{ paddingBottom: 20 }}
            align="flex-start"
            justify="flex-start"
            mTop="24px">
            <Checkbox onPress={() => onChange(!value)} active={value} />
            <Touchable onPress={() => onChange(!value)}>
              <BodyM5SB
                style={styles.checkbox_text}
                color={EColors.dark_grey_300}
                mLeft="7px">
                {t('auth.create_account.promotions')}
              </BodyM5SB>
            </Touchable>
          </FlexWrapper>
        )}
      />
    </>
  )
}
