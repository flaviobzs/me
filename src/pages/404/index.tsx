import React from "react"
import GlobalStyles from "../../styles/global"
import SEO from "../../components/SEO"

import { Container } from "./styles"

const Notfound: React.FC = () => {
  return (
    <Container>
      <SEO title={"404"} />
      <GlobalStyles />
      <div title="404">404</div>
    </Container>
  )
}

export default Notfound
