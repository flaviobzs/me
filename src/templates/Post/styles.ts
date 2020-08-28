import styled from "styled-components"

export const WrapperPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.text};

  max-width: 1000px;
  padding: 90px 30px 40px 30px;

  h1 {
    /* font-family: "Playfair Display", serif; */
    font-weight: 700;
    font-size: 36px;
    letter-spacing: 2px;
    line-height: 41px;
  }

  h2 {
    /* font-family: "Playfair Display", serif; */
    font-size: 10px;
    letter-spacing: 5px;
  }
`

export const Parallax = styled.div`
  height: 500px;
  width: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${props => `url(${props.url})`};
  position: relative;
  border-bottom: ${props => props.theme.colors.detail} 6px solid;
`

export const Avatar = styled.div`
  border-radius: 40px;
  border: ${props => props.theme.colors.detail} 6px solid;
  height: 150px;
  width: 150px;
  position: absolute;
  bottom: -60px;
  left: calc(50% - 75px);
  background-image: ${props => `url(${props.url})`};
`

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  p {
    /* font-family: 'Playfair Display', serif; */
    font-size: 20px;
    line-height: 34px;
    letter-spacing: 0.26px;
    text-align: justify;
    /* a {
      color: ${props => props.theme.colors.detail};
    } */
  }
  strong {
    font-weight: bold;
  }
  & > p {
    padding: 0 0 10px 0;
  }

  & > ul {
    list-style: circle;
    padding: 30px 0 30px 50px;
    li {
      font-size: 20px;
      padding-bottom: 10px;
      line-height: 34px;
      letter-spacing: 0.26px;
      /* a {
        color: ${props => props.theme.colors.detail};
      } */
    }
  }
  blockquote {
    font-style: italic;
    /* border-left: ${props => props.theme.colors.detail} solid 3px; */
    padding-left: 10px;

    margin: 20px 0;

    p {
      font-size: 20px;
    }
  }
  h2 {
    /* font-family: 'Playfair Display', serif; */
    font-weight: 700;
    font-size: 24px;
    line-height: 41px;
    padding-bottom: 20px;
  }
`
