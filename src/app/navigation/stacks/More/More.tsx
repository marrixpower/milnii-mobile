import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { HomeScreens } from '@/screens/Home'
import { MoreScreens } from '@/screens/More'

import { VendorsScreens } from '@/screens/Vendors'

import { EColors } from '@/shared/ui/styled'

import { EScreens } from '../../screens'
import { BudgetStack } from '../Budget'
import { FavoritesStack } from '../Favorites'
import { GuestsStack } from '../Guests'
import { NotesStack } from '../Notes/Notes'
import { ScreenNavigationOptions } from '../options'

import { EStacks } from '../stacks'

import { TMoreStack } from './types'

const Stack = createStackNavigator<TMoreStack>()

export const MoreStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={EScreens.MoreMain}
      screenOptions={{
        ...ScreenNavigationOptions,
        cardStyle: {
          backgroundColor: EColors.white,
        },
      }}>
      <Stack.Screen component={MoreScreens.Main} name={EScreens.MoreMain} />
      <Stack.Screen
        component={MoreScreens.Settings}
        name={EScreens.MoreSettings}
      />
      <Stack.Screen
        component={MoreScreens.EditProfile}
        name={EScreens.MoreEditProfile}
      />
      <Stack.Screen component={MoreScreens.Terms} name={EScreens.MoreTerms} />
      <Stack.Screen
        component={MoreScreens.Privacy}
        name={EScreens.MorePrivacy}
      />
      <Stack.Screen component={MoreScreens.Cookie} name={EScreens.MoreCookie} />
      <Stack.Screen
        component={MoreScreens.ChangePassword}
        name={EScreens.MoreChangePassword}
      />
      <Stack.Screen
        component={MoreScreens.ContactUs}
        name={EScreens.MoreContactUs}
      />
      <Stack.Screen
        component={MoreScreens.Notifications}
        name={EScreens.MoreNotifications}
      />
      <Stack.Screen component={FavoritesStack} name={EStacks.Favorites} />
      <Stack.Screen component={NotesStack} name={EStacks.Notes} />

      <Stack.Screen
        component={HomeScreens.Vendors}
        name={EScreens.HomeVendors}
      />

      <Stack.Screen
        component={VendorsScreens.VendorProfile}
        name={EScreens.VendorsVendorProfile}
      />

      <Stack.Screen component={BudgetStack} name={EStacks.Budget} />

      <Stack.Screen component={GuestsStack} name={EStacks.Guests} />
    </Stack.Navigator>
  )
}
