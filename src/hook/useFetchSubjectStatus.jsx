import axios from "axios";
import { useSubjectContext } from "./useSubjectContent";
import { subjectUpdateStatus } from "../api/routesAPI";

export const useFetchSubjectStatus = () => {
  const { loadData } = useSubjectContext();

  const updateSubjectStatus = async (subject_id, status) => {
    axios
      .put(
        `${subjectUpdateStatus}${subject_id}`,
        {
          status_description: status,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then(function (response) {
        loadData();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return {
    updateSubjectStatus,
  };
};
