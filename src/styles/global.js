import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: none;
      font-family: 'Baloo 2', cursive;
      
  }

  html, body, #root {
      height: 100%;
      
  }
  
  button {
    
    cursor: pointer;
  }

  body {
       font-size: 16px;
      color: #444444;
      background: #FBF4E9;
      -webkit-font-smoothing: antialiased;
  }
`;



