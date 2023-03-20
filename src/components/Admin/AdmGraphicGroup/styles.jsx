import styled from "styled-components";

export const Container = styled.div`
    grid-template-areas:
    "TotalGroups TotalMembers"
    "MembersPerGroup MembersPerGroup";
    width: 467px;
    height: 600px;
    grid-template-rows: auto auto;
    grid-row: 2;
    grid-template-columns: 41% 59%;
    grid-column: 2;
    display: grid;
`

export const TotalMembers = styled.div`
    grid-area: TotalMembers;
    width: 276px;
    height: 206px;
    background-color: #F5F7FA;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    display: grid;
`

export const PositionIcon = styled.div`
    width: 206px;
    margin-left: 109px;
    margin-top: 20px;
`

export const PositionSpan = styled.div`
    margin-left: 60px;
    margin-top: 27px;
    color: #495057;
    font-family: 'Houschka Rounded Alt';
    font-size: 24px;
`

export const PositionTotal = styled.div`
    margin-left: 120px;
    color: #E41165;
    font-size: 50px;
    margin-bottom: 44px;
`

export const TotalGroups = styled.div`
    grid-area: TotalGroups;
    width: 152px;
    height: 206px;
    background-color: #F5F7FA;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    display: grid;
`

export const MembersPerGroup = styled.div`
    width: 467px;
    height: 335px;
    background-color: #F5F7FA;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
`

export const PositionIconGroups = styled.div`
    margin-left: 54px;
    margin-top: 15px;
`

export const PositionSpanGroups = styled.div`
    margin-top: 18px;
    margin-left: 35px;
    margin-bottom: 5px;
    font-family: 'Houschka Rounded Alt';
    color: #495057;
    font-size: 24px;
`

export const PositionQuantity = styled.div`
    margin-left: 65px;
    font-family: 'Houschka Rounded Alt';
    font-size: 50px;
    margin-bottom: 50px;
    color: #E41165;
`
export const PositionTitle = styled.div`
    font-family: 'Houschka Rounded Alt';
    font-size: 20px;
    color: #495057;
    margin-left: 26px;
    margin-top: 11px;
`