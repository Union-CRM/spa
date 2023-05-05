import React from "react";

import PageBody from "../../../components/Geral/PageBody";
import Group from "../../../components/Grafico/Group";

const Groups = () => {
  return <PageBody></PageBody>;
};

export default Groups;

import GroupListView from "../../../components/Admin/AdmGroupsList/GroupListPage";
import PageBody from "../../../components/Geral/PageBody";
import {GroupListContextProvider} from "../../../context/GroupListContext";

const GroupList = () => {
  return (
    <>

      <PageBody>
        <GroupListView />
      </PageBody>
       
    </>
  );
};

export default GroupList;

