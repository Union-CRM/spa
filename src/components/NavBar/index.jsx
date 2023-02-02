import React from "react";
import { Container, Logo, GoSearch, DivSear, DivIcon } from "./styles";

import IconSystem from "../../assets/IconSystem";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchtState: "false",
    };
  }
  render() {
    return (
      <>
        <Container $row={this.props.$row} $column={this.props.$column}>
          <Logo>
            <IconSystem icon="tata_logo" />
          </Logo>

          <DivSear>
            <DivIcon
              $mode={this.state.searchtState}
              onClick={() => this.setState({ searchtState: "true" })}
            >
              <IconSystem icon="search2" />
            </DivIcon>
            <GoSearch
              type="search"
              placeholder="search..."
              onFocus={() => this.setState({ searchtState: "true" })}
              onBlur={() => this.setState({ searchtState: "false" })}
            ></GoSearch>
          </DivSear>
        </Container>
      </>
    );
  }
}

export default NavBar;
