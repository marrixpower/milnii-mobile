import { TAuthStackCreateAccountParams } from '@/screens/Auth/CreateAccount'
import { TAuthStackFirstScreenParams } from '@/screens/Auth/First'

import { TAuthStackForgotPasswordParams } from '@/screens/Auth/ForgotPassword'
import { TAuthStackLoginParams } from '@/screens/Auth/Login'

import { EScreens } from '../../screens'

export type TAuthStack = {
  [EScreens.AuthFirst]: TAuthStackFirstScreenParams
  [EScreens.AuthLogin]: TAuthStackLoginParams
  [EScreens.AuthCreateAccount]: TAuthStackCreateAccountParams
  [EScreens.AuthForgotPassword]: TAuthStackForgotPasswordParams
}
