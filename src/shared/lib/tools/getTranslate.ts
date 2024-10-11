import { i18n } from '@/app/i18n'

import { TTranslateText } from '@/entities/vendor/models/common'

export const getTranslate = (value: TTranslateText[]): string => {
  return value?.find(item => item.lang === i18n.language)?.value || ';'
}
