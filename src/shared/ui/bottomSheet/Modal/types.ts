import { PropsWithChildren } from 'react'

import { BottomSheetModalProps } from '@gorhom/bottom-sheet'

export type TBottomSheetModalProps = Partial<
  Omit<BottomSheetModalProps, 'contentHeight'>
> &
  PropsWithChildren<{
    withScroll?: boolean
    isList?: boolean
    keyboardShouldPersistTaps?: 'always' | 'handled' | 'never'
    snapPoints?: Array<string>
    initialIndex?: number
    onClose?: () => void
    dynamicSizing?: boolean
    scrollEnabled?: boolean
  }>

export type TBottomSheetModalRef = {
  open: () => void
  close: () => void
}
