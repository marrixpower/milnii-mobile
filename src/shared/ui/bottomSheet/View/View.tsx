import React, { useRef, forwardRef, useImperativeHandle, useMemo } from 'react'

import { Platform } from 'react-native'

import BottomSheetView, { BottomSheetBackdrop } from '@gorhom/bottom-sheet'
import { BottomSheetBackdropProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types'
import _ from 'lodash'
import { useSharedValue } from 'react-native-reanimated'

import * as S from './styles'
import { TBottomSheetViewRef, TBottomSheetViewProps } from './types'

const renderBackdrop = (props: BottomSheetBackdropProps) => (
  <BottomSheetBackdrop
    {...props}
    disappearsOnIndex={-1}
    appearsOnIndex={0}
    pressBehavior={'close'}
  />
)

export const View = forwardRef<TBottomSheetViewRef, TBottomSheetViewProps>(
  (
    {
      children,
      withScroll,
      isList,
      keyboardShouldPersistTaps = 'handled',
      snapPoints = ['50%', '85%'],
      initialIndex = -1,
      onClose,
      dynamicSizing = false,
      scrollEnabled = true,
      ...props
    },
    ref,
  ) => {
    const bottomSheetRef = useRef<BottomSheetView>(null)

    const currentPosition = useSharedValue(-1000)

    const _onClose = () => {
      if (onClose) {
        onClose()
        return
      }

      bottomSheetRef.current?.forceClose()
    }

    useImperativeHandle(ref, () => ({
      open: () => {
        bottomSheetRef.current?.expand()
      },
      close: () => {
        bottomSheetRef.current?.forceClose()
      },
    }))

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
        return -1
      } else if (_.isNumber(initialIndex)) {
        return initialIndex
      } else {
        return -1
      }
    }, [dynamicSizing, initialIndex, snapPoints.length])

    return (
      <BottomSheetView
        ref={bottomSheetRef}
        snapPoints={dynamicSizing ? [] : snapPoints}
        enableDynamicSizing={dynamicSizing}
        index={index}
        onDismiss={() => _onClose()}
        backdropComponent={renderBackdrop}
        backgroundStyle={S.styles.background}
        handleIndicatorStyle={S.styles.indicator}
        android_keyboardInputMode={'adjustResize'}
        keyboardBehavior={Platform.OS === 'ios' ? 'extend' : 'interactive'}
        keyboardBlurBehavior={Platform.OS === 'ios' ? 'none' : 'restore'}
        enableDismissOnClose
        enableContentPanningGesture
        enablePanDownToClose
        animatedPosition={currentPosition}
        {...props}>
        {renderContent()}
      </BottomSheetView>
    )
  },
)
