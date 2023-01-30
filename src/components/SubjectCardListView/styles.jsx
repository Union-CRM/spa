import styled from 'styled-components'

export const BoardStyle = styled.div`
    height: 797px;
    display: grid;
    align-content: flex-start;
    background: rgba(255, 255, 255, 0.8);
    position: absolute;
    grid-template-columns: 48% 48%;
    grid-row: 2;
    margin-top: 5px;
    margin-right: 500px;

    &::-webkit-scrollbar{
        width: 15px;
        height: 10px;
        margin-right: 10px;
    }

    &::-webkit-scrollbar-track{
         box-shadow: 5px black;
         border-radius: 10px;
    }

    &::-webkit-scrollbar-track-piece{
        background-color: #FFFFFF;
    }

    &::-webkit-scrollbar-thumb{
        background-color: #AFB2BB;
        margin-right: 10px;
    }

`

export const H1 = styled.h1`
    width: 100%;
    
`

export const Container = styled.div`
    display: grid;
    grid-template-rows: 5% 95%;
    width: 700px;
    height: 797px;
    align-content: flex-start;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 10px;
    position: absolute;
    grid-row: 2;
    overflow: auto;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
    margin-top: 64px;
    margin-right: 500px;

    &::-webkit-scrollbar{
        width: 15px;
        height: 10px;
        margin-right: 10px;
    }

    &::-webkit-scrollbar-track{
         box-shadow: 5px black;
         border-radius: 10px;
    }

    &::-webkit-scrollbar-track-piece{
        background-color: #FFFFFF;
    }

    &::-webkit-scrollbar-thumb{
        background-color: #AFB2BB;
        margin-right: 10px;
    }


`

