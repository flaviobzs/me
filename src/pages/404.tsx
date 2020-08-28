import React from "react"
import GlobalStyles from "./../styles/global"
import SEO from "./../components/SEO"
import NotFound from "./../components/NotFound"

const Notfound: React.FC = () => {
  return (
    <>
      <NotFound />
      <SEO title={"404"} />
      <GlobalStyles />
    </>
  )
}

export default Notfound
