import React, { useState } from "react"

import CorrouselItem from "../CorrouselItem"

import { Container, Wrapper } from "./styles"

const images = [
  {
    url: require("../../images/two.png"),
    title: "Pipa",
  },
  {
    url: require("../../images/three.png"),
    title: "Cajueiro",
  },
  {
    url: require("../../images/ooo1.jpeg"),
    title: "Home",
  },
  {
    url: require("../../images/oooo12.jpeg"),
    title: "California",
  },
  {
    url: require("../../images/oooo2.jpeg"),
    title: "Campina",
  },
  {
    url: require("../../images/ooo.jpeg"),
    title: "Dunas",
  },
  // {
  //   url: require("../../images/six.png"),
  //   title: "Maceió-AL",
  // },
  // {
  //   url: require("../../images/one.png"),
  //   title: "Natal-RN",
  // },
]

const Carrousel: React.FC = () => {
  const [isActive, setIsActive] = useState("Home")

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
