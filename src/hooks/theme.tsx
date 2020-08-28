import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react"
import { ThemeProvider } from "styled-components"

const ThemeContext = createContext()

import { lightTheme, darkTheme } from "../styles/themes"

export const ThemeContextProvider: React.FC = ({ children }) => {
  const [themeString, setThemeString] = useState("dark")

  const themeObject = themeString === "dark" ? darkTheme : lightTheme

  return (
    <ThemeContext.Provider value={{ themeString, setThemeString }}>
      <ThemeProvider theme={themeObject}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)

  if (!context) throw new Error("useTheme must be used within a ThemeProvider")

  const { themeString, setThemeString } = context

  const toggleTheme = useCallback(() => {
    themeString === "light" ? setThemeString("dark") : setThemeString("light")
  }, [themeString])

  return {
    theme: themeString,
    toggleTheme,
  }
}
