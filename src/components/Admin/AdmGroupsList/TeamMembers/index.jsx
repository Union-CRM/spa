import React, { useState, useEffect } from "react";
import {
  ContainerDetails,
 CardMembers,
 DivDadosCard,
 DivPhoto,
 DivPhotoI,
 NameUser,
 IDUser,
 DivView,
 ViewProfile,
 GlobalCard,
} from "./styles";
import Body from "../../../../assets/FontSystem/Body";
import {useGroupListContext} from "../../../../hook/useGroupListContext";
import { useUserContext } from "../../../../hook/useUserContext";
import { ReactComponent as Eye } from "../../../../assets/svg/Eye.svg";
import { useFetchUsersNotin } from "../../../../hook/useFetchUsersNotin";
import { Link } from "react-router-dom";

const TeamMembers = (props) => {
  const { setModal, id } = props;
  const { group: groupList, loadData, setGroupPage, teamMembers } = useGroupListContext();
  const [statusGroup, setStatusGroup ] = useState();
  const [users, setUsers] = useState([]);
  const [groups, setGroups] = useState([]);
  const { usersGlobal, loadUsers} = useUserContext();
  const group = groupList.filter((item) => item.id === props.id)[0];
  
  useEffect(() => {
    if (groupList) {
      setGroups(groupList.filter((s) => s.id === props.id)[0]);
    }
  }, [groupList]);

  useEffect(() => {
    if (props.title === "Team Members") {
      const group = groupList.filter((s) => s.id === props.id)[0];
      setStatusGroup(group.status);
    }
  }, [id]);

  // Users //

  // USER PROFILE //
  const { userList, setViewProfile, setUserTarget, setHome } = useUserContext();

  const user = userList.filter((u) => u.id === props.id)[0];

  const handleClickViewProfile = (s) => {
    
    const userSelected = usersGlobal.filter((u) => u.id === s.user_id)[0];
    
    const aux = {
      id: userSelected.id,
      name: userSelected.name,
      email: userSelected.email,
      tcs_id: userSelected.tcs_id,
      level: userSelected.level
    }
    
    setUserTarget(aux);
    setViewProfile(true);
    setHome(true);
  };

  return (
    <ContainerDetails>
 {teamMembers && (
 teamMembers.map((s) => (

  <CardMembers $mode={group.status}>
    <GlobalCard>
      <DivDadosCard>

      <DivPhoto>
        <DivPhotoI>
        <Body type={"Body2"} name={Split(s.user_name)} />
        </DivPhotoI>
  
        <NameUser>
          <span>
          {SplitUser(s.user_name)}
        </span>
        <IDUser>
          <span>
         {s.user_IdTCS}
        </span>
        </IDUser>
        </NameUser>

        
        </DivPhoto>
    

        <Link
      to="/usersAdm"
      onClick={() => handleClickViewProfile(s)}
      style={{ textDecoration: "none" }}
      >
        <DivView>
        <ViewProfile $mode={group.status}>
         <span>View Profile</span>
        <Eye
        style={{
        fill:"#FFF",
        width:"17px"}}
                      />
        </ViewProfile>
        </DivView>
        </Link>
        </DivDadosCard>

        </GlobalCard>
        
        </CardMembers >
        )))}
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

function SplitUser(n) {
  const user = n ? n : "";
  var userSplit = user.split(" ");
  var user1 = userSplit[0] + " " + userSplit[userSplit.length - 1] + "";

  return user1;
}
