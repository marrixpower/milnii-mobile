import React, { useContext, useState } from 'react'

import { useRoute } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'

import { LoaderContext } from '@/app/contexts/Loader'
import { EScreens } from '@/app/navigation'
import { TScreenQueryProps } from '@/app/navigation/types'

import { Header } from '@/widgets/header'

import { ETaskStatus } from '@/entities/tasks/models'

import { TasksService } from '@/entities/tasks/services'

import { useNavigation } from '@/shared/hooks'
import { Background } from '@/shared/ui/background'
import { Button } from '@/shared/ui/button'
import { Icon } from '@/shared/ui/Icon'
import { Modal } from '@/shared/ui/modal'
import { EColors } from '@/shared/ui/styled'
import { FlexWrapper } from '@/shared/ui/styled/Styled'
import { BodyM2B, BodyM2R, H2 } from '@/shared/ui/styled/Text'

import { DescriptionIconWrapper, styles } from './styles'

export const Task = () => {
  const { t } = useTranslation()
  const [modalVisible, setModalVisible] = useState(false)
  const { setLoading } = useContext(LoaderContext)
  const { goBack } = useNavigation()

  const { task } = useRoute<TScreenQueryProps<EScreens.TasksTask>>().params

  const isDone = task.status === ETaskStatus.done

  const onChangeStatusDone = async () => {
    try {
      setLoading(true)

      await TasksService.patchTask({
        id: task._id,
        status: isDone ? ETaskStatus.not_done : ETaskStatus.done,
      })
      goBack()
    } catch (error) {
      console.log('onChangeStatusDone error =>', error)
    } finally {
      setLoading(false)
    }
  }

  const onClose = () => {
    setModalVisible(false)
  }

  const onDelete = async () => {
    try {
      setLoading(true)

      await TasksService.deleteTask({
        id: task._id,
      })
      onClose()
      goBack()
    } catch (error) {
      console.log('onChangeStatusDone error =>', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Header.Nested
        title={t('home.links.tasks')}
        rightIcon={'Trash'}
        onRightIconPress={() => setModalVisible(true)}
      />
      <Background.Scroll style={styles.main}>
        <H2>{task.name}</H2>

        <FlexWrapper mTop="20px" align="flex-start">
          <DescriptionIconWrapper>
            <Icon size={16} name="Description" />
          </DescriptionIconWrapper>
          <FlexWrapper width={'95%'} justify="flex-start">
            <BodyM2R mLeft="16px">{task.description || '-'}</BodyM2R>
          </FlexWrapper>
        </FlexWrapper>

        <Button.Standard
          mTop="23px"
          onPress={onChangeStatusDone}
          color={EColors.translation}
          style={styles.button}>
          <BodyM2B color={EColors.primary}>
            {t(
              isDone ? 'tasks.mark_as_uncompleted' : 'tasks.mark_as_complete',
            ).toUpperCase()}
          </BodyM2B>
        </Button.Standard>
      </Background.Scroll>

      <Modal.Delete
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        title={t('tasks.delete_title')}
        description={t('tasks.delete_desc')}
        onDelete={onDelete}
      />
    </>
  )
}
