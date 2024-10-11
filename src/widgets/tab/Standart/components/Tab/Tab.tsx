import React from 'react'

import { TIconsKeys } from '@assets/svg'

import { Icon } from '@/shared/ui/Icon'
import { EColors, Styled, Typography } from '@/shared/ui/styled'

import { BodyL5R, BodyM5R } from '@/shared/ui/styled/Text'

import { Container, Title, CountContainer, styles } from './styled'

export type TTab = {
  active?: boolean
  title: string
  icon: TIconsKeys
  activeIcon: TIconsKeys
  count?: number
}

export const Tab = ({ title, icon, active, activeIcon, count }: TTab) => {
  const color = active ? EColors.primary : EColors.black

  const CurrentIcon = active ? activeIcon : icon

  return (
    <>
      <Container>
        <Styled.FlexWrapper
          flexDirection={'column'}
          style={styles.main}
          width={'auto'}>
          {!!count && (
            <CountContainer>
              <BodyM5R
                align={'center'}
                style={styles.text}
                color={EColors.white}>
                {count}
              </BodyM5R>
            </CountContainer>
          )}

          <Icon name={CurrentIcon} size={27} fill={color} />
        </Styled.FlexWrapper>

        {/* <Title color={color}>{title}</Title> */}
      </Container>
    </>
  )
}
