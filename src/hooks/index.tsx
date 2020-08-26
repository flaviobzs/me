import React from "react"

import { ThemeContextProvider } from "./theme"
import { LanguegeProvider } from "./languege"

const AppProvider: React.FC = ({ children }) => (
  <ThemeContextProvider>
    <LanguegeProvider>{children} </LanguegeProvider>
  </ThemeContextProvider>
)

export default AppProvider
