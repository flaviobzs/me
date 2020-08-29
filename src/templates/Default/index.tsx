import React, { ReactNode } from "react"

import Footer from "../../components/Footer"
import Navigation from "../../components/Navigation"
import Snow from "../../components/Snow"
import Selector from "../../components/Selector"

import { Container, Content } from "./styles"

interface TemplateProps {
  children?: ReactNode
}

const Template: React.FC<TemplateProps> = ({ children }) => {
  return (
    <Container>
      <Snow />
      <Navigation />
      <Selector />
      <Content>{children}</Content>
      <Footer />
    </Container>
  )
}

export default Template
