import React from "react"

import Template from "../../templates/Default"
import Assignment from "../../components/Assignment"
import Timeline from "../../components/Timeline"

import { Container } from "./styles"

const actuations: React.FC = () => {
  return (
    <Template>
      {/* <Assignment /> */}
      <Container>
        <Timeline />
      </Container>
    </Template>
  )
}

export default actuations
