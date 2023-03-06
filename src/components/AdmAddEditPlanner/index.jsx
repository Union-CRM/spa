import React from 'react'
import { DivModal,DivTitle,DivInfo,DivDateStartFinish,DivClocks,Input, DivButton,DivDate,DivTagStatus } from './styles'
import SingleSelect from '../Input/SingleSelect';
import InputWithName from '../Input/InputWithName';
import Headline from '../../assets/FontSystem/Headline';
import Clock from '../Input/clock'
import { TagComponent } from '../TagComponent';
import ButtonDefault from '../../assets/Buttons/ButtonDefault';
import Body from '../../assets/FontSystem/Body';

const guests = [
    {
        label: "Carlos",
    },
    {
        label: "Igor",
    },
    {
        label: "Ricardo",
    },
    {
        label: "Eber",
    }
]

const status = [
    {label: "one", value: 1, disabled: true},
    {label: "two", value: 2}
  ]

const AdmAddEditPlanner = ({ title }) => {
   

  return (
    <DivModal>
        <DivTitle>
            <Headline type={"Headline3"} name={title}/>
        </DivTitle>
        
            <SingleSelect label={"Subject"} height={"35px"} sizeSingle={"100%"}/>
            <InputWithName label={"Client Name"}/>
            <InputWithName label={"Email"}/>
            <InputWithName label={"Business"}/>
            <InputWithName label={"Reelase Train"}/>
            <DivDateStartFinish>
                <DivClocks>
                    <DivDate>
                        <Body type={"Body2"} name={"Date"}></Body>
                    </DivDate>
                    <Input type="date" />
                </DivClocks>
                <DivClocks>
                     <Clock label={"Start"}/>
                </DivClocks>
                <DivClocks>
                     <Clock label={"End"}/>
                </DivClocks>
            </DivDateStartFinish>
           <DivTagStatus>
                <TagComponent label={"Guest"} options={guests}  left={"190px"} width={"30%"} menuWidth={"100%"} widths={"215%"} heightsValue={"115px"}></TagComponent>           
                <SingleSelect label={"Status"} sizeSingle={"150px"} height={"35px"} options={status} disabled={title === "Create Planner" ? true : false}/>
           </DivTagStatus>
            <DivButton>
                <ButtonDefault type={"userSave"} name={"Save"}/>
                <ButtonDefault type={"userCancel"} name={"Cancel"}/>
            </DivButton>
        
    </DivModal>
  )
}

export default AdmAddEditPlanner