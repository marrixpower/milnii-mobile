import { View } from 'react-native'

import styled from 'styled-components'

import { EColors } from '../styled'
import { FLEX } from '../utils'

export const Container = styled(View)<{
  bottomInst: number
  pHorizontal: number
  pVertical: number
}>`
  width: 100%;
  background-color: ${EColors.translation};

  padding: ${({ pHorizontal, pVertical }) => `${pVertical}px ${pHorizontal}px`}
    ${({ bottomInst }) => (bottomInst === 0 ? 16 : bottomInst)}px;
  ${FLEX({ direction: 'row', align: 'center', justify: 'space-between' })}
`
