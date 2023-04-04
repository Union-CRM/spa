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
    border: 1px solid; 
    background-color: #D9D9D9;
    border: 2px solid #888c95;
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


.content {
  background: white;
  width: 100%;
  height:auto;
  display: none;
}

.active-content {
  display: block;
}

.active-tabs  {
  background-color: #00953b;
  color:#fff;
}

.active-tabs::before {
  content: "";
  display: block;
  position: absolute;
  top: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% + 2px);
  height: 5px;
}


`;
export default GlobalStyle;
