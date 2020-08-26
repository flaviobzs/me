import React from "react"
import { useLanguege } from "../../hooks/languege"

import { Container, Description, Avatar } from "./styles"

let url =
  "https://rockcontent.com/wp-content/uploads/2020/02/teste-de-lideran%C3%A7a.png"

const Presentation: React.FC = () => {
  const { t } = useLanguege()

  return (
    <Container>
      <Description>
        <h1>Hey!</h1>
        <h3>{t("presentation")}</h3>
        <p>{t("civilpresentation")}</p>
        <p>{t("softwarepresentation")}</p>
        {/* assinatura!!! */}
      </Description>
      <Avatar>
        <img src={url}></img>
        <h1>Flávio B Santos</h1>
      </Avatar>
    </Container>
  )
}

export default Presentation
