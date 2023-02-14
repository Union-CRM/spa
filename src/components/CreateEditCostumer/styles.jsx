import styled from "styled-components"

export const Container = styled.div`
    width: 595px;
    height: 793px;
    display: grid;
    grid-template-areas:
        "PositionTitle PositionTitle"
        "PositionCustomer PositionCustomer"
        "PositionStatus PositionStatus"
        "PositionTags PositionTags"
        "ButtonConfirm ButtonConfirm"
        "ButtonCancel ButtonCancel";
    grid-template-rows: 180px 75px 21.5px 345px 55px 80px;
    grid-template-columns: 297px 297px;
    border-radius: 8px 0 0 8px;
    border-left: 20px solid #E41165;
    background: rgba(255, 255, 255, 0.8);
    box-shadow: 1px 1px 12px rgba(0, 0, 0, 0.25);
`

export const PositionTitle = styled.div`
    grid-area: PositionTitle;
    margin-top: 20px;
    margin-left: 68px;
    font-family: 'Houschka Rounded Alt';
    font-size: 32px;
`

export const PositionCustomer = styled.div`
    grid-area: PositionCustomer;
    display: grid;
    margin-bottom: 30px;
    margin-left: 44px;
`


export const PositionStatus = styled.div`
    grid-area: PositionStatus;
    margin-left: 43px;
    margin-top: 16px;
    display: grid;
`

export const ButtonConfirm = styled.div`
    grid-area: ButtonConfirm;
    width: 256px;
    height: 38px;
    margin-left: 150px;
`

export const ButtonCancel = styled.div`
    grid-area: ButtonCancel;
    width: 256px;
    height: 38px;
    margin-left: 150px;
    margin-top: 20px;
`

export const PositionTags = styled.div`
    grid-area: PositionTags;
    margin-left: 302px;
    margin-top: -15px;
    display: grid;
    height: 38px;
    background-color: rgba(0, 0, 0, 0);
    border-radius: 5px;

`

export const SpanTag = styled.span`
    margin-bottom: 6px;
    margin-top: -6px;
    margin-left: 4px;
`

export const Tag = styled.p`
    font-family: 'Houschka Rounded Alt';
    font-size: 16px;
    margin-top: -2px;
    margin-left: 2px;
`

export const Status = styled.p`
    font-family: 'Houschka Rounded Alt';
    font-size: 16px;
    margin-top: -2px;
`

