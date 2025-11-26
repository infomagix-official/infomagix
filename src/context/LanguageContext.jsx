import { createContext, useContext, useMemo, useState } from 'react'

const LanguageContext = createContext({
  language: 'en',
  toggleLanguage: () => {},
})

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en')

  const value = useMemo(
    () => ({
      language,
      toggleLanguage: () => {
        setLanguage((prev) => (prev === 'en' ? 'ko' : 'en'));
        // console.log(language);
      },
    }),
    [language],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  return useContext(LanguageContext)
}
