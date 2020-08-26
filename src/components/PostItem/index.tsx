import React from "react"

import brasil from "../../images/br.png"
import eua from "../../images/en.png"

import {
  Container,
  PostDate,
  PostTitle,
  PostDescription,
  PostImage,
  PostWrapper,
} from "./styles"

interface PostProps {
  date: String
  title: String
  description: String
  language: String
}

const PostItem: React.FC<PostProps> = ({
  date,
  title,
  description,
  language,
}) => {
  return (
    <Container>
      <PostImage src={language === "pt" ? brasil : eua} />
      <PostWrapper>
        <PostDate>{date}</PostDate>
        <PostTitle>{title}</PostTitle>
        <PostDescription>{description}</PostDescription>
      </PostWrapper>
    </Container>
  )
}

export default PostItem
