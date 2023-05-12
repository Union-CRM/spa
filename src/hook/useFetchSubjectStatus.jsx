import { useState, useEffect } from "react";
import axios from "axios";
import { useSubjectContext } from "./useSubjectContent";
import {
  subjectUpdateStatusFinished,
  subjectUpdateStatusCanceled,
} from "../api/routesAPI";

export const useFetchSubjectStatus = () => {
  const { loadData } = useSubjectContext();
  const subjectFinished = async (subject_id, subject) => {
    console.log(subject);
    axios
      .put(
        `${subjectUpdateStatusFinished}${subject_id}`,
        {},
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

  const subjectCanceld = async (subject_id, subject) => {
    axios
      .put(
        `${subjectUpdateStatusCanceled}${subject_id}`,
        {},
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
    subjectFinished,
    subjectCanceld,
  };
};
