import { StyleSheet, View } from 'react-native'

import styled from 'styled-components'

import { EColors } from '../../styled'
import { MARGIN } from '../../utils'

import { TContainer } from './types'

export const Container = styled(View)<TContainer>`
  width: ${({ width }) => width};
  align-items: flex-start;
  z-index: 10;
  ${props => MARGIN(props)};
`

const HEIGHT = 40

export const styles = StyleSheet.create({
  itemTextStyle: {
    color: EColors.black,
    fontSize: 12,
    height: 14,
  },
  itemContainerStyle: {
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',

    marginBottom: 3,
  },
  style: {
    overflow: 'hidden',
    width: '100%',
    height: HEIGHT,

    borderBottomColor: EColors.black,
    borderBottomWidth: 0.75,
    borderRadius: 8,
    zIndex: 100000,
  },
  containerStyle: {
    marginTop: 10,
    borderRadius: 8,
  },

  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 14,

    color: EColors.gray_999,
  },
  selectedTextStyle: {
    marginLeft: 10,
    fontSize: 14,
    color: EColors.black,
  },
  iconStyle: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  disableIcons: {
    display: 'none',
  },
  activeIcon: {
    display: 'flex',
  },
  disableBorder: {
    borderWidth: 0,
  },

  renderIcon: {},
})
