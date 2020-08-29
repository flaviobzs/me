import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import logo from "../../images/logoblack.png"

interface SEOProps {
  description?: string
  lang?: string
  meta?: MetaWithProperty[] | MetaWithName[]
  title: string
}

interface MetaWithProperty {
  property: string
  content: string
}

interface MetaWithName {
  name: string
  content: string
}

const SEO: React.FC<SEOProps> = ({ description, lang, meta = [], title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            logo
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      title={title}
      titleTemplate={`${site.siteMetadata.title} | %s`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: "keywords",
          content: "Flávio",
        },
        {
          name: "viewport",
          content: "width=device-width,initial-scale=1",
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:site",
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: "og:url",
          content: site.siteMetadata.siteUrl,
        },
        {
          name: "og:image",
          content:
            "https://loving-einstein-604538.netlify.app/static/logowhite-2ac75ec8b9f347c856383ca2e16a0ac9.png",
        },
        {
          name: "og:site_name",
          content: "flaviobs.com.br",
        },
      ].concat(meta)}
    >
      <html lang={lang} />
    </Helmet>
  )
}

export default SEO
