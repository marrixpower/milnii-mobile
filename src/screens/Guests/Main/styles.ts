import { StyleSheet } from 'react-native'

import styled from 'styled-components/native'

export const Separator = styled.View`
  width: 9px;
`
export const PaddingContainer = styled.View`
  padding: 0px 23px;
`

export const styles = StyleSheet.create({
  background: {
    paddingTop: 38,
  },
  padding: {
    paddingHorizontal: 23,
  },
  ceremonies_list: {
    marginTop: 23,
  },
  ceremonies_list_content: {
    paddingLeft: 23,
    paddingRight: 5,
  },
})
