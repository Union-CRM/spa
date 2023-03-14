import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    font-family:Imported !important;
}

::placeholder {
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24x;
  font-family:Imported !important;
  padding:0px;
}

input[disabled] {
    border: 1px solid red; 
    -webkit-border-radius: 30px; 
    -moz-border-radius: 30px; 
    border-radius: 30px;
}


input:placeholder-shown {
  border-color: #b03535;
}

select:placeholder-shown {
  border-color: #b03535;
}


body{
    justify-content: center; 
    overflow: hidden;
    font-family:Imported !important;
  }
`;
export default GlobalStyle;
