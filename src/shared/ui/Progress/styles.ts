import styled from 'styled-components/native'
import { EColors } from '../styled'

export const TotalLine = styled.View`
  height: 7px;
  width: 100%;
  background-color: ${EColors.grey_400};
  border-radius: 10px;
  margin-top: 9px;
`

export const FilledLine = styled.View<{ filled: number; total: number }>`
  height: 7px;
  width: ${({ filled, total }) => `${(filled / total) * 100}%`};
  background-color: ${EColors.primary};
  position: absolute;
  bottom: 0;
  border-radius: 10px;
`
