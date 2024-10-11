import React, { useState } from 'react'

import { Icon } from '../Icon'
import { EColors } from '../styled'
import { Divider, FlexWrapper } from '../styled/Styled'
import { BodyL4R, BodyM1SB } from '../styled/Text'

import { IconWrapper, TouchableHeader } from './styles'
import { TAccordionProps } from './types'

export const Accordion = ({
  children = null,
  text1 = '',
  text2 = '',
}: TAccordionProps) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <TouchableHeader onPress={() => setOpen(prev => !prev)}>
        <FlexWrapper width="auto" flexDirection="column" align="flex-start">
          <BodyM1SB>{text1}</BodyM1SB>
          <BodyL4R color={EColors.grey_700}>{text2}</BodyL4R>
        </FlexWrapper>
        <IconWrapper open={open}>
          <Icon fill={EColors.translation} name="ChevronDown" size={14} />
        </IconWrapper>
      </TouchableHeader>
      <Divider />
      {open && children}
    </>
  )
}
