import { Text } from 'react-native'

import styled, { css } from 'styled-components'

import { MARGIN, FONT, EFonts } from '../utils'

import { EColors } from './colors'
import { TStyledTextProps } from './types'

export const StyledText = styled(Text)<TStyledTextProps>`
  ${FONT({})}
  ${props => css`
    ${MARGIN(props)}

    ${props.size &&
    css`
      font-size: ${props.size};
    `}

    color: ${props.color || EColors.black};

    text-align: ${props.align || 'auto'};

    text-decoration: ${props.crossed ? 'line-through' : 'none'};
  `}
`

export const H1R = styled(StyledText)`
  font-size: 26px;
  font-family: ${EFonts.monserratRegular};
`

export const H1 = styled(StyledText)`
  font-size: 26px;
  font-family: ${EFonts.monserratBold};
  font-weight: 600;
`

export const H2 = styled(StyledText)`
  font-size: 22px;
  font-weight: 600;
  font-family: ${EFonts.monserratBold};
`
export const H3 = styled(H2)`
  font-family: ${EFonts.monserratSemiBold};
`

export const H4 = styled(H3)`
  font-size: 20px;
`

export const BodyM1R = styled(StyledText)`
  font-size: 16px;
  font-family: ${EFonts.monserratRegular};
`

export const BodyM1SB = styled(StyledText)`
  font-size: 16px;
  font-family: ${EFonts.monserratSemiBold};
  font-weight: 600;
`

export const BodyM1B = styled(StyledText)`
  font-size: 16px;
  font-family: ${EFonts.monserratBold};
  font-weight: 700;
`

export const BodyL1R = styled(StyledText)`
  font-size: 16px;
  font-family: ${EFonts.latoRegular};
`

export const BodyL1SB = styled(StyledText)`
  font-size: 16px;
  font-family: ${EFonts.latoBold};
`

export const BodyM2R = styled(StyledText)`
  font-size: 14px;
  font-family: ${EFonts.monserratRegular};
`

export const BodyM2SB = styled(StyledText)`
  font-size: 14px;
  font-family: ${EFonts.monserratSemiBold};
  font-weight: 500;
`
export const BodyM2B = styled(StyledText)`
  font-size: 14px;
  font-family: ${EFonts.monserratSemiBold};
  font-weight: 600;
`

export const BodyL2R = styled(StyledText)`
  font-size: 14px;
  font-family: ${EFonts.latoRegular};
`

export const BodyL2SB = styled(StyledText)`
  font-size: 14px;
  font-family: ${EFonts.latoBold};
`

export const BodyM3R = styled(StyledText)`
  font-size: 13px;
  font-family: ${EFonts.monserratRegular};
`

export const BodyM3SB = styled(StyledText)`
  font-size: 13px;
  font-family: ${EFonts.monserratSemiBold};
  font-weight: 500;
`

export const BodyM3B = styled(StyledText)`
  font-size: 13px;
  font-family: ${EFonts.monserratRegular};
  font-weight: 600;
`

export const BodyL3R = styled(StyledText)`
  font-size: 13px;
  font-family: ${EFonts.latoRegular};
`

export const BodyL3SB = styled(StyledText)`
  font-size: 13px;
  font-family: ${EFonts.latoBold};
`

export const BodyM4R = styled(StyledText)`
  font-size: 12px;
  font-family: ${EFonts.monserratRegular};
`

export const BodyM4SB = styled(StyledText)`
  font-size: 12px;
  font-family: ${EFonts.monserratSemiBold};
  font-weight: 600;
`

export const BodyL4R = styled(StyledText)`
  font-size: 12px;
  font-family: ${EFonts.latoRegular};
`

export const BodyL4SB = styled(StyledText)`
  font-size: 12px;
  font-family: ${EFonts.latoBold};
`

export const BodyM5R = styled(StyledText)`
  font-size: 11px;
  font-family: ${EFonts.monserratRegular};
  font-weight: 400;
`

export const BodyM5SB = styled(StyledText)`
  font-size: 11px;
  font-family: ${EFonts.monserratSemiBold};
  font-weight: 500;
`
export const BodyM5B = styled(StyledText)`
  font-size: 11px;
  font-family: ${EFonts.monserratSemiBold};
  font-weight: 600;
`

export const BodyL5R = styled(StyledText)`
  font-size: 11px;
  font-family: ${EFonts.latoRegular};
`

export const BodyL5SB = styled(StyledText)`
  font-size: 11px;
  font-family: ${EFonts.latoBold};
`

export const CaptionM1R = styled(StyledText)`
  font-size: 10px;
  font-family: ${EFonts.monserratRegular};
`

export const CaptionM1SB = styled(StyledText)`
  font-size: 10px;
  font-family: ${EFonts.monserratSemiBold};
  font-weight: 600;
`

export const CaptionL1R = styled(StyledText)`
  font-size: 10px;
  font-family: ${EFonts.latoRegular};
`

export const CaptionL1SB = styled(StyledText)`
  font-size: 10px;
  font-family: ${EFonts.latoBold};
`

export const CaptionM2SB = styled(StyledText)`
  font-size: 8.5px;
  font-family: ${EFonts.monserratSemiBold};
  font-weight: 600;
`
