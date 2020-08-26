import React from "react"
import { Link } from "gatsby"

import { Container, LeftArrowIcon, RightArrowIcon, WithoutIcon } from "./styles"

interface PaginationProps {
  isFirst: boolean
  isLast: boolean
  currentPage: number
  numPages: number
  prevPage?: String
  nextPage?: String
}

const Pagination: React.FC<PaginationProps> = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => {
  return (
    <Container>
      {!isFirst && (
        <Link to={prevPage}>
          <LeftArrowIcon />
        </Link>
      )}
      {isFirst ? <WithoutIcon /> : ""}
      <span>
        {currentPage} / {numPages}
      </span>
      {!isLast && (
        <Link to={nextPage}>
          <RightArrowIcon />
        </Link>
      )}
      {isLast ? <WithoutIcon /> : ""}
    </Container>
  )
}

export default Pagination
