import React, { ReactNode } from "react"

import AppProvider from "../../hooks"

import Footer from "../../components/Footer"
import Navigation from "../../components/Navigation"
import Snow from "../../components/Snow"
import Selector from "../../components/Selector"

import GlobalStyles from "../../styles/global"

import { Container, Content } from "./styles"

interface TemplateProps {
  children?: ReactNode
}

const Template: React.FC<TemplateProps> = ({ children }) => {
  return (
    <AppProvider>
      <Container>
        <GlobalStyles />
        <Snow />
        <Navigation />
        <Selector />
        <Content>{children}</Content>

        <Footer />
      </Container>
    </AppProvider>
  )
}

export default Template
