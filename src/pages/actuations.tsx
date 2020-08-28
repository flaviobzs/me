import React from "react"

import Template from "./../templates/Default"
import Timeline from "./../components/Timeline"
import SEO from "./../components/SEO"

const Actuations: React.FC = () => {
  return (
    <Template>
      <SEO title={"Timeline"} />
      <Timeline />
    </Template>
  )
}

export default Actuations
