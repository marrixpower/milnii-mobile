import React from 'react'

import { FlatList } from 'react-native'

import { Header } from '@/widgets/header'
import { Counter } from '@/widgets/user/Counter'

import { Background } from '@/shared/ui/background'
import { Option } from '@/shared/ui/Option'

import { CounterWrapper, styles } from '../Main/styles'

import { useSettingsLinks } from './useSettingsLinks'

export const Settings = () => {
  const { settingsLinks } = useSettingsLinks()
  return (
    <>
      <Header.Nested title="Settings" />
      <Background.Standard style={{ marginTop: 32 }}>
        <CounterWrapper>
          <Counter />
        </CounterWrapper>
        <FlatList
          style={styles.flatList}
          data={settingsLinks}
          renderItem={({ item, index }) => <Option item={item} index={index} />}
        />
      </Background.Standard>
    </>
  )
}
