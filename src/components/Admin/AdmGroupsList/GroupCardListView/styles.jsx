import styled from "styled-components";

//Container Father //
export const ContainerFather = styled.div`
  z-index: 10;
`;


export const Container = styled.div`
  padding: 0px;
  height: 100%;
  padding-left: 0px;
  width: 96%;
  z-index: 0 !important;
`;

export const DivIconItau = styled.div`
  text-align: center;
  svg {
    width:30%;
    height:30%;
  }
`;

// Cards

export const CardGroup = styled.div`
  background: #ffffff;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  min-height: 160px;
  width: auto;
  padding: 6px 16px;
  padding-right: 8px;
  position: relative;
  flex-direction: column;

  ::before {
    content: "";
    left: 0;
    top: 0;
    position: absolute;
    background: #e41165;
    border-radius: 8px 0px 0px 8px;
    width: 7px;
    height: 100%;
  }
`;
export const Content = styled.div`
  text-align: center;
`;
export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left:0.5%;
`;


export const ToggleContainer = styled.label`
  background-color: ${(props) => (props.isActive ? "#00953b" : "#7a7a7a")};
  display: inline-block;
  height: 17.5px;
  width: 37px;
  top: 40%;
  border-radius: 30px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.2s ease-in;
`;

export const ToggleButton = styled.span`
  display: inline-block;
  position: absolute;
  top: 1px;
  left: 0px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transform: ${(props) => (props.checked ? "translateX(22px)" : "")};
  transition: transform 0.2s ease-in;
`;

export const InputToggle = styled.input`
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  opacity: 0;
  cursor: pointer;
`;


// Tag
export const Tag = styled.div`
  color: #fff;
  background-color: #e41165;
  padding: 1px 16px;
  font-size: 10px;
  width: fit-content;
  height:fit-content;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  span {
    text-transform: lowercase;
    font-size: 0.8rem;
    color: #fff;
  }
`;

// Teams Users
export const TeamsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width:92%;
  height:30px;
  padding-right:2%;
  padding-left:4%;
  margin-top: 6px;
  background-color: #d9d9d9;
  font-size: 12px;
  border-radius: 5px;
  line-height: 16px;
`;
export const IconButton = styled.button`
  border: none;
  background-color: transparent;
  margin-left: 8px;
  cursor:pointer;
`;
export const AvatarContainer = styled.div`
  position: relative;
  width: 70px;
  text-align: right;
`;
export const Avatar = styled.img`
  height: 20px;
  width: 20px;
  border-radius: 20px;
  position: absolute;
  border: 1px solid #e41165;
  top: -3px;
  left: ${(props) => `calc(10px * ${props.position})`};
  background-color: #fff;
`;
