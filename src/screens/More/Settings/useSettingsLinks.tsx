import { useTranslation } from 'react-i18next'

import { EScreens } from '@/app/navigation'

import { useNavigation } from '@/shared/hooks'

export const useSettingsLinks = () => {
  const { t } = useTranslation()
  const { navigate } = useNavigation()

  const settingsLinks = [
    {
      title: t('more.edit_profile'),
      onPress: () => navigate(EScreens.MoreEditProfile),
    },
    {
      title: t('more.change_password'),
      onPress: () => navigate(EScreens.MoreChangePassword),
    },
    {
      title: t('more.notifications'),
      onPress: () => {},
    },
    {
      title: t('more.delete_account'),
      onPress: () => {},
      isDelete: true,
    },
  ]
  return { settingsLinks }
}
