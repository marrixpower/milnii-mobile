import { wp } from '@/shared/lib'
import { EColors } from '@/shared/ui/styled'
import { Touchable } from '@/shared/ui/styled/Styled'

import styled from 'styled-components/native'

export const styles = {
  list: {
    marginTop: 35,
  },
  column_wrapper: {
    justifyContent: 'space-between' as 'space-between',
  },
}

export const Separator = styled.View`
  height: 15px;
  width: 15px;
`

export const ItemContainer = styled(Touchable)`
  width: ${wp(50) - 51.5}px;
  height: ${wp(50) - 51.5}px;
  background-color: ${EColors.primary};
  align-items: center;
  justify-content: center;
  border-radius: 16px;
`
