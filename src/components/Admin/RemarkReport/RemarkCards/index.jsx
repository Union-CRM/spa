import React from 'react'
import {Container, DivInfo} from "./styles"

const RemarkCards = (props) => {
  return (
    <Container>
        <DivInfo>{props.remark.user_name}</DivInfo>
        <DivInfo>{props.remark.client_name}</DivInfo>
        <DivInfo>{props.remark.subject_name}</DivInfo>
        <DivInfo>{props.remark.remark_name}</DivInfo>
        <DivInfo>{props.remark.date.split("T")[0]}</DivInfo>
        <DivInfo>{props.remark.date_return.split("T")[0]}</DivInfo>
    </Container>
  )
}

export default RemarkCards