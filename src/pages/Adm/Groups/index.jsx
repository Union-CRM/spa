import React from "react";
import GroupListView from "../../../components/Admin/AdmGroupsList/GroupListPage";
import PageBody from "../../../components/Geral/PageBody";
import { CustomerContextProvider } from "../../../context/CustomerContext";



const GroupList = () => {
  return (
    <>
     
      <PageBody>
      <CustomerContextProvider>
        <GroupListView />
        </CustomerContextProvider>
      </PageBody>
    </>
  );
};

export default GroupList;
