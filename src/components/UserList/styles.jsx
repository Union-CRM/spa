import styled from "styled-components";


export const UserListComponentSt = styled.div`

        background: #F5F7FA;
        border: 15px;
        border-color: black;
        box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 10px 50px;
        gap: 20px;
        position: center;
        width: 572px;
        height: 550px;
        left: 233px;
        top: 40px;
        padding-bottom: 21px;
      
        `;
 

  export const UserCount = styled.p`
    color: #E41165;
    margin-left: 5px;
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
align-items: center;

gap: 15px;

width: 512px;
height: 79px;

background: #FFFFFF;
box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25);
border-radius: 8px;

flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
    
`;

export const UserListSt = styled.ul`
    
    padding-bottom:  21px;
    background-color: #ffffff;
    list-style: none;
`;