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
import { useClientContext } from "../../../hook/useClientContent";
import SingleSelect from "../../Geral/Input/SingleSelect";
import RemarkCard from "./RemarkCards/index";
import PlannerCards from "./PlannerCards/index";
import ClientsCards from "./ClientCards/index";
import * as XLSX from "xlsx";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { ReactComponent as Info } from "../../../assets/svg/Info.svg";

const ContainerRemarkReport = () => {
  const { user, userList, loadUserList } = useUserContext();
  const { remark } = useRemarkContext();
  const { planner } = usePlannerContext();
  const { client } = useClientContext();
  const [userTarget, setUserTarget] = useState({ label: "" });
  const [userOptions, setUserOptions] = useState([]);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [flagEndDate, setFlagEndDate] = useState(false);
  const [flagStartDate, setFlagStartDate] = useState(false);
  const [remarkList, setRemarkList] = useState([]);
  const [plannerList, setPlannerList] = useState([]);
  const [clientList, setClientList] = useState([])
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
                c.superintendent

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
      if(option.label ==="Client"){
        return opt.filter((r) => r.user_id === userTarget.value);
      }
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

  const [orderRemark,setOrderRemark]=useState("user_name")
  const [orderPlanner, setOrderPlanner] = useState("")
  const [orderClient, setOrderClient] = useState("")
  const handleSelectOrder=(i)=>{
    setOrderRemark(remarkOrder[i])
    setOrderPlanner(plannerOrder[i])
    setOrderClient(clientOrder[i])
  }

  const FilterClient = ()=>{
    let projectManager = client.filter((c)=> c.role_id===12);
    let superintendent = client.filter((c)=> c.role_id===13);
    let director = client.filter((c)=> c.role_id===14);
    if(userTarget.label){
      return client.map((c)=>{
        const pm = projectManager.filter((pm)=> pm.release_id===c.release_id).length>0 ? projectManager.filter((pm)=> pm.release_id===c.release_id)[0].client : " ";
        const sup = superintendent.filter((s)=> s.release_id===c.release_id).length>0 ? superintendent.filter((sup)=> sup.release_id===c.release_id)[0].client : " ";
        const dir = director.filter((d)=> d.release_id===c.release_id).length>0 ? director.filter((d)=> d.release_id===c.release_id)[0].client : " ";
        return {...c, projectManager:pm, superintendent: sup,director:dir}; 
    }).filter((r) => r.user_id === userTarget.value)

    }
    return client.map((c)=>{
        const pm = projectManager.filter((pm)=> pm.release_id===c.release_id).length>0 ? projectManager.filter((pm)=> pm.release_id===c.release_id)[0].client : " ";
        const sup = superintendent.filter((s)=> s.release_id===c.release_id).length>0 ? superintendent.filter((sup)=> sup.release_id===c.release_id)[0].client : " ";
        const dir = director.filter((d)=> d.release_id===c.release_id).length>0 ? director.filter((d)=> d.release_id===c.release_id)[0].client : " ";
        return {...c, projectManager:pm, superintendent: sup,director:dir}; 
    })
  
  }

  const handleCreateReport = () => {
    switch(option.value){
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
    }
    setView(option.label);
    setOrderClient("user")
    setOrderRemark("user_name")
    setOrderPlanner("user")
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
        {option.label !=="Client" && <DivDate>
          <Label>Start Date</Label>
          <InputDate
            type="date"
            onChange={(s) => setStartDate(s.target.value)}
          />
        </DivDate>}
        {option.label !== "Client" &&<DivDate>
          <Label>End Date</Label>
          <InputDate
            type="date"
            onChange={(e) => setEndDate(e.target.value)}
            required={flagEndDate || (flagEndDate && !endDate) ? true : false}
          />
        </DivDate>}
        <DivButtons>
          <ButtonPesquisar onClick={handleCreateReport}>Search</ButtonPesquisar>
          <ButtonExportar onClick={handleDownload}>Export</ButtonExportar>
        </DivButtons>
      </Header>
      <Total>
        <span>Total</span>
        {view}:{" "}
        <DivNumber>
          ({view === "Remark" ? remarkList.length : 
            view === "Planner" ? plannerList.length: clientList.length})
        </DivNumber>
      </Total>
      <ContainerPlanilha>
        <HeaderPlanilha>
          {view === "Remark" &&
            remarkTitles.map((r,index) => (
              <Title key={index}>
                <DivCenter onClick={()=>handleSelectOrder(index)}>{r}</DivCenter>
              </Title>
            ))}
          {view === "Planner" &&
            plannerTitles.map((p,index) => (
              <Title key={index} onClick={()=>handleSelectOrder(index)}>
                <DivCenter>{p}</DivCenter>
              </Title>
            ))}
            {view === "Client" &&
              clientTitles.map((c,index) =>(
                <Title key={index}>
                <DivCenter onClick={()=>handleSelectOrder(index)}>{c}</DivCenter>
              </Title>
              ))}
        </HeaderPlanilha>

        <ContainerRemarks>
          {remarkList &&
            view === "Remark" &&
            remarkList.sort((a, b) => (a[orderRemark] || "").localeCompare(b[orderRemark] || "")).map((r, index) => (
              <RemarkCard key={index} index={index} remark={r} />
            ))}
          {plannerList &&
            view === "Planner" &&
            plannerList.sort((a, b) => (a[orderPlanner] || "").localeCompare(b[orderPlanner] || "")).map((p, index) => (
              <PlannerCards key={index} index={index} planner={p} />
            ))}
          {clientList &&
            view === "Client" &&
            clientList.sort((a, b) => (a[orderClient] || "").localeCompare(b[orderClient] || "")).map((c, index) => (
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

const remarkOrder =[
  "user_name",
  "client_name",
  "subject_name",
  "remark_name",
  "date",
  "date_return",
];

const plannerOrder =[
  "user",
  "client",
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


