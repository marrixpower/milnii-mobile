import React from 'react'

import { useNavigation } from '@/shared/hooks'
import { Icon } from '@/shared/ui/Icon'

import { EColors } from '@/shared/ui/styled'
import { FlexWrapper, Touchable } from '@/shared/ui/styled/Styled'
import { BodyM1SB } from '@/shared/ui/styled/Text'

import { Header } from '..'

import {
  Container,
  styles,
  TitleWrapper,
  TouchableExtraIconWrapper,
  TouchableIconWrapper,
} from './styles'

import { TNestedProps } from './types'

export const Nested = ({
  title = '',
  withGoBack = true,
  rightIcon,
  extraRightIcon,
  onExtraRightIconPress = () => {},
  onRightIconPress = () => {},
}: TNestedProps) => {
  const { goBack } = useNavigation()
  const _onGoBack = () => {
    goBack()
  }
  return (
    <Header.Container height={68} color={EColors.primary}>
      <Container>
        {withGoBack && (
          <FlexWrapper justify={'flex-start'}>
            <Touchable style={styles.touch} onPress={_onGoBack}>
              <Icon
                fill={EColors.translation}
                stroke={EColors.white}
                name={'Back'}
                size={22}
              />
            </Touchable>
          </FlexWrapper>
        )}
        <TitleWrapper>
          <BodyM1SB align={'center'} color={EColors.beige_200}>
            {title.toUpperCase()}
          </BodyM1SB>
        </TitleWrapper>
        {rightIcon && (
          <TouchableIconWrapper onPress={onRightIconPress}>
            <Icon
              fill={EColors.white}
              stroke={EColors.white}
              name={rightIcon as 'Plus' | 'Heart'}
              size={17}
            />
          </TouchableIconWrapper>
        )}
        {extraRightIcon && (
          <TouchableExtraIconWrapper
            mLeft="8px"
            onPress={onExtraRightIconPress}>
            <Icon
              fill={EColors.white}
              stroke={EColors.white}
              name={extraRightIcon as 'Plus' | 'Heart'}
              size={17}
            />
          </TouchableExtraIconWrapper>
        )}
      </Container>
    </Header.Container>
  )
}

export default Nested
