import React from "react";
import Body from "../../../../assets/FontSystem/Body";
import Headline from "../../../../assets/FontSystem/Headline";
import Subtitle from "../../../../assets/FontSystem/Subtitle";
import IconSystem from "../../../../assets/IconSystem";
import { useState, useEffect } from "react";
import { usePlannerContext } from "../../../../hook/usePlannerContext";
import {
  ContainerCards,
  BoxClient,
  Business,
  Cards,
  CardDate,
  Client,
  ClientName,
  Container,
  CreatedByManager,
  Date1,
  Date2,
  DivDadosCard,
  DivInfo,
  DivReleaseAndBusiness,
  DivStatusSubject,
  DivSubjectAndCreatedBy,
  Header,
  LabelStatus,
  ReleaseTrain,
  Status,
} from "./styles";
import { useRemarkContext } from "../../../../hook/useRemarkContent";

function Split(n) {
  const name = n ? n : "";
  var nameSplit = name.split(" ");
  var name2 =
    nameSplit[0].split("")[0] +
    " " +
    nameSplit[nameSplit.length - 1].split("")[0] +
    "";
  return name2.toUpperCase();
}

const Card = (props) => {
  const { remark } = props;
  const { setModalPlanner } = usePlannerContext();
  const { setModalRemark, setModalEdit } = useRemarkContext();
  const { remark: remarkList, setRemarkTarget } = useRemarkContext();
  const remarkDetail = remarkList.filter((item) => item.id === remark.id)[0];
  //const [time, setTime] = useState(props.initial.split(" ")[1].split(":"));
  const whatsStatus = props.status === "ACTIVE" ? true : false;
  const handleEdit = () => {
    if (remark.status_description === "ACTIVE") {
      //props.OpenModal();
      setRemarkTarget(remarkDetail);
      setModalEdit(true);
      setModalRemark(false);
      //setRemarkTarget(remarkList.filter((r)=>r.id===remark.id)[0]);
    }
  };

  return (
    <>
      <ContainerCards
        $mode={remark.status_description}
        onClick={() => handleEdit()}
      >
        {/* $mode={whatsStatus} onClick={() => handleEdit()}> */}
        {/* <h1>OLAAA</h1> */}

        {/* <Cards $mode={remark.status_description} onClick={handleEdit}> */}
        <Header>
          <DivStatusSubject>
            <Status $mode={remark.status_description}>
              <LabelStatus>
                <span>{remark.status_description}</span>
              </LabelStatus>
            </Status>
          </DivStatusSubject>

          <DivDadosCard>
            <DivSubjectAndCreatedBy>
              <p>{remark.remark_name}</p>

              <CreatedByManager>{remark.user_name}</CreatedByManager>
            </DivSubjectAndCreatedBy>
          </DivDadosCard>

          <CardDate>
            <Date1>
              <IconSystem icon={"FlechaVerde"} height={"15px"} width={"15px"} />
              <p>{remark.date.split("T")[0]}</p>
            </Date1>

            <Date2>
              <IconSystem
                icon={"GridiconsCreate"}
                height={"15px"}
                width={"15px"}
              />
              <p>{remark.date_return.split("T")[0]}</p>
            </Date2>
          </CardDate>
        </Header>

        <DivInfo>
          <DivReleaseAndBusiness>
            <ReleaseTrain>
              <p>{remark.release_name}</p>
            </ReleaseTrain>

            <Business>
              <p>{remark.business_name}</p>
            </Business>
          </DivReleaseAndBusiness>
        </DivInfo>
        <BoxClient>
          <Client>
            Client <p>|</p>
          </Client>

          <ClientName>
            <p>{remark.client_name}</p>
          </ClientName>
        </BoxClient>
      </ContainerCards>
    </>
  );
};
export default Card;
