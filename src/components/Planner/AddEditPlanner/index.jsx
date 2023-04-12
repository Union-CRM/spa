import React, {useState, useEffect} from 'react'
import Clock from '../../Geral/Input/clock';
import { TagComponent } from '../../Geral/TagComponent';
import ButtonDefault from '../../../assets/Buttons/ButtonDefault'
import SingleSelect from '../../Geral/Input/SingleSelect';
import { useClientContext } from "../../../hook/useClientContent";
import {usePlannerContext} from "../../../hook/usePlannerContext";
import {useSubjectContext} from "../../../hook/useSubjectContent";
import { useFetchPlanner } from '../../../hook/useFetchPlanner';
import {useUserContext} from "../../../hook/useUserContext"
import { Container,
     PositionButtonSave,
     PositionButtonCancel, 
     PositionTitle,
     InputPlanner,
     InputStatus,
     PositionInputs,
     PositionLabel,
     DivClocks,
     Form,
     PositionTags,
     PositionStatus,
     DivDate,
     InputDate,
     DivStart,
     DivFinish,
     LabelDate,
     PositionButtons,
      
     } from './styles'
import ModalDiscardChanges from '../ModalDiscardChanges';
import ModalSave from '../ModalSuccessfuly';


const ModalPlanner = ({ title, setOpenModal }) => {
      const [subjectObj,setSubjectObj]=useState({});
      const {subject: subjectList}=useSubjectContext();
      const [subjectOption, setSubjectOption] = useState([])
      const { client: clientList} = useClientContext();
      const clientOption = clientList.filter((c)=>c.status==="Active").map((c)=>({id:c.id,value:c.id,label:c.client}))
      const [date,setDate]= useState();
      const [timeStart, setTimeStart] = useState();
      const [timeFinish, setTimeFinish] = useState();
      const [guest,setGuest]= useState([]);
      const {planner: plannerList, setPlanner: setPlannerList, plannerEdit,setPlannerEdit} = usePlannerContext();
      const [status,setStatus]=useState("SCHEDULED")
      const {setModalSave , modalEdit, setModalEdit, modalDiscard, setModalDiscard, setModalCreate, setModalRemark, setModalReschedule} =  usePlannerContext()
      const {createPlanner} = useFetchPlanner();
      const {user} = useUserContext();
      useEffect(()=>{
        setSubjectOption(subjectList.filter((s)=>s.status==="IN PROGRESS").map((s)=>({id:s.id,value:s.id,label:s.subject_title})))
      },[subjectList])


      useEffect(()=>{
        if(modalEdit){
          const p = plannerList.filter((p)=>  p.id === modalEdit) [0];
          const date = new Date(p.date)
          const y= date.getFullYear();
          const m= date.getMonth()+1 <10 ? `0${date.getMonth()+1}`: date.getMonth()+1;
          const d= date.getDate()<10 ? `0${date.getDate()}` : date.getDate(); 
          setStatus(p.status)
          setDate(y+"-"+m+"-"+d);
          setTimeFinish(p.duration)
          setTimeStart(date.toLocaleTimeString())
          handleSelectSubject(p.subject_id);
          setGuest(p.guest?p.guest.map((g)=>({value:g.client_id,label:g.client_name})):[])
        }
        
      },[])
    
    const StatusOption = [
      {id: 18, value: "SCHEDULED", label: "SCHEDULED"},
      {id: 16, value: "DONE", label: "DONE"},
      {id: 17, value: "CANCELED", label: "CANCELED"},
    ]

    
    const handleSelectSubject=(id)=>{
        setSubjectObj(subjectList.filter((s)=>s.id===id)[0])
    }

    const handleSubmit=(e)=>{
      e.preventDefault();
      if(!modalEdit){
        HandleCreatePlanner();
      }else{
        editPlanner();
      }
    }

  function getId() {
    let lastId = 1;
    plannerList.map((p) => {
      lastId = p.id > lastId ? p.id : lastId;
    });
    return lastId + 1;
  }

  const HandleCreatePlanner=()=>{
    const newPlanner = {
      name:subjectObj.subject_title,
      date:date +" "+ timeStart,
      duration: timeFinish,
      subject:subjectObj.id,
      client:subjectObj.client_id,
      release:subjectObj.release_id,
      user:user.id,
      guest:guest.map((g)=>({client_id:g.value}))
    };
    createPlanner(newPlanner);
    //setPlannerList([...plannerList,newPlanner]);
    //setModalSave(true);
    //setModalCreate(false);
    //setModalReschedule(false)
  }


  const editPlanner=()=>{
    const newPlanner = {
      name:subjectObj.subject_title,
      date:date +" "+ timeStart,
      duration: timeFinish,
      subject:subjectObj.id,
      client:subjectObj.client_id,
      release:subjectObj.release_id,
      user:user.id,
      status:status,
      guest:guest.map((g)=>({id:g.value}))
    };
      if(status === "SCHEDULED"){
        setModalEdit(false)
      }else{    
        
        setPlannerEdit(newPlanner)
        setModalRemark(true)
        setModalEdit(false)
      }
  }
    return (
    <Container>
        <PositionTitle>
            {title}
        </PositionTitle>
        <Form onSubmit={handleSubmit}>
            <PositionInputs>
                {!modalEdit && (<SingleSelect 
                    placeholder={""}
                    set={(s) => handleSelectSubject(s)}
                    options={subjectOption} 
                    name={"subject"} 
                    label={"Subject"} 
                    sizeHeight={"3.5vh"}
                    sizeSingle={"26vw"} 
                    required
                    onChange={(s) => handleSelectSubject(s)}/>)}
                {modalEdit &&(
                    <>
                      <PositionLabel>Subject</PositionLabel>
                      <InputPlanner type="text" placeholder="Client Name" value={subjectObj.subject_title} disabled/>
                    </>)}
                <PositionLabel>Client Name</PositionLabel>
                <InputPlanner type="text" placeholder="Client Name" value={subjectObj.client} disabled/>
                <PositionLabel>Email</PositionLabel>
                <InputPlanner type="text" placeholder="Email" value={subjectObj.client_email} disabled/>
                <PositionLabel>Business</PositionLabel>
                <InputPlanner type="text" placeholder="Business" value={subjectObj.business} disabled/>
                <PositionLabel>Release Train</PositionLabel>
                <InputPlanner  type="text" placeholder="Business" value={subjectObj.release} disabled/>
            </PositionInputs>
            <DivClocks>
              <DivDate>
                <LabelDate>Date</LabelDate>
                <InputDate defaultValue={date} type="Date" name="date" onChange={(e)=> setDate(e.target.value)} required></InputDate>
              </DivDate>
              <DivStart>
                <LabelDate>Start</LabelDate>
                <InputDate defaultValue={timeStart} type="time" name="time" onChange={(e) => setTimeStart(e.target.value)} required></InputDate>
              </DivStart>
              <DivFinish>
                <LabelDate>Finish</LabelDate>
                <InputDate defaultValue={timeFinish} type="time" name="time-finish" onChange={(e) => setTimeFinish(e.target.value)} required></InputDate>
              </DivFinish>
              
            </DivClocks>
            <PositionTags>
              <TagComponent options={clientOption}
                  placeholder={""}
                  label={"Guests"}
                  tags={guest} 
                  width={"90%"}
                  widths={"13vw"}
                  set={(g)=> setGuest(g)}
                  sizeHeight={"3.5vh"}
                  heights={"105px"}
                  sizeMenuList={"10vw"}
                  sizeMenu={"35%"}/>
            </PositionTags>
            <PositionStatus>
              {modalEdit && ( 
              <SingleSelect 
                  
                  set={(c) => setStatus(c)}
                  options={StatusOption}
                  value={status}
                  label={"Status"} 
                  sizeSingle={"37%"} 
                  sizeMenuList={"100%"}
                  sizeMenu={"33%"}
                  isDisabled={false}
                  sizeHeight={"3.5vh"}
              />)}
              {!modalEdit && ( 
               <>
               <PositionLabel>Status</PositionLabel>
                <InputStatus placeholder="Status" value="Scheduled" disabled/>
                </>
                )}
            </PositionStatus>

            <PositionButtons>
              <PositionButtonCancel onClick={() => setModalDiscard(true)}>
                <ButtonDefault type={"userCancel"} name={"Cancel"} sizeWidth={"11vw"} onClick={() => setModalDiscard(true)}/>
              </PositionButtonCancel>
              <PositionButtonSave>
                <ButtonDefault type={"userSave"} name={"Save"} sizeWidth={"11vw"} />
              </PositionButtonSave>
            </PositionButtons>
        </Form>
    </Container>
  )
}

export default ModalPlanner