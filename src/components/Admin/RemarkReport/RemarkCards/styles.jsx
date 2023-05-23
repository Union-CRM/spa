import styled from "styled-components"

export const Container = styled.div`
    height: fit-content;
    display: grid;
    justify-content: flex-start;
    margin-left: -2px;
    @margin(max-width: 1367px){
        margin-left: 2px;
    }
    grid-template-columns: 17.29% 17.3% 17.2% 17.2% 17.26% 15.7%;
    grid-column: 6;
    width: 98%;
    @media(max-width: 1400px){
        grid-template-columns: 17.4% 17.3% 17.4% 17.3% 17.3% 15%;
    }
    :hover {
        background-color: #A9A9A9;
    }
`;

export const DivInfo = styled.div`
    border: 1px solid #A9A9A9;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const DivCenter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`