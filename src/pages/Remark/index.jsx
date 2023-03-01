import React from "react";
import PageBody from "../../components/PageBody";
import RemarkList from "../../components/RemarkListView/RemarkList";

class RemarkPage extends React.Component {
  render() {
    return (
      <>
        <PageBody>
          <RemarkList />
        </PageBody>
      </>
    );
  }
}

export default RemarkPage;
