import { StyleSheet } from 'react-native'

import styled from 'styled-components/native'

import { isIos, wp } from '@/shared/lib'
import { EColors } from '@/shared/ui/styled'
import { FlexWrapper } from '@/shared/ui/styled/Styled'
import { MARGIN, TMargin } from '@/shared/ui/utils'

export const PaddingContainer = styled.View<TMargin>`
  padding: 0px 23px;

  ${props => MARGIN(props)}
`

export const EstimatedCostWrapper = styled(FlexWrapper)`
  justify-content: space-between;
  margin-top: ${isIos ? 44 : 30}px;
  border-bottom-width: 1px;
  border-bottom-color: ${EColors.black};
  padding-bottom: ${isIos ? 12 : 0}px;
`

export const styles = StyleSheet.create({
  name_wrapper: {
    height: 'auto',
  },
  name_container: {
    marginTop: 25,
    height: 'auto',
    paddingBottom: isIos ? 10 : 0,
  },
  name_input: {
    fontSize: 22,
    fontWeight: '600',
  },
  cost_input_wrapper: {
    width: '60%',
    height: 'auto',
    borderBottomColor: EColors.translation,
    borderBottomWidth: 0,
  },
  cost_input_container: {
    height: 'auto',
  },
  cost_input: {
    textAlign: 'right',
  },

  notes_input_wrapper: {
    borderBottomWidth: 0,
    padding: 0,
    paddingBottom: 0,
    height: 'auto',
    width: wp(100) - 76,
    zIndex: -1,
  },
  notes_input_container: {
    padding: 0,
    paddingBottom: 0,
    height: 'auto',
  },
  button_paid: {
    backgroundColor: EColors.translation,
    borderWidth: 1,
    borderColor: EColors.primary,
  },
  button_cancel: {
    borderWidth: 1,
    borderColor: EColors.primary,
    width: '48%',
    backgroundColor: EColors.translation,
    height: 35,
    borderRadius: 7,
  },
  button_delete: {
    width: '48%',
    height: 35,
    borderRadius: 7,
  },
})
