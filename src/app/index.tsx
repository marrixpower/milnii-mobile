/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react'

import { SENTRY_DNS } from '@env'
import ErrorBoundary from 'react-native-error-boundary'
import SplashScreen from 'react-native-splash-screen'

import { Navigator } from '@/app/navigation'

import { Sentry } from '@/shared/lib'

Sentry.init({
  dsn: SENTRY_DNS,
  tracesSampleRate: 1.0,
})

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <ErrorBoundary>
      <Navigator />
    </ErrorBoundary>
  )
}

export default Sentry.wrap(App)
