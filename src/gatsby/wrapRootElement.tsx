import React, { ReactNode } from "react"
import { ThemeProvider } from "styled-components"

// import light from "../src/styles/themes/light"
// import { Container } from './styles';

interface ITheme {
  children?: ReactNode
}

const wrapRootElements: React.FC = ({ children }: ITheme) => {
  // return <ThemeProvider theme={light}>{children}</ThemeProvider>
  return <ThemeProvider>{children}</ThemeProvider>
}

export default wrapRootElements
