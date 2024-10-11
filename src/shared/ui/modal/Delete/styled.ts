import { StyleSheet } from 'react-native'

import styled from 'styled-components/native'

import { EColors } from '../../styled'

export const ModalContent = styled.View`
  padding: 54px 38px;
  background-color: ${EColors.white};
  border-radius: 14px;
  justify-content: center;
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
