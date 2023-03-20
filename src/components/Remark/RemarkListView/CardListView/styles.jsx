import styled, {css} from 'styled-components'



export const Container = styled.div`
     justify-content: center;
`

export const Card = styled.div`
    ${(props) => {
        switch (props.$mode) {
            case "Finished":
                return css`
                    border-left: 7px solid #00953b;
                `
            case "Canceled":
                return css`
                    border-left: 7px solid #771300;
                `
            default:
                return css`
                    border-left: 7px solid #6e6b6b;
                `
        } 
    }}
    width: 265px;
    height: 207px;
    border-radius: 8px;
    margin-top: 30px;
    margin-left: 40px;
    display: block;
    background-color: #f5f7fa;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
`

export const Header = styled.div`
    display: flex;
    
`

export const Status = styled.div`
    ${(props) => {
        switch (props.$mode) {
            case "Finished":
                return css`
                    background-color:#00953b;
                `
            case "Canceled":
                return css`
                    background-color: #771300;
                `
            default:
                return css`
                    background-color: #6e6b6b;
                `
        } 
    }}
    width: 83px;
    height: 15px;
    border-radius: 8px;
    margin-top: 10px;
    margin-left: 10px;
    font-size: 14px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    text-align :center
   
`

export const StatusSpan = styled.div`
    color: #ffff;
`
export const PositionEdit = styled.div`
    width: 12px;
    height: 12px;
    margin-left: 105px;
    margin-top: 8px;
    cursor: pointer;
    display: flex;
    padding-left: 15%;
`
export const Title = styled.div`
    font-family: 'Houschka Rounded Alt';
    font-size: 14px;
    margin-bottom: 7px;
    margin-left: 10px;
    margin-top: 3px;
`
export const Name = styled.div`
    font-size: 12px;
    font-family: 'Houschka Rounded Alt';
    font-style: normal;
    color: #000000;
`
export const CardDate = styled.div`
    display: grid;
    grid-template-columns: 40% 40%;
    justify-content: center;
    text-align: center;
    margin-bottom:35px;
    
`;


export const Date1 = styled.div`
   display: grid;
   grid-template-columns: 2% 100%;
   font-weight:bold;
   font-size: 12px;
    @import  '../../../styles/GlobalStyle';
`;


export const Date2 = styled.div`
    display: grid;
    grid-template-columns: 2% 100%;
    font-weight:bold;
    font-size: 12px;
    @import  '../../../styles/GlobalStyle';
`;

export const Topic = styled.div`
    margin-left: 10px;
    font-size: 12px;
    margin-bottom: 18px;
    font-family: 'Houschka Rounded Alt';
   
`

export const Client = styled.span`
    width: 199px;
    height: 23px;
    border: 1px solid #888c95;
    background-color: #ffffff;
    border-radius: 5px;
    display: flex;
    margin-top: 10px;
    margin-left: 10px;
    font-family: 'Houschka Rounded Alt';
`
export const Type = styled.div`
    color: #000000;
    margin-top: 2px;
    margin-bottom: 2px;
    margin-left: 10px;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
    font-family: 'Houschka Rounded Alt';
`
export const Line = styled.div`
    width: 0px;
    height: 16px;
    border: 1px solid #888c95;
    transform: rotate(180deg);
    margin-left: 15px;
    margin-top: 2px;
    margin-bottom: 2px;
    text-align:center;
`


export const ClientName = styled.p`
    color: #656464;
    text-align:center;
    margin-left: 15px;
    margin-bottom: 2px;
`






















