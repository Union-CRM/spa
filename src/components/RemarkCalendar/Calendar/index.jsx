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
import ModalRemark from "../AddEditRemark";
import { usePlannerContext } from "../../../hook/usePlannerContext";
import { useUserContext } from "../../../hook/useUserContext";
import IconSystem from "../../../assets/IconSystem";
import RemarkCard from "../PlannerCard"; //MUDAR O NOME DA ROTA
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
import { useRemarkContext } from "../../../hook/useRemarkContent";

export const BigCalender = (props) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [numberOfEvents] = useState(2);
  const [setOpenModal] = useState(false);
  const [dateTarget, setDateTarget] = useState(new Date());
  const { subject: subjectList } = useSubjectContext();
  const { planner, modalSave, setModalSave, modalSubject, setModalSubject } =
    usePlannerContext();
  const { user, userTarget, setUserTarget } = useUserContext();
  const { setSearch, search } = useSearchContext();
  const [searchtState, setSearchtState] = useState(false);
  const [hoverAtivo, setHoverAtivo] = useState(false);
  const [divAtiva, setDivAtiva] = useState(null);
  //---------------------------------------------------------///////
  //---------------------------------------------------------///////
  //---------------------------------------------------------///////
  //---------------------------------------------------------///////
  const {
    remark,
    modalRemark,
    setModalRemark,
    modalEdit,
    setModalEdit,
    modalCreate,
    setModalCreate,
    modalDiscard,
    setModalDiscard,
    modalError,
    setModalError,
    modalSucess,
    setModalSucess,
  } = useRemarkContext();
  const [remarkList, setRemarkList] = useState([]);

  useEffect(() => {
    if (search) {
      setRemarkList(
        remark
          ? remark.filter(
              (s) =>
                s.remark_name.toLowerCase().includes(search.toLowerCase()) ||
                s.client_name.toLowerCase().includes(search.toLowerCase())
            )
          : []
      );
    } else {
      if (props.adminList) {
        setRemarkList(
          remark
            ? remark
                .filter((r) => r.user_id === userTarget.id)
                .sort((a, b) =>
                  (a.status_description || "").localeCompare(
                    b.status_description || ""
                  )
                )
            : []
        );
      } else {
        setRemarkList(
          remark
            ? remark
                .filter((r) => r.user_id === user.id)
                .sort((a, b) =>
                  (a.status_description || "").localeCompare(
                    b.status_description || ""
                  )
                )
            : []
        );
        setUserTarget(user);
      }
    }
  }, [search, remark, userTarget]);

  useEffect(() => {
    setModalRemark(false);
    setSearch(false);
  }, []);

  const handleOnClickEvent = (d) => {
    setModalRemark(true);
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
                <IconSystem
                  icon="Search"
                  fill={"color: #007bff"}
                  width={"20px"}
                  height={"17px"}
                />
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
              <Done /> <span>Progress</span>
              <Scheduled /> <span>Finished</span>
              <Canceled /> <span>Canceled</span>
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
              mode={"#F5F7FA"}
              color={"#3999FF"}
              border={"1px solid #3999FF"}
              iconColor={"#3999FF"}
              name={"Create Remark"}
              //onClick={() => setOpenModal(true)}
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
              const numberOfRemark = remarkList.filter((remark) =>
                datesAreOnSameDay(
                  new Date(remark.date_return.split("T")[0] + " 12:00"),
                  date
                )
              ).length;
              //console.log(numberOfRemark)
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
                    {numberOfRemark > 2 && (
                      <DivNumberPlanner>
                        <p>+{numberOfRemark - 2}</p>
                      </DivNumberPlanner>
                    )}
                  </DivDayHeader>
                  {remarkList
                    .filter((remark) =>
                      datesAreOnSameDay(
                        new Date(remark.date_return.split("T")[0] + " 12:00"),
                        date
                      )
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
                            id={`${ev.id} ${ev.remark_name}`}
                            key={`${ev.id} ${ev.remark_name}${index}`}
                          >
                            <Dot
                              bgColor={
                                ev.status_description === "ACTIVE"
                                  ? "#07D95A"
                                  : ev.status_description === "FINISHED"
                                  ? "#008585"
                                  : "#BB1E00"
                              }
                            ></Dot>
                            {/*client */}
                            {hoverAtivo !== ev.id && <p>{ev.client_name}</p>}
                            {/*Release e business */}
                            {hoverAtivo === ev.id && (
                              <p>
                                {ev.remark_name}, {ev.subject_name}
                              </p>
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

      {modalRemark && (
        <>
          <DivClose onClick={() => setModalRemark(false)}></DivClose>
          <RemarkCard
            date={dateTarget}
            adminList={props.adminList}
            setModalEdit={() => setModalEdit()}
          />
        </>
      )}

      {modalCreate && (
        <>
          <DivClose onClick={handleCloseModal}></DivClose>
          <ModalRemark
            adminList={props.adminList}
            title={"Create Remark"}
            setModal={(e) => setModalCreate(e)}
          />
        </>
      )}

      {modalEdit && (
        <>
          <DivClose onClick={handleCloseModal}></DivClose>
          <ModalRemark adminList={props.adminList} title={"Edit Remark"} />
        </>
      )}

      {modalSucess && (
        <>
          <DivClose onClick={() => setModalSucess(false)}></DivClose>
          <ModalSave subject={"translate(-50%, -200%)"} />
        </>
      )}

      {modalDiscard && (
        <>
          <ModalDiscardChanges />
        </>
      )}

      {/*modalPopUpCanceled && (
        <>
          <PopUpCanceled />
        </>
      )*/}

      {/*modalFollowUp && (
        <>
          <DivClose />
          <FollowUpModal adminList={props.adminList} />
        </>
      )*/}

      {/*modalReschedule && (
        <>
          <DivClose onClick={handleCloseModal}></DivClose>
          <ModalRemark
            adminList={props.adminList}
            title={"Reschedule Planner"}
          />
        </>
      )*/}

      {/*modalPopUpFinished && (
        <>
          <DivClose />
          <PopUpFinished />
        </>
      )*/}

      {/*modalSubject && (
        <>
          <PositionSubject>
            <Subject
              setModal={() => setModalSubject(false)}
              planner={"planner"}
              title={"Create Subject"}
            />
          </PositionSubject>
        </>
      )*/}

      {/*modalRemark && (
        <>
          <DivClose onClick={handleCloseModal}></DivClose>
          <RemarkModal adminList={props.adminList} title={"Create Remark"} />
        </>
      )*/}

      {modalError && (
        <>
          <DivClose onClick={() => setModalError(false)}></DivClose>
          <ModalError />
        </>
      )}
    </Container>
  );
};
