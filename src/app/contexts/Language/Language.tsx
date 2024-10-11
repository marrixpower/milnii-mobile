import React, { createContext, useEffect, useMemo, useState } from 'react'

import { I18nextProvider } from 'react-i18next'

import { i18n } from '@/app/i18n'

import { Language } from '@/shared/services/i18n/services'

import { TLanguageProvider, TLanguageProviderProps } from './types'

export const LanguageContext = createContext<TLanguageProvider>({
  language: Language.DEFAULT_LANGUAGE,
  setLanguage: () => {},
})

export const LanguageProvider = ({ children }: TLanguageProviderProps) => {
  const [language, setLanguage] = useState(Language.DEFAULT_LANGUAGE)

  const value = useMemo(
    () => ({ language, setLanguage }),
    [language, setLanguage],
  )

  useEffect(() => {
    ;(async () => {
      const appLanguage = await Language.getLanguage()
      if (appLanguage === language) return

      Language.setLanguage(language)
    })()
  }, [language])

  useEffect(() => {
    Language.getLanguage().then(lang => {
      lang && setLanguage(lang)
    })
  }, [])

  return (
    <>
      <I18nextProvider i18n={i18n}>
        <LanguageContext.Provider value={value}>
          {children}
        </LanguageContext.Provider>
      </I18nextProvider>
    </>
  )
}
