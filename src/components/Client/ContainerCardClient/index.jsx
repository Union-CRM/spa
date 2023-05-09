import React from "react";
import {
  ContainerFather,
  Container,
  DivModal,
  Header,
  BoardStyle,
  Top,
  DivTitlePage,
  DivButton,
  H1,
  DivSpans,
  ButtonInactive,
  ButtonActive,
  HowManyClientList,
  Active,
  HowManyActive,
  Inactive,
  HowManyInactive,
} from "./styles";
import ClientCard from "./CardListView/index";
import AddEditClient from "../AddEditClient";
import ButtonAdd from "../../../assets/Buttons/ButtonAdd";
import { useState } from "react";
import { useClientContext } from "../../../hook/useClientContent";
import ModalPopUp from "../ModalPopUP";

const abaStatus = {
  ACTIVE: "Active",
  INACTIVE: "Inactive",
};

const ContainerCards = () => {
  // States modal//
  const [modal, setModal] = useState(false);

  const [modalPopUp, setModalPopUp] = useState(false);

  const [id, setId] = useState(null);

  const [isEdit, setEdit] = useState(false);

  const { client } = useClientContext();
<<<<<<< Updated upstream

  const [active, setActive] = useState(abaStatus.ACTIVE);
=======
  const { id, setId } = useClientContext();
  const {modalInfo, setModalInfo} = useClientContext();
const {modalEditClient, setModalEditClient } = useClientContext();
const { search } = useSearchContext();


  useEffect(() => {
    if (props.adimList) {
      setClientList(client.filter((c) => c.user_id === userTarget.id));
    } else {
      setClientList(client);
    }
  }, [client]);

  
  
useEffect(()=>{
  if(search){
    setClientList(client.filter((c) => c.client.toLowerCase().includes(search.toLowerCase())));
  }else{
    if (props.adminList) {
      setClientList(client.filter((c) => c.user_id === userTarget.id));
    } else {
      setClientList(client);
    }
  }
},[search])
>>>>>>> Stashed changes

  const handleClick = (selectedTab) => {
    setActive(selectedTab);
  };

  const getTabColor = (status) => {
    return { borderBottom: active === status ? "2px solid #007BFF" : "" };
  };

  const createClient = () => {
    setModal(true);
    setEdit(false);
  };

  const EditClient = () => {
    setModal(true);
    setEdit(true);
  };

  const modalClose = () => {
    setModalPopUp(true);
  };

  return (
<<<<<<< Updated upstream
    <ContainerFather>
      <DivModal $mode={modal} />
      <Header>
        <Top>
          <DivTitlePage>
            <H1>Client List </H1>
            <HowManyClientList>({client.length})</HowManyClientList>{" "}
          </DivTitlePage>

          <DivButton onClick={() => createClient()}>
            <ButtonAdd
              mode="#007BFF"
              width="169px"
              height="38px"
              name="Create Client"
              color="white"
            />
          </DivButton>
        </Top>

        <DivSpans>
          <ButtonActive
            key={abaStatus.ACTIVE}
            onClick={() => handleClick(abaStatus.ACTIVE)}
            style={getTabColor(abaStatus.ACTIVE)}
          >
            <Active>
              Active (
              <HowManyActive>
                {client.filter((item) => item.status === "Active").length}
              </HowManyActive>
              )
            </Active>
          </ButtonActive>
          <ButtonInactive
            key={abaStatus.INACTIVE}
            onClick={() => handleClick(abaStatus.INACTIVE)}
            style={getTabColor(abaStatus.INACTIVE)}
          >
            <Inactive>
              Inactive (
              <HowManyInactive>
                {client.filter((item) => item.status === "Inactive").length}
              </HowManyInactive>
              )
            </Inactive>
          </ButtonInactive>
        </DivSpans>
      </Header>
      <Container>
        <BoardStyle>
          {client &&
            client
              .filter((item) => item.status === active)
              .map((item,index) => (
                <ClientCard
                  setId={(i) => setId(i)}
                  openModalPopUp={() => setModalPopUp(true)}
                  key={index}
                  id={item.id}
                  openModal={() => EditClient()}
                  //modalPopUp={() => PopUp()}
                />
              ))}
        </BoardStyle>
      </Container>
      {modal && (
        <AddEditClient
          id={id}
          setModal={setModal}
          title={isEdit ? "Edit Client" : "Create Client"}
        />
      )}
=======
    <ContainerGlobal>
      <ContainerHeaderAndCards>
        <HeaderContainerCards>
          <Top>
            <DivTitlePage>
              <H1>Client List </H1>
              <HowManyClientList>
                ({clientList ? clientList.length : 0})
              </HowManyClientList>{" "}

              <Tippy content="List of all clients.">
              <DivInfo>
              
                  <Info
                  width="25px"
                  style={{
                    fill: "#007BFF",
                  }}
                />
                     </DivInfo>
              </Tippy>
         

            </DivTitlePage>

            <DivButton onClick={() => createClient()}>
              <ButtonAdd
                mode="#007BFF"
                width="169px"
                height="38px"
                name="Create Client"
                color="white"
              />
            </DivButton>
          </Top>

          <DivSpans>
            <ButtonActive
              key={abaStatus.ACTIVE}
              onClick={() => handleClick(abaStatus.ACTIVE)}
              style={getTabColor(abaStatus.ACTIVE)}
            >
              <Active>
                Active (
                <HowManyActive>
                  {clientList
                    ? clientList.filter((item) => item.status === "Active")
                        .length
                    : 0}
                </HowManyActive>
                )
              </Active>
            </ButtonActive>
            <ButtonInactive
              key={abaStatus.INACTIVE}
              onClick={() => handleClick(abaStatus.INACTIVE)}
              style={getTabColor(abaStatus.INACTIVE)}
            >
              <Inactive>
                Inactive (
                <HowManyInactive>
                  {clientList
                    ? clientList.filter((item) => item.status === "Inactive")
                        .length
                    : 0}
                </HowManyInactive>
                )
              </Inactive>
            </ButtonInactive>
          </DivSpans>
        </HeaderContainerCards>

        <CardsContainer>
          <LineDivisor />

          <BoardStyle>
            {clientList &&
              clientList
                .filter((item) => item.status === active)
                .map((item) => (
                  <ClientCard
                    setId={(i) => setId(i)}
                    openModalPopUp={() => setModalPopUp(true)}
                    openModal={() => detailsModal()}
                    key={item.id}
                    id={item.id}
                    //modalPopUp={() => PopUp()}
                  />
                ))}
          </BoardStyle>
        </CardsContainer>
      </ContainerHeaderAndCards>

      <DivModal $mode={modal} />
{modal && (
    <AddEditClient
      id={id}
      setModal={setModal}
      title={"Create Client"}
    />
)}

      <DivModal $mode={modalInfo} />

       {modalInfo && (
        <ModalClientDetails
          id={id}
          openModal={() => detailsModal()}
          setModalInfo={setModalInfo}
          title={"Client Details"}
        />
      )}

      <DivModal $mode={modalEditClient} />

    {modalEditClient && (
        <ModalClientEdit
          id={id}
          setModalEditClient={setModalEditClient}
          title={"Edit Client"}
        />
    )}

>>>>>>> Stashed changes
      {modalPopUp && (
        <ModalPopUp id={id} modalClose={() => setModalPopUp(false)} />
      )}
      {/*id && <ModalPopUp id={id} setModalPopUp={() => setId(null)} />*/}
    </ContainerFather>
  );
};
export default ContainerCards;
