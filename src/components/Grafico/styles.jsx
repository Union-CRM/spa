import styled from "styled-components";

export const  Container  = styled.div`
    margin-left: 1vw;
    background-color:#FFFFFF; 
    height: 20vh;
    width: 40vw;
    border: 1px groove;
    border-radius: 12px;
    display: flex;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
    margin-bottom: 10%;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
    filter:drop-shadow;
    
  `;
  
  export const H1 = styled.h1`
    font-family: Houschka Rounded Alt;
    font-size: 1.6vw;
    
    margin: 0;
  `;
  
  export const TitleDiv = styled.div`
  margin: 0 1vw;
  `;
  
  
  export const SquareDiv = styled.div`
   position: relative;
    margin: 0;
    background-color:#FFFFFF; 
     margin: 0 auto;
    width: 10vw;
  
  `;
    
  export const TextGraphic = styled.p`
    margin: 0;
    display: flex;
    flex-direction: row;
  `;
    
  
  export const SquareText = styled.h1`
  font-family: Houschka Rounded Alt;
  color: rgba(0, 0, 0, 0.6);
   display: flex;
    margin: 0;
    top: 0.67%;
    text-align: center;
    justify-content: center;
    text-align: center;
    font-size: 0.8vw; 
  
  `
   
  export const LateSquare = styled.div`
    position: relative;
    display: flex;
    margin: auto;
    background-color: #bb1e00;
    height: 5vh;
    width: 4vw;
    border-radius: 10px;
    color: white;
    font-size: 2vw;
    justify-content: center;
    align-items: center;
    padding-bottom: 2%;
    padding-top: 2%;
  `;
  
  export const NearSquare = styled.div`
    position: relative;
    display: flex;
    margin: auto;
    background-color: #ffd012;
    height: 5vh;
    width: 4vw;
    border-radius: 10px;
    color: white;
    font-size: 2vw;
    justify-content: center;
    align-items: center;
    padding-bottom: 2%;
    padding-top: 2%;
  `;
  
  export const OnTimeSquare = styled.div`
    position: relative;
    display: flex;
    margin: auto;
    background-color: rgb(0, 255, 30);
    height: 5vh;
    width: 4vw;
    border-radius: 10px;
    color: white;
    font-size: 2vw;
    padding-bottom: 2%;
    padding-top: 2%;
    justify-content: center;
    align-items: center;
  `;
  
  export const DivImg = styled.div`
    position: relative;
    margin: 0;
    background-color: rgba(255, 255, 255, 1); 
    margin: 0 auto;
    width: fit-content;
  `;