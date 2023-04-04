import { useRef, useState } from "react";
import ButtonDefault from "../../../assets/Buttons/ButtonDefault";
import {
  SevenColGrid,
  Wrapper,
  HeadDays,
  DateControls,
  StyledEvent,
  SeeMore,
  PortalWrapper,
  DivDays,
  Scheduled,
  Canceled,
  Done,
  Types,
  DivCurrentDate,
  CurrentMonth,
  DivCreatePlanner,
  PositionTodayDone,
  MonthYear,
  Container,
  Dot,
  DivPrevMonth,
  DivNextMonth,
  InputSearch,
  DivIconSearch,
  DivIconS,
  DivClose,
  PositionSubject,
} from "./styles";
import { DAYS, MOCKAPPS } from "./utils/conts";
import {
  datesAreOnSameDay,
  getDarkColor,
  getDaysInMonth,
  getMonthYear,
  getSortedDays,
  getSortedDaysDate,
  nextMonth,
  prevMonth,
  range,
  sortDays
} from "./utils/utils";
import ButtonAdd from '../../../assets/Buttons/ButtonAdd'
import ModalPlanner from "../AddEditPlanner";
import {usePlannerContext} from "../../../hook/usePlannerContext";
import IconSystem from "../../../assets/IconSystem";
import PlannerCard from "../PlannerCard";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import ModalSave from "../ModalSuccessfuly";
import ModalDiscardChanges from "../ModalDiscardChanges";
import RemarkModal from "../RemarkModal";
import PopUpCanceled from "../PopUpCanceled";
import FollowUpModal from "../FollowUpModal";
import PopUpFinished from "../PopUpFinished";
import Subject from "../../Subject/CreateEditSubjectModal";

export const BigCalender = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [numberOfEvents, setNumberOfEvents]= useState(2);
  const [showPortal, setShowPortal] = useState(false);
  const [portalData, setPortalData] = useState({});
  const [modal, setOpenModal] = useState(false);
  const [modalPlannerOfDay, setPlannerModalOfDay] = useState(false);
  const [plannerOfDay, setPlannerOfDay] = useState(false)
  //const [modalEdit, setModalEdit] = useState(false)
  const [dateTarget, setDateTarget]=useState(new Date)

  //seta os eventos
  const [events, setEvents] = useState(MOCKAPPS);
  

  const { planner: plannerList, 
    setPlanner: setPlannerList, 
    modalEdit, setModalEdit, 
    modalSave, setModalSave, 
    modalDiscard, setModalDiscard, 
    modalCreate, setModalCreate, 
    modalRemark, setModalRemark, 
    modalReschedule,
    modalFollowUp, modalPopUpCanceled,
    modalPopUpFinished, modalSubject,
  } = usePlannerContext();


  const addEvent = (date, event) => {
    if (!event.target.classList.contains("StyledEvent")) {
      const text = window.prompt("name");
      if (text) {
        date.setHours(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
        setEvents((prev) => [
          ...prev,
          { date, title: text, color: getDarkColor() }
        ]);
      }
    }
  };

  const EventWrapper = ({ children }) => {
    if (children.filter((child) => child).length){   
      //console.log(children.filter((child) => child).length)
      return (
        <>
          {children}
          {children.filter((child) => child).length >= numberOfEvents && (
            <SeeMore
              onClick={console.log()/*(e) => {
                e.stopPropagation();
                console.log("clicked p");
              }*/}
            >
              see more...
            </SeeMore>
          )}
        </>
      );}
  };


  const handleOnClickEvent = (d) => {
    setPlannerModalOfDay(true)
    setDateTarget(d)    
    
    
    //setShowPortal(true);
    //setPortalData(event);
  };

  const handleCloseModal = (event)=>{
    setPlannerModalOfDay(false);
    setModalEdit(false);
    setOpenModal(false);
    setModalSave(false);
    setModalDiscard(false);
    setModalCreate(false);
  }

  const handlePotalClose = () => setShowPortal(false);

  const handleDelete = () => {
    setEvents((prevEvents) =>
      prevEvents.filter((ev) => ev.title !== portalData.title)
    );
    handlePotalClose();
  };

  const today = new Date();

function formatDate(date, format) {
	
}

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const d = new Date();
let dayweek = weekday[d.getDay()];
let Month = month[d.getMonth()]; 


formatDate(today, 'mm/dd/aa');

//const data=new Date(date.day, date.Date, date.getMonth, date.getMonthYear)

  
  return (
    
    <Container>
    <Wrapper>
      <DateControls>
      <DivIconSearch>
      <Tippy content="Search">
                <DivIconS>
                  <IconSystem icon="Search" width={"20px"} height={"3vh"} />
                </DivIconS> 
      </Tippy>
                <InputSearch placeholder="Search..."/>
        </DivIconSearch>
       
        <DivCurrentDate onClick={() => handleOnClickEvent(new Date())}>
         {dayweek} {d.getDate()} {Month}, {d.getFullYear()} 
        </DivCurrentDate>
       <PositionTodayDone>
       <Types>
        <Done/> <span>Done</span>
        <Canceled/> <span>Canceled</span>
        <Scheduled/> <span>Scheduled</span>
       </Types>
       </PositionTodayDone>
       <CurrentMonth>
        <DivPrevMonth onClick={() => prevMonth(currentDate, setCurrentDate)}
          name="arrow-back-circle-outline">
        <IconSystem icon={"ArrowLeft"}/>
        </DivPrevMonth>
        <MonthYear>{getMonthYear(currentDate)}</MonthYear>
        <DivNextMonth onClick={() => nextMonth(currentDate, setCurrentDate)}
          name="arrow-back-circle-outline">
        <IconSystem icon={"ArrowRight"}/>
        </DivNextMonth>
        </CurrentMonth>
        <DivCreatePlanner onClick={() => setModalCreate(true)}>
          <ButtonAdd  mode={"#007BFF"} color={"#FFFFFF"} name={"Create Planner"} onClick={() => setOpenModal(true)}/>
        </DivCreatePlanner>
      </DateControls>
      <SevenColGrid>
        {DAYS.map((day) => (
          <HeadDays className="nonDRAG">{day}</HeadDays>
        ))}
      </SevenColGrid>

      <SevenColGrid
        fullheight={true}
        is28Days={getDaysInMonth(currentDate) === 28}
      >
        {getSortedDaysDate(currentDate).map((d, index) => {
          const date = new Date(d);
          const day=date.getDate();
          const month= date.getMonth();
          const year= date.getFullYear();
          const dayOfWeek=date.getDay();
          return(
            <DivDays
              id={`${year}/${month}/${day}`}          
              onClick={(e) => handleOnClickEvent(date)} //abri planner of day             
              dayColor={ 6 > dayOfWeek && dayOfWeek > 0 ? "#31374A" : "#D6700A"}
              monthColor={ month===currentDate.getMonth() ? "#E3E6ED" : "#e3e6ed7a"}      
            >
              <span className={`nonDRAG ${
                  datesAreOnSameDay(new Date(),date) ? "active": ""}`}
              >
                {day}
              </span>
              <EventWrapper>
                {plannerList.filter((planner)=> 
                  datesAreOnSameDay(planner.date, date)).map((ev,index)=>
                          index<numberOfEvents && 
                          <StyledEvent
                              onClick={() => handleOnClickEvent(date)}
                              className="StyledEvent"
                              id={`${ev.id} ${ev.subject}`}
                              key={ev.id}
                          >
                            <Dot bgColor={ev.status==="Done" ? "#07D95A" : 
                                          ev.status==="Canceled"?"#BB1E00":"#FFDE59"}></Dot>
                            <p>{ev.subject}</p>
                          </StyledEvent>)}
                        
              </EventWrapper> 
            </DivDays>
          )})}
      </SevenColGrid>
      {showPortal && (
        <Portal
          {...portalData}
          handleDelete={handleDelete}
          handlePotalClose={handlePotalClose}
        />
      )}
    </Wrapper>

  

     {modalPlannerOfDay && (
      <>
      <DivClose onClick={handleCloseModal}></DivClose>
      <PlannerCard
      date={dateTarget}
      setOpenPlannerModal={setPlannerModalOfDay}
      />
      </>     
    )} 

    {modalCreate && (
      <>
      <DivClose onClick={handleCloseModal}></DivClose>
      <ModalPlanner
        title={"Create Planner"}
        />
      </>
    )}

    {modalEdit && (
        <>
        <DivClose onClick={handleCloseModal}></DivClose>
        <ModalPlanner 
        title={"Edit Planner"}
        />
        </>
    )}  

    {modalSave && (
      <>
      <DivClose onClick={handleCloseModal} ></DivClose>
      <ModalSave onClick={handleCloseModal} />
      </>
    )}

    {modalDiscard && (
      <>
       <DivClose onClick={handleCloseModal}></DivClose>
       <ModalDiscardChanges />
      </>
    )}


    {modalPopUpCanceled && (
      <PopUpCanceled/>
    )}
    

    {modalFollowUp && (
      <>
        <FollowUpModal />
      </>
      
    )}

    {modalReschedule && (
      <>
        <ModalPlanner title={"Reschedule Planner"}/>
      </>
    )}

    {modalPopUpFinished && (
      <>
        <PopUpFinished />
      </>
    )}

    {modalSubject && (
      <>
        <PositionSubject>
          <Subject title={"Create Subject"}/>
        </PositionSubject>
      </>  
    )}
      

    </Container>
  );
};




//modal do planner of day
const Portal = ({ title, date, handleDelete, handlePotalClose }) => {
  return (
    <PlannerCard date={date}>
      <h2>Planner Of Day</h2>
      <h2>{title}</h2>
      <p>{date.toDateString()}</p>
      <ion-icon onClick={handleDelete} name="trash-outline"></ion-icon>
      <ion-icon onClick={handlePotalClose} name="close-outline"></ion-icon>
    </PlannerCard>
  );
};
