import styled from 'styled-components'

export const Container = styled.div`
    width: 300px;
    min-width:100px;
    height: 30vh;
    z-index:1000;
    overflow-y: ${(props) => (props.mode ? "scroll" : "none")};
    align-items: center;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
    border-left: 10px solid #e41165;
    background:white;
    border-radius: 8px;
    overflow-x: hidden;
`;

export const DivTitle = styled.div`
width:100%;
height:fit-content;
align-items: right;
display:grid;
position:relative;
padding-top:3%;
border-bottom: 1px solid #E1E1E1;
grid-template-columns:45% 55%;
grid-template-rows: 40% 10%
`;

export const Title = styled.label`
  width:100%;
  grid-row:1;
  align-items: center;
  padding-left:10%;
  position:relative;
  justify-content:space-between;
  displat:flex;
  span {
    align-items: center;
    font-size: 1.1rem;
    height: 100%;
    border-bottom: 2px solid #e41165;
    width: fit-content;
    font-weight: 600;
  }
`;

export const DivNumber = styled.label`
  display: grid;
  width:100%;
  grid-row:1;
  font-size:1.1rem;
  align-items: center;
  color: #525b75;
  position:relative;
  font-weight: 600;
`;

export const DateRemark = styled.label`
  display:grid;
  grid-column:2; 
  grid-row: 2;
  right:0;
  font-size: 0.9rem;
  font-weight: 600;
  border: none;
  color:#e41165;
  position:relative;
  width:100%;
  margin-left: 2em;
  padding-bottom:2%;
`;

// 
export const Label = styled.label`
font-size: 16px;
  color: #525b75;
  font-weight: 600;
  margin-left: 10px;
  text-align:center;
  span{
  position: relative;
  margin-bottom: 5px;
  padding: 5px;
  font-weight: 400;
  color: #000;
  }
`;

export const DivInfo = styled.div`
align-items:center;
width:100%;
height: 3vh;
div:nth-child(odd) {
    background: #a9a9a9;
  }
`

export const DivDados = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

`