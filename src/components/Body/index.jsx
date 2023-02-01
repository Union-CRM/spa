import React from "react";
import ButtonDefault from "../../assets/Buttons";
import NavBar from "../NavBar";
import SidBar from "../SidBar";
import { Container, Content } from "./styles";

class Body extends React.Component {
  render() {
    return (
      <>
        <Container>
          <SidBar column={1} row={1 / 2} />
          <NavBar column={2 / 3} row={1} />
          <Content>
            <ButtonDefault nane={"oi"}></ButtonDefault>
          </Content>
        </Container>
      </>
    );
  }
}

export default Body;
