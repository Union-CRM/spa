import React from 'react'
import {LineGray, ButtonCancel, ButtonFinished, ButtonProgress, BoardStyle, H1, Container, Header, Top, HowManySubjectList, Button, Line, Spans, All, HowManyAll, Finished, HowManyFinished, Canceled, HowManyCancel, SpanPosition, IconPosition } from './styles'
import SubjectCard from './CardListView/index'
import IconSystem from '../../assets/IconSystem'
import { useState } from 'react'

const SubjectList = () => {
    const subjects = [
        {
            id: 1,
            status: "Canceled",
            title: "Apresentação Institucional TCS",
            manager: "Gilberto Anderson",
            topic: "Jornada Digital Itaubers",
            area: "Finanças Risco De Credito Capital",
            client: "Bruno Lins", 
        },
        {
            id: 2,
            status: "Finished",
            title: "Apresentação Institucional TCS",
            manager: "Gilberto Anderson",
            topic: "Jornada Digital Itaubers",
            area: "Finanças Risco De Credito Pessoal",
            client: "Heder", 
        },
        {
            id: 3,
            status: "Canceled",
            title: "Apresentação Institucional TCS",
            manager: "Gilberto Anderson",
            topic: "Jornada Digital Itaubers",
            area: "Finanças Risco De Credito Capital",
            client: "Kaere", 
        },
        {
            id: 4,
            status: "Progress",
            title: "Apresentação Institucional TCS",
            manager: "Gilberto Anderson",
            topic: "Jornada Digital Itaubers",
            area: "Finanças Risco De Credito Pessoal",
            client: "Carlos", 
        },
        {
            id: 5,
            status: "Progress",
            title: "Apresentação Institucional TCS",
            manager: "Gilberto Anderson",
            topic: "Jornada Digital Itaubers",
            area: "Finanças Risco De Credito Pessoal",
            client: "Bruno Lins", 
        },
        {
            id: 6,
            status: "Finished",
            title: "Apresentação Institucional TCS",
            manager: "Gilberto Anderson",
            topic: "Jornada Digital Itaubers",
            area: "Finanças Risco De Credito Pessoal",
            client: "Bruno Lins", 
        },
        {
            id: 7,
            status: "Progress",
            title: "Apresentação Institucional TCS",
            manager: "Gilberto Anderson",
            topic: "Jornada Digital Itaubers",
            area: "Finanças Risco De Credito Pessoal",
            client: "Bruno Lins", 
        },
        {
            id: 8,
            status: "Finished",
            title: "Apresentação Institucional TCS",
            manager: "Gilberto Anderson",
            topic: "Jornada Digital Itaubers",
            area: "Finanças Risco De Credito Pessoal",
            client: "Bruno Lins", 
        },
        {
            id: 9,
            status: "Finished",
            title: "Apresentação Institucional TCS",
            manager: "Gilberto Anderson",
            topic: "Jornada Digital Itaubers",
            area: "Finanças Risco De Credito Pessoal",
            client: "Bruno Lins", 
        },
    ]

    const SubjectsId = subjects.map((item) => {
        return item.id
    })
    
    const SubjectsCancel = subjects.filter((item) => {
        return item.status === "Canceled"
    })
    
    const SubjectsFinished = subjects.filter((item) => {
        return item.status === "Finished"
    })

    const SubjectsProgress = subjects.filter((item) => {
        return item.status === "Progress"
    })  

    const cardStatus = {
        INPROGRESS: "Progress",
        FINISHED: "Finished",
        CANCELED: "Canceled",
    } 
    const [cards, setCards] = useState(SubjectsProgress)

    const [active, setActive] = useState(cardStatus.INPROGRESS);

    const handleClick = (tabCards, selectedTab) => {
        setCards(tabCards)
        setActive(selectedTab)
    };

    const getTabColor = (status) => {
        return {borderBottom: active === status ? "2px solid #007BFF" : ""}
    }

      return (
        <Container>
            <Header>
                <Top>
                    <H1>Subjects List <HowManySubjectList>({SubjectsId.length})</HowManySubjectList></H1>
                    <Button>
                        <IconPosition>
                            <IconSystem icon={"add2"} height={'12px'} width={'12px'}/>
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
                {cards.map(item => (
                <SubjectCard
                    status={item.status}
                    title={item.title}
                    manager={item.manager}
                    topic={item.topic}
                    area={item.area}
                    client={item.client} />
                ))}    
            </BoardStyle>
        </Container>
  )
}

export default SubjectList