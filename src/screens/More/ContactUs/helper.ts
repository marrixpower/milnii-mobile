import { Platform } from 'react-native'

import { PERMISSIONS, checkMultiple } from 'react-native-permissions'

export const checkPermission = async () => {
  let permission: string[] = []

  const isIOS = Platform.OS === 'ios'

  if (isIOS) {
    const allIosPermission = await checkMultiple([
      PERMISSIONS.IOS.CAMERA,
      PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
      PERMISSIONS.IOS.LOCATION_ALWAYS,
      PERMISSIONS.IOS.PHOTO_LIBRARY,
      PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY,
    ])
    permission = Object.entries(allIosPermission)
      .filter(([_, value]) => value === 'granted')
      .map(([key, _]) => key)
  }

  if (!isIOS) {
    const allIosPermission = await checkMultiple([
      PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
      PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
      PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
      PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY,
      PERMISSIONS.ANDROID.CAMERA,
    ])
    permission = Object.entries(allIosPermission)
      .filter(([_, value]) => value === 'granted')
      .map(([key, _]) => key)
  }

  return permission
}
