import { StyleSheet } from 'react-native'

import { EColors } from '@/shared/ui/styled'

import { padding, cardVerticalDivider } from './config'

export const styles = StyleSheet.create({
  list: {
    width: '100%',
    paddingHorizontal: padding,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    paddingBottom: cardVerticalDivider,
  },
  buttonBorder: {
    borderRadius: 9,
  },
  cancel: {
    borderColor: EColors.primary,
    borderWidth: 1,
  },
  dropDownBottomLine: { borderBottomWidth: 0 },
  dropDownText: { fontWeight: '600', fontSize: 20 },
})
