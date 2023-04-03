import React from "react";
import PageBody from "../../components/Geral/PageBody";
import SubjectList from "../../components/Subject/SubjectCardListView";

class SubjectPage extends React.Component {
  render() {
    return (
      <>
        <PageBody>
          <SubjectList />
        </PageBody>
      </>
    );
  }
}

export default SubjectPage;
