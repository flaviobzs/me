import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

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
  const { site, file } = useStaticQuery(
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
        file(relativePath: { eq: "logo.png" }) {
          publicURL
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              srcWebp
              srcSetWebp
              originalImg
              originalName
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const logo = file.childImageSharp.fluid.originalImg

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
          name: "og:site_name",
          content: "flaviobs.com.br",
        },
        {
          name: "og:image",
          content: `${site.siteMetadata.siteUrl}${logo}`,
        },
        {
          name: "twitter:image:src",
          content: `${site.siteMetadata.siteUrl}${logo}`,
        },
      ].concat(meta)}
    >
      <html lang={lang} />
    </Helmet>
  )
}

export default SEO
