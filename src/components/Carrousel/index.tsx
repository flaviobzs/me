import React, { useState } from "react"

import CorrouselItem from "../CorrouselItem"

import { Container, Wrapper } from "./styles"

const images = [
  {
    url: require("../../images/one.png"),
    title: "Natal-RN",
  },
  {
    url: require("../../images/two.png"),
    title: "Pipa-RN",
  },
  {
    url: require("../../images/three.png"),
    title: "Cajueiro-AL",
  },  
  {
    url: require("../../images/seven.png"),
    title: "Home",
  },
  {
    url: require("../../images/six.png"),
    title: "Maceió-AL",
  },
]

const Carrousel: React.FC = () => {
  const [isActive, setIsActive] = useState("Atalaia-AL")

  return (
    <Container>
      <Wrapper>
        {images.map(image => {
          return (
            <CorrouselItem
              isActive={isActive == image.title ? true : false}
              title={image.title}
              handleStatus={() => setIsActive(image.title)}
              url={image.url}
            />
          )
        })}
      </Wrapper>
    </Container>
  )
}

export default Carrousel
