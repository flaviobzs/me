import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`

  /* @import url('https://fonts.googleapis.com/css2?family=Monoton&family=Montserrat:wght@100;300;500;700&family=Poppins:wght@300;500;700&family=Roboto:wght@100;500&display=swap'); */

  *{
    margin:0;
    padding:0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus{
    outline: 0;
  }
  
  html, body{
    height: 100%;
    /* font-family: 'Monoton', cursive; */
    /* font-family: 'Poppins', sans-serif; */
    font-family: 'Roboto', sans-serif;
  }

  body{
    -webkit-font-smoothing: antialiased; 
  }  

  a {
    text-decoration: none;
  }
  
  ul {
    list-style: none;
  }
`
