import { StyleSheet } from 'react-native'

import { EColors } from '@/shared/ui/styled'

export const styles = StyleSheet.create({
  background: {
    paddingTop: 28,
  },
  padding_container: {
    paddingHorizontal: 23,
    width: '100%',
  },
  saved_count: {
    position: 'absolute',
    bottom: -16,
  },
  browse_text: {
    top: 3,
  },
  mockItem: {
    marginTop: 18,
    width: '100%',
    borderRadius: 14,
    backgroundColor: EColors.beige_200,
    height: 133,
  },
  inner_list: {
    marginTop: 18,
    paddingHorizontal: 23,
  },
  inner_separator: {
    height: 11,
  },
})
