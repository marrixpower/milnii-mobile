import React, { useState, useContext } from 'react'

import auth from '@react-native-firebase/auth'
import { useTranslation } from 'react-i18next'

import { useDispatch } from 'react-redux'

import { LoaderContext } from '@/app/contexts/Loader'

import { favoriteActions } from '@/entities/favorite/store'
import { tasksActions } from '@/entities/tasks/store'
import { UserService } from '@/entities/user/services'

import { userActions } from '@/entities/user/store'

import { Modal } from '../modal'
import { Divider } from '../styled/Styled'
import { BodyM1SB } from '../styled/Text'

import { TouchableContainer } from './styles'
import { TOptionProps } from './types'

export const Option = ({ item, index }: TOptionProps) => {
  const { t } = useTranslation()
  const [modalVisible, setModalVisible] = useState(false)
  const { setLoading } = useContext(LoaderContext)
  const dispatch = useDispatch()

  const onPress = () => {
    if (item.isDelete) {
      setModalVisible(true)
      return
    }

    item.onPress()
  }

  const onDelete = async () => {
    try {
      setLoading(true)
      await UserService.deleteUserMe()

      await auth().signOut()

      dispatch(userActions.clearState())
      dispatch(favoriteActions.clearState())
      dispatch(tasksActions.clearState())
      setModalVisible(false)
      setLoading(false)
    } catch (error) {
      console.log('onDeleteAccount error =>', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {index === 0 && <Divider />}
      <TouchableContainer onPress={onPress}>
        <BodyM1SB>{item.title}</BodyM1SB>
      </TouchableContainer>
      <Divider />

      <Modal.Delete
        title={t('user_delete.title')}
        description={t('user_delete.description')}
        onDelete={onDelete}
        {...{ modalVisible, setModalVisible }}
      />
    </>
  )
}
