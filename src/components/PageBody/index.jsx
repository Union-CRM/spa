import React from "react";
import NavBar from "../NavBar";
import SidBar from "../SidBar";
import { Container, Content } from "./styles";

class PageBody extends React.Component {
  render() {
    return (
      <>
        <Container>
          <SidBar column={1} row={1 / 2} />
          <NavBar column={2 / 3} row={1} />
          <Content>{this.props.children}</Content>
        </Container>
      </>
    );
  }
}

export default PageBody;
