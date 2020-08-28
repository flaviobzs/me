import React from "react"

import Template from "../../templates/Default"
import Timeline from "../../components/Timeline"
import SEO from "../../components/SEO"

import { Container } from "./styles"

const Actuations: React.FC = () => {
  return (
    <Template>
      <Container>
        <SEO title={"Timeline"} />
        <Timeline />
      </Container>
    </Template>
  )
}

export default Actuations
