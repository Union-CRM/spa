import React from "react";
import PageBody from "../../components/Geral/PageBody";
import SubjectList from "../../components/Subject/SubjectCardListView";
import { SubjectContextProvider } from "../../context/SubjectContext";
import { RemarkContextProvider } from "../../context/RemarkContext";
import { PlannerContextProvider } from "../../context/PlannerContext";

class SubjectPage extends React.Component {
  render() {
    return (
      <>
        <PageBody>
          <SubjectContextProvider>
            <RemarkContextProvider>
              <PlannerContextProvider>
                <SubjectList />
              </PlannerContextProvider>
            </RemarkContextProvider>
          </SubjectContextProvider>
        </PageBody>
      </>
    );
  }
}

export default SubjectPage;
