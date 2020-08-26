import React, { ReactNode } from "react"

import Footer from "../Footer"
import Navigation from "../Navigation"
import Snow from "../../components/Snow"

import { Container, Content } from "./styles"

interface ITemplate {
  children?: ReactNode
}

const Template: React.FC = ({ children }: ITemplate) => {
  return (
    <Container>
      <Snow />
      <Navigation />
      <Content>{children}</Content>

      <Footer />
    </Container>
  )
}

export default Template
