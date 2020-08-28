import React from "react"
import { graphql } from "gatsby"
import Template from "../../templates/Default"

import { WrapperPost, Post, Parallax, Avatar } from "./styles"

import text from "../../images/gatsby-astronaut.png"

interface PropsPost {
  data: any
}

const Posts: React.FC<PropsPost> = ({ data }: PropsPost) => {
  const post = data.markdownRemark

  return (
    // <Template>
    //   <Parallax url={post.frontmatter.title}>
    //     <Avatar url={text} />
    //   </Parallax>
    //   <WrapperPost>
    <>
      <h2>{post.frontmatter.date}</h2>
      <h1>{post.frontmatter.title}</h1>

      <Post dangerouslySetInnerHTML={{ __html: post.html }} />
    </>
    //   </WrapperPost>
    // </Template>
  )
}

export const postQuery = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        language
        date(formatString: "DD MMMM YYYY")
        path
        image
      }
      html
    }
  }
`

export default Posts
