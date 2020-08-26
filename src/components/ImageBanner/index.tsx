import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Content } from "./styles"

const ImageBanner = () => {
  //nomear o arquivo na query para desestruturar nesse hook
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "teste.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return <Content fluid={avatarImage.childImageSharp.fluid} />
}

export default ImageBanner
