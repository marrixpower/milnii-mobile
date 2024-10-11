import React from 'react'

import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'

import { Tab as TabComponent } from '@/widgets/tab'

import { EStacks, FavoritesStack, HomeStack } from '../../stacks'
import { MoreStack } from '../../stacks/More'
import { TasksStack } from '../../stacks/Tasks'
import { VendorsStack } from '../../stacks/Vendors'
import { ScreenTabOptions } from '../options'

import { TMainTab } from './types'

const Tab = createBottomTabNavigator<TMainTab>()

const tabBar = (props: BottomTabBarProps) => {
  return <TabComponent.Standart {...props} />
}

export const MainTab = () => {
  return (
    <Tab.Navigator
      initialRouteName={EStacks.Home}
      screenOptions={ScreenTabOptions}
      tabBar={tabBar}>
      <Tab.Screen component={HomeStack} name={EStacks.Home} />
      <Tab.Screen component={VendorsStack} name={EStacks.Vendors} />
      <Tab.Screen component={TasksStack} name={EStacks.Tasks} />
      <Tab.Screen component={FavoritesStack} name={EStacks.Budget} />
      <Tab.Screen component={MoreStack} name={EStacks.More} />
    </Tab.Navigator>
  )
}
