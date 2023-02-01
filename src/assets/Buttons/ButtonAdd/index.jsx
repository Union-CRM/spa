import React from "react";

import { Button } from "./styles";
//$mode- change background-color
//
class ButtonAdd extends React.Component {
  render() {
    return (
      <>
        <Button
          $mode={this.props.mode}
          $width={this.props.width}
          $height={this.props.height}
          $color={this.props.color}
        >
          {this.props.name}
        </Button>
      </>
    );
  }
}
export default ButtonAdd;
