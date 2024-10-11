import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { TasksScreens } from '@/screens/Tasks'

import { EColors } from '@/shared/ui/styled'

import { EScreens } from '../../screens'
import { ScreenNavigationOptions } from '../options'

import { TTasksStack } from './types'

const Stack = createStackNavigator<TTasksStack>()

export const TasksStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={EScreens.TasksMain}
      screenOptions={{
        ...ScreenNavigationOptions,
        cardStyle: {
          backgroundColor: EColors.white,
        },
      }}>
      <Stack.Screen component={TasksScreens.Main} name={EScreens.TasksMain} />
      <Stack.Screen
        component={TasksScreens.CreateTask}
        name={EScreens.TasksCreateTask}
      />
      <Stack.Screen component={TasksScreens.Task} name={EScreens.TasksTask} />
    </Stack.Navigator>
  )
}
