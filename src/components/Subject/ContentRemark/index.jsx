import React, { useState } from "react";
import ButtonAdd from "../../../assets/Buttons/ButtonAdd";
import { FaRegCalendarAlt, FaChevronCircleDown } from "react-icons/fa";
import IconSystem from "../../../assets/IconSystem";

import {
  ContainerRemark,
  ContainerCards,
  CardRemark,
  ButtonCreateRemark,
  DivDate,
  DivDateReturn,
  DivPhoto,
  DivPhotoII,
  Photo,
  DivDadosRemark,
  NameEmail,
  ContainerComplete,
  NoteText,
  IconOpenClose,
  Circle,
  DivGlobalCard,
  IconTag,
} from "./styles";

class ContentRemarks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidBartState: "false",
    };
  }

  render() {
    return (
      <ContainerRemark $mode={this.state.sidBartState}>
        <ButtonCreateRemark $mode={this.state.sidBartState}>
          <ButtonAdd
            mode="#fff"
            width="130px"
            height="28px"
            padding="0"
            name="Create Remark"
            sizeFont="0.9rem"
            border="1px solid #00953b;"
            boxShadow="none"
            color="#00953b;"
            margin="none"
          />
        </ButtonCreateRemark>

        <ContainerCards $mode={this.state.sidBartState}>
          <CardRemark $mode={this.state.sidBartState}>
            <DivGlobalCard>
              <DivDate>
                <FaRegCalendarAlt color={"#00953b;"} />
                <span> Date </span>
                <p>03-03-23</p>
              </DivDate>

              <DivDateReturn>
                <FaRegCalendarAlt color={"#00953b;"} />
                <span> Date Return </span>
                <p>03-29-23</p>
              </DivDateReturn>

              <DivPhoto>
                <DivPhotoII>
                  <Photo>GA</Photo>
                </DivPhotoII>
              </DivPhoto>

              <DivDadosRemark>
                <NameEmail>
                  Gilberto Anderson Teste
                  <span>2534659</span>
                </NameEmail>
              </DivDadosRemark>

              <IconTag $mode={this.state.sidBartState}>
                <IconSystem icon={"Edit"} height={"16px"} width={"16px"} />
              </IconTag>
            </DivGlobalCard>

            <ContainerComplete $mode={this.state.sidBartState}>
              <NoteText>
                Note Text:
                <span>
                  Identificar as necessidades do cliente e compreender seus
                  objetivos; Apresentar a expertise da consultoria de TI em
                  serviços financeiros; Discutir as soluções personalizadas que
                  podem ser oferecidas para as necessidades específicas da
                  instituição financeira; Identificar as necessidades do cliente
                  e compreender seus objetivos; Apresentar a expertise da
                  consultoria de TI em serviços financeiros; Discutir as
                  soluções personalizadas que podem ser oferecidas para as
                  necessidades específicas da instituição financeira;
                  Identificar as necessidades do cliente e compreender seus
                  objetivos; Apresentar a expertise da consultoria de TI em
                  serviços financeiros; Discutir as soluções personalizadas que
                  podem ser oferecidas para as necessidades específicas da
                  instituição financeira; Identificar as necessidades do cliente
                  e compreender seus objetivos; Apresentar a expertise da
                  consultoria de TI em serviços financeiros; Discutir as
                  soluções personalizadas que podem ser oferecidas para as
                  necessidades específicas da instituição financeira;
                  Identificar as necessidades do cliente e compreender seus
                  objetivos; Apresentar a expertise da consultoria de TI em
                  serviços financeiros; Discutir as soluções personalizadas que
                  podem ser oferecidas para as necessidades específicas da
                  instituição financeira;
                </span>
              </NoteText>
            </ContainerComplete>

            <IconOpenClose $mode={this.state.sidBartState}>
              <Circle>
                <FaChevronCircleDown
                  color={"#00953b;"}
                  $mode={this.state.sidBartState}
                  onClick={() =>
                    this.setState({ sidBartState: !this.state.sidBartState })
                  }
                />
              </Circle>
            </IconOpenClose>
          </CardRemark>
        </ContainerCards>
      </ContainerRemark>
    );
  }
}
export default ContentRemarks;
