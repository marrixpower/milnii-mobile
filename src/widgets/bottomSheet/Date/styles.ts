import { FlexWrapper } from '@/shared/ui/styled/Styled'
import { StyleSheet, Dimensions } from 'react-native'

import styled from 'styled-components'

export const Container = styled(FlexWrapper)`
  padding: 16px 12px 32px;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`

export const styles = StyleSheet.create({
  datePicker: {
    width: Dimensions.get('screen').width,
  },
  title: {
    alignSelf: 'flex-start',
  },
})
