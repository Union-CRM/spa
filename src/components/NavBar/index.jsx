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
        <Container>
          <Logo>
            <IconSystem icon={"TataLogo"} />
          </Logo>

          <DivSear>
            <DivIcon
              $mode={this.state.searchtState}
              onClick={() => this.setState({ searchtState: "true" })}
            >
              <IconSystem icon={"Search2"} />
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
