import React,{useState,useEffect} from 'react'
import {Container, Title,DivInfo, Label, DivTitle, DateRemark, DivDados, DivNumber} from './styles'
import { useRemarkContext } from '../../../../hook/useRemarkContent';
import { useSearchContext } from "../../../../hook/useSearchContext";
import { useUserContext } from '../../../../hook/useUserContext';

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

        <DivInfo>
        {remarkList.map((item) => (
                   <DivDados >
                    <Label>Title: <span>{item.remark_name}</span>
                    </Label>
                    <Label>Subject: <span>{item.subject_name}</span></Label>
                    <Label>Client: <span>{item.client_name}</span></Label>
                   
                  </DivDados>
                  ))}    
          </DivInfo>
    </Container>
  )
}
const month=["Jan","Fev","Mar","Abr","May", "Jun", "Jul", "Aug", "Sep", "Out", "Nov","Dez"]
const months=["01","02","03","04","05","06","07","08","09","10","11","12"]
export default RemarkNotification