import React from "react"

import Template from "../../templates/Default"
import Carrousel from "../../components/Carrousel"
import Description from "../../components/Description"
import SEO from "../../components/SEO"

// import { Container } from "./styles"

const About: React.FC = () => {
  return (
    <Template>
      <SEO title={"About"} />
      <Carrousel />
      <Description />
    </Template>
  )
}

export default About
