import styled from "styled-components"

export const Container = styled.div`
  /* position: relative; */
  padding: 20px 60px;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`

export const Description = styled.div`
  width: 25%;
  margin-right: 10%;

  h1 {
    margin-bottom: 1.4rem;
    font-size: 2.9rem;
  }

  h3 {
    margin-bottom: 0.8rem;
    font-size: 1.6rem;
  }

  p {
    margin-bottom: 10px;
    font-size: 1.2rem;
    /* font-weight: 100 !important; */
  }

  @media (max-width: 800px) {
    margin-right: 0px;
    margin-bottom: 20px;
    width: 100%;
  }
`

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  /* width: 60%; */
  position: relative;

  h1 {
    position: absolute;
    right: 20px;
    bottom: 30%;
    display: none;
    color: white;
  }

  img {
    border-top-left-radius: 150px;
    border-top-right-radius: 150px;
    border-bottom-right-radius: 150px;
    margin: 10px 0 15px 0;
    width: 100%;

    filter: brightness(10%);

    transition: 0.6s;
  }

  &:hover {
    img {
      /* max-width: 600px;
        max-height: 600px; */
      transform: scale(1.3);
      transform: rotateZ(-5deg);
      filter: brightness(10%);
    }

    h1 {
      display: block;
    }
  }

  @media (max-width: 800px) {
    /* padding: 20px; */
    img {
      /* margin: 0; */
    }
  }
`
