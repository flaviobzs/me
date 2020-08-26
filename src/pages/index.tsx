import React, { useState } from "react"

import Template from "./../templates/Default"

import Presentation from "./../components/Presentation"
import Load from "./../components/Load"

const IndexPage: React.FC = () => {
  const [time, setTime] = useState(false)

  setTimeout(() => {
    setTime(true)
  }, 2200)

  return (
    <>
      {time ? (
        <Template>
          <Presentation />
        </Template>
      ) : (
        <Load />
      )}
    </>
  )
}

export default IndexPage
