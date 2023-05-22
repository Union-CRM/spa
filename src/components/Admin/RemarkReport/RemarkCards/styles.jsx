import styled from "styled-components"

export const Container = styled.div`
    height: 6vh;
    display: grid;
    justify-content: flex-start;
    margin-left: -2px;
    grid-template-columns: 17.29% 17.3% 17.2% 17.2% 17.26% 15.7%;
    grid-column: 6;
    width: 98%;
    @media(max-width: 1400px){
        grid-template-columns: 17.33% 17.28% 17.35% 17.27% 17.38% 15%;
    }
`;

export const DivInfo = styled.div`
    border: 1px solid #A9A9A9;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
`