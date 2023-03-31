import React from "react";
import PageBody from "../../components/Geral/PageBody";
import CreateRemark from "../../components/Remark/RemarkModal";

class Home extends React.Component {
  render() {
    return (
      <>
        <PageBody>
          <CreateRemark></CreateRemark>
        </PageBody>
      </>
    );
  }
}

export default Home;
