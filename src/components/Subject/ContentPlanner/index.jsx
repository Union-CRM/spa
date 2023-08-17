import React, { useState, useEffect } from "react";
import { useSubjectContext } from "../../../hook/useSubjectContent";
import { usePlannerContext } from "../../../hook/usePlannerContent";
import { ReactComponent as Timer } from "../../../assets/svg/Timer.svg";
import { ReactComponent as Calendar } from "../../../assets/svg/Calendar.svg";
import { ReactComponent as RowDown } from "../../../assets/svg/RowDown.svg";
import {
  DivContainerAll,
  ContainerPlanner,
  ContainerCards,
  CardPlanner,
  ButtonCreatePlanner,
  ButtonAdd,
  DivDate,
  DivTime,
  DivPhoto,
  DivPhotoII,
  Photo,
  DivDadosPlanner,
  NameEmail,
  StatusPlanner,
  DivStatusPlanner,
  IconOpenClose,
  Circle,
  Span,
  DivGlobalCard,
  DivNoPlanner,
} from "./styles";

const ContentsPlanner = (props) => {
  function Split(n) {
    const user = n ? n : "";
    var userSplit = user.split(" ");
    var user2 =
      userSplit[0].split("")[0] +
      " " +
      userSplit[userSplit.length - 1].split("")[0] +
      "";

    return user2.toUpperCase();
  }

  const { subject: subjectsList } = useSubjectContext();

  const { id } = useSubjectContext();

  // const { setId, isEdit, setEdit } = useSubjectContext();

  const { setModalDetails } = useSubjectContext();

  const { setModalPlanner } = usePlannerContext();

  const { planner, setPlannerEdit } = usePlannerContext();

  const [status, setStatus] = useState();

  useEffect(() => {
    if (props.title === "Planner") {
      const subject = subjectsList.filter((item) => item.id === props.id)[0];
      setStatus(subject.status);
    }
  }, [id]);

  const [plannerSubject, setPlannerSubject] = useState(
    planner ? planner.filter((p) => p.subject_id === props.id) : []
  );

  useEffect(() => {
    try {
      setPlannerSubject(
        planner
          .filter((p) => p.subject_id === props.id)
          .sort((a, b) => (b.status || "").localeCompare(a.status || ""))
      );
    } catch {
      setPlannerSubject([]);
    }
  }, [planner]);
  /*
  const statusPlanner = {
    SCHEDULED: "SCHEDULED",
    FINISHED: "DONE",
    CANCELED: "CANCELED",
  };

  const [statusPlannerYellow] = ["SCHEDULED"];

  const [statusPlannerTwo] = ["DONE"];

  const [statusPlannerThree] = ["CANCELED"];
*/
  // Tabs
  const { setToggleState } = useSubjectContext();

  const toggleTab = (index, planner_id) => {
    setToggleState(index);
    setPlannerEdit(planner.filter((p) => p.id === planner_id)[0]);
  };

  // Planner Create //

  const PlannerModal = () => {
    setModalDetails(false);
    setModalPlanner(true);
  };

  return (
    <DivContainerAll>
      <ContainerPlanner>
        <ButtonCreatePlanner>
          {status !== "FINISHED" && status !== "CANCELED" && (
            <ButtonAdd
              onClick={() => PlannerModal()}
              $mode={status}
              width="130px"
              padding="0"
              sizeFont="0.9rem"
              boxShadow="none"
              margin="none"
            >
              {" "}
              <span>Create Planner</span>
            </ButtonAdd>
          )}
        </ButtonCreatePlanner>

        {plannerSubject && plannerSubject.length === 0 ? (
          <DivNoPlanner>
            <span>There are no existing planners.</span>
          </DivNoPlanner>
        ) : (
          <ContainerCards $mode={plannerSubject.length}>
            {plannerSubject.map((p) => {
              const time = p.date.split(" ")[1].split(":");

              return (
                <CardPlanner
                  $mode={p.status}
                  onClick={() => toggleTab(4, p.id)}
                >
                  <DivGlobalCard>
                    <DivDate>
                      <Calendar
                        style={{
                          fill:
                            p.status === "SCHEDULED"
                              ? "#000"
                              : p.status === "DONE"
                              ? "#008585"
                              : p.status === "CANCELED"
                              ? "#771300"
                              : "",
                        }}
                      />
                      <Span $mode={p.status}> Date </Span>
                      <p>{new Date(p.date).toISOString().substring(0, 10)}</p>
                    </DivDate>

                    <DivTime>
                      <Timer
                        style={{
                          fill:
                            p.status === "SCHEDULED"
                              ? "#000"
                              : p.status === "DONE"
                              ? "#008585"
                              : p.status === "CANCELED"
                              ? "#771300"
                              : "",
                        }}
                      />
                      <Span $mode={p.status}> Time </Span>
                      <p>{`${time[0]}:${time[1]} - ${p.duration}`}</p>
                    </DivTime>

                    <DivPhoto>
                      <DivPhotoII>
                        <Photo $mode={p.status}>{Split(p.user)}</Photo>
                      </DivPhotoII>
                    </DivPhoto>

                    <DivDadosPlanner>
                      <NameEmail>
                        {SplitName(p.user)}
                        <span>{p.user_id}</span>
                        <DivStatusPlanner>
                          <StatusPlanner $mode={p.status}>
                            <span>{p.status}</span>
                          </StatusPlanner>
                        </DivStatusPlanner>
                      </NameEmail>
                    </DivDadosPlanner>
                  </DivGlobalCard>

                  <IconOpenClose $mode={p.status}>
                    <Circle $mode={p.status}>
                      <RowDown
                        style={{
                          fill:
                            p.status === "SCHEDULED"
                              ? "none"
                              : p.status === "DONE"
                              ? "#008585"
                              : p.status === "CANCELED"
                              ? "#771300"
                              : "",
                        }}
                      />
                    </Circle>
                  </IconOpenClose>
                </CardPlanner>
              );
            })}
          </ContainerCards>
        )}
      </ContainerPlanner>
    </DivContainerAll>
  );
};
export default ContentsPlanner;

function SplitName(n) {
  const user = n ? n : "";
  var userSplit = user.split(" ");
  var user1 = userSplit[0] + " " + userSplit[userSplit.length - 1] + "";

  return user1;
}
