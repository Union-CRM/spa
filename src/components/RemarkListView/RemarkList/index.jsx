import React from 'react'
import {LineGray, ButtonCancel, ButtonFinished, ButtonProgress, BoardStyle, H1, Container, Header, Top, HowManySubjectList, Button, Line, Spans, All, HowManyAll, Finished, HowManyFinished, Canceled, HowManyCancel, SpanPosition, IconPosition, ContainerFather } from './styles'
import RemarkCard from '../CardListView'
import IconSystem from '../../../assets/IconSystem' 
import { useState } from 'react'
import Remark from '../../RemarkModal'
import {remarksMock as remarksList} from '../RemarkData';
import {cardStatusMock as cardStatus} from '../RemarkData/Status';

const RemarksId =     remarksList.map(item => item.id)
const RemarksCancel = remarksList.filter(item => item.status === "Canceled")
const RemarksFinished = remarksList.filter(item => item.status === "Finished")
const RemarksProgress = remarksList.filter(item => item.status === "Progress") 

const RemarkList = () => {
    const [cards, setCards] = useState(RemarksProgress)
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
                /> 
            ))
    }
      return (
        <ContainerFather>
        <Container>
            <Header>
                <Top>
                    <H1>Remark List <HowManySubjectList>({RemarksId.length})</HowManySubjectList></H1>
                    <Button onClick={() => createRemark()}>
                        <IconPosition>
                            <IconSystem icon={"add2"} height={'12px'} width={'12px'}/>
                        </IconPosition>
                        <SpanPosition>
                            <span>Create Remark</span>
                        </SpanPosition>
                    </Button>
                </Top>
                <Line />
                <Spans>
                    <ButtonProgress key={cardStatus.INPROGRESS} onClick={() => handleClick(RemarksProgress, cardStatus.INPROGRESS)} style={getTabColor(cardStatus.INPROGRESS)}>
                    </ButtonProgress>
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
            {modal && <Remark setModal={setModal} title={isEdit ? "Edit Remark" : "Create Remark"} /*content={CARD QUE VC CLICOU}*/ />}
        </ContainerFather>
  )
}

export default RemarkList;
