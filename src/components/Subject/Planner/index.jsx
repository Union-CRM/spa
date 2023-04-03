import React, { useState, useEffect } from "react";
import {
  FaRegCalendarAlt,
  FaRegClock,
  FaChevronCircleDown,
} from "react-icons/fa";
import IconSystem from "../../../assets/IconSystem";
import { useSubjectContext } from "../../../hook/useSubjectContent";

import {
  ContainerRemark,
  ContainerCards,
  CardRemark,
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
  // subject status

  const { subject: subjectsList, setSubject: setSubjectList } =
    useSubjectContext();

  const { id } = useSubjectContext();

  const [status, setStatus] = useState();

  useEffect(() => {
    if (props.title === "DetalhesPlanner") {
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

  return (
    <ContainerRemark>
      <ContainerCards>
        <CardRemark $mode={statusPlannerTwo}>
          <DivGlobalCard>
            <DivDate $mode={statusPlannerTwo}>
              <FaRegCalendarAlt $mode={statusPlannerTwo} />
              <span> Date </span>
              <p>03-03-23</p>
            </DivDate>

            <DivTime $mode={statusPlannerTwo}>
              <FaRegClock color={"#008585"} />
              <Span $mode={statusPlannerTwo}> Time </Span>
              <p>16:00 - 17:00</p>
            </DivTime>

            <DivPhoto>
              <DivPhotoII>
                <Photo $mode={statusPlannerTwo}>GA</Photo>
              </DivPhotoII>
            </DivPhoto>

            <DivDadosRemark>
              <NameEmail>
                Gilberto Anderson Teste
                <span>2534659</span>
              </NameEmail>
            </DivDadosRemark>
          </DivGlobalCard>

          <ContainerComplete>
            <Guest>
              Guests <span>Flavio Martins, Gedson Souza, Eneiane Lopes</span>
            </Guest>
            <NoteText>
              Note Text:
              <span>
                Identificar as necessidades do cliente e compreender seus
                objetivos; Apresentar a expertise da consultoria de TI em
                serviços financeiros; Discutir as soluções personalizadas que
                podem ser oferecidas para as necessidades específicas da
                instituição financeira; Identificar as necessidades do cliente e
                compreender seus objetivos; Apresentar a expertise da
                consultoria de TI em serviços financeiros; Discutir as soluções
                personalizadas que podem ser oferecidas para as necessidades
                específicas da instituição financeira; Identificar as
                necessidades do cliente e compreender seus objetivos; Apresentar
                a expertise da consultoria de TI em serviços financeiros;
                Discutir as soluções personalizadas que podem ser oferecidas
                para as necessidades específicas da instituição financeira;
                Identificar as necessidades do cliente e compreender seus
                objetivos; Apresentar a expertise da consultoria de TI em
                serviços financeiros; Discutir as soluções personalizadas que
                podem ser oferecidas para as necessidades específicas da
                instituição financeira; Identificar as necessidades do cliente e
                compreender seus objetivos; Apresentar a expertise da
                consultoria de TI em serviços financeiros; Discutir as soluções
                personalizadas que podem ser oferecidas para as necessidades
                específicas da instituição financeira;
              </span>
            </NoteText>
          </ContainerComplete>

          <IconOpenClose $mode={statusPlannerTwo}>
            <Circle>
              <FaChevronCircleDown onClick={() => toggleTab(2)} />
            </Circle>
          </IconOpenClose>
        </CardRemark>
      </ContainerCards>
    </ContainerRemark>
  );
};

export default Planner;
