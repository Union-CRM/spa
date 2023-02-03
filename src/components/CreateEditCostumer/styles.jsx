import styled from "styled-components"

export const Container = styled.div`
    width: 595px;
    height: 793px;
    display: grid;
    grid-template-areas:
        "PositionTitle PositionTitle"
        "PositionCustomer PositionCustomer"
        "PositionStatus PositionStatus"
        "PositionField PositionField"
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

export const LabelCustomer = styled.label`
    font-family: 'Houschka Rounded Alt';
    font-size: 16px;
    margin-bottom: 2px;
`

export const InputCustomer = styled.input`
    width: 500px;
    height: 40px;
`

export const PositionStatus = styled.div`
    grid-area: PositionStatus;
    margin-left: 44px;
    display: flex;
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

export const PositionFields = styled.div`
    grid-area: PositionField;
    margin-left: 300px;
    display: flex;
    height: 38px;
    background-color: rgba(0, 0, 0, 0);
    border-radius: 5px;

`
