import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { EColors } from '@/shared/ui/styled'

import { EScreens } from '../../screens'
import { ScreenNavigationOptions } from '../options'

import { TNotesStack } from './types'

import { NotesScreens } from '@/screens/Notes'

const Stack = createStackNavigator<TNotesStack>()

export const NotesStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={EScreens.NotesMain}
      screenOptions={{
        ...ScreenNavigationOptions,
        cardStyle: {
          backgroundColor: EColors.white,
        },
      }}>
      <Stack.Screen component={NotesScreens.Main} name={EScreens.NotesMain} />
      <Stack.Screen component={NotesScreens.Note} name={EScreens.NotesNote} />
    </Stack.Navigator>
  )
}
