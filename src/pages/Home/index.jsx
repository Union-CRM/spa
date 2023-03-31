import React from "react";
import PageBody from "../../components/Geral/PageBody";
import CreateRemark from "../../components/Subject/ModalCreateRemark";

class Home extends React.Component {
  render() {
    return (
      <>
        <PageBody>
          <CreateRemark />
        </PageBody>
      </>
    );
  }
}

export default Home;
