import React, { ReactNode } from 'react'

import { StyleSheet } from 'react-native'

import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { Provider } from 'react-redux'

import { PersistGate } from 'redux-persist/integration/react'

import { persistor, store } from '../store'

import { LanguageProvider } from './Language'
import { SafeAreaWrapper } from './SafeArea'
import { ThemeWrapper } from './Theme'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { LoaderProvider } from './Loader'
import { ToastProvider } from './Toast'

type TContext = {
  children: ReactNode
}

export const Contexts = ({ children }: TContext) => {
  return (
    <>
      {/*  Redux */}
      <Provider store={store}>
        {/* Persist store */}
        <PersistGate loading={null} persistor={persistor}>
          {/*  SaveAreaView */}
          <SafeAreaWrapper>
            {/* GestureHandler */}
            <GestureHandlerRootView style={styles.gestureHandlerContainer}>
              <BottomSheetModalProvider>
                <ThemeWrapper>
                  {/* Loader */}
                  <ToastProvider>
                    <LoaderProvider>
                      {/* <LoaderProvider> */}
                      {/* Language */}
                      <LanguageProvider>{children}</LanguageProvider>
                    </LoaderProvider>
                  </ToastProvider>
                  {/* </LoaderProvider> */}
                </ThemeWrapper>
              </BottomSheetModalProvider>
            </GestureHandlerRootView>
          </SafeAreaWrapper>
        </PersistGate>
      </Provider>
    </>
  )
}

const styles = StyleSheet.create({
  gestureHandlerContainer: {
    flex: 1,
  },
})
