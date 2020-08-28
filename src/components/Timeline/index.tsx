import React from "react"
import { useLanguege } from "../../hooks/languege"

import { Container, Line, LineElement, EducationIcon, WorkIcon } from "./styles"

const Timeline: React.FC = () => {
  const { t } = useLanguege()
  const datas = t("timeline")

  return (
    <Container>
      <Line>
        {datas.map(data => {
          return (
            <LineElement
              date={data.date}
              icon={data.type === "work" ? <WorkIcon /> : <EducationIcon />}
              coloritens={data.type}
            >
              <h4>{data.title}</h4>
              <p>{data.description}</p>
            </LineElement>
          )
        })}
      </Line>
    </Container>
  )
}

export default Timeline
