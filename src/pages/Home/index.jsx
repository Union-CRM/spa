import React from "react";
import AdmAddEditPlanner from "../../components/AdmAddEditPlanner";
import PageBody from "../../components/PageBody";

class Home extends React.Component {
  render() {
    return (
      <>
        <PageBody>
          <AdmAddEditPlanner title={"Create Planner"}></AdmAddEditPlanner>
        </PageBody>
      </>
    );
  }
}

export default Home;
