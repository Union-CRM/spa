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
          sizeWidth={this.props.sizeWidth}
          sizeHeight={this.props.sizeHeight}
        >
          {this.props.name}
        </Button>
      </>
    );
  }
}
export default ButtonDefault;
