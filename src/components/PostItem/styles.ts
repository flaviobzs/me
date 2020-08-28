import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.text};
  min-width: 100%;
  color: ${props => props.theme.background};
  border-radius: 10px;
  padding: 10px;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`

export const PostImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 20%;
  margin: 0 20px;
`

export const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const PostDate = styled.p`
  font-size: 12px;
  letter-spacing: 4.5px;
  padding-bottom: 6px;
  margin: 0;

  @media (max-width: 800px) {
    padding: 0;
    font-size: 10px;
  }
`

export const PostTitle = styled.div`
  font-size: 1.6rem;
  letter-spacing: 2px;
  line-height: 33px;
  text-overflow: ellipsis;

  img {
    width: 25px;
    height: 20px;
    margin: 0;
  }

  @media (max-width: 800px) {
    padding-top: 12px;
    font-size: 1.3rem;
    line-height: 25px;

    img {
      width: 20px;
      height: 15px;
    }
  }
`

export const PostDescription = styled.div`
  font-size: 14px;
  letter-spacing: 2px;
  line-height: 20px;
  padding-top: 10px;
  text-overflow: ellipsis;

  @media (max-width: 800px) {
    padding-top: 10px;
    line-height: 15px;
    font-size: 11px;
  }
`
