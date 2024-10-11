import React, { useMemo } from 'react'

import { openPicker } from 'react-native-image-crop-picker'

import { useDispatch } from 'react-redux'

import { useTypedSelector } from '@/app/store'

import { UserService } from '@/entities/user/services'
import { getUserSelector, userActions } from '@/entities/user/store'

import { getPhotoUrl } from '@/shared/lib'
import { Button } from '@/shared/ui/button'
import { Touchable } from '@/shared/ui/styled/Styled'

import { StyledImage } from './styles'

export const Avatar = () => {
  const { user } = useTypedSelector(getUserSelector)
  const dispatch = useDispatch()
  const onAvatarPress = async () => {
    try {
      const response = await openPicker({
        mediaType: 'photo',
        width: 300,
        height: 400,
      })
      if (response && response.path) {
        await UserService.patchPhoto({ image: response.path })
        const { data } = await UserService.getUserMe()
        dispatch(userActions.setUser(data))
      }
    } catch (e) {
      console.log('onAvatarPress error =>', e)
    }
  }

  const photoUrl = useMemo(() => {
    if (user && user?.image) return getPhotoUrl(user.image, 'user')
  }, [user?.image])

  return (
    <>
      {!!photoUrl && (
        <Touchable onPress={onAvatarPress}>
          <StyledImage source={{ uri: photoUrl }} />
        </Touchable>
      )}
      {!photoUrl && <Button.Plus onPress={onAvatarPress} />}
    </>
  )
}
