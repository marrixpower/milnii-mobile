import { StyleSheet } from 'react-native'

import styled from 'styled-components/native'

import { EColors } from '@/shared/ui/styled'
import { FlexWrapper, Touchable } from '@/shared/ui/styled/Styled'

export const DoubleInputWrapper = styled(FlexWrapper)`
  margin-top: 17px;
  margin-bottom: 10px;
  padding: 0px 23px;
  justify-content: space-between;
`

export const TouchableItemContainer = styled(Touchable)`
  height: 66px;
  align-items: center;
  flex-direction: row;
`

export const IconWrapper = styled.View`
  height: 46px;
  width: 46px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  background-color: ${EColors.primary};
`

export const styles = StyleSheet.create({
  background: {
    paddingTop: 28,
  },
  padding_container: {
    width: '100%',
    paddingHorizontal: 23,
  },
  header_margin: {
    marginBottom: 10,
  },
  input_container: {
    borderWidth: 1,
    borderColor: EColors.text_grey_100,
    alignItems: 'center',
    paddingHorizontal: 16,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
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
