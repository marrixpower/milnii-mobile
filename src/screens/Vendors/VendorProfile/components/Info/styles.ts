import { View } from 'react-native'

import styled from 'styled-components'

import { EColors } from '@/shared/ui/styled'

export const Container = styled(View)`
  padding: 0px 25px;
`

export const DetailCard = styled(View)<{
  hideBottomBorder?: boolean
}>`
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  padding: 10px 9px;
  border-top-width: 1px;
  border-bottom-width: ${({ hideBottomBorder }) =>
    hideBottomBorder ? 0 : 1}px;
  border-color: ${EColors.grey_200};
`
