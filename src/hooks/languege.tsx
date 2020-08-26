import React, { createContext, useState, useContext } from "react"

import { textInLanguege } from "../intl/text"

const LanguegeContext = createContext()

// const locales = ["pt", "en"]

export const LanguegeProvider: React.FC = ({ children }) => {
  const [locale, setLocale] = useState("pt")

  return (
    <LanguegeContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguegeContext.Provider>
  )
}

export function useLanguege() {
  const { locale, setLocale } = useContext(LanguegeContext)

  if (!locale) {
    throw new Error("useLanguege must be used within a ThemeProvider")
  }

  function t(key: string) {
    if (!textInLanguege[locale][key]) {
      console.warn(`No string '${key}' for locale '${locale}'`)
    }

    return textInLanguege[locale][key] || textInLanguege["pt"][key] || ""
  }

  return { locale, setLocale, t }
}
