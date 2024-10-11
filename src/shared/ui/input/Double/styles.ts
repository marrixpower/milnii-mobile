import { StyleSheet } from 'react-native'

import styled from 'styled-components/native'

import { EColors } from '../../styled'
import { FlexWrapper } from '../../styled/Styled'

export const DoubleInputWrapper = styled(FlexWrapper)`
  margin-top: 17px;
  margin-bottom: 10px;

  justify-content: space-between;
`

export const styles = StyleSheet.create({
  input_container: {
    borderWidth: 1,
    borderColor: EColors.text_grey_100,
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 38,
  },
  input_container_second: {
    borderWidth: 1,
    borderColor: EColors.text_grey_100,
    alignItems: 'center',
    paddingHorizontal: 16,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderLeftWidth: 0,
    height: 38,
  },
  input: {
    borderBottomWidth: 0,
  },
})
