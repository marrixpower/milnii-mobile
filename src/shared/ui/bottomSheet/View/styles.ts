import { StyleSheet } from 'react-native'

import { BottomSheetScrollView, BottomSheetView } from '@gorhom/bottom-sheet'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import styled from 'styled-components'
import { EColors } from '../../styled'

export const styles = StyleSheet.create({
  // TODO
  background: { backgroundColor: EColors.beige_200 },
  indicator: { backgroundColor: EColors.grey_100, width: 68, height: 6 },
  contentContainer: { paddingBottom: 100 },
})

export const Scroll = styled(BottomSheetScrollView).attrs({
  contentContainerStyle: {},
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  max-height: ${hp(90)}px;
`

export const Container = styled(BottomSheetView)`
  flex: 1;
`
