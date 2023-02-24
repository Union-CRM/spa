import React from 'react'
import { Container,SpanTitle, PositionButtonSave, PositionButtonCancel,Help} from './styles'
import ButtonDefault from '../../assets/Buttons/ButtonDefault';
import IconSystem from '../../assets/IconSystem';
import help from '../../assets/svg/help.svg';
import security from '../../assets/svg/security.svg';
import cancel from '../../assets/svg/cancel.svg';
import Remove from '../../assets/Remove.svg'
import {Image} from './styles.jsx';


  
const Discard = ({setModal}) => {

    const closeModal = () => {
        setModal(false);
    }
    const saveModal = () => {
        setModal(false);
    }

    const Title = "Discard changes ?";

    return (
        <Container>
            
              
         
                <Image>
                <IconSystem icon={"discardChanges"} width={"80px"} height={"75px"}/>
                </Image>
                
         
              
            

              
              
                <SpanTitle>{Title}</SpanTitle> 
          
            <PositionButtonSave onClick={saveModal}>
                <ButtonDefault type="col"  name={"Yes,discard"}/>
            </PositionButtonSave>
            <PositionButtonCancel onClick={closeModal}>
                <ButtonDefault type="col2" name={"Cancel"}/>
            </PositionButtonCancel>
        </Container>
    )
}

export default Discard;