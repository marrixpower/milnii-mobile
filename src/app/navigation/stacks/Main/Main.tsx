import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { useTypedSelector } from '@/app/store'

import { getUserSelector } from '@/entities/user/store'

import { EColors } from '@/shared/ui/styled'

import { ETab, MainTab } from '../../tabs'
import { AuthStack } from '../Auth/Auth'
import { ScreenNavigationOptions } from '../options'

import { EStacks } from '../stacks'

import { TMainStack } from './types'

const Stack = createStackNavigator<TMainStack>()

export const MainStack = () => {
  const { user } = useTypedSelector(getUserSelector)
  return (
    <Stack.Navigator
      initialRouteName={!!user ? ETab.Main : EStacks.Auth}
      // initialRouteName={EStacks.Auth}
      screenOptions={{
        ...ScreenNavigationOptions,
        cardStyle: {
          backgroundColor: EColors.white,
        },
      }}>
      {!!user && <Stack.Screen component={MainTab} name={ETab.Main} />}

      {!user && <Stack.Screen component={AuthStack} name={EStacks.Auth} />}
    </Stack.Navigator>
  )
}
