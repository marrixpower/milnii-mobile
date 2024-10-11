import { Background } from '@/shared/ui/background'
import { EColors } from '@/shared/ui/styled'

import { BodyM2B, BodyM3R, BodyM3SB } from '@/shared/ui/styled/Text'
import { Header } from '@/widgets/header'
import React from 'react'
import { useTranslation } from 'react-i18next'

export const Terms = () => {
  const { t } = useTranslation()
  return (
    <>
      <Header.Nested title={t('more.terms')} />
      <Background.Scroll style={{ marginTop: 32, paddingHorizontal: 44 }}>
        <BodyM2B>This is a section title</BodyM2B>
        <BodyM3R mTop="20px">
          This is body copy. This section will be very long, and will include
          external links which will be displayed like{' '}
          <BodyM3SB color={EColors.primary} onPress={() => console.log(1)}>
            this
          </BodyM3SB>
          .
        </BodyM3R>
      </Background.Scroll>
    </>
  )
}
