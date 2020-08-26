import React from "react"

import { Container, FireIcon } from "./styles"

interface ICarrouselPros {
  title: String
  url?: String
  isActive?: boolean
  handleStatus: Function
}

const CorrouselItem: React.FC<ICarrouselPros> = ({
  title,
  url,
  handleStatus,
  isActive,
}: ICarrouselPros) => {
  return (
    <Container isActive={isActive} onClick={handleStatus} url={url}>
      <div className="label">
        <div className="icon">
          <FireIcon />
        </div>
        <div className="info">
          <div className="main">{title}</div>
        </div>
      </div>
    </Container>
  )
}

export default CorrouselItem
