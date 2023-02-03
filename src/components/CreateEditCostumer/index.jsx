import React from 'react'
import {Container, PositionTitle, PositionCustomer, ButtonConfirm, ButtonCancel, PositionStatus, PositionFields} from './styles'
import ButtonDefault from '../../assets/Buttons/ButtonDefault/index'
import InputPlaceHolder from '../Input/InputPlaceholder'
import SingleSelect from  '../Input/SingleSelect'
import { MultiSelect } from '../Input/SelectMulti'

const CreateCostumer = ({Title}) => {
  return (
    <Container>
       <PositionTitle>{Title}</PositionTitle>
        <PositionCustomer>
            <InputPlaceHolder label="Customer Name"/>
        </PositionCustomer>
        <PositionStatus>
            <SingleSelect label="Tag"/>
        </PositionStatus>
        <PositionFields>
            <MultiSelect />
        </PositionFields>
        <ButtonConfirm>
            <ButtonDefault type={"true"} name={"Confirm"} />
        </ButtonConfirm>
        <ButtonCancel>
            <ButtonDefault type={"false"} name={"Cancel"} />
        </ButtonCancel>
    </Container>
  )
}

export default CreateCostumer