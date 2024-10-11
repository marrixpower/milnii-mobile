import { StyleSheet } from 'react-native'

import styled from 'styled-components/native'

import { isIos } from '@/shared/lib'
import { EColors } from '@/shared/ui/styled'
import { Touchable } from '@/shared/ui/styled/Styled'

export const EmptyContainer = styled.View`
  align-items: center;
`

export const Note = styled(Touchable)`
  height: 71px;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 21px;
  background-color: ${EColors.beige_200};
  border-radius: 14px;
`

export const Separator = styled.View`
  height: 12px;
`

export const DividerWrapper = styled.View`
  left: 44px;
`

export const SortButtonWrapper = styled.View`
  position: absolute;
  right: 26px;
  top: 16px;
`

export const SortButton = styled(Touchable)`
  width: 23px;
  height: 23px;
  border-radius: 23px;
  border-width: 1px;
  border-color: ${EColors.black};

  justify-content: center;
  align-items: center;
`

export const SortListWrapper = styled.View.attrs({
  shadowColor: isIos ? EColors.grey_200 : EColors.black,
  shadowRadius: 2,
  shadowOpacity: 1,
  shadowOffset: {
    width: 0,
    height: 0,
  },
  elevation: 3,
})`
  position: absolute;
  bottom: 30px;
  right: 0px;
  background-color: ${EColors.white};
  width: 200px;
  border-radius: 14px;
  padding: 11px 0px 7px 0px;
`

export const SortItem = styled(Touchable)<{ last: boolean }>`
  height: 31px;
  padding: 0px 17px;
  align-items: center;
  border-bottom-color: ${EColors.grey_200};
  border-bottom-width: ${({ last }) => (last ? 0 : 1)}px;
  flex-direction: row;
`

export const styles = StyleSheet.create({
  sort_text: {
    bottom: isIos ? 4.5 : 5.5,
    left: isIos ? 0.5 : 0,
  },
  item_text: {
    width: '80%',
  },
  main: { paddingHorizontal: 23, paddingTop: 38 },
  bottomBar: { flexDirection: 'column', paddingTop: 0 },
  list: { paddingBottom: 16 },
})
