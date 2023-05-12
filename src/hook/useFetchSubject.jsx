import axios from "axios";
import { useSubjectContext } from "./useSubjectContent";
import { useUserContext } from "./useUserContext";
import { subjectCreate, subjectUpdate } from "../api/routesAPI";

export const useFetchSubject = () => {
  const { user } = useUserContext();

  const { loadData } = useSubjectContext();
  const insertSubject = async (subject, user_id) => {
    axios
      .post(
        `${subjectCreate}${user_id}`,
        {
          subject_title: subject.subject_title,
          subject_text: subject.subject_text,
          subject_type: 20,
          client_id: parseInt(subject.client),
          release_id: parseInt(subject.release_id),
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then(function (response) {
        loadData();
        //console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const updateSubject = async (subject_id, subject) => {
    //console.log(subject.title + "teste" + subject.text + subject_id);
    axios
      .put(
        `${subjectUpdate}${subject_id}`,
        {
          subject_title: subject.title,
          subject_text: subject.text,
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
    insertSubject,
    updateSubject,
  };
};
