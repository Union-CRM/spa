import styled from "styled-components";

export const Container = styled.div`
  background: #ffffff;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  min-height: 146px;
  width: 250px;
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
`;
export const Tag = styled.div`
  color: #fff;
  background-color: #e41165;
  padding: 1px 16px;
  font-size: 10px;
  width: fit-content;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;
export const TeamsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  margin-right: 16px;
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
