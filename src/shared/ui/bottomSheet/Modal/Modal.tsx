import React, {
  useRef,
  forwardRef,
  useImperativeHandle,
  useMemo,
  useCallback,
} from 'react'

import { Keyboard, Platform } from 'react-native'

import { BottomSheetModal, BottomSheetBackdrop } from '@gorhom/bottom-sheet'
import { BottomSheetBackdropProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types'
import _ from 'lodash'
import { AndroidSoftInputModes } from 'react-native-keyboard-controller'
import { useSharedValue } from 'react-native-reanimated'

import { useKeyboardMode } from '@/shared/lib/hooks/keyboard'

import * as S from './styles'
import { TBottomSheetModalRef, TBottomSheetModalProps } from './types'

export const Modal = forwardRef<TBottomSheetModalRef, TBottomSheetModalProps>(
  (
    {
      children,
      withScroll,
      isList,
      keyboardShouldPersistTaps = 'handled',
      snapPoints = ['50%', '85%'],
      initialIndex,
      onClose,
      dynamicSizing = false,
      scrollEnabled = true,
      android_keyboardInputMode = 'adjustResize',
      ...props
    },
    ref,
  ) => {
    useKeyboardMode(
      android_keyboardInputMode === 'adjustPan'
        ? AndroidSoftInputModes.SOFT_INPUT_ADJUST_NOTHING
        : AndroidSoftInputModes.SOFT_INPUT_ADJUST_RESIZE,
    )
    const bottomSheetRef = useRef<BottomSheetModal>(null)

    const currentPosition = useSharedValue(-1000)

    const _onClose = async () => {
      if (onClose) {
        onClose()
        return
      }

      bottomSheetRef.current?.dismiss()
    }

    useImperativeHandle(
      ref,
      () => ({
        open: () => {
          Keyboard.dismiss()
          bottomSheetRef.current?.present()
        },
        close: async () => {
          bottomSheetRef.current?.dismiss()
        },
      }),
      [],
    )

    const renderContent = () => {
      if (withScroll)
        return (
          <S.Scroll
            bounces={true}
            nestedScrollEnabled={true}
            scrollEnabled={scrollEnabled}
            keyboardShouldPersistTaps={keyboardShouldPersistTaps}>
            {children}
          </S.Scroll>
        )

      if (isList) return children

      return <S.Container>{children}</S.Container>
    }

    const index = useMemo(() => {
      if (dynamicSizing) {
        return 0
      } else if (_.isNumber(initialIndex)) {
        return initialIndex
      } else {
        snapPoints.length - 1
      }
    }, [dynamicSizing, initialIndex, snapPoints.length])

    const renderBackdrop = useCallback(
      (backdropProps: BottomSheetBackdropProps) => (
        <BottomSheetBackdrop
          {...backdropProps}
          disappearsOnIndex={-1}
          appearsOnIndex={0}
          pressBehavior={'close'}
        />
      ),
      [_onClose],
    )

    return (
      <BottomSheetModal
        ref={bottomSheetRef}
        snapPoints={dynamicSizing ? [] : snapPoints}
        enableDynamicSizing={dynamicSizing}
        index={index}
        onDismiss={() => _onClose()}
        backdropComponent={renderBackdrop}
        backgroundStyle={S.styles.background}
        handleIndicatorStyle={S.styles.indicator}
        android_keyboardInputMode={android_keyboardInputMode}
        keyboardBehavior={Platform.OS === 'ios' ? 'extend' : 'interactive'}
        keyboardBlurBehavior={Platform.OS === 'ios' ? 'none' : 'restore'}
        enableDismissOnClose
        enableContentPanningGesture
        enablePanDownToClose
        animatedPosition={currentPosition}
        {...props}>
        {renderContent()}
      </BottomSheetModal>
    )
  },
)
