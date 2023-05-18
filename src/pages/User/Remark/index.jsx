import React from "react";
import PageBody from "../../../components/Geral/PageBody";
import RemarkList from "../../../components/Remark/ContainerCardRemark";
import { RemarkContextProvider } from "../../../context/RemarkContext";

class RemarkPage extends React.Component {
  render() {
    return (
      <>
        <PageBody>
          <RemarkContextProvider>
            <RemarkList />
          </RemarkContextProvider>
        </PageBody>
      </>
    );
  }
}

export default RemarkPage;
