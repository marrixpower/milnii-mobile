import { StyleSheet, TouchableOpacity, View } from 'react-native'

import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import styled from 'styled-components'
import { EColors } from '../../styled'

export const RightButtonContainer = styled(TouchableOpacity).attrs({
  activeOpacity: 0.8,
})`
  position: absolute;
  right: 12px;
  height: 100%;
  align-items: center;
  justify-content: center;
`

export const RightButton = styled(View)`
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 20px;
  border-radius: 50px;
  background-color: ${EColors.dark_grey_300};
`

export const autocompleteStyles = StyleSheet.create({
  container: {
    flex: 0,
    zIndex: 100,
  },
  textInputContainer: {
    height: 44,
    flexDirection: 'row',
    width: '100%',
  },
  textInput: {
    paddingRight: 36,
    height: 44,
    width: '100%',
    borderRadius: 8,
    paddingHorizontal: 12,
    flex: 1,
    color: EColors.dark_grey_300,
    backgroundColor: EColors.translation,
    borderWidth: 1,
    borderColor: EColors.dark_grey_300,
  },
  poweredContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderColor: '#c8c7cc',
    borderTopWidth: 0.5,
  },
  powered: {},
  listView: {
    borderRadius: 12,
    height: hp(25),
  },
  row: {
    backgroundColor: EColors.grey_100,
    padding: 13,
    height: 44,
    flexDirection: 'row',
  },
  separator: {
    height: 0.5,
    backgroundColor: '#c8c7cc',
  },
  description: {
    color: EColors.dark_grey_300,
  },
  loader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 20,
  },
})
