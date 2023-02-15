import React from "react";
import Body from "../../components/Body";
import RemarkList from "../../components/RemarkListView/RemarkList";


class RemarkPage extends React.Component {
  render() {
    return (
      <>
        <Body>
            <RemarkList/>
        </Body>
      </>
    );
  }
}

export default RemarkPage;