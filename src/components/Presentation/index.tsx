import React, { useState } from "react"
import { useLanguege } from "../../hooks/languege"
import img from "../../images/imgfbs.jpg"

import curriculo from "../../intl/curriculo.pdf"
import resume from "../../intl/resume.pdf"

import { Container, Description, Avatar } from "./styles"

const Presentation: React.FC = () => {
  const { t, locale } = useLanguege()
  const [onImage, setOnImage] = useState(false)

  return (
    <Container>
      <Description>
        <h1>Hey!</h1>
        <h3>{t("presentation")}</h3>
        <p>{t("softwarepresentation")}</p>
        <p>{t("civilpresentation")}</p>
        {/* assinatura!!! */}
        <a href={locale === "en" ? resume : curriculo} target="_blank">
          {t("resume")}
        </a>
      </Description>
      <Avatar backgroundUrl={img} imageStatus={onImage}>
        <div
          onMouseEnter={() => {
            setOnImage(true)
          }}
          onMouseLeave={() => {
            setOnImage(false)
          }}
        ></div>
        <h1>Flávio B Santos</h1>
      </Avatar>
    </Container>
  )
}

export default Presentation
