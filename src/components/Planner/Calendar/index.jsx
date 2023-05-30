import { useState, useEffect } from "react";
import {
  SevenColGrid,
  Wrapper,
  HeadDays,
  DateControls,
  StyledEvent,
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
  DivMonth,
  DivNumberPlanner,
  Day,
  DivDayHeader,
} from "./styles";
import { DAYS, month } from "./utils/conts";
import {
  datesAreOnSameDay,
  getDaysInMonth,
  getMonthYear,
  getSortedDaysDate,
  nextMonth,
  prevMonth,
} from "./utils/utils";
import ButtonAdd from "../../../assets/Buttons/ButtonAdd";
import ModalPlanner from "../AddEditPlanner";
import { usePlannerContext } from "../../../hook/usePlannerContext";
import { useUserContext } from "../../../hook/useUserContext";
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
import ModalError from "../ModalError";
import { useSearchContext } from "../../../hook/useSearchContext";
import { useSubjectContext } from "../../../hook/useSubjectContent";

export const BigCalender = (props) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [numberOfEvents] = useState(2);
  const [setOpenModal] = useState(false);
  const [dateTarget, setDateTarget] = useState(new Date());
  const { subject: subjectList } = useSubjectContext();
  const {
    planner,
    modalEdit,
    modalSave,
    setModalSave,
    modalDiscard,
    setModalDiscard,
    modalCreate,
    setModalCreate,
    modalRemark,
    modalReschedule,
    modalFollowUp,
    modalPopUpFinished,
    modalSubject,
    modalPopUpCanceled,
    setModalPlanner,
    modalPlanner,
    modalError,
    setModalError,
    setModalSubject,
  } = usePlannerContext();
  const [plannerList, setPlannerList] = useState([]);
  const { user, userTarget, setUserTarget } = useUserContext();
  const { setSearch, search } = useSearchContext();
  const [searchtState, setSearchtState] = useState(false);
  const [hoverAtivo, setHoverAtivo] = useState(false);
  const [divAtiva, setDivAtiva] = useState(null)

  useEffect(() => {
    setSearch(false);
  }, []);

  useEffect(() => {
    if (search) {
      setPlannerList(
        planner
          ? planner.filter(
              (s) =>
                (s.name.toLowerCase().includes(search.toLowerCase()) ||
                  s.client.toLowerCase().includes(search.toLowerCase())) &&
                s.user_id === user.id
            )
          : []
      );
    } else {
      if (props.adminList) {
        setPlannerList(
          planner ? planner.filter((p) => p.user_id === userTarget.id)
          .sort((a, b) => (b.status || "").localeCompare(a.status || "") || (a.date || "").localeCompare(b.date || "")) : []
        );
      } else {
        setPlannerList(
          planner ? planner.filter((p) => p.user_id === user.id)
          .sort((a, b) => (b.status || "").localeCompare(a.status || "") || (a.date || "").localeCompare(b.date || ""))  : []
        );
        setUserTarget(user);
      }
    }
  }, [search, planner, userTarget]);

  useEffect(() => {
    setModalPlanner(false);
  }, []);

  const handleOnClickEvent = (d) => {
    setModalPlanner(true);
    setDateTarget(d);
  };

  const handleCloseModal = () => {
    setModalDiscard(true);
    setModalError(false);
  };

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const d = new Date();
  let dayweek = weekday[d.getDay()];
  let Month = month[d.getMonth()];

  //funcão hover trazer para trazer infos do release, subject e business
  /*const handleHover = () => {
    setHoverAtivo(!hoverAtivo)
  };*/

  //função para nao ativar o hover em todas as divs
  const handleMouseEnter = (id) => {
    setDivAtiva(id);
    setHoverAtivo(id);
  };

  //função para desativar o hover quando o mouse nao tiver na div
  const handleMouseLeave = () => { 
    setDivAtiva(null);
    setHoverAtivo(false);
  };

  return (
    <Container>
      <Wrapper>
        <DateControls>
          <DivIconSearch>
            <Tippy content="Search">
              <DivIconS name="search">
                <IconSystem icon="Search" fill={"color: #007bff"} width={"20px"} height={"17px"} />
              </DivIconS>
            </Tippy>
            <InputSearch
              type="search"
              onFocus={() => setSearchtState("true")}
              onBlur={() => setSearchtState("false")}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
            />
          </DivIconSearch>

          <DivCurrentDate onClick={() => handleOnClickEvent(new Date())}>
            {dayweek} {d.getDate()} {Month}, {d.getFullYear()}
          </DivCurrentDate>
          <PositionTodayDone>
            <Types>
              <Done /> <span>Done</span>
              <Canceled /> <span>Canceled</span>
              <Scheduled /> <span>Scheduled</span>
            </Types>
          </PositionTodayDone>
          <CurrentMonth>
            <DivPrevMonth
              onClick={() => prevMonth(currentDate, setCurrentDate)}
              name="arrow-back-circle-outline"
            >
              <IconSystem icon={"ArrowLeft"} />
            </DivPrevMonth>
            <MonthYear>{getMonthYear(currentDate)}</MonthYear>
            <DivNextMonth
              onClick={() => nextMonth(currentDate, setCurrentDate)}
              name="arrow-back-circle-outline"
            >
              <IconSystem icon={"ArrowRight"} />
            </DivNextMonth>
          </CurrentMonth>
          <DivCreatePlanner onClick={() => setModalCreate(true)}>
            <ButtonAdd
              height={"4.8vh"}
              width={"45%"}
              mode={"#007BFF"}
              color={"#FFFFFF"}
              name={"Create Planner"}
              onClick={() => setOpenModal(true)}
            />
          </DivCreatePlanner>
        </DateControls>
        <DivMonth>
          <SevenColGrid>
            {DAYS.map((day, index) => (
              <HeadDays key={index} className="nonDRAG">
                {day}
              </HeadDays>
            ))}
          </SevenColGrid>
          <SevenColGrid
            fullheight={true}
            is28Days={getDaysInMonth(currentDate) === 28}
          >
            {getSortedDaysDate(currentDate).map((d, index) => {
              const date = new Date(d + " 00:00");
              const day = date.getDate();
              const month = date.getMonth();
              const year = date.getFullYear();
              const dayOfWeek = date.getDay();
              const numberOfPlanner = plannerList.filter((planner) =>
                datesAreOnSameDay(new Date(planner.date), date)
              ).length;
              return (
                <DivDays
                  key={index}
                  id={`${year}/${month}/${day}`}
                  onClick={(e) => handleOnClickEvent(date)} //abri planner of day
                  dayColor={
                    6 > dayOfWeek && dayOfWeek > 0 ? "#31374A" : "#D6700A"
                  }
                  monthColor={
                    month === currentDate.getMonth() ? "#E3E6ED" : "#e3e6ed7a"
                  }
                >
                  <DivDayHeader>
                  <Day
                    key={d}
                    className={`nonDRAG ${
                      datesAreOnSameDay(new Date(), date) ? "active" : ""
                    }`}
                  >
                    {day}
                    </Day>
                    {numberOfPlanner > 2 && (
                    <DivNumberPlanner>
                      <p>+{numberOfPlanner - 2}</p>
                    </DivNumberPlanner>
                  )}
                  </DivDayHeader>
                  {plannerList
                    .filter((planner) =>
                      datesAreOnSameDay(new Date(planner.date), date)
                    )
                    .map(
                      (ev, index) =>
                        index < numberOfEvents && (
                          <StyledEvent
                            onMouseEnter={() => handleMouseEnter(ev.id)}
                            onMouseLeave={handleMouseLeave}
                            ativa={divAtiva === ev.id}
                            onClick={() => handleOnClickEvent(date)}
                            className="StyledEvent"
                            id={`${ev.id} ${ev.subject}`}
                            key={`${ev.id} ${ev.subject}${index}`}
                          >
                            <Dot
                              bgColor={
                                ev.status === "DONE"
                                  ? "#07D95A"
                                  : ev.status === "CANCELED"
                                  ? "#BB1E00"
                                  : "#FFDE59"
                              }
                            ></Dot>
                            {/*client */}
                            {hoverAtivo!==ev.id && (
                              <p>{ev.client}</p>
                              )}
                              {/*Release e business */}
                            {hoverAtivo ===ev.id && (
                              <p>{ev.release}, {ev.business}</p>
                            )}
                          </StyledEvent>
                        )
                    )}

                </DivDays>
              );
            })}
          </SevenColGrid>
        </DivMonth>
      </Wrapper>

      {modalPlanner && (
        <>
          <DivClose onClick={() => setModalPlanner(false)}></DivClose>
          <PlannerCard date={dateTarget} adminList={props.adminList} />
        </>
      )}

      {modalCreate && (
        <>
          <DivClose onClick={handleCloseModal}></DivClose>
          <ModalPlanner adminList={props.adminList} title={"Create Planner"} />
        </>
      )}

      {modalEdit && (
        <>
          <DivClose onClick={handleCloseModal}></DivClose>
          <ModalPlanner adminList={props.adminList} title={"Edit Planner"} />
        </>
      )}

      {modalSave && (
        <>
          <DivClose onClick={() => setModalSave(false)}></DivClose>
          <ModalSave subject={"translate(-50%, -200%)"} />
        </>
      )}

      {modalDiscard && (
        <>
          <ModalDiscardChanges />
        </>
      )}

      {modalPopUpCanceled && (
        <>
          <PopUpCanceled />
        </>
      )}

      {modalFollowUp && (
        <>
          <DivClose />
          <FollowUpModal adminList={props.adminList} />
        </>
      )}

      {modalReschedule && (
        <>
          <DivClose onClick={handleCloseModal}></DivClose>
          <ModalPlanner
            adminList={props.adminList}
            title={"Reschedule Planner"}
          />
        </>
      )}

      {modalPopUpFinished && (
        <>
          <DivClose />
          <PopUpFinished />
        </>
      )}

      {modalSubject && (
        <>
          <PositionSubject>
            <Subject
              setModal={() => setModalSubject(false)}
              planner={"planner"}
              title={"Create Subject"}
            />
          </PositionSubject>
        </>
      )}

      {modalRemark && (
        <>
          <DivClose onClick={handleCloseModal}></DivClose>
          <RemarkModal adminList={props.adminList} title={"Create Remark"} />
        </>
      )}

      {modalError && (
        <>
          <DivClose onClick={() => setModalError(false)}></DivClose>
          <ModalError />
        </>
      )}
    </Container>
  );
};
