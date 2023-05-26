import React, { useState } from "react";
import NavBar from "../NavBar";
import SidBar from "../SidBar";
import { Container, Content } from "./styles";
import {useSearchContext} from "../../../hook/useSearchContext";

const PageBody =(props)=>{
    const {setNotification}=useSearchContext();


    return (
      <>
        <Container>
          <SidBar column={1} row={ 1 / 2} />
          {!props.showNav && <NavBar column={2 / 3} row={1} />}
          <Content  onClick={()=>setNotification(false)} nav={!props.showNav ? true : false}>{props.children}</Content>
        </Container>
      </>
    );
  }


export default PageBody;
