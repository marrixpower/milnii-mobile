import auth from '@react-native-firebase/auth'
import { useTranslation } from 'react-i18next'

import { useDispatch } from 'react-redux'

import { EScreens, EStacks } from '@/app/navigation'

import { favoriteActions } from '@/entities/favorite/store'
import { tasksActions } from '@/entities/tasks/store'
import { userActions } from '@/entities/user/store'

import { useNavigation } from '@/shared/hooks'

export const useMoreLinks = () => {
  const { t } = useTranslation()
  const { navigate } = useNavigation()
  const dispatch = useDispatch()
  const onLogoutPress = async () => {
    try {
      await auth().signOut()
      dispatch(userActions.clearState())
      dispatch(favoriteActions.clearState())
      dispatch(tasksActions.clearState())
      // navigate(EStacks.Auth, { screen: EScreens.AuthFirst })
    } catch (e) {
      console.log('onLogoutPress error =>', e)
    }
  }

  const appLinks = [
    {
      title: t('more.settings'),
      onPress: () => navigate(EScreens.MoreSettings),
    },
    {
      title: t('more.vendors'),
      onPress: () => {
        navigate(EScreens.HomeVendors)
      },
    },
    {
      title: t('more.budget'),
      onPress: () => {
        navigate(EStacks.Budget)
      },
    },
    {
      title: t('more.guest_list'),
      onPress: () => {
        navigate(EStacks.Guests)
      },
    },
    {
      title: t('more.notes'),
      onPress: () => navigate(EStacks.Notes),
    },
    {
      title: t('more.notifications'),
      onPress: () => navigate(EScreens.MoreNotifications),
    },
    {
      title: t('more.favorites'),
      onPress: () => {
        navigate(EStacks.Favorites)
      },
    },
    { title: t('more.share'), onPress: () => {} },
    { title: t('more.log_out'), onPress: onLogoutPress },
  ]
  const infoLinks = [
    { title: t('more.terms'), onPress: () => navigate(EScreens.MoreTerms) },
    { title: t('more.privacy'), onPress: () => navigate(EScreens.MorePrivacy) },
    { title: t('more.cookies'), onPress: () => navigate(EScreens.MoreCookie) },
    {
      title: t('more.contact_us'),
      onPress: () => navigate(EScreens.MoreContactUs),
    },
  ]
  return { appLinks, infoLinks }
}
