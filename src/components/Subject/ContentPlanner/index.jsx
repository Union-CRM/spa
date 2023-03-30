import React, { useState } from "react";
import ButtonAdd from "../../../assets/Buttons/ButtonAdd";
import {
  FaRegCalendarAlt,
  FaRegClock,
  FaChevronCircleDown,
} from "react-icons/fa";

import {
  DivContainerAll,
  ContainerPlanner,
  ContainerCards,
  CardPlanner,
  ButtonCreatePlanner,
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
  AboutPlanner,
  Span,
  NoteText,
  ContainerComplete,
  DivGlobalCard,
  Guest,
} from "./styles";

class ContentsPlanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidBartState: "false",
    };
  }

  render() {
    const status = {
      SCHEDULED: "Scheduled",
      FINISHED: "Finished",
      CANCELED: "Canceled",
    };

    const [statusPlanner] = ["Scheduled"];

    const [statusPlannerTwo] = ["Finished"];

    const [statusPlannerThree] = ["Canceled"];

    return (
      <DivContainerAll>
        <ContainerPlanner $mode={this.state.sidBartState}>
          <ButtonCreatePlanner $mode={this.state.sidBartState}>
            <ButtonAdd
              mode="#fff"
              width="130px"
              height="28px"
              padding="0"
              name="Create Planner"
              sizeFont="0.9rem"
              border="1px solid #00953b"
              boxShadow="none"
              color="#00953b"
              margin="none"
            />
          </ButtonCreatePlanner>

          <ContainerCards $mode={this.state.sidBartState}>
            <CardPlanner $mode={statusPlanner}>
              <DivGlobalCard>
                <DivDate>
                  <FaRegCalendarAlt color={"#FFD012"} />
                  <Span $mode={statusPlanner}> Date </Span>
                  <p>03-03-23</p>
                </DivDate>

                <DivTime>
                  <FaRegClock color={"#FFD012"} />
                  <Span $mode={statusPlanner}> Time </Span>
                  <p>16:00 - 17:00</p>
                </DivTime>

                <DivPhoto>
                  <DivPhotoII>
                    <Photo $mode={statusPlanner}>GA</Photo>
                  </DivPhotoII>
                </DivPhoto>

                <DivDadosPlanner>
                  <NameEmail>
                    Gilberto Anderson
                    <span>2534659</span>
                    <DivStatusPlanner>
                      <StatusPlanner $mode={statusPlanner}>
                        <span>{statusPlanner}</span>
                      </StatusPlanner>
                    </DivStatusPlanner>
                  </NameEmail>
                </DivDadosPlanner>
              </DivGlobalCard>
            </CardPlanner>

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

              <ContainerComplete $mode={this.state.sidBartState}>
                <Guest>
                  Guests{" "}
                  <span>Flavio Martins, Gedson Souza, Eneiane Lopes</span>
                </Guest>
                <NoteText>
                  Note Text:
                  <span>
                    Identificar as necessidades do cliente e compreender seus
                    objetivos; Apresentar a expertise da consultoria de TI em
                    serviços financeiros; Discutir as soluções personalizadas
                    que podem ser oferecidas para as necessidades específicas da
                    instituição financeira; Identificar as necessidades do
                    cliente e compreender seus objetivos; Apresentar a expertise
                    da consultoria de TI em serviços financeiros; Discutir as
                    soluções personalizadas que podem ser oferecidas para as
                    necessidades específicas da instituição financeira;
                    Identificar as necessidades do cliente e compreender seus
                    objetivos; Apresentar a expertise da consultoria de TI em
                    serviços financeiros; Discutir as soluções personalizadas
                    que podem ser oferecidas para as necessidades específicas da
                    instituição financeira; Identificar as necessidades do
                    cliente e compreender seus objetivos; Apresentar a expertise
                    da consultoria de TI em serviços financeiros; Discutir as
                    soluções personalizadas que podem ser oferecidas para as
                    necessidades específicas da instituição financeira;
                    Identificar as necessidades do cliente e compreender seus
                    objetivos; Apresentar a expertise da consultoria de TI em
                    serviços financeiros; Discutir as soluções personalizadas
                    que podem ser oferecidas para as necessidades específicas da
                    instituição financeira;
                  </span>
                </NoteText>
              </ContainerComplete>

              <IconOpenClose
                $mode={this.state.sidBartState}
                $modes={statusPlannerTwo}
              >
                <Circle $mode={statusPlannerTwo}>
                  <FaChevronCircleDown
                    $mode={this.state.sidBartState}
                    onClick={() =>
                      this.setState({ sidBartState: !this.state.sidBartState })
                    }
                  />
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

              <ContainerComplete $mode={this.state.sidBartState}>
                <Guest>
                  Guests{" "}
                  <span>Flavio Martins, Gedson Souza, Eneiane Lopes</span>
                </Guest>
                <NoteText>
                  Note Text:
                  <span>
                    Identificar as necessidades do cliente e compreender seus
                    objetivos; Apresentar a expertise da consultoria de TI em
                    serviços financeiros; Discutir as soluções personalizadas
                    que podem ser oferecidas para as necessidades específicas da
                    instituição financeira; Identificar as necessidades do
                    cliente e compreender seus objetivos; Apresentar a expertise
                    da consultoria de TI em serviços financeiros; Discutir as
                    soluções personalizadas que podem ser oferecidas para as
                    necessidades específicas da instituição financeira;
                    Identificar as necessidades do cliente e compreender seus
                    objetivos; Apresentar a expertise da consultoria de TI em
                    serviços financeiros; Discutir as soluções personalizadas
                    que podem ser oferecidas para as necessidades específicas da
                    instituição financeira; Identificar as necessidades do
                    cliente e compreender seus objetivos; Apresentar a expertise
                    da consultoria de TI em serviços financeiros; Discutir as
                    soluções personalizadas que podem ser oferecidas para as
                    necessidades específicas da instituição financeira;
                    Identificar as necessidades do cliente e compreender seus
                    objetivos; Apresentar a expertise da consultoria de TI em
                    serviços financeiros; Discutir as soluções personalizadas
                    que podem ser oferecidas para as necessidades específicas da
                    instituição financeira;
                  </span>
                </NoteText>
              </ContainerComplete>

              <IconOpenClose
                $mode={this.state.sidBartState}
                $modes={statusPlannerThree}
              >
                <Circle $mode={statusPlannerThree}>
                  <FaChevronCircleDown
                    $mode={this.state.sidBartState}
                    onClick={() =>
                      this.setState({ sidBartState: !this.state.sidBartState })
                    }
                  />
                </Circle>
              </IconOpenClose>
            </CardPlanner>
          </ContainerCards>
        </ContainerPlanner>
      </DivContainerAll>
    );
  }
}

export default ContentsPlanner;
