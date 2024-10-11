import React from 'react'

import { Button } from '@/shared/ui/button'
import { EColors } from '@/shared/ui/styled'
import { BodyM1SB, BodyM2B } from '@/shared/ui/styled/Text'

import { THomeSection } from './types'

export const HomeSection = ({
  title,

  buttonText,
  onPress = () => {},
  children = <></>,
}: THomeSection) => {
  return (
    <>
      <BodyM1SB mTop="23px">{title}</BodyM1SB>

      {children}

      <Button.Standard onPress={onPress} mTop="28px">
        <BodyM2B color={EColors.white}>{buttonText.toUpperCase()}</BodyM2B>
      </Button.Standard>
    </>
  )
}
