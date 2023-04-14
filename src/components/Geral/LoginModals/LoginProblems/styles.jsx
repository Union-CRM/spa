import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 100%;
    
    flex-direction: column;
    background-color: #FFF;
    border: 1px solid rgb(136, 140, 149);
    border-radius: 8px;
    height: 70vh;
    width: 50vw;
    
    text-align: center;
    align-items: center;
    justify-items: center;
    gap: 10%;


    
    @media screen and (max-width:843px) {
        max-width:65vw;
        height:80vh;
    }
    @media screen and (max-width:1094px) {
        width: 65vw;
        height: 80vh;
    }
    @media screen and (max-width:1483px) {
        gap: 8%;
    }

    
   
  
    
`;
export const InputEmail = styled.input`
     display: grid;
     grid-template-rows: 20%;
    width: 68%;
    height: 35px;
    border-radius: 7px;
   
    
`;
export const Title = styled.h1`
    color: black;
    font-size: 26px;
    margin-top: 20px;
    

`;

export const DivIcon = styled.div `
    border-color: #FFFFFF;
    width: fit-content;
    height:  fit-content;
    padding: 5%;
    border: 3px solid rgba(175, 178, 187, 1);
    border-radius: 100%;
`;

export const P = styled.p`

    text-align : center;
    vertical-align: top;
    word-break: normal;
    color : rgba(0, 0, 0, 0.6);

`;

export const DivButton = styled.div`
    padding-bottom: 8%;
    
    
`;