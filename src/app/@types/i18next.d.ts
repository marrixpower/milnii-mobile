import { en } from '@/app/i18n'
import { defaultNS } from '@/app/i18n/i18n'

//add your languages for typing
const resources = {
  en,
} as const

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS
    resources: typeof resources
  }
}
