import { THomeStackVendorsParams } from '@/screens/Home/Vendors'
import { TMoreStackChangePasswordParams } from '@/screens/More/ChangePassword'
import { TMoreStackContactUsParams } from '@/screens/More/ContactUs'
import { TMoreStackCookieParams } from '@/screens/More/Cookie'
import { TMoreStackEditProfileParams } from '@/screens/More/EditProfile'
import { TMoreStackMainParams } from '@/screens/More/Main'
import { TMoreStackNotificationsParams } from '@/screens/More/Notifications'
import { TMoreStackPrivacyParams } from '@/screens/More/Privacy'
import { TMoreStackSettingsParams } from '@/screens/More/Settings'
import { TMoreStackTermsParams } from '@/screens/More/Terms'

import { TVendorsStackVendorProfileParams } from '@/screens/Vendors/VendorProfile'

import { EScreens } from '../../screens'
import { TNavigatorScreenParams } from '../../types'
import { TBudgetStack } from '../Budget/types'
import { TFavoritesStack } from '../Favorites/types'
import { TGuestsStack } from '../Guests/types'
import { TNotesStack } from '../Notes/types'
import { EStacks } from '../stacks'

export type TMoreStack = {
  [EScreens.MoreMain]: TMoreStackMainParams
  [EScreens.MoreSettings]: TMoreStackSettingsParams
  [EScreens.MoreEditProfile]: TMoreStackEditProfileParams
  [EScreens.MoreTerms]: TMoreStackTermsParams
  [EScreens.MorePrivacy]: TMoreStackPrivacyParams
  [EScreens.MoreCookie]: TMoreStackCookieParams
  [EScreens.MoreChangePassword]: TMoreStackChangePasswordParams
  [EScreens.MoreContactUs]: TMoreStackContactUsParams
  [EScreens.MoreNotifications]: TMoreStackNotificationsParams
  [EStacks.Favorites]: TNavigatorScreenParams<TFavoritesStack>
  [EStacks.Notes]: TNavigatorScreenParams<TNotesStack>
  [EScreens.HomeVendors]: THomeStackVendorsParams
  [EScreens.VendorsVendorProfile]: TVendorsStackVendorProfileParams
  [EStacks.Budget]: TNavigatorScreenParams<TBudgetStack>
  [EStacks.Guests]: TNavigatorScreenParams<TGuestsStack>
}
