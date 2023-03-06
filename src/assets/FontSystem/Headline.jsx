import React from "react";

import { FontHeadline } from "./styles";

class Headline extends React.Component {
  render() {
    return (
      <>
        <FontHeadline $mode={this.props.type} colorFont={this.props.colorFont}>{this.props.name}</FontHeadline>
      </>
    );
  }
}
export default Headline;
