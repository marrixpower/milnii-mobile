import React from 'react'

import { Header } from '@/widgets/header'

import { UserWidget } from '@/widgets/user'

import { useBudgetTotalCounts } from '@/features/budget/hooks'

import { useGuestTotalCounts } from '@/features/guests/hooks'

import { Background } from '@/shared/ui/background'

import { Divider } from '@/shared/ui/styled/Styled'

import { PaddingContainer, styles } from './styles'

import * as UI from './ui'

export const Main = () => {
  const {
    totalCount: guestCount,
    done: guestDone,
    getTotalCount: getGuestTC,
  } = useGuestTotalCounts()
  const {
    totalCount: budgetCount,
    done: budgetDone,
    getTotalCount: getBudgetTC,
  } = useBudgetTotalCounts()
  return (
    <>
      <Header.Main />

      <Background.Scroll style={styles.container}>
        <PaddingContainer>
          <UserWidget.Counter />
        </PaddingContainer>
        <PaddingContainer>
          <UserWidget.Links
            {...{ guestCount, guestDone, budgetCount, budgetDone }}
          />
        </PaddingContainer>
        <Divider mTop="32px" />
        <PaddingContainer>
          <UserWidget.Tasks />
        </PaddingContainer>
        <Divider mTop="32px" />

        <PaddingContainer>
          <UI.Budget getTC={getBudgetTC} />
        </PaddingContainer>
        <Divider mTop="32px" />
        <PaddingContainer>
          <UI.Guests getTC={getGuestTC} />
        </PaddingContainer>
        <Divider mTop="32px" />
        <UserWidget.Favorites />
      </Background.Scroll>
    </>
  )
}
