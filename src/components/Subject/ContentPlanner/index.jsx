import React, { useState, useEffect } from "react";
import {
  FaRegCalendarAlt,
  FaRegClock,
  FaChevronCircleDown,
} from "react-icons/fa";
import { useSubjectContext } from "../../../hook/useSubjectContent";

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
  NoteText,
  ContainerComplete,
  DivGlobalCard,
  Guest,
  CardScheduled,
  DivDateScheduled,
  DivTimeScheduled,
  DivPhotoScheduled,
  DivPhotoIIScheduled,
  PhotoScheduled,
  DivDadosPlannerScheduled,
  NameEmailScheduled,
  StatusPlannerScheduled,
  DivStatusPlannerScheduled,
  DivModal,
} from "./styles";
import { usePlannerContext } from "../../../hook/usePlannerContent";

const ContentsPlanner = (props) => {
  const { title, setModal } = props;

  const { subject: subjectsList, setSubject: setSubjectList } =
    useSubjectContext();

  const { id } = useSubjectContext();

  const { setId, isEdit, setEdit } = useSubjectContext();

  const { setModalDetails, setModalEdit } = useSubjectContext();

  const { setModalPlanner, modalPlanner } = usePlannerContext();

  const [status, setStatus] = useState();

  useEffect(() => {
    if (props.title === "Planner") {
      const subject = subjectsList.filter((item) => item.id === props.id)[0];
      setStatus(subject.status);
    }
  }, [id]);

  const statusPlanner = {
    SCHEDULED: "Scheduled",
    FINISHED: "Finished",
    CANCELED: "Canceled",
  };

  const [statusPlannerYellow] = ["Scheduled"];

  const [statusPlannerTwo] = ["Finished"];

  const [statusPlannerThree] = ["Canceled"];

  // Tabs
  const { toggleState, setToggleState } = useSubjectContext();

  const [activeTab, setActiveTab] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
    setActiveTab(index);
    setActiveContent(index);
  };
  const [activeContent, setActiveContent] = useState(0);

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

        <ContainerCards>
          <CardScheduled>
            <DivGlobalCard>
              <DivDateScheduled $mode={status}>
                <FaRegCalendarAlt $mode={status} />
                <Span $mode={status}> Date </Span>
                <p>03-03-23</p>
              </DivDateScheduled>

              <DivTimeScheduled $mode={status}>
                <FaRegClock $mode={status} />
                <Span $mode={status}> Time </Span>
                <p>16:00 - 17:00</p>
              </DivTimeScheduled>

              <DivPhotoScheduled>
                <DivPhotoIIScheduled>
                  <PhotoScheduled $mode={statusPlannerYellow}>
                    GA
                  </PhotoScheduled>
                </DivPhotoIIScheduled>
              </DivPhotoScheduled>

              <DivDadosPlannerScheduled>
                <NameEmailScheduled>
                  Gilberto Anderson
                  <span>2534659</span>
                  <DivStatusPlannerScheduled>
                    <StatusPlannerScheduled $mode={statusPlannerYellow}>
                      <span>{statusPlannerYellow}</span>
                    </StatusPlannerScheduled>
                  </DivStatusPlannerScheduled>
                </NameEmailScheduled>
              </DivDadosPlannerScheduled>
            </DivGlobalCard>
          </CardScheduled>

          <CardPlanner $mode={statusPlannerTwo}>
            <DivGlobalCard>
              <DivDate>
                <FaRegCalendarAlt color={"#008585"} />
                <Span $mode={statusPlannerTwo}> Date </Span>
                <p>03-03-23</p>
              </DivDate>

              <DivTime>
                <FaRegClock color={"#008585"} />
                <Span $mode={statusPlannerTwo}> Time </Span>
                <p>16:00 - 17:00</p>
              </DivTime>

              <DivPhoto>
                <DivPhotoII>
                  <Photo $mode={statusPlannerTwo}>GA</Photo>
                </DivPhotoII>
              </DivPhoto>

              <DivDadosPlanner>
                <NameEmail>
                  Gilberto Anderson
                  <span>2534659</span>
                  <DivStatusPlanner>
                    <StatusPlanner $mode={statusPlannerTwo}>
                      <span>{statusPlannerTwo}</span>
                    </StatusPlanner>
                  </DivStatusPlanner>
                </NameEmail>
              </DivDadosPlanner>
            </DivGlobalCard>

            <IconOpenClose $modes={statusPlannerTwo}>
              <Circle $mode={statusPlannerTwo}>
                <FaChevronCircleDown onClick={() => toggleTab(4)} />
              </Circle>
            </IconOpenClose>
          </CardPlanner>

          <CardPlanner $mode={statusPlannerThree}>
            <DivGlobalCard>
              <DivDate>
                <FaRegCalendarAlt color={"#BB1E00"} />
                <Span $mode={statusPlannerThree}> Date </Span>
                <p>03-03-23</p>
              </DivDate>

              <DivTime>
                <FaRegClock color={"#BB1E00"} />
                <Span $mode={statusPlannerThree}> Time </Span>
                <p>16:00 - 17:00</p>
              </DivTime>

              <DivPhoto>
                <DivPhotoII>
                  <Photo $mode={statusPlannerThree}>GA</Photo>
                </DivPhotoII>
              </DivPhoto>

              <DivDadosPlanner>
                <NameEmail>
                  Gilberto Anderson
                  <span>2534659</span>
                  <DivStatusPlanner>
                    <StatusPlanner $mode={statusPlannerThree}>
                      <span>{statusPlannerThree}</span>
                    </StatusPlanner>
                  </DivStatusPlanner>
                </NameEmail>
              </DivDadosPlanner>
            </DivGlobalCard>

            <IconOpenClose $modes={statusPlannerThree}>
              <Circle $mode={statusPlannerThree}>
                <FaChevronCircleDown onClick={() => toggleTab(4)} />
              </Circle>
            </IconOpenClose>
          </CardPlanner>
        </ContainerCards>
      </ContainerPlanner>
    </DivContainerAll>
  );
};
export default ContentsPlanner;
