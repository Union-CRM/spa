import styled from "styled-components";

export const Li = styled.li `
    background: #FFFFFF;
    height: 82px;
    top: 8px;
    width: 423px;
    left: 35px;
    margin-top: 15px;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    transition: .5s;
    cursor: pointer;
    
        &:hover{
            border: 2px solid #ccc;
            
            }
    
`
export const P = styled.p `
    position: absolute;
    width: 162px;
    height: 24px;
    left: 15px;
    top: 35px;
    font-family: 'Inter';
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #888888;
    
    white-space: nowrap;

`
export const P1 = styled.p `
    position: absolute;
    width: 162px;
    height: 24px;
    left: 15px;
    top: 60px;
    font-family: 'Inter';
    font-size: 14px;
    line-height: 8px;
    color: #888888;

    white-space: nowrap;

`
export const P2 = styled.p `
position: absolute;
white-space: nowrap;
width: 88px;
height: 12px;
right: 85px;
margin-top: 35px;
font-size: 10px;
font-family: 'Inter';
color: #888888;
font-weight: 600;

`
export const P3 = styled.p `
position: absolute;
font-size: 10px;
font-family: 'Inter';
white-space: nowrap;
width: 88px;
height: 12px;
right: 85px;
margin-top: 35px;
top: 11px;
color: #888888;

`

export const H2 = styled.h2`
    position: absolute;
    left: 15px;
    top: 5px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    

`
export const Img = styled.img `
    border-radius: 50%;
    position: relative;
    align-items: center;
    width: 25px;
    height: 25px;
    margin-top: 45px;
    left: 5%;
    bottom: 10px;
    
    
`
export const DivStatus = styled.div `
    background: #00953B;
    position: absolute;
    width: 8px;
    top: 14px;
    height: 8px;
    border-radius: 50%;
    right: 75px;
`
export const Horas = styled.p `
position: absolute;
white-space: nowrap;
width: 88px;
height: 12px;
margin-top: 13px;
font-size: 10px;
font-weight: 600;
right: -15px;
color: #000000;
font-family: 'Inter';
`