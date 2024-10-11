import { StyleSheet } from 'react-native'

import styled from 'styled-components/native'

import { isIos } from '@/shared/lib'
import { EColors } from '@/shared/ui/styled'
import { FlexWrapper, Touchable } from '@/shared/ui/styled/Styled'

export const RolesContainer = styled.View`
  margin-top: ${isIos ? 27 : 14}px;
`

export const RolesTouchable = styled(Touchable)`
  z-index: 10;
  position: absolute;
  bottom: 0;
  height: 100%;
  width: 100%;
`

export const RolesIconWrapper = styled.View<{ open: boolean }>`
  transform: rotate(${({ open }) => (open ? 180 : 0)}deg);
  top: ${isIos ? 0 : 13}px;
`

export const RolesList = styled(FlexWrapper)`
  background-color: ${EColors.white};
  padding: 10px 0px 10px 26px;
  bottom: 2px;
  flex-direction: column;
  align-items: flex-start;
`

export const RoleItem = styled(Touchable)`
  padding: 10px 0px;
  width: 100%;
`

export const TouchableInputMask = styled(Touchable)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  z-index: 20;
`

export const styles = StyleSheet.create({
  checkbox_text: {
    bottom: isIos ? 0 : 2,
  },
})
