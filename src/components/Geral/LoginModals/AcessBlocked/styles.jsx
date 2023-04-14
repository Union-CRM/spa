import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #FFF;
    border: 1px solid rgb(136, 140, 149);
    border-radius: 8px;
    height: 48%;
    width: 36vw;
    text-align: center;
    align-items: center;
    justify-content: center;
    gap: 8%;
     
    @media screen and (max-height:877px) {
        max-width:65vw;
        height:58vh;
    }
    @media screen and (max-height:850px) {
        width: 30vw;
        height: 70vh;
    }
    
    @media screen and (max-width:1018px) {
        width: 80vw;
    }

    @media screen and (max-width:1479px){
        width: 30vw;
        height: 68vh;
    }
`;
export const InputEmail = styled.input`
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
    
`;