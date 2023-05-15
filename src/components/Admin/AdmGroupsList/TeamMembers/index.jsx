import React, { useState, useEffect } from "react";
import {
  ContainerDetails,
 CardMembers,
 DivDadosCard,
 DivPhoto,
 DivPhotoI,
 NameUser,
 IDUser,
 GlobalCard,
} from "./styles";
import Body from "../../../../assets/FontSystem/Body";
import {useGroupListContext} from "../../../../hook/useGroupListContext";
import { useUserContext } from "../../../../hook/useUserContext";
import { useFetchUsersNotin } from "../../../../hook/useFetchUsersNotin";
import { Link } from "react-router-dom";

const TeamMembers = (props) => {
  const { setModal, id } = props;
  const { group: groupList, loadData } = useGroupListContext();
  const group = groupList.filter((item) => item.id === props.id)[0];
  const [statusGroup, setStatusGroup ] = useState();
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    if (props.title === "Team Members") {
      const group = groupList.filter((item) => item.id === props.id)[0];
      setStatusGroup(group.status);
    }
  }, [id]);

  // Users //
  {/*
  const [userOptions, setUserOptions] = useState([]);
  const{loadUserSub,loadUserNotin} = useFetchUsersNotin() 
  const{userNotin: usersNotin, userListSub: userSub} = useFetchUsersNotin();
  const usersList = userSub.concat(usersNotin)

  useEffect(() => {
    if (usersList) {
      setUserOptions(
        usersList
          .map((c) => ({ id: c.id, value: c.id, label: c.name }))
      );
    }
  }, [usersNotin, userSub]);

  useEffect(()=>{
    loadUserNotin()
    loadUserSub()
  }, [])*/}


  // USER PROFILE //
  const { userList, setViewProfile, setUserTarget, setHome } = useUserContext();
  const user = userList.filter((u) => u.id === props.id)[0];

  const handleClickViewProfile = () => {
    setViewProfile(true);
    setUserTarget(user);
    setHome(true);
  };


  return (

    <ContainerDetails>
 {users.map((s) => (
  <CardMembers>

    <GlobalCard>
      <DivDadosCard>
      <Link
      to="/usersAdm"
      onClick={() => handleClickViewProfile()}
      style={{ textDecoration: "none" }}
      >
      <DivPhoto>
        <DivPhotoI>
        <Body type={"Body2"} name={Split(user.name)} />
        </DivPhotoI>
        </DivPhoto>

        <NameUser>
          <span>
          Gilberto Anderson
        </span>

        <IDUser>
          <span>
          2534659
        </span>
        </IDUser>

        </NameUser>
        </Link>
        </DivDadosCard>

        </GlobalCard>
        
        </CardMembers >
        ))}
    </ContainerDetails>

  );
};

export default TeamMembers;

function Split(n) {
  const name = n ? n : "";
  var nameSplit = name.split(" ");
  var name2 =
    nameSplit[0].split("")[0] +
    " " +
    nameSplit[nameSplit.length - 1].split("")[0] +
    "";

  return name2.toUpperCase();
}
