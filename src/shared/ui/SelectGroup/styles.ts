import { StyleSheet } from 'react-native'

import styled from 'styled-components/native'

import { isIos } from '@/shared/lib'

import { EColors } from '../styled'
import { Touchable } from '../styled/Styled'

export const SelectGroupButton = styled(Touchable)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: ${EColors.dark_grey_200};
  padding-bottom: 16px;
`

export const GroupIconWrapper = styled.View<{ open: boolean }>`
  transform: rotate(${({ open }) => (open ? 180 : 0)}deg);
`

export const SelectGroupWrapper = styled.View`
  z-index: 30;
  padding: 0px 23px;
`

export const Group = styled(Touchable)`
  height: 38px;
  justify-content: center;
`

export const SelectGroupContainer = styled.View.attrs({
  shadowColor: isIos ? EColors.grey_200 : EColors.black,
  shadowOpacity: 1,
  shadowOffset: { width: 0, height: 2 },
  elevation: 2,
})`
  background-color: ${EColors.white};
  width: ${isIos ? 100 : 99}%;
  position: absolute;
  top: 37px;
  z-index: 20;
  border-radius: 14px;
  max-height: 253px;
  left: ${isIos ? 20 : 22}px;
`

export const ModalContent = styled.View`
  background-color: ${EColors.white};
  justify-content: center;
  align-items: center;
  height: 277px;
  border-radius: 14px;
  padding: 0px 38px;
`

export const styles = StyleSheet.create({
  select_group_list: {
    paddingHorizontal: 22,
    zIndex: 10,
  },
})
