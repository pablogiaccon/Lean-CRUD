import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

    /* A cada 1rem será considerado 10px */
  html {
    font-size: 62.5%;

    @media (max-width: 1080px) {
      font-size: 58%;
    }

    @media (max-width: 720px) {
      font-size: 54%;
    }

    @media (max-width: 425px) {
        font-size: 48%;
    }
  }

  body{
    background: #fff;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font: 16px Roboto Slab, sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: Roboto Slab, sans-serif;
  }

  button{
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

`;
