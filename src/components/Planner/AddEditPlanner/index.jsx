import React, {useState, useEffect} from 'react'
import Clock from '../../Geral/Input/clock';
import { TagComponent } from '../../Geral/TagComponent';
import ButtonDefault from '../../../assets/Buttons/ButtonDefault'
import SingleSelect from '../../Geral/Input/SingleSelect';
import { useClientContext } from "../../../hook/useClientContent";
import {usePlannerContext} from "../../../hook/usePlannerContext";
import {useSubjectContext} from "../../../hook/useSubjectContent";
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
      const subjectOption = subjectList.filter((s)=>s.status==="Progress").map((s)=>({id:s.id,value:s.id,label:s.title}))
      const { client: clientList} = useClientContext();
      const clientOption = clientList.filter((c)=>c.status==="Active").map((c)=>({id:c.id,value:c.id,label:c.client}))
      const [date,setDate]= useState();
      const [timeStart, setTimeStart] = useState();
      const [timeFinish, setTimeFinish] = useState();
      const [guest,setGuest]= useState([]);
      const {planner: plannerList, setPlanner: setPlannerList, plannerEdit,setPlannerEdit} = usePlannerContext();
      const [status,setStatus]=useState("SCHEDULED")
      const {setModalSave , modalEdit, setModalEdit, modalDiscard, setModalDiscard, setModalCreate, setModalRemark, setModalReschedule} =  usePlannerContext()
      
      console.log(status)

      useEffect(()=>{
        if(modalEdit){
          const p = plannerList.filter((p)=>  p.id === modalEdit) [0];
          const y= p.date.getFullYear();
          const m= p.date.getMonth()+1 <10 ? `0${p.date.getMonth()+1}`: p.date.getMonth()+1;
          const d= p.date.getDate()<10 ? `0${p.date.getDate()}` : p.date.getDate(); 
          setStatus(p.status)
          setDate(y+"-"+m+"-"+d);
          setTimeFinish(p.duration)
          setTimeStart(p.date.toLocaleTimeString())
          handleSelectSubject(p.subject_id);
        }
        
      },[])

    const StatusOption = [
      {id: 1, value: "SCHEDULED", label: "Scheduled"},
      {id: 2, value: "DONE", label: "Done"},
      {id: 3, value: "CANCELED", label: "Canceled"},
    ]


    const handleSelectSubject=(id)=>{
        setSubjectObj(subjectList.filter((s)=>s.id===id)[0])
    }

    const handleSubmit=(e)=>{
      e.preventDefault();
      if(!modalEdit){
        createPlanner();
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

  const createPlanner=()=>{
    const newPlanner = {
      id: getId(),
      subject: subjectObj.title,
      date: new Date(date +" "+ timeStart),
      duration: timeFinish,
      subject_id: subjectObj.id,
      subject: subjectObj.title,
      remark_id: null,
      client_id: subjectObj.client_id,
      client:subjectObj.client,
      client_email:subjectObj.client_email,
      release_id: subjectObj.release_id,
      release: subjectObj.release_name,
      status:"SCHEDULED",
      user_id: 21345678,
      user: "joão da silva",
      guest:guest.map((g)=>({id:g.value,name:g.label}))
    };
    setPlannerList([...plannerList,newPlanner]);
    setModalSave(true);
    setModalCreate(false);
    setModalReschedule(false)
  }


  const editPlanner=()=>{
      if(status === "SCHEDULED"){
        setModalEdit(false)
      }else{
        setPlannerEdit({status:status})
        setModalRemark(true)
        setModalEdit(false)
      }

          /*if (newPlanner) {
          if(newPlanner.status === "Canceled" || "Finished" ) {
            setModalRemark(true)
          }else {
            setModalRemark(false)
          }
        }*/
    /*const id=1;
    if (id)
    if(id === "Canceled" || "Finished" ) {
      setModalRemark(true)
      setOpenModal(false);
    }else {
      setModalRemark(false)
      setOpenModal(false);
    }*/
    
  }
    return (
    <Container>
        <PositionTitle>
            {title}
        </PositionTitle>
        <Form onSubmit={handleSubmit}>
            <PositionInputs>
                {!modalEdit && (<SingleSelect 
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
                      <InputPlanner type="text" placeholder="Client Name" value={subjectObj.title} disabled/>
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
                  label={"Guests"} 
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
                /*
              <SingleSelect 
                  set={(c) => setStatus(c)}
                  options={StatusOption}
                  value={"Scheduled"}
                  label={"Status"} 
                  sizeSingle={"37%"} 
                  sizeMenuList={"100%"}
                  sizeMenu={"33%"}
                  isDisabled={false}
                  sizeHeight={"3.5vh"}
              />*/)}
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