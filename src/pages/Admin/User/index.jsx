import React, { useEffect, useState } from "react";
import ContainerCards from "../../../components/Admin/User/ContainerCardUser";
import PageBody from "../../../components/Geral/PageBody";
import UserProfile from "../../../components/Admin/User/UserProfile";
import { useUserContext } from "../../../hook/useUserContext";

const AdmUser = () => {
  const { viewProfile, setViewProfile } = useUserContext();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setViewProfile(false);
    setLoading(false);
  }, []);
  return (
    <>
      {viewProfile ? (
        <PageBody showNav={true}>{!loading && <UserProfile />}</PageBody>
      ) : (
        <PageBody>{!loading && <ContainerCards />}</PageBody>
      )}
    </>
  );
};

export default AdmUser;
