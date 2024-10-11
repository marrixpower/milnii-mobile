import React, { useContext, useState } from 'react'

import { FlatList, View } from 'react-native'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRoute } from '@react-navigation/native'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import Toast from 'react-native-toast-message'

import { LoaderContext } from '@/app/contexts/Loader'

import { EScreens } from '@/app/navigation'
import { TScreenQueryProps } from '@/app/navigation/types'

import { EGuestStatus, EGuestType } from '@/entities/guests'

import { GuestsService } from '@/entities/guests/services'

import { useNavigation } from '@/shared/hooks'
import { Button } from '@/shared/ui/button'
import { Icon } from '@/shared/ui/Icon'
import { Input } from '@/shared/ui/input'
import { SelectGroup } from '@/shared/ui/SelectGroup'
import { EColors } from '@/shared/ui/styled'
import { Divider, FlexWrapper, Touchable } from '@/shared/ui/styled/Styled'
import { BodyM1SB, BodyM2R, BodyM3SB } from '@/shared/ui/styled/Text'

import { useGetGuestGroup } from '../../hooks'

import { CreateGroup } from '../CreateGroup'

import * as Components from './components'
import {
  PaddingContainer,
  RelatedIconWrapper,
  RelatedTouchable,
  StatusButton,
  UserTypeButton,
  styles,
} from './styles'
import { TAddGuestForm } from './types'
import { createGuestFormValidation } from './validation'

export const AddGuestForm = () => {
  const { t } = useTranslation()
  const [selectGroupOpen, setSelectGroupOpen] = useState(false)
  const [newGroupModalOpen, setNewGroupModalOpen] = useState(false)
  const { setLoading } = useContext(LoaderContext)
  const { goBack } = useNavigation()
  const params = useRoute<TScreenQueryProps<EScreens.GuestsAddGuest>>().params

  const { guestGroups, getAction } = useGetGuestGroup()
  const guestTypes = [
    {
      key: EGuestType.adult,
      value: t('guests.adult').toUpperCase(),
    },
    {
      key: EGuestType.child,
      value: t('guests.child').toUpperCase(),
    },
    {
      key: EGuestType.baby,
      value: t('guests.baby').toUpperCase(),
    },
  ]
  const statusData = [
    { key: EGuestStatus.pending, value: t('guests.pending').toUpperCase() },
    { key: EGuestStatus.confirmed, value: t('guests.confirmed').toUpperCase() },

    { key: EGuestStatus.declined, value: t('guests.declined').toUpperCase() },
  ]

  const defaultPerson = {
    name: '',
    age: EGuestType.adult,
  }

  const { control, handleSubmit } = useForm<TAddGuestForm>({
    resolver: zodResolver(createGuestFormValidation(t)),
    defaultValues: {
      persons: !!params.persons?.length ? params.persons : [defaultPerson],
      group: params.group || '',
      email: params.email || '',
      phone: params.phone || '+',
      address: params.address || '',
      postalCode: params.postalCode || '',
      note: params.note || '',
      status: params.status || EGuestStatus.pending,
      invites: !!params.invites?.length ? params.invites : [],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'persons',
  })

  const onAddPersonItem = () => {
    append(defaultPerson)
  }

  const onDeletePersonItem = (index: number) => {
    remove(index)
  }

  const onSubmit = async (data: TAddGuestForm) => {
    try {
      const currentData = {
        ...data,
        phone: data.phone === '+' ? '' : data.phone,
      }
      setLoading(true)
      if (params.id) {
        await GuestsService.patchGuest({ id: params.id, ...currentData })
      } else {
        await GuestsService.postGuest(currentData)
      }

      Toast.show({
        type: 'success',
        text1: 'toasts.success',
        text2: 'guests.create_success',
      })

      goBack()
    } catch (error) {
      console.log('AddGuestForm error =>', error)
    } finally {
      setLoading(false)
    }
  }

  const renderPersonsArray = (itemPerson, index: number) => {
    return (
      <React.Fragment key={index}>
        <BodyM1SB mLeft="23px">{t('guests.new_guest')}</BodyM1SB>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <PaddingContainer>
              <FlexWrapper mTop={'12px'} justify={'space-between'}>
                <FlexWrapper width={'auto'}>
                  {guestTypes.map(item => (
                    <UserTypeButton
                      key={item.key}
                      active={value === item.key}
                      onPress={() => onChange(item.key)}>
                      <BodyM3SB
                        color={
                          value === item.key ? EColors.white : EColors.black
                        }>
                        {item.value}
                      </BodyM3SB>
                    </UserTypeButton>
                  ))}
                </FlexWrapper>

                {fields.length > 1 && (
                  <Touchable onPress={() => onDeletePersonItem(index)}>
                    <Icon name={'Trash'} size={30} stroke={EColors.primary} />
                  </Touchable>
                )}
              </FlexWrapper>
            </PaddingContainer>
          )}
          name={`persons.${index}.age`}
        />
        <Controller
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <PaddingContainer>
              <Input.Standard
                {...{ onChange, value }}
                inputContainerStyle={styles.name_wrapper}
                style={styles.name_container}
                mBottom="20px"
                placeholder={t('guests.full_name')}
                inputStyle={styles.name_input}
                error={error?.message}
              />
            </PaddingContainer>
          )}
          name={`persons.${index}.name`}
        />
      </React.Fragment>
    )
  }

  return (
    <View>
      {fields.map(renderPersonsArray)}

      <PaddingContainer>
        <RelatedTouchable onPress={onAddPersonItem}>
          <RelatedIconWrapper>
            <Icon name="Plus" stroke={EColors.grey_200} size={13} />
          </RelatedIconWrapper>
          <BodyM2R mLeft="12px">{t('guests.add_related')}</BodyM2R>
        </RelatedTouchable>
      </PaddingContainer>
      <Divider mTop="20px" />
      <BodyM1SB mLeft="23px" mBottom="30px" mTop="16px">
        {t('guests.additional_info')}
      </BodyM1SB>

      <Controller
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <SelectGroup
            title={t('guests.select_group')}
            data={guestGroups}
            open={selectGroupOpen}
            onTitlePress={() => setSelectGroupOpen(prev => !prev)}
            onAddPress={() => setNewGroupModalOpen(true)}
            onClose={() => setSelectGroupOpen(false)}
            addText={t('guests.new_group')}
            error={error?.message}
            {...{ onChange, value }}
          />
        )}
        name={'group'}
      />
      <Controller
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <PaddingContainer>
            <Components.EventPicker
              {...{ onChange, value }}
              error={error?.message}
            />
          </PaddingContainer>
        )}
        name={'invites'}
      />
      <Divider />

      <PaddingContainer>
        <BodyM1SB mTop="14px">{t('guests.contact_details')}</BodyM1SB>
        <Controller
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Input.Standard
              mTop="23px"
              placeholder={t('inputs.email')}
              error={error?.message}
              {...{ onChange, value }}
            />
          )}
          name={'email'}
        />

        <Controller
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Input.Standard
              mTop="23px"
              placeholder={t('inputs.phone')}
              error={error?.message}
              {...{ onChange, value }}
            />
          )}
          name={'phone'}
        />
        <Controller
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Input.GooglePlaces
              disableCities
              setAllAddress
              placeholder={t('address')}
              styles={{
                textInput: {
                  paddingRight: 36,
                  paddingHorizontal: 0,
                  width: '100%',
                  height: 44,
                  borderBottomColor: EColors.black,
                  borderBottomWidth: 1,
                },
              }}
              error={error?.message}
              {...{ onChange, value }}
            />
          )}
          name={'address'}
        />

        <Controller
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Input.Standard
              mTop="23px"
              placeholder={t('guests.postal_code')}
              error={error?.message}
              {...{ onChange, value }}
            />
          )}
          name={'postalCode'}
        />
        <FlexWrapper mTop="24px" justify="flex-start">
          <Icon name="Description" size={18} />
          <Controller
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <Input.Standard
                mLeft="12px"
                style={styles.notes_input_wrapper}
                inputContainerStyle={styles.notes_input_container}
                placeholder={t('guests.additional_notes')}
                {...{ onChange, value }}
                error={error?.message}
              />
            )}
            name={'note'}
          />
        </FlexWrapper>
      </PaddingContainer>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <FlatList
            contentContainerStyle={styles.status_list_content}
            bounces={false}
            showsHorizontalScrollIndicator={false}
            style={styles.status_list}
            horizontal
            ItemSeparatorComponent={() => (
              <View style={styles.list_separator} />
            )}
            data={statusData}
            renderItem={({ item }) => (
              <StatusButton
                active={value === item.key}
                onPress={() => onChange(item.key)}>
                <BodyM3SB
                  color={value === item.key ? EColors.white : EColors.black}>
                  {item.value}
                </BodyM3SB>
              </StatusButton>
            )}
          />
        )}
        name="status"
      />
      <PaddingContainer>
        <Button.Standard onPress={handleSubmit(onSubmit)} mTop="26px">
          <BodyM1SB color={EColors.white}>
            {t('button.save').toUpperCase()}
          </BodyM1SB>
        </Button.Standard>
      </PaddingContainer>

      <CreateGroup
        {...{ newGroupModalOpen, setNewGroupModalOpen }}
        onRefresh={getAction}
      />
    </View>
  )
}
