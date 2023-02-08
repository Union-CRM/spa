import React from 'react'
import {Status, Tag, SpanTag, Container, PositionTitle, PositionCustomer, ButtonConfirm, ButtonCancel, PositionStatus, PositionTags} from './styles'
import ButtonDefault from '../../assets/Buttons/ButtonDefault/index'
import InputPlaceHolder from '../Input/InputPlaceholder'
import SingleSelect from  '../Input/SingleSelect'
import { MultiSelect } from '../Input/SelectMulti'

const values = [
    { value: 1, label: "active" },
    { value: 2, label: "disable" },
  ];

  const status = [
    { value: 1, label: "AWS", color: "#3ddc97" },
    { value: 2, label: "Modernization", color: "#ACD4FF" },
    { value: 3, label: "Online Bank", color: "#FFE60082" },
  ];

  

const CreateCostumer = ({Title}) => {
  return (
    <Container>
       <PositionTitle>{Title}</PositionTitle>
        <PositionCustomer>
            <InputPlaceHolder label="Customer Name"/>
        </PositionCustomer>
        <PositionStatus>
            <SpanTag>
                <Status>Status</Status>
            </SpanTag>
            <SingleSelect options={values} sizeSingle="240px"/>
        </PositionStatus>
        <PositionTags>
              <Tag>Tag</Tag>
            <MultiSelect options={status} widths="515px"/> 
        </PositionTags>
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