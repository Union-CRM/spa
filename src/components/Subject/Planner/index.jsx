import React, { useState, useEffect } from "react";
import {
  FaRegCalendarAlt,
  FaRegClock,
  FaChevronCircleDown,
} from "react-icons/fa";
import { ReactComponent as RowDown } from "../../../assets/svg/RowDown.svg";
import { useSubjectContext } from "../../../hook/useSubjectContent";
import { usePlannerContext } from "../../../hook/usePlannerContent";
import {
  ContainerPlanner,
  ContainerCards,
  CardPlanner,
  DivDate,
  DivTime,
  Span,
  DivDateReturn,
  DivPhoto,
  DivPhotoII,
  Photo,
  DivDadosRemark,
  NameEmail,
  ContainerComplete,
  NoteText,
  Guest,
  IconOpenClose,
  Circle,
  DivGlobalCard,
  IconTag,
} from "./styles";

const Planner = (props) => {
  // Subject status //
  const { subject: subjectsList, setSubject: setSubjectList } =
    useSubjectContext();

  const { id } = useSubjectContext();
  const [status, setStatus] = useState();
  const { plannerEdit } = usePlannerContext();
  const [planner, setPlanner] = useState(entityPlanner);
  const [guests, setGuests] = useState("");
  const [userSplit, setUserSplit] = useState();
  const [time, setTime] = useState(["", ""]);

  useEffect(() => {
    if (props.title === "More Details Planner") {
      const subject = subjectsList.filter((item) => item.id === props.id)[0];
      setStatus(subject.status);
    }
  }, [id]);

  useEffect(() => {
    if (plannerEdit) {
      setPlanner(plannerEdit);
      setUserSplit(plannerEdit.user.split(" ").slice(0, 2).join(" "));
      setTime(plannerEdit.date.split(" ")[1].split(":"));
      setGuests(
        plannerEdit.client +
          "; " +
          (plannerEdit.guest
            ? plannerEdit.guest.map((g) => {
                return g.client_name + "; ";
              })
            : "")
      );
    }
  }, [plannerEdit]);

  // Tabs //
  const { toggleState, setToggleState } = useSubjectContext();

  const [activeTab, setActiveTab] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
    setActiveTab(index);
    setActiveContent(index);
  };
  const [activeContent, setActiveContent] = useState(0);

  return (
    <ContainerPlanner>
      <ContainerCards>
        <CardPlanner $mode={planner.status} onClick={() => toggleTab(2)}>
          <DivGlobalCard>
            <DivDate $mode={planner.status}>
              <FaRegCalendarAlt $mode={planner.status} />
              <span> Date </span>
              <p>{new Date(planner.date).toISOString().substring(0, 10)}</p>
            </DivDate>

            <DivTime $mode={planner.status}>
              <FaRegClock $mode={planner.status} />
              <span> Time </span>
              <p>{`${time[0]}:${time[1]} - ${planner.duration}`}</p>
            </DivTime>

            <DivPhoto>
              <DivPhotoII>
                <Photo $mode={planner.status}>{Split(planner.user)}</Photo>
              </DivPhotoII>
            </DivPhoto>

            <DivDadosRemark>
              <NameEmail>
                {SplitName(planner.user)}

                <span>{planner.user_id}</span>
              </NameEmail>
            </DivDadosRemark>
          </DivGlobalCard>

          <ContainerComplete>
            <Guest>
              {guests && (
                <>
                  Guests <span>{guests}</span>{" "}
                </>
              )}
            </Guest>
            <NoteText>
              Note Text:
              <span>{planner.remark_text}</span>
            </NoteText>
          </ContainerComplete>

          <IconOpenClose $mode={planner.status}>
            <Circle $mode={planner.status}>
              <RowDown
                style={{
                  fill:
                    planner.status === "DONE"
                      ? "#008585"
                      : planner.status === "CANCELED"
                      ? "#771300"
                      : planner.status === "SCHEDULED"
                      ? "transparent"
                      : "",
                }}
              />
            </Circle>
          </IconOpenClose>
        </CardPlanner>
      </ContainerCards>
    </ContainerPlanner>
  );
};

export default Planner;

const entityPlanner = {
  status: "",
  date: new Date(),
  duration: "",
  guest: [],
  user: null,
  user_id: null,
  remark_text: "",
};

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

function SplitName(n) {
  const user = n ? n : "";
  var userSplit = user.split(" ");
  var user1 = userSplit[0] + " " + userSplit[userSplit.length - 1] + "";

  return user1;
}
