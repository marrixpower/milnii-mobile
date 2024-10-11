import React from 'react'

import { useTranslation } from 'react-i18next'

import { Header } from '@/widgets/header'

import { UserFeature } from '@/features/user'

import { Background } from '@/shared/ui/background'

import { BodyM2B, BodyM3R } from '@/shared/ui/styled/Text'

import { styles } from './styled'

export const ContactUs = () => {
  const { t } = useTranslation()

  return (
    <>
      <Header.Nested title={t('more.contact_us')} />
      <Background.Scroll style={styles.main}>
        <BodyM2B>{t('contact_us.title')}</BodyM2B>
        <BodyM3R mTop="20px">{t('contact_us.desc')}</BodyM3R>
        <UserFeature.ContactForm />
      </Background.Scroll>
    </>
  )
}
