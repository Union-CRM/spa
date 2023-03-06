import React from "react";

import { FontBody } from "./styles";

class Body extends React.Component {
  render() {
    return (
      <>
        <FontBody $mode={this.props.type} colorFont={this.props.colorFont}>{this.props.name} </FontBody>
      </>
    );
  }
}
export default Body;
