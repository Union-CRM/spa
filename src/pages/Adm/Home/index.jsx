import React from "react";
import PageBody from "../../../components/Geral/PageBody";
import Home from "../../../components/Admin/Home/Index";

const HomeAdm = () => {
  return (
    <>
      <PageBody showNav={true}>
        <Home></Home>
      </PageBody>
    </>
  );
};

export default HomeAdm;
