import { TVendorsStackResultParams } from '@/screens/Vendors/Result'
import { TVendorsStackVendorProfileParams } from '@/screens/Vendors/VendorProfile'

import { EScreens } from '../../screens'

export type TFavoritesStack = {
  [EScreens.FavoritesMain]: undefined
  [EScreens.VendorsResult]: TVendorsStackResultParams
  [EScreens.VendorsVendorProfile]: TVendorsStackVendorProfileParams
}
