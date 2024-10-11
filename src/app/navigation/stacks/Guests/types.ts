import { TGuestsStackAddGuestParams } from '@/screens/Guests/AddGuest/types'
import { TGuestsStackMainParams } from '@/screens/Guests/Main'

import { EScreens } from '../../screens'

export type TGuestsStack = {
  [EScreens.GuestsMain]: TGuestsStackMainParams
  [EScreens.GuestsAddGuest]: TGuestsStackAddGuestParams
}
