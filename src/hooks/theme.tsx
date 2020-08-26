import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react"
import { ThemeProvider } from "styled-components"

const ThemeContext = createContext()

import dark from "../styles/themes/dark"
import light from "../styles/themes/light"

export const ThemeContextProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const storageValue = localStorage.getItem("theme")

    if (storageValue) {
      return JSON.parse(storageValue)
    } else {
      return dark
    }
  })

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme))
  }, [theme])

  const changeTheme = useCallback(() => {
    let storageValue = JSON.parse(localStorage.getItem("theme"))

    storageValue.title === "dark" ? setTheme(light) : setTheme(dark)
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }

  return context
}
