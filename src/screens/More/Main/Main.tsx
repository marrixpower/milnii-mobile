import React from 'react'
import { FlatList } from 'react-native'

import { useTranslation } from 'react-i18next'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { UserWidget } from '@/widgets/user'

import { Background } from '@/shared/ui/background'

import { Option } from '@/shared/ui/Option'
import { BodyM1B } from '@/shared/ui/styled/Text'

import { CounterWrapper, styles } from './styles'
import { useMoreLinks } from './useMoreLinks'

export const Main = () => {
  const { top } = useSafeAreaInsets()
  const { t } = useTranslation()
  const { appLinks, infoLinks } = useMoreLinks()
  return (
    <>
      <Background.Scroll style={{ marginTop: top + 20 }}>
        <CounterWrapper>
          <UserWidget.Counter profile />
        </CounterWrapper>
        <FlatList
          style={styles.flatList}
          data={appLinks}
          renderItem={({ item, index }) => <Option index={index} item={item} />}
        />
        <BodyM1B mLeft="44px" mTop="48px">
          {t('more.app_info').toUpperCase()}
        </BodyM1B>
        <FlatList
          style={styles.infoList}
          data={infoLinks}
          renderItem={({ item, index }) => <Option index={index} item={item} />}
        />
      </Background.Scroll>
    </>
  )
}
