import { Button } from '@/shared/ui/button'
import { BodyM3R } from '@/shared/ui/styled/Text'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { styles } from './styles'

export const SocialAuth = () => {
  const { t } = useTranslation()
  return (
    <>
      <Button.Standard style={styles.button}>
        <BodyM3R>{t('auth.social.facebook')}</BodyM3R>
      </Button.Standard>
      <Button.Standard mTop="15px" style={styles.button}>
        <BodyM3R>{t('auth.social.google')}</BodyM3R>
      </Button.Standard>
      <Button.Standard mTop="15px" style={styles.button}>
        <BodyM3R>{t('auth.social.apple')}</BodyM3R>
      </Button.Standard>
    </>
  )
}
