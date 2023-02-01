import React from "react";
import IconSystem from "../../IconSystem";

import { Button, IconAdd } from "./styles";
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
          <IconAdd>
            <IconSystem icon={"add2"} />
          </IconAdd>
          {this.props.name}
        </Button>
      </>
    );
  }
}
export default ButtonAdd;
