import styled from "styled-components"


export const Container = styled.div`
    margin-top:4vh;

`;

export const Header = styled.div`
    display: flex;
    grid-column: 3;
    grid-template-columns: 50% 25% 25%;
    width: 80%;
    height: 20%;

`;

export const InputDate = styled.input`
  width: auto;
  max-width: 100%;
  height:100%;
  color: #a0a0a0;
  border-radius: 8px ;
  border: 2px solid ${(props)=> props.required ? "#b03535" : "#888C95"};
  
  @media (max-width: 1200px) {
    width: 85%;
  }
    
`;

export const Label = styled.div`
    
`;

export const DivDate = styled.div`
    margin-left: 5%;
    height:29px;
`

export const DivSelect = styled.div`
    width: 30%;
    margin-top: 0.2%;
`

export const ContainerPlanilha = styled.div `
    width: 100%;
    height: 60vh;
    border: 2px solid #A9A9A9;
    border-radius: 8px;
    margin-top:1%;
    position:relative;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
`;

export const HeaderPlanilha = styled.div`
    height: 10%;
    width: 100%;
    display: flex;
    border-radius: 8px;
    justify-content: flex-start;
`;

export const Title = styled.div`
    width: 16.6%;
    height: 100%;
    border: 1px solid #A9A9A9;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const DivButtons = styled.div`
    width: 20%;
    display: flex;
    flex-direction: row;
    justify-content: center;

`;

export const ButtonPesquisar = styled.button`
    width: 75%;
    height: 3vh;
    background-color: #E41165;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
    border: none;
    color: #FFFFFF;
    border-radius: 16px;
    margin-right: 5%;
    cursor: pointer;
    :hover{ 
        opacity: 0.7;
    }
    align-self: center;
    margin-top: 6%;
    margin-left: 15%;
`;

export const ButtonExportar = styled.button`
    width: 75%;
    height: 3vh;
    background-color:  #007BFF;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
    border: none;
    color: #FFFFFF;
    border-radius: 16px;
    cursor: pointer;
    :hover { 
        opacity: 0.7;
    }
    align-self: center;
    margin-top: 6%;
    margin-left: 5%;
`;

export const ContainerRemarks = styled.div`
    width: 99.7%;
    height: 54vh;
    overflow-y: scroll;
`


export const Total = styled.div`
    display: flex;
    width: fit-content;
    height:1%;
    margin-top: 2%;
    font-size: 1.5rem;
    font-weight:600;

`

export const DivCenter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`