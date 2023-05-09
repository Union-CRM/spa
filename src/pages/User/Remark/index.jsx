import React from "react";
import PageBody from "../../../components/Geral/PageBody";
import RemarkList from "../../../components/Remark/ContainerCardRemark";

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
