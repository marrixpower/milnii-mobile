import { StyleSheet } from 'react-native'

import styled from 'styled-components/native'

import { EColors } from '@/shared/ui/styled'

export const DescriptionIconWrapper = styled.View`
  top: 3px;
`

export const styles = StyleSheet.create({
  main: { paddingTop: 40, paddingHorizontal: 23 },
  button: {
    borderWidth: 2,
    borderColor: EColors.primary,
  },
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
