import { StyleSheet } from 'react-native'

import { EColors } from '@/shared/ui/styled'
import { EFonts } from '@/shared/ui/utils'

export const styles = StyleSheet.create({
  toastContainer: {
    paddingHorizontal: 15,
    borderRadius: 12,
    backgroundColor: EColors.beige_200,
  },
  errorToast: {
    borderLeftColor: EColors.primary,
    backgroundColor: EColors.beige_200,
  },
  successToast: {
    borderLeftColor: EColors.green,
    backgroundColor: EColors.beige_200,
  },
  infoToast: {
    borderLeftColor: EColors.gray_999,
    backgroundColor: EColors.beige_200,
  },
  headline: {
    fontSize: 13,
    fontFamily: EFonts.monserratMedium,
    fontWeight: '600',
  },
  text: {
    fontSize: 13,
    fontFamily: EFonts.monserratRegular,
  },
})
