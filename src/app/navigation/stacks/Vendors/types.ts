import { TVendorStackMainParams } from '@/screens/Vendors/Main'

import { TVendorsStackResultParams } from '@/screens/Vendors/Result'
import { TVendorsStackVendorProfileParams } from '@/screens/Vendors/VendorProfile'

import { EScreens } from '../../screens'

export type TVendorStack = {
  [EScreens.VendorsMain]: TVendorStackMainParams
  [EScreens.VendorsResult]: TVendorsStackResultParams
  [EScreens.VendorsVendorProfile]: TVendorsStackVendorProfileParams
}
