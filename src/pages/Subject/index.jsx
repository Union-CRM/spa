import React from "react";
import PageBody from "../../components/PageBody";
import SubjectList from "../../components/SubjectCardListView";

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
