import { StyleSheet } from 'react-native'

import styled from 'styled-components/native'

import { isIos, wp } from '@/shared/lib'
import { EColors } from '@/shared/ui/styled'
import { Touchable } from '@/shared/ui/styled/Styled'

export const PaddingContainer = styled.View`
  padding: 0px 23px;
`

export const UserTypeButton = styled(Touchable)<{ active: boolean }>`
  padding: 0px 14px;
  justify-content: center;
  align-items: center;
  background-color: ${({ active }) =>
    active ? EColors.primary : EColors.translation};
  border-radius: 15px;
  border-width: 1px;
  border-color: ${({ active }) =>
    active ? EColors.translation : EColors.black};
  height: 28px;
  margin-right: 5px;
`

export const StatusButton = styled(UserTypeButton)`
  padding: 0px 17px;
`

export const RelatedTouchable = styled(Touchable)`
  flex-direction: row;
  width: 100%;
  align-items: center;
`

export const RelatedIconWrapper = styled.View`
  height: 25px;
  width: 25px;
  border-radius: 25px;
  border-color: ${EColors.grey_200};
  border-width: 2px;
  justify-content: center;
  align-items: center;
`

export const SelectGroupWrapper = styled.View`
  z-index: 20;
`

export const Group = styled(Touchable)`
  height: 38px;
  justify-content: center;
`

export const SelectGroupContainer = styled.View.attrs({
  shadowColor: EColors.grey_200,
  shadowOpacity: 1,
  shadowOffset: { width: 0, height: 2 },
  elevation: 2,
})`
  background-color: ${EColors.white};
  width: 100%;
  position: absolute;
  top: 37px;
  z-index: 10;
  border-radius: 14px;
  max-height: 253px;
`

export const ModalContent = styled.View`
  background-color: ${EColors.white};
  justify-content: center;
  align-items: center;
  height: 277px;
  border-radius: 14px;
  padding: 0px 38px;
`

export const styles = StyleSheet.create({
  guest_type_list: {
    marginTop: 10,
  },
  list_separator: {
    width: 6,
  },

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
  select_group_list: {
    paddingHorizontal: 22,
  },
  invited_to_list: {
    marginTop: 23,
    marginBottom: 26,
  },
  address_input: {
    width: '55%',
  },
  postal_code_input: {
    width: '40%',
  },
  notes_input_wrapper: {
    borderBottomWidth: 0,
    padding: 0,
    paddingBottom: 0,
    height: 'auto',
    width: wp(100) - 76,
  },
  notes_input_container: { padding: 0, paddingBottom: 0, height: 'auto' },
  invite_text: {
    width: wp(33),
  },
  status_list: {
    marginTop: 42,
  },
  status_list_content: {
    paddingLeft: 23,
    paddingRight: 5,
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
