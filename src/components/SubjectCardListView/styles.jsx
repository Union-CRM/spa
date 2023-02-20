import styled from 'styled-components'

export const BoardStyle = styled.div`
    height: 780px;
    width: 700px;
    display: grid;
    align-content: flex-start;
    background: rgba(255, 255, 255, 0.8);
    position: relative;
    grid-template-columns: 48% 48%;
    margin-top: 20px;
    grid-row: 2;
    margin-right: 500px;
    border-radius: 8px;
    margin-bottom: 20px;
`

export const H1 = styled.span`
    width: 100%;
    font-family: 'Houschka Rounded Alt';
    font-size: 24px;
    margin-top: 10px;
    
`

export const Container = styled.div`
    display: grid;
    grid-template-rows: 9% 91%;
    width: 700px;
    height: 830px;
    align-content: flex-start;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 10px;
    position: relative;
    overflow: auto;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
    margin-top: 64px;
    margin-right: 500px;
    border-radius: 8px;
    margin-top: -10px;
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
    margin-left: 10px;
    margin-top: -15px;
`

export const All = styled.span`
    font-family: 'Houschka Rounded Alt';
    font-size: 14px;
    color: #525B75;
`

export const Header = styled.div`                        
    margin-bottom: 20px;
    margin-left: 25px;
    width: 650px;
    height: 100px;
    display: grid;
    grid-row: 1;
    position: fixed;
    z-index: 1;
    background-color: #FFFFFF;
`

export const Finished = styled.span`
    font-family: 'Houschka Rounded Alt';
    font-size: 14px;
    color: #525B75;
`

export const Spans = styled.div`
    margin-top: 10px;
    display: flex;
`

export const Canceled = styled.div`
    font-family: 'Houschka Rounded Alt';
    font-size: 14px;
    color: #525B75;
`

export const Button = styled.button`
    width: 250px;
    height: 35px;
    display: flex;
    margin-top: 20px;
    font-family: 'Houschka Rounded Alt';
    font-size: 18px;
    color: #FFFFFF;
    margin-right: 40px;
    border-radius: 8px;
    background-color: #007BFF;
    border: none;
    cursor: pointer;
    :hover{
        transition: 0.5s;
        scale: 1.07;
    }
`

export const Top = styled.div`
    display: flex;
    margin-left: 10px;
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

export const ButtonProgress = styled.button`
    cursor: pointer;
    border: none;
    background-color: #FFFFFF;
    margin-right: 15px;
    margin-bottom: 15px;
    margin-left: 10px;
    &:hover{
        
        border-bottom: 2px solid #007BFF;
    }
`


export const ButtonFinished = styled.button`
    cursor: pointer;
    border: none;
    background-color: #FFFFFF;
    margin-left: 5px;
    margin-bottom: 15px;
    &:hover{
        
        border-bottom: 2px solid #007BFF;
    }

`

export const ButtonCancel = styled.button`
    cursor: pointer;
    border: none;
    background-color: #FFFFFF;
    margin-left: 16px;
    margin-bottom: 15px;
    &:hover{
        
        border-bottom: 2px solid #007BFF;
    }

`

export const LineGray = styled.div`
    width: 640px;
    height: 0px;
    border: 1px solid #D8D8D8 ;
`

export const PositionModal = styled.div`
    margin-left: 200px;
`

export const ContainerFather = styled.div`
`