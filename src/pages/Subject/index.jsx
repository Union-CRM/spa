import React from "react";
import PageBody from "../../components/Geral/PageBody";
import SubjectList from "../../components/Subject/SubjectCardListView";
import { SubjectContextProvider } from "../../context/SubjectContext";

class SubjectPage extends React.Component {
  render() {
    return (
      <>
        <PageBody>
          <SubjectContextProvider>
            <SubjectList />
          </SubjectContextProvider>
        </PageBody>
      </>
    );
  }
}

export default SubjectPage;
