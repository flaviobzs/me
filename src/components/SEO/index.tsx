// import React from 'react';
// // import Helmet from "react-helmet"
// import { useStaticQuery, graphql } from "gatsby"

// // SEO.defaultProps = {
// //   lang: `en`,
// //   meta: [],
// //   description: ``,
// // }

// interface SEOProps {
//   description?: string
//   lang?: string
//   meta?: MetaWithProperty[] | MetaWithName[]
//   title: string
// }

// interface MetaWithProperty {
//   property: string
//   content: string
// }

// interface MetaWithName {
//   name: string
//   content: string
// }

// const SEO: React.FC<SEOProps> = (props: SEOProps) => {
//   const { site } = useStaticQuery(
//     graphql`
//       query {
//         site {
//           siteMetadata {
//             title
//             description
//             author
//           }
//         }
//       }
//     `
//   )

//   // const metaDescription = props.description || site.siteMetadata.description

//   return (
//     // <Helmet
//     //   title={props.title}
//     //   titleTemplate={`%s | ${site.siteMetadata.title}`}
//     //   meta={[
//     //     {
//     //       name: `description`,
//     //       content: metaDescription,
//     //     },
//     //     {
//     //       property: `og:title`,
//     //       content: props.title,
//     //     },
//     //     {
//     //       property: `og:description`,
//     //       content: metaDescription,
//     //     },
//     //     {
//     //       property: `og:type`,
//     //       content: `website`,
//     //     },
//     //     {
//     //       name: `twitter:card`,
//     //       content: `summary`,
//     //     },
//     //     {
//     //       name: `twitter:creator`,
//     //       content: site.siteMetadata.author,
//     //     },
//     //     {
//     //       name: `twitter:title`,
//     //       content: props.title,
//     //     },
//     //     {
//     //       name: `twitter:description`,
//     //       content: metaDescription,
//     //     },
//     //   ].concat(props.meta)}
//     // >
//     //   <html lang={props.lang} />
//     // </Helmet>
//   )
// }

// export default SEO;
