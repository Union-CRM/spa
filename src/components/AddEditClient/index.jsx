import React from 'react'
import { Container, PositionTitle, SpanTitle, DivEmailRole, DivEmail, DivRole,DivCostumer,NameClient,
    DivBussines,DivRelease,DivTagStatus,DivStatus,SubTitle,DivButton,Buttton} from './styles'
import InputPlaceHolder from '../Input/InputPlaceholder'
import SingleSelect from '../Input/SingleSelect'
import ButtonDefault from '../../assets/Buttons/ButtonDefault'
import DoubleInput from '../Input/DoubleInput'

import { TagComponent } from '../TagComponent'

const option = [
    { id: 1, value: "True", label: "True" },
    { id: 2, value: "False", label: "False" },
  ];

  
  
const Subject = ({title, setModal}) => {

    const closeModal = () => {
            setModal(false);
        }
        const saveModal = () => {
            setModal(false);
        }
   
    return (
        <Container>
            <PositionTitle>
                <SpanTitle>
                    {title}
                </SpanTitle> 
            </PositionTitle>

            <NameClient>
                <InputPlaceHolder  label="Client Name "/>
            </NameClient>
            
            <DivEmailRole>
             
                
                <DivEmail>
                    <DoubleInput label={"E-mail"} width={"100%"} />
                </DivEmail> 

                <DivRole>
                    
                   <SingleSelect label={"Role"} sizeSingle={"78%"} options={option}/>
                </DivRole>
            </DivEmailRole>

            <DivCostumer>
                    
                    <SingleSelect label={"Costumer"} sizeSingle={"92%"} options={option}/>
            </DivCostumer>

            <DivBussines>
                <InputPlaceHolder  label="Bussines"/>
            </DivBussines>

            <DivRelease>
                    
                    <SingleSelect label={"Release Train"} sizeSingle={"92%"} options={option}/>
            </DivRelease>

           <DivTagStatus>
             <SubTitle>Tag</SubTitle> 
                <TagComponent/>
               
                <DivStatus>
                   <SingleSelect label={"Status"} sizeSingle={"46%"} options={option}/>
                </DivStatus>
           </DivTagStatus>





           



            <DivButton>
              
                <Buttton onClick={saveModal}>
                    <ButtonDefault  type={"true"} name={"Save"}/>
                </Buttton>
                <Buttton onClick={closeModal}>
                    <ButtonDefault type={"False"} name={"Cancel"}/>
                </Buttton>
                
              
              </DivButton>
            
        </Container>
    )
}

export default Subject