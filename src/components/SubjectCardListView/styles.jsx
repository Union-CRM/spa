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
    border-radius: 8px;
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

export const H1 = styled.span`
    width: 100%;
    font-family: 'Houschka Rounded Alt';
    font-size: 24px;
    
`

export const Container = styled.div`
    display: grid;
    grid-template-rows: 9% 91%;
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
    border-radius: 8px;
    &::-webkit-scrollbar{
        width: 18px;
        height: 10px;
        margin-right: 10px;
        float: right;
    }

    &::-webkit-scrollbar-track{
         box-shadow: 5px black;
         border-radius: 10px;
    }

    &::-webkit-scrollbar-track-piece{
        background-color: white;
    }

    &::-webkit-scrollbar-thumb{
        height: 80%;
        background-color: #AFB2BB;
        margin-left: 20px;
        width: 15px;
        border-right: 6px solid white;
        border-top: 12px solid white;
    }

`

export const Line = styled.div`
    width: 128px;
    height: 0px;
    border: 2px solid #007BFF;
    border-radius: 10px;
`

export const All = styled.span`
    font-family: 'Houschka Rounded Alt';
    font-size: 14px;
    color: #525B75;
`

export const Header = styled.div`                        
    margin-top: 12px;
    margin-left: 40px;
    height: 30px;
    display: grid;
    grid-row: 1;
`

export const Finished = styled.span`
    font-family: 'Houschka Rounded Alt';
    font-size: 14px;
    margin-left: 28px;
    color: #525B75;
`

export const Spans = styled.div`
    margin-top: 10px;
    display: flex;
`

export const Canceled = styled.div`
    font-family: 'Houschka Rounded Alt';
    font-size: 14px;
    margin-left: 13px;
    color: #525B75;
`

export const Button = styled.button`
    width: 250px;
    height: 35px;
    display: flex;
    font-family: 'Houschka Rounded Alt';
    font-size: 18px;
    color: #FFFFFF;
    margin-right: 60px;
    border-radius: 8px;
    background-color: #007BFF;
    border: none;
    cursor: pointer;
    :hover{
        transition: 0.5s;
        scale: 1.1;
    }
`

export const Top = styled.div`
    display: flex;
`

export const HowManyFinished = styled.span`
    color: #00953B;
`

export const HowManyCancel = styled.span`
    color: #771300;
`


export const HowManyAll = styled.span`
    color: #008585;
`

export const HowManySubjectList = styled.span`
    color: #525B75;
`
export const IconPosition = styled.div`
    display: flex;
    margin-left: 12px;
    margin-top: 11px;
`
export const SpanPosition = styled.div`
    display: flex;
    margin-left: 8px;
    margin-top: 9px;
    font-size: 16px;
`