import React, { useContext } from 'react'

import Toast from 'react-native-toast-message'
import { useDispatch } from 'react-redux'

import { LoaderContext } from '@/app/contexts/Loader'

import { Header } from '@/widgets/header'

import { Counter } from '@/widgets/user/Counter'

import { UserFeature } from '@/features/user'
import { TEditProfileForm } from '@/features/user/ui/EditProfileForm/types'

import { UserService } from '@/entities/user/services'

import { userActions } from '@/entities/user/store'

import { Background } from '@/shared/ui/background'

export const EditProfile = () => {
  const { setLoading } = useContext(LoaderContext)
  const dispatch = useDispatch()
  const onSubmit = async (val: TEditProfileForm) => {
    try {
      setLoading(true)
      const { data } = await UserService.patchUser({
        ...val,
        phone: !!val.phone ? val.phone : undefined,
      })
      dispatch(userActions.setUser(data))
      Toast.show({
        type: 'success',
        text1: 'toasts.success',
        text2: 'toasts.profile_updated',
      })
    } catch (e) {
      console.log('EditProfile error =>', e)
    } finally {
      setLoading(false)
    }
  }
  return (
    <>
      <Header.Nested title="Edit Profile" />
      <Background.Scroll
        extraScrollHeight={120}
        style={{ marginTop: 32, paddingHorizontal: 44 }}>
        <Counter />
        <UserFeature.EditProfileForm onSubmit={onSubmit} />
      </Background.Scroll>
    </>
  )
}
