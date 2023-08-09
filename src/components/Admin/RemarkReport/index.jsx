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
  PositionArrow,
  DivCenter,
  DivSvg,
  DivMsg,
  DivDates,
} from "./styles";
import { ReactComponent as ArrowDown } from "../../../assets/svg/Drop.svg";
import { ReactComponent as UpArrow } from "../../../assets/svg/UpArrow.svg";
import { ReactComponent as AZdown } from "../../../assets/svg/AZDown.svg.svg";
import { ReactComponent as AZup } from "../../../assets/svg/AZUp.svg";
import { useUserContext } from "../../../hook/useUserContext";
import { useRemarkContext } from "../../../hook/useRemarkContent";
import { usePlannerContext } from "../../../hook/usePlannerContext";
import { useClientContext } from "../../../hook/useClientContent";
import SingleSelect from "../../Geral/Input/SingleSelect";
import RemarkCard from "./RemarkCards/index";
import PlannerCards from "./PlannerCards/index";
import ClientsCards from "./ClientCards/index";
import * as XLSX from "xlsx";
import { ReactComponent as Search } from "../../../assets/svg/Search.svg";
import { ReactComponent as Download } from "../../../assets/svg/Download.svg";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { ReactComponent as Info } from "../../../assets/svg/Info.svg";
import { TagComponent } from "../../Geral/TagComponent";
import { ReactComponent as CalendarUp } from "../../../assets/svg/CalendarUP.svg";
import { ReactComponent as CalendarDown } from "../../../assets/svg/CalendarDown.svg";

const ContainerRemarkReport = () => {
  const { user, userList, loadUserList } = useUserContext();
  const { remark } = useRemarkContext();
  const { planner } = usePlannerContext();
  const { client } = useClientContext();
  const [userOptions, setUserOptions] = useState([]);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [flagEndDate, setFlagEndDate] = useState(false);
  const [flagStartDate, setFlagStartDate] = useState(false);
  const [remarkList, setRemarkList] = useState([]);
  const [plannerList, setPlannerList] = useState([]);
  const [clientList, setClientList] = useState([]);
  const [option, setOption] = useState({ value: 1, label: "Remark" });
  const [view, setView] = useState("Remark");
  const [users, setUsers] = useState([]);

  //const [arrow, setArrow] = useState(false);
  console.log(planner);

  useEffect(() => {
    loadUserList();
  }, []);

  useEffect(() => {
    if (userList) {
      setUserOptions([
        { id: user.id, value: user.id, label: user.name },
        ...userList
          .sort((a, b) => (a.name || "").localeCompare(b.name || ""))
          .map((u) => {
            return { id: u.id, value: u.id, label: u.name };
          }),
      ]);
    }
  }, [userList]);

  const handleSelectOption = (value) => {
    setOption(Options.filter((o) => o.value === value)[0]);
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
              "Client Role",
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
                r.client_role_name,
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
              "Client Role",
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
                r.client_role_name,
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

        case "Client":
          data = [
            [
              "Client",
              "Business",
              "Release Train",
              "User Name",
              "Project Manager",
              "Director",
              "Superintendent",
            ],
            ...FilterClient(client).map((c) => {
              return [
                c.client,
                c.textBusiness,
                c.textRelease,
                c.user_name,
                c.projectManager,
                c.director,
                c.superintendent,
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
    if (users.length > 0) {
      const usersIds = users.map((u) => u.value);
      if (startDate && endDate) {
        // duas datas
        //verificação data final
        if (endDate >= startDate) {
          setFlagEndDate(false);
          return opt.filter(
            (r) =>
              r.date.split("T")[0].split(" ")[0] >= startDate &&
              r.date.split("T")[0].split(" ")[0] <= endDate &&
              usersIds.includes(r.user_id)
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
            usersIds.includes(r.user_id)
        );
      } else if (!startDate && endDate) {
        // somente data final
        setFlagStartDate(true);
      } else {
        // somente usuario
        return opt.filter((r) => usersIds.includes(r.user_id));
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

  const [orderRemark, setOrderRemark] = useState("user_name");
  const [orderPlanner, setOrderPlanner] = useState("");
  const [orderClient, setOrderClient] = useState("");
  const [order, setOrder] = useState(false); //false -- crescente  // true -- decrescente
  const [arrow, setArrow] = useState(Array(10).fill(false));
  const handleSelectOrder = (i) => {
    setOrderRemark(remarkOrder[i]);
    setOrderPlanner(plannerOrder[i]);
    setOrderClient(clientOrder[i]);
    const updatedArrow = arrow.map((value, index) =>
      index === i ? !value : false
    );
    setOrder(updatedArrow[i]);
    setArrow(updatedArrow);
  };
  //console.log(order);

  const FilterClient = () => {
    let projectManager = client.filter((c) => c.role_id === 12);
    let superintendent = client.filter((c) => c.role_id === 13);
    let director = client.filter((c) => c.role_id === 14);
    if (users.length > 0) {
      const usersIds = users.map((u) => u.value);
      return client
        .map((c) => {
          const pm =
            projectManager.filter((pm) => pm.release_id === c.release_id)
              .length > 0
              ? projectManager.filter((pm) => pm.release_id === c.release_id)[0]
                  .client
              : " ";
          const sup =
            superintendent.filter((s) => s.release_id === c.release_id).length >
            0
              ? superintendent.filter(
                  (sup) => sup.release_id === c.release_id
                )[0].client
              : " ";
          const dir =
            director.filter((d) => d.release_id === c.release_id).length > 0
              ? director.filter((d) => d.release_id === c.release_id)[0].client
              : " ";
          return {
            ...c,
            projectManager: pm,
            superintendent: sup,
            director: dir,
          };
        })
        .filter((r) => usersIds.includes(r.user_id));
    }
    return client.map((c) => {
      const pm =
        projectManager.filter((pm) => pm.release_id === c.release_id).length > 0
          ? projectManager.filter((pm) => pm.release_id === c.release_id)[0]
              .client
          : " ";
      const sup =
        superintendent.filter((s) => s.release_id === c.release_id).length > 0
          ? superintendent.filter((sup) => sup.release_id === c.release_id)[0]
              .client
          : " ";
      const dir =
        director.filter((d) => d.release_id === c.release_id).length > 0
          ? director.filter((d) => d.release_id === c.release_id)[0].client
          : " ";
      return { ...c, projectManager: pm, superintendent: sup, director: dir };
    });
  };

  const handleCreateReport = () => {
    switch (option.value) {
      case 1:
        setRemarkList(Filter(remark));
        break;
      case 2:
        setPlannerList(Filter(planner));
        break;
      case 3:
        setClientList(Filter(client));
        setClientList(FilterClient());
        break;
      default:
        break;
    }
    setView(option.label);
    setOrderClient("user");
    setOrderRemark("user_name");
    setOrderPlanner("user");
    //console.log(Filter(planner));
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
              <TagComponent
                label={"Users"}
                sizeMenu={"100%"}
                width={"10em"}
                widths={"13.5em"}
                heights={"10vh"}
                marginLeft={"110%"}
                tags={users}
                set={(u) => setUsers(u)}
                options={userOptions ? userOptions : []}
                placeholder={""}
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
        <DivDates>
          {option.label !== "Client" && (
            <DivDate>
              <Label>Start Date</Label>
              <InputDate
                type="date"
                onChange={(s) => setStartDate(s.target.value)}
              />
            </DivDate>
          )}
          {option.label !== "Client" && (
            <DivDate>
              <Label>End Date</Label>
              <InputDate
                type="date"
                onChange={(e) => setEndDate(e.target.value)}
                required={
                  flagEndDate || (flagEndDate && !endDate) ? true : false
                }
              />
            </DivDate>
          )}
        </DivDates>
        <DivButtons>
          <ButtonPesquisar onClick={handleCreateReport}>
            <DivSvg>
              <Search fill={"#FFFFFF"} />
            </DivSvg>
            <DivMsg>Search</DivMsg>
          </ButtonPesquisar>
          <ButtonExportar onClick={handleDownload}>
            <DivSvg>
              <Download fill={"#E41165"} />
            </DivSvg>
            <DivMsg>Export</DivMsg>
          </ButtonExportar>
        </DivButtons>
      </Header>
      <Total>
        <span>Total</span>
        {view}:{" "}
        <DivNumber>
          (
          {view === "Remark"
            ? remarkList.length
            : view === "Planner"
            ? plannerList.length
            : clientList.length}
          )
        </DivNumber>
      </Total>
      <ContainerPlanilha>
        <HeaderPlanilha>
          {view === "Remark" &&
            remarkTitles.map((r, index) => (
              <Title key={index}>
                <DivCenter onClick={() => handleSelectOrder(index)}>
                  {r}

                  <PositionArrow name="seta">
                    {!arrow[index] && [index] < 6 && <AZdown fill={"#ffFF"} />}
                    {!arrow[index] && [index] > 5 && (
                      <CalendarDown fill={"#ffFF"} />
                    )}
                    {arrow[index] && [index] < 6 && <AZup fill={"#ffFF"} />}
                    {arrow[index] && [index] > 5 && (
                      <CalendarUp fill={"#ffFF"} />
                    )}
                  </PositionArrow>
                </DivCenter>
              </Title>
            ))}
          {view === "Planner" &&
            plannerTitles.map((p, index) => (
              <Title key={index} onClick={() => handleSelectOrder(index)}>
                <DivCenter>
                  {p}

                  <PositionArrow name="seta">
                    {!arrow[index] && [index] < 4 && <AZdown fill={"#ffFF"} />}
                    {!arrow[index] && [index] > 4 && <AZdown fill={"#ffFF"} />}
                    {arrow[index] && [index] < 4 && <AZup fill={"#ffFF"} />}
                    {arrow[index] && [index] > 4 && <AZup fill={"#ffFF"} />}
                    {!arrow[index] && index === 4 && (
                      <CalendarDown fill={"#ffFF"} />
                    )}
                    {arrow[index] && index === 4 && (
                      <CalendarUp fill={"#ffFF"} />
                    )}
                  </PositionArrow>
                </DivCenter>
              </Title>
            ))}
          {view === "Client" &&
            clientTitles.map((c, index) => (
              <Title key={index}>
                <DivCenter onClick={() => handleSelectOrder(index)}>
                  {c}

                  <PositionArrow name="seta">
                    {!arrow[index] && <AZdown fill={"#ffFF"} />}
                    {arrow[index] && <AZup fill={"#ffFF"} />}
                  </PositionArrow>
                </DivCenter>
              </Title>
            ))}
        </HeaderPlanilha>

        <ContainerRemarks>
          {remarkList &&
            view === "Remark" &&
            remarkList
              .sort((a, b) =>
                !order
                  ? (a[orderRemark] || "").localeCompare(b[orderRemark] || "")
                  : (b[orderRemark] || "").localeCompare(a[orderRemark] || "")
              )
              .map((r, index) => (
                <RemarkCard key={index} index={index} remark={r} />
              ))}
          {plannerList &&
            view === "Planner" &&
            plannerList
              .sort((a, b) =>
                !order
                  ? (a[orderPlanner] || "").localeCompare(b[orderPlanner] || "")
                  : (b[orderPlanner] || "").localeCompare(a[orderPlanner] || "")
              )
              .map((p, index) => (
                <PlannerCards key={index} index={index} planner={p} />
              ))}
          {clientList &&
            view === "Client" &&
            clientList
              .sort((a, b) =>
                !order
                  ? (a[orderClient] || "").localeCompare(b[orderClient] || "")
                  : (b[orderClient] || "").localeCompare(a[orderClient] || "")
              )
              .map((c, index) => (
                <ClientsCards key={index} index={index} client={c} />
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
  { id: 3, value: 3, label: "Client" },
];

const clientTitles = [
  "Client",
  "Business",
  "Release Train",
  "User Name",
  "Project Manager",
  "Director",
  "Superintendent",
];

const remarkTitles = [
  "User",
  "Client",
  "Role",
  "Release Train",
  "Subject",
  "Remark",
  "Initial Date",
  "Final Date",
];

const plannerTitles = [
  "User",
  "Client",
  "Role",
  "Subject",
  "Date",
  "Created By",
  "Status",
];

const remarkOrder = [
  "user_name",
  "client_name",
  "client_role_name",
  "release_name",
  "subject_name",
  "remark_name",
  "date",
  "date_return",
];

const plannerOrder = [
  "user",
  "client",
  "client_role_name",
  "subject",
  "date",
  "createdBy_name",
  "status",
];

const clientOrder = [
  "client",
  "textBusiness",
  "textRelease",
  "user_name",
  "projectManager",
  "director",
  "superintendent",
];
