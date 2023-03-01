import React from "react";

import { FontSubtitle } from "./styles";

class Subtitle extends React.Component {
  render() {
    return (
      <>
        <FontSubtitle $mode={this.props.type}>{this.props.name}</FontSubtitle>
      </>
    );
  }
}
export default Subtitle;
