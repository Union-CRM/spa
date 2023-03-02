import styled from "styled-components";

export const UserListComponentSt = styled.div`
  background: #f5f7fa;
  border: 15px;
  border-color: black;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  display: grid;
  grid-template-columns: 100%;
  padding: 10px 50px;
  position: relative;
  width: 572px;
  left: 233px;
  top: 40px;
`;
export const H2 = styled.h2`
  display: inline-flexbox;
  font-family: "Houschka Rounded Alt";
  font-style: normal;
`;
export const UserCount = styled.p`
  color: #e41165;
  margin-left: 5px;
  margin-bottom: 5px;
  font-family: "Houschka Rounded Alt";
  font-style: normal;
`;
export const UserItem = styled.li`
  position: relative;
  display: grid;
  grid-template-columns: 100%;
  width: 512px;
  margin-top: 10px;

  order: 1;
`;
export const UserListSt = styled.ul`
  padding-bottom: 21px;
  list-style: none;
`;
