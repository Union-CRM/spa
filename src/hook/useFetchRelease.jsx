import { useState, useEffect } from "react";
import axios from "axios";
import { realiseGetRealiseTrains } from "../api/routesAPI";

export const useFetchRelease = (release) => {
  const [releaseList, setReleaseList] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadDate() {
      var releases;
      try {
        const response = await axios.get(realiseGetRealiseTrains, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        releases = response;
      } catch (error) {
        console.error(error);
      }
      //setReleaseList(releases.data.list);
      setReleaseList(
        releases.data.list.map((item) => ({
          id: item.release_id,
          value: item.release_id,
          label: item.release_name,
          business_id: item.business_id,
          business_name: item.business_name,
        }))
      );
    }
    loadDate();
  }, []);

  return {
    releaseList,
    loading,
  };
};
