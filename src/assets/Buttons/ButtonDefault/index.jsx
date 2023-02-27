import React from "react";

import { Button } from "./styles";

class ButtonDefault extends React.Component {
  render() {
    return (
      <>
        <Button
          $mode={this.props.type}
          weightFont={this.props.weightFont}
          sizeFont={this.props.sizeFont}
        >
          {this.props.name}
        </Button>
      </>
    );
  }
}
export default ButtonDefault;
