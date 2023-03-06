import React from 'react'
import {LineGray, ButtonCancel, ButtonFinished, BoardStyle, Container, Header, Top,
     HowManySubjectList, Line, Spans, Finished, HowManyFinished, Canceled, HowManyCancel, DivButton,
      ContainerFather } from './styles'

import RemarkCard from '../CardListView'
import ButtonAdd from '../../../assets/Buttons/ButtonAdd'
import { useState } from 'react'
import Remark from '../../RemarkModal'
import {remarksMock as remarksList} from '../RemarkData';
import {cardStatusMock as cardStatus} from '../RemarkData/Status';
import Headline from "../../../assets/FontSystem/Headline";

const RemarksId = remarksList.map(item => item.id)
const RemarksCancel = remarksList.filter(item => item.status === "Canceled")
const RemarksFinished = remarksList.filter(item => item.status === "Finished")



const RemarkList = () => {

    const [cards, setCards] = useState(RemarksFinished)
    const [active, setActive] = useState(cardStatus.INPROGRESS);
    const [modal, setModal] = useState(false)
    const [isEdit, setEdit] = useState(false)
  

    const handleClick = (tabCards, selectedTab) => {
        setCards(tabCards)
        setActive(selectedTab)
    }

    const getTabColor = (status) => {
        return {borderBottom: active === status ? "2px solid #007BFF" : ""}
    }
    
    const createRemark= () => {
        setModal(true);
        setEdit(false);

        console.log()
    }

    
    const EditRemark = () => {
        setModal(true);
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
                opennedModal={setModal}
                /> 
            ))
    }
      return (
    <ContainerFather>
        <Container>
            <Header>
                <Top>
                    <Headline type={"Headline4"} name={"Remark List"}>  <HowManySubjectList>({RemarksId.length})</HowManySubjectList></Headline>
                    <DivButton onClick={() => createRemark()}>
                        <ButtonAdd mode="#007BFF" width="169px" height="38px" name="Create Remark" color="white"/>
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
            title={isEdit ? "Edit Remark" : "Create Remark"}  />}
           
        </ContainerFather>
  )
}

export default RemarkList;
