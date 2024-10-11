import { useEffect } from 'react'
import { Linking } from 'react-native'

import { useNavigation } from '@/shared/hooks'

import { EScreens } from './screens'

export const useHandleDeepLink = () => {
  const { navigate } = useNavigation()
  const handleDeepLink = async (event: { url: string }) => {
    const url = event.url
    const customToken = url.split('code=')[1]

    console.log('customToken =>', customToken)

    if (customToken) {
      navigate(EScreens.AuthForgotPassword, { customToken })
    }
  }

  useEffect(() => {
    Linking.addEventListener('url', handleDeepLink)

    Linking.getInitialURL().then(url => {
      if (url) handleDeepLink({ url })
    })

    return () => {
      Linking.removeAllListeners('url')
    }
  }, [])
  return {}
}
