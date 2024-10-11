import React, { useMemo } from 'react'

import { Icon } from '../../Icon'
import { EColors } from '../../styled'

import { StyledButton, StyledSecondaryText, StyledText } from './styled'
import { TStandard } from './types'

export const Standard = ({
  children,
  width = '100%',
  height = '58px',
  color,
  text,
  textColor,
  mTop = '0px',
  mBottom = '0px',
  mLeft = '0px',
  mRight = '0px',
  disabled = false,
  radius,
  icon,
  hideBorder,
  iconProps = {},
  secondary = false,
  ...props
}: TStandard) => {
  const buttonProps = useMemo(() => {
    if (secondary) {
      return {
        radius: radius || 8,
        textColor: textColor || EColors.primary,
        color: color || EColors.translation,
        hideBorder: false,
      }
    }

    return {
      radius: radius || 16,
      textColor: textColor || EColors.white,
      color: color || EColors.primary,
      hideBorder: true,
    }
  }, [secondary, radius, radius, textColor, color, hideBorder])

  const Text = useMemo(
    () => (secondary ? StyledSecondaryText : StyledText),
    [secondary],
  )

  return (
    <StyledButton
      width={width}
      height={height}
      mTop={mTop}
      mBottom={mBottom}
      mLeft={mLeft}
      mRight={mRight}
      disabled={!!disabled}
      hideBorder={hideBorder}
      {...props}
      {...buttonProps}>
      {!!icon && <Icon name={icon} {...iconProps} />}
      {!!text && (
        <Text
          mLeft={!!icon ? '8px' : '0px'}
          color={buttonProps.textColor}
          disabled={!!disabled}>
          {text}
        </Text>
      )}
      {children}
    </StyledButton>
  )
}
