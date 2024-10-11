import { StyleSheet } from 'react-native'

import { EColors } from '@/shared/ui/styled'

export const styles = StyleSheet.create({
  name_container: {
    height: 'auto',
  },
  name_wrapper: {
    height: 'auto',
  },
  task_name: {
    fontSize: 22,
    fontWeight: '600',
    paddingBottom: 10,
  },
  desc_icon_wrapper: {
    position: 'absolute',
    top: 5,
    left: 0,
  },
  desc_input: {
    borderBottomWidth: 0,
    borderBottomColor: EColors.text_grey_100,
  },
  budget_wrapper: {
    borderBottomColor: EColors.text_grey_100,
    borderBottomWidth: 1,

    width: 'auto',
  },
  budget_icon: {
    width: 23,
    height: 23,
    borderRadius: 23,
    backgroundColor: EColors.grey_300,
  },
  budget_input_container: {
    borderBottomColor: EColors.translation,
  },
  budget_input: {
    alignItems: 'center',
  },
  budget_input_text: {
    fontSize: 16,
    fontWeight: '600',
  },
})
