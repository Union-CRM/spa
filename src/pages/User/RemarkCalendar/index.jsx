import React from "react";
import PageBody from "../../../components/Geral/PageBody";
import { BigCalender } from "../../../components/RemarkCalendar/Calendar";
import {
  DivHeader,
  DivTitle,
  DivLogo,
  DivIconTitle,
  DivRouteTitle,
  Path,
  Title,
} from "./styles";
import IconSystem from "../../../assets/IconSystem";
import { ReactComponent as Info } from "../../../assets/svg/Info.svg";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

class RemarkCalendar extends React.Component {
  render() {
    return (
      <PageBody showNav={true}>
        <DivHeader>
          {/*A Rota e o Nome da Pagina de Planner*/}
          <DivRouteTitle>
            <DivTitle>
              <Title>Remark</Title>
              {/*Tippy Usada para aparecer uma caixa de text quando passa o mouse em cima */}
              <Tippy content="Agenda, calendar with activites and appointments of the day">
                <DivIconTitle>
                  {" "}
                  <Info
                    width="25px"
                    style={{
                      fill: "#007BFF",
                    }}
                  />
                </DivIconTitle>
              </Tippy>
            </DivTitle>
          </DivRouteTitle>
          {/*LOGO da TCS na parte inicial da tela de Remark */}
          <DivLogo>
            <IconSystem
              icon={"LogoTcsPlanner"}
              width={"174px"}
              height={"58px"}
            />
          </DivLogo>
        </DivHeader>
        <BigCalender />
      </PageBody>
    );
  }
}

export default RemarkCalendar;
