import React, { useState, useEffect } from "react";
import {
  ContainerDetails,
  DivBetween,
  DivCustomer,
  DivPlanner,
  PlannerCircle,
  DivSubjects,
  NoTags,
  DivTags,
  TagsClient,
  DivColors,
} from "./styles";
import { useGroupListContext } from "../../../../hook/useGroupListContext";
import { useFetchCustomer } from "../../../../hook/useFetchCustomer";
import { useSubjectContext } from "../../../../hook/useSubjectContent";
import { usePlannerContext } from "../../../../hook/usePlannerContext";
import { useFetchAdmGroupList } from "../../../../hook/useFetchAdmGroupList";
const GroupDetails = (props) => {
  const { setModal, id } = props;

  const { group: groupList, loadData , getTeamMembers, teamMembers} = useGroupListContext();
  const group = groupList.filter((item) => item.id === props.id)[0];

  const { setId } = useGroupListContext();
  const [customer, setCustomer] = useState();
  const [statusGroup, setStatusGroup] = useState();
  const { groups } = useFetchAdmGroupList();
  const { subject } = useSubjectContext();
  const { planner } = usePlannerContext();
  const [plannerGroup,setPlannerGroup] = useState(0);
  const [subjectGroup,setSubjectGroup] = useState(0);
  /*const plannerGroup = planner
    ? planner.filter((p) => group.usersId.includes(p.user_id))
    : [];
  const subjectGroup = subject
    ? subject.filter((s) => group.usersId.includes(s.user_id))
    : [];*/

  useEffect(() => {
    getTeamMembers(id)
    if (props.title === "Group Content") {
      const group = groupList.filter((item) => item.id === props.id)[0];
      setStatusGroup(group.status);
    }
  }, [id]);

  useEffect(() => {
    if(teamMembers){
      const usersID = (teamMembers.map((u)=> u.user_id))
      
      setPlannerGroup(planner
        ? planner.filter((p) => usersID.includes(p.user_id))
        : [])
      setSubjectGroup(subject
        ? subject.filter((s) => usersID.includes(s.user_id))
        : [])  
    }
  }, [teamMembers]);

  return (
    <ContainerDetails>

      <DivCustomer>
        Customer
        <span onChange={(event) => setCustomer(event.target.value)}>
          {group.textCustomer}
        </span>
      </DivCustomer>

      <DivBetween>
        <DivPlanner>
          Planners in that group
          <PlannerCircle $mode={group.status}>
            {plannerGroup.length}
          </PlannerCircle>
        </DivPlanner>

        <DivSubjects>
          Subjects in that group
          <PlannerCircle $mode={group.status}>
            {subjectGroup.length}
          </PlannerCircle>
        </DivSubjects>
      </DivBetween>

    </ContainerDetails>
  );
};

export default GroupDetails;
