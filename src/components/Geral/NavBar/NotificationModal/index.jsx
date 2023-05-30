import React,{useState,useEffect} from 'react'
import {Container, Title,DivInfo, RermarkTitle, DivTitle, DateRemark, DivDados, DivNumber, DivIconRemark, ContentRemark, DivSubject, DivClient, NoRemark, Line} from './styles'
import { useRemarkContext } from '../../../../hook/useRemarkContent';
import { useSearchContext } from "../../../../hook/useSearchContext";
import { useUserContext } from '../../../../hook/useUserContext';
import { ReactComponent as Subject } from "../../../../assets/svg/Subjects.svg";

const RemarkNotification = () => {
    const {notification, setNotification}  = useSearchContext();
    const {user}=useUserContext();
    const {remark} = useRemarkContext();
    const [remarkList,setRemarkList] = useState([]);
    const [scroll,setScroll] = useState(false)
    
    useEffect(()=>{
        const date=new Date();
        const dateToday=`${date.getFullYear()}-${months[date.getMonth()]}-${date.getDate()}`
        const remarkToday=remark.filter((r)=> (r.user_id===user.id) && (r.date_return.split("T")[0].split(" ")[0] === dateToday) && (r.status_description==="ACTIVE"))
        try{
          setRemarkList(remarkToday)
        }catch{
          setRemarkList([])
        }
        setScroll(remarkToday.length > 4);
        },[remark])

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

return (
    <Container mode={scroll}>
      <DivTitle>
      <Title>
        <span>Remarks today</span>
   
        </Title>
        <DivNumber>
          ({remarkList.length})
        </DivNumber>
      
        <DateRemark> {dayweek}, {d.getDate()} {Month} {d.getMonth} </DateRemark>
      
        </DivTitle>

        {remarkList && remarkList.length === 0 ? (
           <NoRemark><span>No remarks for today.</span></NoRemark> 
  
        ) : (

        <DivInfo>
        {remarkList.map((item) => (
                    <DivDados >
                     <Line>
                    <DivIconRemark>
                    <Subject fill={"#fff"} width={"12px"} height={"12px"} />
                    <RermarkTitle> 
                    <span>{item.remark_name}</span>
                    </RermarkTitle></DivIconRemark>
                    <ContentRemark>
                    <DivSubject>Subject: <span>{item.subject_name}</span></DivSubject> 
                     <DivClient>Client: <span>{item.client_name}</span></DivClient>
                    </ContentRemark>
                    </Line>
                  </DivDados>
                  ))}    
          </DivInfo>
          )}
    </Container>
    
  )
}
const month=["Jan","Fev","Mar","Abr","May", "Jun", "Jul", "Aug", "Sep", "Out", "Nov","Dez"]
const months=["01","02","03","04","05","06","07","08","09","10","11","12"]
export default RemarkNotification