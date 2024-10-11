import { UserFeature } from '@/features/user'
import { TChangePasswordForm } from '@/features/user/ui/ChangePasswordForm/types'
import { Background } from '@/shared/ui/background'

import { Header } from '@/widgets/header'
import React from 'react'
import { useTranslation } from 'react-i18next'

export const ChangePassword = () => {
  const { t } = useTranslation()
  const onSubmit = async (values: TChangePasswordForm) => {
    try {
      console.log(values)
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <>
      <Header.Nested title={t('more.change_password')} />
      <Background.Scroll style={{ marginTop: 38, paddingHorizontal: 44 }}>
        <UserFeature.ChangePasswordForm onSubmit={onSubmit} />
      </Background.Scroll>
    </>
  )
}
