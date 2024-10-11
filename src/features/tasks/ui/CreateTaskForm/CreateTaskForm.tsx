import React, { useContext } from 'react'

import { Platform, View } from 'react-native'

import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { LoaderContext } from '@/app/contexts/Loader'
import { useTypedSelector } from '@/app/store'

import { ETaskTimeLine } from '@/entities/tasks/models'
import { TasksService } from '@/entities/tasks/services'

import { getUserSelector } from '@/entities/user/store'

import { useNavigation } from '@/shared/hooks'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { EColors } from '@/shared/ui/styled'
import { BodyM2B } from '@/shared/ui/styled/Text'

import { styles } from './styles'
import { TCreateTaskForm } from './types'
import { useTimelineData } from './useTimelineData'
import { createTaskFormValidation } from './validation'

export const CreateTaskForm = () => {
  const { t } = useTranslation()

  const { setLoading } = useContext(LoaderContext)
  const { data, onGetDate } = useTimelineData()
  const { user } = useTypedSelector(getUserSelector)
  const { goBack } = useNavigation()
  const { control, handleSubmit } = useForm<TCreateTaskForm>({
    resolver: zodResolver(createTaskFormValidation(t)),
    defaultValues: {
      name: '',
      description: '',
      dateType: ETaskTimeLine.months_18_12,
    },
  })

  const onSubmit = async (formData: TCreateTaskForm) => {
    if (!user?.weddingDate) {
      console.log('ERROR: no wedding date')
      return
    }

    try {
      setLoading(true)
      await TasksService.postTask({
        ...formData,
        budget: 0,
        budgetName: '',
        activeAfter: onGetDate(formData.dateType)?.toString(),
      })
      goBack()
      setLoading(false)
    } catch (e) {
      console.log('CreateTaskForm error =>', e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Controller
        control={control}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <Input.Standard
            mBottom="20px"
            placeholder={t('tasks.name')}
            style={styles.name_wrapper}
            {...{ value, onChange }}
            inputContainerStyle={styles.name_container}
            inputStyle={styles.task_name}
            error={error?.message}
          />
        )}
        name="name"
      />

      <View>
        <Controller
          control={control}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <Input.Standard
              style={styles.desc_input}
              LeftIcon={!!value ? 'DescriptionBlack' : 'Description'}
              leftIconProps={{
                size: 14,
                style: { marginTop: Platform.OS === 'android' ? 8 : 0 },
              }}
              {...{ value, onChange }}
              error={error?.message}
              maxHeight={'200px'}
              height={'200px'}
              multiline
              placeholder={`${t('tasks.description')}`}
            />
          )}
          name="description"
        />
      </View>

      <Controller
        control={control}
        render={({ field: { value, onChange } }) => (
          <Input.DropDown
            items={data}
            {...{ value, onChange }}
            placeholder={t('tasks.select_timeline')}
          />
        )}
        name="dateType"
      />
      <Button.Standard onPress={handleSubmit(onSubmit)} mTop="23px">
        <BodyM2B color={EColors.white}>
          {t('button.create').toUpperCase()}
        </BodyM2B>
      </Button.Standard>
    </>
  )
}
