import { StyleSheet } from 'react-native'

import styled from 'styled-components/native'

import { EColors } from '@/shared/ui/styled'
import { FlexWrapper, Touchable } from '@/shared/ui/styled/Styled'

export const CostWrapper = styled(FlexWrapper)`
  justify-content: space-between;
  padding: 0px 23px;
`

export const Cost = styled(FlexWrapper)`
  height: 80px;
  width: 48.5%;
  background-color: ${EColors.primary};
  border-radius: 15.5px;
  flex-direction: column;
`

export const InputWrapper = styled.View`
  padding: 0px 23px;
`

export const PlusWrapper = styled(FlexWrapper)`
  height: 24px;
  width: 24px;
  border-radius: 24px;
  border-width: 1px;
  border-color: ${EColors.grey_200};
`

export const AddExpenseTouchable = styled(Touchable)`
  height: 53px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: auto;
  padding: 0px 23px;
`

export const styles = StyleSheet.create({
  main: { paddingTop: 38 },
  list: { marginTop: 47, width: '100%' },
})
