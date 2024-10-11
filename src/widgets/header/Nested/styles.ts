import { StyleSheet } from 'react-native'

import styled from 'styled-components/native'

import { wp } from '@/shared/lib'
import { EColors } from '@/shared/ui/styled'
import { Touchable } from '@/shared/ui/styled/Styled'

export const styles = StyleSheet.create({
  touch: {
    padding: 5,
  },
})

export const Container = styled.View`
  height: 68px;
  width: 100%;
  background-color: ${EColors.primary};
  padding: 0px 33px;
  justify-content: center;
`

export const TitleWrapper = styled.View`
  position: absolute;
  width: ${wp(65)}px;
  align-self: center;
  align-items: center;
`

export const TouchableIconWrapper = styled(Touchable)`
  position: absolute;
  right: 16px;
  border-width: 2px;
  border-color: ${EColors.white};
  height: 36px;
  width: 36px;
  border-radius: 36px;
  justify-content: center;
  align-items: center;
  padding-top: 1px;
`

export const TouchableExtraIconWrapper = styled(Touchable)`
  position: absolute;
  right: 60px;
  border-width: 2px;
  border-color: ${EColors.white};
  height: 36px;
  width: 36px;
  border-radius: 36px;
  justify-content: center;
  align-items: center;
  padding-top: 1px;
`
