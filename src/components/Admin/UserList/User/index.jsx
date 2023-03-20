import React from "react";
import { UserItem, ImageUser, NameUser, IdUser } from "./styles.jsx";

function User(props) {
  return (
    <UserItem>
      <ImageUser alt="User Image" />
      <NameUser>
        {props.name}
        <IdUser>{props.id}</IdUser>
      </NameUser>
    </UserItem>
  );
}
export default User;
