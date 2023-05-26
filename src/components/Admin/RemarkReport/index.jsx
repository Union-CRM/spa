import React, { useState, useEffect } from "react";
import {
  Container,
  Header,
  InputDate,
  Label,
  DivInfo,
  TitlePage,
  DivDate,
  DivUsers,
  DivSelect,
  DivPlanner,
  DivNumber,
  ContainerPlanilha,
  HeaderPlanilha,
  Title,
  DivButtons,
  ButtonPesquisar,
  ButtonExportar,
  ContainerRemarks,
  Total,
  DivCenter,
} from "./styles";
import { useUserContext } from "../../../hook/useUserContext";
import { useRemarkContext } from "../../../hook/useRemarkContent";
import { usePlannerContext } from "../../../hook/usePlannerContext";
import SingleSelect from "../../Geral/Input/SingleSelect";
import RemarkCard from "./RemarkCards/index";
import PlannerCards from "./PlannerCards/index";
import * as XLSX from "xlsx";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { ReactComponent as Info } from "../../../assets/svg/Info.svg";

const ContainerRemarkReport = () => {
  const { user, userList, loadUserList } = useUserContext();
  const { remark } = useRemarkContext();
  const { planner } = usePlannerContext();
  const [userTarget, setUserTarget] = useState({ label: "" });
  const [userOptions, setUserOptions] = useState([]);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [flagEndDate, setFlagEndDate] = useState(false);
  const [flagStartDate, setFlagStartDate] = useState(false);
  const [remarkList, setRemarkList] = useState([]);
  const [plannerList, setPlannerList] = useState([]);
  const [option, setOption] = useState({ value: 1, label: "Remark" });
  const [view, setView] = useState("Remark");
  //console.log(planner);
  useEffect(() => {
    loadUserList();
  }, []);

  useEffect(() => {
    if (userList) {
      setUserOptions([
        { id: user.id, value: user.id, label: user.name },
        ...userList.map((u) => {
          return { id: u.id, value: u.id, label: u.name };
        }),
      ]);
    }
  }, [userList]);
  const selectUser = (id) => {
    setUserTarget(userOptions.filter((u) => u.value === id)[0]);
  };

  const handleSelectOption = (value) => {
    setOption(Options.filter((o) => o.value === value)[0]);
  };

  const handleCreateReport = () => {
    setView(option.label);
    setRemarkList(Filter(remark));
    setPlannerList(Filter(planner));
    //console.log(Filter(planner));
  };

  const handleDownload = () => {
    setView(option.label);
    // Cria um novo arquivo Excel
    const workbook = XLSX.utils.book_new();
    // Cria um novo conjunto de dados
    let data = [];
    try {
      switch (view) {
        case "Remark":
          data = [
            [
              "User",
              "Client",
              "Subject",
              "Remark",
              "Remark Text",
              "Initial Date",
              "Final Date",
              "Business",
              "Release Train",
              "Created By",
              "Status",
            ],
            ...Filter(remark).map((r) => {
              return [
                r.user_name,
                r.client_name,
                r.subject_name,
                r.remark_name,
                r.text,
                r.date.split("T")[0],
                r.date_return.split("T")[0],
                r.business_name,
                r.release_name,
                r.createdBy_name,
                r.status_description,
              ];
            }),
          ];
          break;
        case "Planner":
          data = [
            [
              "User",
              "Client",
              "Subject",
              "Date",
              "Time Start",
              "Time Finish",
              "Business",
              "Release Train",
              "Remark Text",
              "Status",
              "Created By",
            ],
            ...Filter(planner).map((r) => {
              return [
                r.user,
                r.client,
                r.subject,
                r.date.split(" ")[0],
                r.date.split(" ")[1],
                r.duration,
                r.business,
                r.release,
                r.remark_text,
                r.status,
                r.createdBy_name,
              ];
            }),
          ];
          break;
        default:
          data = [];
      }
    } catch {
      console.error("Error");
      return false;
    }
    // Converte os dados em uma planilha
    const worksheet = XLSX.utils.aoa_to_sheet(data);

    XLSX.utils.book_append_sheet(workbook, worksheet, "Dados");
    // Salva o arquivo Excel
    const filename = `${view}Report${new Date()}.xlsx`;
    XLSX.writeFile(workbook, filename);
  };

  const Filter = (opt) => {
    if (userTarget.label) {
      if (startDate && endDate) {
        // duas datas
        //verificação data final
        if (endDate >= startDate) {
          setFlagEndDate(false);
          return opt.filter(
            (o) =>
              o.date.split("T")[0].split(" ")[0] >= startDate &&
              o.date.split("T")[0].split(" ")[0] <= endDate &&
              o.user_id === userTarget.id
          );
        } else {
          setFlagEndDate(true);
        }
      } else if (startDate) {
        // somente da inicial
        setFlagEndDate(false);
        return opt.filter(
          (r) =>
            r.date.split("T")[0].split(" ")[0] >= startDate &&
            r.user_id === userTarget.id
        );
      } else if (!startDate && endDate) {
        // somente data final
        setFlagStartDate(true);
      } else {
        // somente usuario
        return opt.filter((r) => r.user_id === userTarget.value);
      }
    } // Busca por data
    else if (startDate && endDate) {
      //verificação data final
      if (endDate > startDate) {
        setFlagEndDate(false);
        return opt.filter(
          (r) =>
            r.date.split("T")[0].split(" ")[0] >= startDate &&
            r.date.split("T")[0].split(" ")[0] <= endDate
        );
      } else {
        setFlagEndDate(true);
      }
    } else {
      //busca geral
      return opt;
    }
  };

  return (
    <Container>
      <TitlePage>
        <span>Report</span>
        <Tippy content="Page for generating reports.">
          <DivInfo>
            <Info
              width="25px"
              style={{
                fill: "#E41165",
              }}
            />
          </DivInfo>
        </Tippy>
      </TitlePage>
      <Header>
        <DivSelect>
          <DivUsers>
            {
              <SingleSelect
                set={(u) => selectUser(u)}
                placeholder={""}
                label={"User"}
                sizeSingle={"100%"}
                backgroundColor={"#FFF"}
                options={userOptions}
                value={userTarget.label}
              />
            }
          </DivUsers>
          <DivPlanner>
            <SingleSelect
              set={(u) => handleSelectOption(u)}
              placeholder={""}
              label={"Options"}
              sizeSingle={"100%"}
              backgroundColor={"#FFF"}
              options={Options}
              value={option.label}
            />
          </DivPlanner>
        </DivSelect>
        <DivDate>
          <Label>Start Date</Label>
          <InputDate
            type="date"
            onChange={(s) => setStartDate(s.target.value)}
          />
        </DivDate>
        <DivDate>
          <Label>End Date</Label>
          <InputDate
            type="date"
            onChange={(e) => setEndDate(e.target.value)}
            required={flagEndDate || (flagEndDate && !endDate) ? true : false}
          />
        </DivDate>
        <DivButtons>
          <ButtonPesquisar onClick={handleCreateReport}>Search</ButtonPesquisar>
          <ButtonExportar onClick={handleDownload}>Export</ButtonExportar>
        </DivButtons>
      </Header>
      <Total>
        Total
        {view}:{" "}
        <DivNumber>
          ({view === "Remark" ? remarkList.length : plannerList.length})
        </DivNumber>
      </Total>
      <ContainerPlanilha>
        <HeaderPlanilha>
          {view === "Remark" &&
            remarkTitles.map((r) => (
              <Title>
                <DivCenter>{r}</DivCenter>
              </Title>
            ))}
          {view === "Planner" &&
            plannerTitles.map((p) => (
              <Title>
                <DivCenter>{p}</DivCenter>
              </Title>
            ))}
        </HeaderPlanilha>

        <ContainerRemarks>
          {remarkList &&
            view === "Remark" &&
            remarkList.map((r, index) => (
              <RemarkCard key={index} index={index} remark={r} />
            ))}
          {plannerList &&
            view === "Planner" &&
            plannerList.map((p, index) => (
              <PlannerCards key={index} index={index} planner={p} />
            ))}
        </ContainerRemarks>
      </ContainerPlanilha>
    </Container>
  );
};

export default ContainerRemarkReport;

const Options = [
  { id: 1, value: 1, label: "Remark" },
  { id: 2, value: 2, label: "Planner" },
];

const remarkTitles = [
  "User",
  "Client",
  "Subject",
  "Remark",
  "Initial Date",
  "Final Date",
];

const plannerTitles = [
  "User",
  "Client",
  "Subject",
  "Date",
  "Created By",
  "Status",
];
