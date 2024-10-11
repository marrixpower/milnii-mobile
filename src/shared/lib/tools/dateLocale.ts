import { Locale, enUS } from 'date-fns/locale'

import { ELanguages } from '@/app/i18n'

export const dateLocale: Record<string, Locale> = {
  [ELanguages.en]: {
    ...enUS,
  },
}
