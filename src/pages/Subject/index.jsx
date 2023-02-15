import React from "react";
import Body from "../../components/Body";
import SubjectList from "../../components/SubjectCardListView";


class SubjectPage extends React.Component {
  render() {
    return (
      <>
        <Body>
        <SubjectList />

        </Body>
      </>
    );
  }
}

export default SubjectPage;