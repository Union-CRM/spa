import styled,{css} from "styled-components";

export const DIV = styled.div`

    background-color: 	#F5F5F5;
    border-radius: 5px;
    height: 90%;
    width: 100%;
    margin-left: 15px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 20px;
   

    overflow-y: scroll;
    &::-webkit-scrollbar-track {
        background-color: #F8E9E9;
                
    }
        ::-webkit-scrollbar {
        width: 10px;
        height: auto;
        background: #F9E3E3;
    }
       ::-webkit-scrollbar-thumb {
        background: #DB7A7C;
        border-radius: 5px;
    }
     
  
    margin-left: auto;
    margin-right: auto;
    
`;

export const DivAparecer = styled.div`
   
   ${(props)=>{
    switch(props.$mode){
        case'true':
            return css`
               
                z-index: 5;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                background-color: aqua;


            `;
            default:
                return css`
                
                background-color: white;
                color: black;
                display: none;   
                `;
        }
    }}
`;



export const Icon = styled.div`

grid-column: 4;
margin-right: 5px;
cursor: pointer;


`;


export const ModalButon = styled.div`

    height: 50px;
    width: 400px;
    border: solid black;
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;
    background-color: white;
    font-size: 40px;
    text-align: center;
    
    
 `;


export const Container = styled.div`

display: grid;
grid-template-columns: repeat(2, 100%);
grid-template-rows: 1fr;
grid-column-gap: 20px;
grid-row-gap: 0px;
    
 `;
 

export const NavbarGrup = styled.div`

grid-area: 1 / 1 / 2 / 2;
 `;
 export const DivConteudo = styled.div`

    grid-area: 1 / 1 / 2 / 2 ;
    height:60%;
    width:100%;
    
 `;

export const DivHead = styled.div`

background-color: #F5F5F5;
height: 13%;
width: 100%;
border-radius: 10px 10px 0 0;

`;


export const H2 = styled.h2`

font-size: 24px;
font-family: Desktop/h4-Houschka;
font-style: normal;
position: absolute;
display: inline-block;
margin-top:2%;
margin-left: 2%;

`;

export const DivButton = styled.div`
    display: flex;
    align-items: right;
    justify-content: right;
`;
export const ActiveNot = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 15%);
    grid-template-rows: 1fr;
    grid-column-gap: 2%;
    grid-row-gap: 0px;
    margin-top: 4%;
    margin-left: 5%;
    cursor: pointer;
   
`;

export const Hr = styled.hr`
   
  margin: 3px 3% 1px 5%;
    
`;
export const DivModal = styled.div`
   
   grid-area: 1 / 2 / 2 / 3; 
    
`;


