import React, { useState } from "react";
import NavBar from "../NavBar";
import SidBar from "../SidBar";
import { Container, Content } from "./styles";




class PageBody extends React.Component {
 
  render(props) {

    return (
      <>
        <Container>
          <SidBar column={1} row={ 1 / 2} />
          {!this.props.showNav && <NavBar column={2 / 3} row={1} />}
          <Content nav={!this.props.showNav ? true : false}>{this.props.children}</Content>
        </Container>
      </>
    );
  }
}

export default PageBody;
