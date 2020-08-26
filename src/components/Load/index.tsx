import React from "react"

import { Container } from "./styles"
import Global from "../../styles/global"

const Load: React.FC = () => {
  return (
    <Container>
      <Global />
      <div className="box">
        <div className="title">
          <span className="block"></span>
          <h1>
            Flávio B Santos
            {/* <span></span> */}
          </h1>
        </div>

        <div className="role">
          <div className="block"></div>
          <p>Engenheiro Civil/Software</p>
        </div>
      </div>
    </Container>
  )
}

export default Load
