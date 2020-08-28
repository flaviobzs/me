import React, { useState } from "react"

import Template from "./../templates/Default"

import Presentation from "./../components/Presentation"
import Load from "./../components/Load"
import SEO from "./../components/SEO"

const IndexPage: React.FC = () => {
  const [time, setTime] = useState(false)

  setTimeout(() => {
    setTime(true)
  }, 2100)

  return (
    <>
      {time ? (
        <Template>
          <SEO title={"Home"} />
          <Presentation />
        </Template>
      ) : (
        <Load />
      )}
    </>
  )
}

export default IndexPage
