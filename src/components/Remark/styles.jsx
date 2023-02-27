import styled from "styled-components";

export const Card = styled.div`
  width: 250px;
  height: 172px;
  background-color: #f5f7fa;
  box-shadow: 0 2px 15px rgb(0, 0, 0, 0.5);
  color: #333;
  border-radius: 0.5rem;
  margin: 1rem;
  font-size: 0.5rem;
  position: relative;
  flex-direction: column;
`;
export const ColorBar = styled.div`
  width: 14px;
  height: 172px;
  background-color: #00953b;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 8px 0px 0px 8px;
`;
export const Rectangle = styled.div`
  position: absolute;
  width: 81px;
  height: 14px;
  left: 34px;
  top: 10px;
  background-color: #00953b;
  border-radius: 8px;
  text-align: center;
  padding: 0.1rem;

  p {
    color: #f5f7fa;
    font-size: 0.7rem;
  }
`;
export const Editar = styled.img`
  width: 13.5px;
  margin-right: 5px;
`;
export const Trash = styled.img`
  width: 11px;
`;

export const Text1 = styled.div`
  margin-top: 18px;
  display: flex;
  justify-content: left;
  padding: 1rem;
  flex-direction: column;
  margin-left: 8px;

  h1 {
    color: #000000;
    font-size: 0.7rem;
  }

  h2 {
    color: #000000;
    font-size: 0.6rem;
    font-weight: normal;
  }
`;

export const Calendar2 = styled.div`
  margin-left: 8px;

  button {
    border: none;
    margin-left: 1rem;
    font-size: 12px;
    line-height: 0;
    cursor: pointer;
    color: #1f1e1e;
    background-color: #f5f7fa;
    flex-direction: row;
    font-weight: normal;

    &:hover {
      color: #000000;
      transition: all 0.9s linear;
    }
  }
`;
export const Finish = styled.img`
  width: 11px;
  background-color: #43ba65;
`;
export const Calendar = styled.img`
  width: 11px;
`;
export const Text = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: column;
  padding: 11px;
  position: absolute;
  margin-left: 12px;

  h3 {
    color: #656464;
    font-size: 10px;
    font-weight: normal;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const IconsContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 11px;

  button {
    border: none;
    margin-left: 1rem;
    font-size: 1rem;
    line-height: 0;
    cursor: pointer;
    color: #1f1e1e;
    background-color: #f5f7fa;

    &:hover {
      color: #000000;
      transition: all 0.9s linear;
    }
  }
`;

export const Rectangle2 = styled.div`
  position: absolute;
  border: 1px solid;
  border-color: #00953b;
  background-color: #ffffff;
  border-radius: 8px;
  width: 118px;
  height: 17px;
  left: 37px;
  top: 140px;
  text-align: center;

  h4 {
    color: #656464;
    height: 5px;
    font-size: 8px;
    font-weight: normal;
    text-align: center;
    display: inline-block;
    margin-top: 5px;
  }
`;
