import React from "react";
import IconSystem from "../../IconSystem";
import { Button, IconAdd, Span } from "./styles";
import { ReactComponent as Add2 } from "../../svg/Add2.svg";


class ButtonAdd extends React.Component {
  render() {
    return (
      <>
        <Button
          $mode={this.props.mode}
          $width={this.props.width}
          $height={this.props.height}
          $padding={this.props.padding}
          $color={this.props.color}
          $border={this.props.border}
          $boxShadow={this.props.boxShadow}
          weighFont={this.props.weightFont}
          sizeFont={this.props.sizeFont}
        >
          <IconAdd>
         
            <Add2
            style={{
            fill:"#FFF"
            }}
           />
          </IconAdd>
          <Span
            color={this.props.color}
            margin={this.props.margin}
            sizeFont={this.props.sizeFont}
          >
            {this.props.name}
          </Span>
        </Button>
      </>
    );
  }
}
export default ButtonAdd;
