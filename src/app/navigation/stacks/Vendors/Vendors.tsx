import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { VendorsScreens } from '@/screens/Vendors'

import { EColors } from '@/shared/ui/styled'

import { EScreens } from '../../screens'
import { ScreenNavigationOptions } from '../options'

import { TVendorStack } from './types'

const Stack = createStackNavigator<TVendorStack>()

export const VendorsStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={EScreens.VendorsMain}
      screenOptions={{
        ...ScreenNavigationOptions,
        cardStyle: {
          backgroundColor: EColors.white,
        },
      }}>
      <Stack.Screen
        component={VendorsScreens.Main}
        name={EScreens.VendorsMain}
      />
      <Stack.Screen
        component={VendorsScreens.Result}
        name={EScreens.VendorsResult}
      />
      <Stack.Screen
        component={VendorsScreens.VendorProfile}
        name={EScreens.VendorsVendorProfile}
      />
    </Stack.Navigator>
  )
}
