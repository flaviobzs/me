import React from "react"
import { graphql, Link } from "gatsby"

import Template from "../../templates/Default"
import PostItem from "../../components/PostItem"
import Pagination from "../../components/Pagination"

import { Container } from "./styles"

const PostList: React.FC = (props: any) => {
  const postList = props.data.allMarkdownRemark.edges

  const { currentPage, numPages } = props.pageContext //values passed in api gatsby-node
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? "/posts/" : `/posts/page/${currentPage - 1}`
  const nextPage = `/posts/page/${currentPage + 1}`

  return (
    <Template>
      <Container>
        {postList.map(post => (
          <Link to={`/posts${post.node.fields.slug}`}>
            <PostItem
              date={post.node.frontmatter.date}
              title={post.node.frontmatter.title}
              description={post.node.frontmatter.description}
              language={post.node.frontmatter.language}
            />
          </Link>
        ))}
      </Container>
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Template>
  )
}

export const postsQuery = graphql`
  query PostsList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            description
            image
            language
            path
            title
            date
          }
        }
      }
    }
  }
`

export default PostList
