import { StyleSheet } from 'react-native'

import { EFonts } from '@/shared/ui/utils'

export const styles = StyleSheet.create({
  title_input: {
    fontSize: 22,
    fontFamily: EFonts.monserratBold,
    fontWeight: 'bold',
  },
  desc_input: {
    fontSize: 14,
    fontFamily: EFonts.monserratRegular,
    fontWeight: '500',
  },
  background: {
    paddingHorizontal: 38,
    paddingTop: 40,
  },
})
