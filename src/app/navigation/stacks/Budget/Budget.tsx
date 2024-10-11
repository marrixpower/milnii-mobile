import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { BudgetScreens } from '@/screens/Budget'

import { EColors } from '@/shared/ui/styled'

import { EScreens } from '../../screens'
import { ScreenNavigationOptions } from '../options'

import { TBudgetStack } from './types'

const Stack = createStackNavigator<TBudgetStack>()

export const BudgetStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={EScreens.BudgetMain}
      screenOptions={{
        ...ScreenNavigationOptions,
        cardStyle: {
          backgroundColor: EColors.white,
        },
      }}>
      <Stack.Screen component={BudgetScreens.Main} name={EScreens.BudgetMain} />
      <Stack.Screen
        component={BudgetScreens.AddExpense}
        name={EScreens.BudgetAddExpense}
      />
    </Stack.Navigator>
  )
}
