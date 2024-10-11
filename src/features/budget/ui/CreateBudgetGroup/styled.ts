import { StyleSheet } from 'react-native'

import styled from 'styled-components/native'

import { EColors } from '@/shared/ui/styled'

export const ModalContent = styled.View`
  background-color: ${EColors.white};
  justify-content: center;
  align-items: center;
  height: 277px;
  border-radius: 14px;
  padding: 0px 38px;
`

export const styles = StyleSheet.create({
  button_cancel: {
    borderWidth: 1,
    borderColor: EColors.primary,
    width: '48%',
    backgroundColor: EColors.translation,
    height: 35,
    borderRadius: 7,
  },
  button_delete: {
    width: '48%',
    height: 35,
    borderRadius: 7,
  },
})
