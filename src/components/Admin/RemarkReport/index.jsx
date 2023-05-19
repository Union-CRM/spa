import React,{useState,useEffect} from 'react'
import { Container, 
  Header, 
  InputDate, 
  Label, 
  DivDate, 
  DivSelect, 
  ContainerPlanilha,
  HeaderPlanilha,
  Title,
  DivButtons,
  ButtonPesquisar,
  ButtonExportar,
  ContainerRemarks,
  Total,
  } from "./styles";
import { useUserContext } from '../../../hook/useUserContext';
import { useRemarkContext } from '../../../hook/useRemarkContent';
import SingleSelect from '../../Geral/Input/SingleSelect';
import RemarkCard from './RemarkCards/index';
import * as XLSX from 'xlsx';

const ContainerRemarkReport = () => {
    const {user,userList,loadUserList}= useUserContext();
    const {remark} = useRemarkContext();
    const [userTarget, setUserTarget] = useState({label:""});
    const [userOptions, setUserOptions] = useState([]);
    const [startDate,setStartDate] = useState();
    const [endDate,setEndDate] = useState();
    const [flagEndDate,setFlagEndDate]= useState(false);
    const [flagStartDate,setFlagStartDate]= useState(false);
    const [remarkList,setRemarkList] = useState();
    
    useEffect(()=>{
        loadUserList();
    },[])
    
    useEffect(()=>{
        if(userList){
            setUserOptions([{id:user.id,value:user.id,label:user.name},...userList.map((u)=>{return{id:u.id,value:u.id,label:u.name}})])
        }
    },[userList])

    const selectUser = (id)=>{
        setUserTarget(userOptions.filter((u)=> u.value===id )[0])
    }    
    //console.log(remark)
    const handleCreateReport =()=>{
        setRemarkList(filter())
    }


    const handleDownload = () => {
        // Cria um novo arquivo Excel
       const workbook = XLSX.utils.book_new();
        // Cria um novo conjunto de dados
        let data=[]
        try{
            data=[["User","Client","Subject","Remark","Initial Date","Final Date"],...filter().map(r=>{return [r.user_name,r.client_name,r.subject_name,r.remark_name,r.date.split("T")[0],r.date_return.split("T")[0]]})]
        }catch{
            console.error("Error")
        }
        // Converte os dados em uma planilha
        const worksheet = XLSX.utils.aoa_to_sheet(data);
        // Adiciona a planilha ao arquivo Excel
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Dados');
        // Salva o arquivo Excel
        const filename = `remarkReport${new Date()}.xlsx`;
        XLSX.writeFile(workbook, filename);
       
     };

     const filter=()=>{
          if(userTarget.label){
            if(startDate && endDate){ // duas datas
                //verificação data final
                if(endDate >= startDate){ 
                    setFlagEndDate(false);
                    return remark.filter((r)=> (r.date >= startDate) && (r.date <= endDate) && (r.user_id === userTarget.id))           
                }else{
                    setFlagEndDate(true);
                }                   
            }else if(startDate){ // somente da inicial
                setFlagEndDate(false);
                return(remark.filter((r)=> r.date >= startDate && r.user_id === userTarget.id)) 
            }else if(!startDate && endDate){ // somente data final
                setFlagStartDate(true)
            }
            else{ // somente usuario
                return(remark.filter((r)=> r.user_id === userTarget.value))
                
            }
        } // Busca por data
        else if(startDate && endDate){
            //verificação data final
            if(endDate > startDate){
                return(remark.filter((r)=> r.date >= startDate && r.date <= endDate )) 
                setFlagEndDate(false);
            }else{
                setFlagEndDate(true);
            }
        }else{ //busca geral
            return(remark)
        }  
     }


    return (
        <Container>
          <Header>
              <DivSelect>
              {<SingleSelect 
                set={(u) => selectUser(u)}
                placeholder={ "" }
                label={"User"} 
                sizeSingle={"100%"} 
                options={userOptions}
                value={userTarget.label}
              />}             
              </DivSelect>
              <DivDate>
              <Label>Start Date</Label>
              <InputDate type="date" onChange={(s) => setStartDate(s.target.value)}/>
              </DivDate>
              <DivDate>
              <Label>End Date</Label>
              <InputDate
                type="date"
                onChange={(e) => setEndDate(e.target.value)}
                required={(flagEndDate) || (flagEndDate) && !endDate ? true : false}
                />
              </DivDate>
              <DivButtons>
                <ButtonPesquisar
                    onClick={handleCreateReport}>
                  Search
                </ButtonPesquisar>
                <ButtonExportar
                    onClick={handleDownload}>
                  Export
                </ButtonExportar>  
              </DivButtons>
          </Header>
          <Total>Total Remarks: {remarkList ? remarkList.length: 0}</Total> 
          <ContainerPlanilha>
            <HeaderPlanilha>
                <Title>
                  User
                </Title>
                <Title>
                  Client
                </Title>
                <Title>
                  Subject
                </Title>
                <Title>
                  Remark
                </Title>
                <Title>
                  Initial Date
                </Title>
                <Title>
                  Final Date
                </Title>
            </HeaderPlanilha>
            <ContainerRemarks>
                {remarkList && remarkList.map((r, index)=><RemarkCard key={index} remark={r} />)}
            </ContainerRemarks>
          </ContainerPlanilha> 
        </Container>
    )
}

export default ContainerRemarkReport