import React from 'react'
import {LineGray, ButtonCancel, ButtonFinished, ButtonProgress, BoardStyle, H1, Container, Header, Top, HowManySubjectList, Button, Line, Spans, All, HowManyAll, Finished, HowManyFinished, Canceled, HowManyCancel, SpanPosition, IconPosition, ContainerFather } from './styles'
import SubjectCard from './CardListView/index'
import IconSystem from '../../assets/IconSystem'
import { useState } from 'react'
import Subject from '../CreateEditSubjectModal'
import {subjectsMock as subjectsList} from './subjectListMock'
import {cardStatusMock as cardStatus} from './cardStatusMock'

const SubjectsId = subjectsList.map(item => item.id)
const SubjectsCancel = subjectsList.filter(item => item.status === "Canceled")
const SubjectsFinished = subjectsList.filter(item => item.status === "Finished")
const SubjectsProgress = subjectsList.filter(item => item.status === "Progress") 

const SubjectList = () => {
    const [cards, setCards] = useState(SubjectsProgress)
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
    
    const createSubject = () => {
        setModal(true);
        setEdit(false);
    }

    const EditSubject = () => {
        setModal(true);
        setEdit(true);
    }

    const getSubjectCards = () => {
        return cards.map(item => (
            <SubjectCard
                key={item.id}
                status={item.status}
                title={item.title}
                manager={item.manager}
                topic={item.topic}
                area={item.area}
                client={item.client}
                openModal={() => EditSubject()}
                /> 
            ))
    }
      return (
        <ContainerFather>
        <Container>
            <Header>
                <Top>
                    <H1>Subjects List <HowManySubjectList>({SubjectsId.length})</HowManySubjectList></H1>
                    <Button onClick={() => createSubject()}>
                        <IconPosition>
                            <IconSystem icon={"Add2"} height={'12px'} width={'12px'}/>
                        </IconPosition>
                        <SpanPosition>
                            <span>Create Subject</span>
                        </SpanPosition>
                    </Button>
                </Top>
                <Line />
                <Spans>
                    <ButtonProgress key={cardStatus.INPROGRESS} onClick={() => handleClick(SubjectsProgress, cardStatus.INPROGRESS)} style={getTabColor(cardStatus.INPROGRESS)}>
                        <All>Progress (<HowManyAll>{SubjectsProgress.length}</HowManyAll>)</All>
                    </ButtonProgress>
                    <ButtonFinished key={cardStatus.FINISHED} onClick={() => handleClick(SubjectsFinished, cardStatus.FINISHED)} style={getTabColor(cardStatus.FINISHED)}>
                        <Finished>Finished (<HowManyFinished>{SubjectsFinished.length}</HowManyFinished>)</Finished>
                    </ButtonFinished>
                    <ButtonCancel key={cardStatus.CANCELED} onClick={() => handleClick(SubjectsCancel, cardStatus.CANCELED)} style={getTabColor(cardStatus.CANCELED)}>
                        <Canceled>Canceled (<HowManyCancel>{SubjectsCancel.length}</HowManyCancel>)</Canceled>
                    </ButtonCancel>
                </Spans>
                <LineGray />
            </Header>
            <BoardStyle>
                {getSubjectCards()}   
            </BoardStyle>
        </Container>
            {modal && <Subject setModal={setModal} title={isEdit ? "Edit Subject" : "Create Subject"} /*content={CARD QUE VC CLICOU}*/ />}
        </ContainerFather>
  )
}

export default SubjectList