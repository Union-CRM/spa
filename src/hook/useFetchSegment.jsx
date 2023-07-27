import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchSegment = (seg) => {
  const [segmentList, setSegmentList] = useState(null);

  useEffect(() => {
    async function loadDate() {
      var segment;
      try {
        const response = await axios.get(
          "http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8090/union/v1/domains",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        segment = response;
      } catch (error) {
        console.error(error);
      }
      //console.log(tags);
      setSegmentList(
        segment.data.domain_list.map((item) => ({
          id: item.domain_id,
          value: item.domain_id,
          label: item.domain_value,
          code: item.domain_code,
        }))
      );
    }
    loadDate();
  }, []);

  return {
    segmentList,
  };
};
