import React from 'react'
import { useState } from 'react'
import { Div,Title,SubTitle,DivBNameStatus, DivBName,DivStatus} from './styles'
import { DivTag,DivCodeSeguiment,DivButton,DivCode } from './styles'
import BuuttonDefault from '../../assets/Buttons/ButtonDefault'
import InputWithName from '../Input/InputWithName'
import makeAnimated from "react-select/animated";
import { TagComponent } from '../TagComponent'
import SingleSelect from '../Input/SingleSelect'


const AddEditBusiness = ({title}) => {
    const animatedComponents = makeAnimated();
    const [value, setValue] = useState(null);

  const options = [
    { id: 1, value: "True", label: "True" },
    { id: 2, value: "False", label: "False" },
  ];

    const dados = [
        {
          status: "success"
        },
        {
          status: "Braasil"
        },
        {
        status: "Noruefa"
        },
        {
            status: "Noruefa"
            },
            {
                status: "Noruefa"
                },
                {
                    status: "Noruefa"
                    },
                    {
                        status: "Noruefa"
                        },
    ]
    

  return (
        
        <Div>
           <Title>
            {title} Bussines
           </Title>
        
            <DivCode>
                <InputWithName label={"Code"}  width={"95%"}/>
            </DivCode>
                   
        
            <DivBNameStatus>
             
                
                <DivBName >
                    <InputWithName label={"Bussines Name"} width={"100%"} />
                </DivBName> 
                <DivStatus>
                    
                   <SingleSelect width={"86%"}/>
                </DivStatus>
            </DivBNameStatus>


            <DivCodeSeguiment>
                <InputWithName label={"Seguiment"} width={"95%"} />
            </DivCodeSeguiment>
            
            <SubTitle>Tag</SubTitle>  
            <DivTag>
            
              <TagComponent/>
            </DivTag>    
        
            <DivButton>
              
            <BuuttonDefault type={"true"} name={"Save"}></BuuttonDefault>
            <BuuttonDefault type={"false"} name={"Cancel"}></BuuttonDefault>
            
            </DivButton>
        
        </Div>
   
  )
}

export default AddEditBusiness