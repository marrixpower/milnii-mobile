import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { BudgetScreens } from '@/screens/Budget'
import { GuestsScreens } from '@/screens/Guests'
import { HomeScreens } from '@/screens/Home'

import { TasksScreens } from '@/screens/Tasks'
import { VendorsScreens } from '@/screens/Vendors'

import { EColors } from '@/shared/ui/styled'

import { EScreens } from '../../screens'
import { BudgetStack } from '../Budget'
import { FavoritesStack } from '../Favorites'
import { GuestsStack } from '../Guests'
import { ScreenNavigationOptions } from '../options'

import { EStacks } from '../stacks'

import { THomeStack } from './types'

const Stack = createStackNavigator<THomeStack>()

export const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={EScreens.HomeMain}
      screenOptions={{
        ...ScreenNavigationOptions,
        cardStyle: {
          backgroundColor: EColors.white,
        },
      }}>
      <Stack.Screen component={HomeScreens.Main} name={EScreens.HomeMain} />
      <Stack.Screen
        component={HomeScreens.Vendors}
        name={EScreens.HomeVendors}
      />
      <Stack.Screen component={GuestsStack} name={EStacks.Guests} />

      <Stack.Screen component={FavoritesStack} name={EStacks.Favorites} />
      <Stack.Screen component={BudgetStack} name={EStacks.Budget} />

      <Stack.Screen
        component={VendorsScreens.VendorProfile}
        name={EScreens.VendorsVendorProfile}
      />

      <Stack.Screen component={TasksScreens.Task} name={EScreens.HomeTask} />
      <Stack.Screen
        component={BudgetScreens.AddExpense}
        name={EScreens.BudgetAddExpense}
      />

      <Stack.Screen
        component={GuestsScreens.AddGuest}
        name={EScreens.HomeGuests}
      />
    </Stack.Navigator>
  )
}
