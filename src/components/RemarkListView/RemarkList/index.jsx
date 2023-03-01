import React from 'react'
import {LineGray, ButtonCancel, ButtonFinished, BoardStyle, H1, Container, Header, Top,
     HowManySubjectList, Line, Spans, Finished, HowManyFinished, Canceled, HowManyCancel, DivButton,
      ContainerFather } from './styles'
import RemarkCard from '../CardListView'
import ButtonAdd from '../../../assets/Buttons/ButtonAdd'
import { useState } from 'react'
import Remark from '../../RemarkModal'
import {remarksMock as remarksList} from '../RemarkData';
import {cardStatusMock as cardStatus} from '../RemarkData/Status';
import Discard from '../../ModalDiscard'


const RemarksId = remarksList.map(item => item.id)
const RemarksCancel = remarksList.filter(item => item.status === "Canceled")
const RemarksFinished = remarksList.filter(item => item.status === "Finished")




const RemarkList = () => {

    const [cards, setCards] = useState(RemarksFinished)
    const [active, setActive] = useState(cardStatus.INPROGRESS);
    const [modal, setModal] = useState(false)
    const [isEdit, setEdit] = useState(false)
    const [modalDiscard,setModalDiscard] = useState(false);

    const handleClick = (tabCards, selectedTab) => {
        setCards(tabCards)
        setActive(selectedTab)
    }

    const getTabColor = (status) => {
        return {borderBottom: active === status ? "2px solid #007BFF" : ""}
    }
    
    const createRemark= () => {
        setModal(true);
        setModalDiscard(false);
        setEdit(false);
    }

    
    const EditRemark = () => {
        setModal(true);
        setModalDiscard(false);
        setEdit(true);
    }

 
    const getRemarkCards = () => {
        return cards.map(item => (
            <RemarkCard
                key={item.id}
                status={item.status}
                title={item.title}
                manager={item.manager}
                topic={item.topic}
                area={item.area}
                client={item.client}
                openModal={() => EditRemark()}
                setModalDiscard={setModalDiscard}
                opennedModal={setModal}
                /> 
            ))
    }
      return (
    <ContainerFather>
        <Container>
            <Header>
                <Top>
                    <H1>Remark List <HowManySubjectList>({RemarksId.length})</HowManySubjectList></H1>
                    <DivButton onClick={() => createRemark()}>
                        <ButtonAdd mode="#007BFF" width="169px" height="38px" name="Create Subject" color="white"/>
                    </DivButton>
                </Top>
                <Line />
                <Spans>
                    <ButtonFinished key={cardStatus.FINISHED} onClick={() => handleClick(RemarksFinished, cardStatus.FINISHED)} style={getTabColor(cardStatus.FINISHED)}>
                        <Finished>Finished (<HowManyFinished>{RemarksFinished.length}</HowManyFinished>)</Finished>
                    </ButtonFinished>
                    <ButtonCancel key={cardStatus.CANCELED} onClick={() => handleClick(RemarksCancel, cardStatus.CANCELED)} style={getTabColor(cardStatus.CANCELED)}>
                        <Canceled>Canceled (<HowManyCancel>{RemarksCancel.length}</HowManyCancel>)</Canceled>
                    </ButtonCancel>  
                </Spans>
                <LineGray />
            </Header>
            <BoardStyle>
                {getRemarkCards()}   
            </BoardStyle>
        </Container>

           {modal && <Remark setModal={setModal} 
           title={isEdit ? "Edit Remark" : "Create Remark"} />}
           {modalDiscard && <Discard setModal={setModalDiscard}  />}
           
        </ContainerFather>
  )
}

export default RemarkList;
