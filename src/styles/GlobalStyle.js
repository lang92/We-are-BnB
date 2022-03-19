import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Fredoka Regular';
  }

  button {
    background: inherit; 
    border: none;
    box-shadow: none; 
    border-radius: 0; 
    padding: 0; 
    overflow: visible; 
    cursor: pointer
  }

  input {
    margin: 0;
    padding: 0;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
`;

export default GlobalStyle;
