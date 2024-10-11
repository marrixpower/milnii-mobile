import React, { useEffect, useState } from 'react'

import { BottomTabBarProps } from '@react-navigation/bottom-tabs'

import { getFocusedRouteNameFromRoute } from '@react-navigation/native'

import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { EScreens, EStacks, whiteList } from '@/app/navigation'

import { Component } from './components'
import { Container, StyledTabButton } from './styled'
import { useTabs } from './useTabs'

export const Standart = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const { tabs } = useTabs()
  const { bottom } = useSafeAreaInsets()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const currentRoute = state.routes[state.index]
    const focusedScreen = (getFocusedRouteNameFromRoute(currentRoute) ??
      currentRoute.name.replace('Stack', 'MainScreen')) as EScreens
    setVisible(whiteList.includes(focusedScreen))
  }, [state])
  return (
    <>
      {visible && (
        <Container bottom={bottom}>
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key]

            const isFocused = state.index === index
            const tab = tabs[route.name as EStacks]

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              })

              if (!isFocused && !event.defaultPrevented) {
                // The `merge: true` option makes sure that the params inside the tab screen are preserved
                navigation.navigate(route.name, {
                  name: route.name,
                  merge: true,
                })
              }
            }

            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              })
            }

            return (
              <StyledTabButton
                activeOpacity={1}
                key={route.key}
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}>
                <Component.Tab
                  // after add strings paste => t(route.name)
                  title={tab.title}
                  // if have counter in bottom tab
                  icon={tab.Icon}
                  active={isFocused}
                  activeIcon={tab.ActiveIcon}
                />
              </StyledTabButton>
            )
          })}
        </Container>
      )}
    </>
  )
}
