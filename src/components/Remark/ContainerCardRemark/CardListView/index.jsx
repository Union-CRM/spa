import {
  BoxClient,
  Business,
  Card,
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
import { useSearchContext } from "../../../../hook/useSearchContext";
import IconSystem from "../../../../assets/IconSystem";

const RemarkCard = (props) => {
  const { remark: remarkList, setRemarkTarget } = useRemarkContext();
  const remark = remarkList.filter((item) => item.id === props.id)[0];

  const handleEdit = () => {
    props.openModal(true);
    setRemarkTarget(remark);
  };

  return (
    <Container>
      <Card $mode={remark.status_description} onClick={handleEdit}>
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

          <BoxClient>
            <Client>
              Client <p>|</p>
            </Client>

            <ClientName>
              <p>{remark.client_name}</p>
            </ClientName>
          </BoxClient>
        </DivInfo>
      </Card>
    </Container>
  );
};
export default RemarkCard;

/*
business_id
business_name
client_id
client_name
date:"2023-01-09T19:29:25.925Z"
date_return:"2023-03-09T19:29:25.925Z"
id
release_id
release_name
remark_name
status_description
subject_id
subject_name
text
user_id
user_name
*/
