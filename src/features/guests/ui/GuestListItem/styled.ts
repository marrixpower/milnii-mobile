import { StyleSheet } from 'react-native'

import styled from 'styled-components'

import { FlexWrapper } from '@/shared/ui/styled/Styled'

export const GuestItem = styled(FlexWrapper)<{
  withoutPadding: boolean
}>`
  height: 53px;
  justify-content: space-between;
  padding: 0px ${({ withoutPadding }) => (withoutPadding ? 0 : 23)}px;
`

export const styles = StyleSheet.create({
  touch: {
    width: '100%',
  },
  text: {
    maxWidth: '85%',
    width: '80%',
  },
})
