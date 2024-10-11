import React from 'react'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { keyboardAwareViewProps } from './config'
import { ScrollContainer, styles } from './styled'
import { ScrollProps } from './types'

export const Scroll = ({
  children,
  pHorizontal = 0,
  withOffset = true,
  ...props
}: ScrollProps) => {
  return (
    <>
      <KeyboardAwareScrollView
        style={[{ paddingHorizontal: pHorizontal }, styles.container]}
        contentContainerStyle={{ paddingBottom: withOffset ? 95 : 0 }}
        // extraScrollHeight={70}
        enableOnAndroid
        {...keyboardAwareViewProps}
        {...props}>
        <ScrollContainer>{children}</ScrollContainer>
      </KeyboardAwareScrollView>
    </>
  )
}
