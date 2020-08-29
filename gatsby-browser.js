import React from "react"

import AppProvider from "./src/hooks/index"
import GlobalStyles from "./src/styles/global"

export const wrapRootElement = ({ element }) => (
  <AppProvider>
    <>
      <GlobalStyles />
      {element}
    </>
  </AppProvider>
)
