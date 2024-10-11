import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { FavoritesScreens } from '@/screens/Favorites'
import { VendorsScreens } from '@/screens/Vendors'

import { EColors } from '@/shared/ui/styled'

import { EScreens } from '../../screens'
import { ScreenNavigationOptions } from '../options'

import { TFavoritesStack } from './types'

const Stack = createStackNavigator<TFavoritesStack>()

export const FavoritesStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={EScreens.FavoritesMain}
      screenOptions={{
        ...ScreenNavigationOptions,
        cardStyle: {
          backgroundColor: EColors.white,
        },
      }}>
      <Stack.Screen
        component={FavoritesScreens.Main}
        name={EScreens.FavoritesMain}
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
