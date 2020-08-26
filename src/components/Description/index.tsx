import React from "react"
import { useLanguege } from "../../hooks/languege"

import { Container } from "./styles"

const Description: React.FC = () => {
  const { t } = useLanguege()
  return (
    <Container>
      <p>{t("description")}</p>
      <p>{t("descriptionmusic")}</p>
      <p>{t("descriptiontrip")}</p>
    </Container>
  )
}

export default Description
