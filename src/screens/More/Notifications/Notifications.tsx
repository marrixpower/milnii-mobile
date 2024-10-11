import { UserFeature } from '@/features/user'
import { TNotificationForm } from '@/features/user/ui/NotificationsForm/types'
import { Background } from '@/shared/ui/background'
import { Header } from '@/widgets/header'
import React from 'react'
import { useTranslation } from 'react-i18next'

export const Notifications = () => {
  const { t } = useTranslation()
  const onSubmit = async (val: TNotificationForm) => {
    try {
      console.log(val)
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <>
      <Header.Nested title={t('more.notes')} />
      <Background.Scroll style={{ paddingTop: 40, paddingHorizontal: 44 }}>
        <UserFeature.NotificationsForm onSubmit={onSubmit} />
      </Background.Scroll>
    </>
  )
}
