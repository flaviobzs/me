import React from "react"
import GlobalStyles from "../../styles/global"
import { Container } from "./styles"

const notfound: React.FC = () => {
  return (
    <Container>
      <GlobalStyles />
      <div title="404">404</div>
    </Container>
  )
}

export default notfound
