import styled from "styled-components";


export const UserListComponentSt = styled.div`

        background: #F5F7FA;
        border: 15px;
        border-color: black;
        box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        display: grid;
        grid-template-columns: 100%;
        padding: 10px 50px;
        position: center;
        width: 572px;
        height: 550px;
        left: 233px;
        top: 40px;
    
      
        `;
 
  export const UserCount = styled.p`
    color: #E41165;
    margin-left: 5px;
    margin-bottom : 5px;
    font-family: 'Houschka Rounded Alt';
    font-style: normal;
  `;

 export const H2 = styled.h2`
    display: inline-flexbox;
    font-family: 'Houschka Rounded Alt';
    font-style: normal;
 `;


export const UserItem = styled.li`
flex-direction: row;
width: 512px;
height: 79px;
padding-top: 5%;
order: 1;

`;

export const UserListSt = styled.ul`
    padding-bottom:  21px;
    list-style: none;
`;