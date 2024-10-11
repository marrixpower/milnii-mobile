import React from 'react'

import { Png } from '@assets/png'

import { EScreens, EStacks } from '@/app/navigation'

import { useNavigation } from '@/shared/hooks'
import { Icon } from '@/shared/ui/Icon'
import { EColors } from '@/shared/ui/styled'

import { Header } from '..'

import { Logo } from '../Auth/styles'

import { Container, EditButton } from './styles'

export const Main = () => {
  const { navigate } = useNavigation()

  const onGoEditProfile = () => {
    navigate(EStacks.More, { screen: EScreens.MoreEditProfile, initial: false })
  }
  return (
    <Header.Container color={EColors.white}>
      <Container>
        <Logo source={Png.LogoHorizontal} />
        <EditButton onPress={onGoEditProfile}>
          <Icon name="Edit" size={22} />
        </EditButton>
      </Container>
    </Header.Container>
  )
}
