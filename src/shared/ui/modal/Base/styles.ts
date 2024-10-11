import { StyleSheet, TouchableOpacity } from 'react-native'

import styled from 'styled-components'

import { EColors } from '../../styled'

export const ModalContainer = styled(TouchableOpacity).attrs({
  activeOpacity: 1,
})`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`

export const CloseButton = styled(TouchableOpacity).attrs({
  activeOpacity: 0.8,
})`
  align-self: flex-end;
`

export const styles = StyleSheet.create({
  modalView: {
    backgroundColor: EColors.white,
    borderRadius: 20,
    margin: 24,
    padding: 20,
    paddingTop: 10,
    alignItems: 'center',
    shadowColor: EColors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
})
