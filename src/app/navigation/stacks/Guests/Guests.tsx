import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { EColors } from '@/shared/ui/styled'

import { EScreens } from '../../screens'
import { ScreenNavigationOptions } from '../options'

import { TGuestsStack } from './types'
import { GuestsScreens } from '@/screens/Guests'

const Stack = createStackNavigator<TGuestsStack>()

export const GuestsStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={EScreens.GuestsMain}
      screenOptions={{
        ...ScreenNavigationOptions,
        cardStyle: {
          backgroundColor: EColors.white,
        },
      }}>
      <Stack.Screen component={GuestsScreens.Main} name={EScreens.GuestsMain} />
      <Stack.Screen
        component={GuestsScreens.AddGuest}
        name={EScreens.GuestsAddGuest}
      />
    </Stack.Navigator>
  )
}
