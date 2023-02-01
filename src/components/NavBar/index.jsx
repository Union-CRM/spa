import React from "react";
import { Container, Search } from "./styles";

class NavBar extends React.Component {
  render() {
    return (
      <>
        <Container $row={this.props.$row} $column={this.props.$column}>
          <Search type="search" />
        </Container>
      </>
    );
  }
}

export default NavBar;
