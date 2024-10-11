import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { AuthScreens } from '@/screens/Auth'

import { EColors } from '@/shared/ui/styled'

import { EScreens } from '../../screens'
import { useHandleDeepLink } from '../../useHandleDeepLink'
import { ScreenNavigationOptions } from '../options'

import { TAuthStack } from './types'

const Stack = createStackNavigator<TAuthStack>()

export const AuthStack = () => {
  const {} = useHandleDeepLink()
  return (
    <Stack.Navigator
      initialRouteName={EScreens.AuthFirst}
      screenOptions={{
        ...ScreenNavigationOptions,
        cardStyle: {
          backgroundColor: EColors.white,
        },
      }}>
      <Stack.Screen component={AuthScreens.First} name={EScreens.AuthFirst} />
      <Stack.Screen component={AuthScreens.Login} name={EScreens.AuthLogin} />
      <Stack.Screen
        component={AuthScreens.CreateAccount}
        name={EScreens.AuthCreateAccount}
      />
      <Stack.Screen
        component={AuthScreens.ForgotPassword}
        name={EScreens.AuthForgotPassword}
      />
    </Stack.Navigator>
  )
}
