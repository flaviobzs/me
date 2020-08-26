import React from "react"

import Template from "../../templates/Default"
import Carrousel from "../../components/Carrousel"
import Description from "../../components/Description"

// import { Container } from "./styles"

const about: React.FC = () => {
  return (
    <Template>
      <Carrousel />
      <Description />
    </Template>
  )
}

export default about
