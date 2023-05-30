import styled from 'styled-components'

export const Container = styled.div`
    width: 320px;
    min-width:100px;
    height: 30vh;
    z-index:1000 !important;
    overflow-y: ${(props) => (props.mode ? "scroll" : "none")};
    align-items: center;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
    background: #1B1B1B;
    border-radius: 5px;
    padding-bottom:2%;
    padding-right:1%;
    margin-top:1%;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 5px;
      height: 10px;
    }
  
    &::-webkit-scrollbar-track {
      border-radius: 10px;
    }
  
    &::-webkit-scrollbar-track-piece {
      background-color: transparent;
      margin-top: 10px;
    }
  
    &::-webkit-scrollbar-thumb {
      height: 80%;
      background-color: #3B3B3B;
      border-radius: 4px;
    }
    @media (min-width: 1500px) and (max-width: 2500px) {
      height: 380px;
    }
    @media (min-width: 1500px) and (max-width: 2500px) {
      height: 310px;
    }
    @media (min-height: 150px) and (max-height: 500px) {
      height: 300px;
    }
`;

// Title Remarks Today //
export const DivTitle = styled.div`
width:100%;
height:fit-content;
align-items: right;
display:grid;
position:relative;
padding-top:3%;
grid-template-columns:40% 60%;
grid-template-rows: 40% auto;
`;

export const Title = styled.label`
  width:100%;
  grid-row:1;
  align-items: center;
  padding-left:10%;
  position:relative;
  justify-content:space-between;
  displat:flex;
  color: #ffff;
  span {
    align-items: center;
    font-size: 1.1rem;
    font-weight: 600;
    height: 100%;
    border-bottom: 2px solid #e41165;
    width: fit-content;
  }
`;

// Numbers of Remarks Today //

export const DivNumber = styled.label`
  display: grid;
  width:100%;
  grid-row:1;
  font-size:1.1rem;
  align-items: center;
  color: #a9a9a9;
  position:relative;
  font-weight: 600;
`;

// Date Remarks //

export const DateRemark = styled.label`
  display:grid;
  grid-column:2; 
  height:100%;
  grid-row: 2;
  right:10%;
  font-size: 0.82rem;
  font-weight: 600;
  border: none;
  font-style: italic;
  color: #fff;
  position:relative;
  width:100%;
  justify-content:flex-end;
`;

// Content Remarks //
export const RermarkTitle = styled.label`
  color: #fff;
  text-align:left;
  width:100%;
  span{
  font-size:0.85rem;
  position: relative;
  font-weight: 600;
  color: #fff;
  padding-left:1%;
  bottom:2px;
  width:100%;
  }
`;

export const DivInfo = styled.div`
  display: grid;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25);
  position: relative;
  width: 94%;
  margin-top: 0%;
  margin-left: 1%;
  height: fit-content;
  z-index: 0 !important;
  padding-left: 10px;
`;

export const DivDados = styled.div`
  display: flex;
  width:92%;
  padding:4%;
  margin-top:2%;
  border-radius: 5px;
  flex-direction: column;
  justify-content: flex-start;
 background-color: #3B3B3B;
`;


export const DivIconRemark = styled.div`
position:relative;
align-items:center;
display:flex;
padding-left:2%;
top:0%;
`;

// Content Subject e Client //

export const ContentRemark = styled.div`
position:relative;
height:100%;
width:100%;
font-size:0.81rem;
`;

export const DivSubject = styled.div`
position:relative;
width:100%;
font-weight: 500;
padding-left:2%;
//color: #a9a9a9;
color: #fff;
span {
  font-weight: 500;
  //color: #fff;
  color: #a9a9a9;
}
`;

export const DivClient = styled.div`
position:relative;
width:100%;
font-weight:500;
//color: #a9a9a9;
color: #fff;
padding-left:2%;
span {
  font-weight: 500;
  //color: #fff;
  color: #a9a9a9;
}
`;

// No Remarks //

export const NoRemark = styled.div`
font-size:1rem;
position:relative;
color:#fff;
justify-content:center;
align-items:center;
display:flex;
`;

export const Line = styled.div`
border-left: 3px solid #e41165;
position:relative;
left:0%;
align-items:center;
justify-content:center;
width:100%;
height:100%;
`;
