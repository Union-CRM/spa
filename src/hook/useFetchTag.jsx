import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchTag = (tag) => {
  const [tagList, setTagList] = useState(null);
  const [loading, setLoading] = useState(false);
  const [tagBusinessList, setTagBusinessList] = useState(null);

  useEffect(() => {
    async function loadDate() {
      var tags;
      try {
        const response = await axios.get(
          "http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8090/union/v1/tags",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        tags = response;
      } catch (error) {
        console.error(error);
      }
      //console.log(tags);
      setTagList(
        tags.data.tag_list.map((item) => ({
          id: item.tag_id,
          value: item.tag_id,
          label: item.tag_name,
          type:item.tag_type
        }))
      );

      //Lista de tags (Business)
      setTagBusinessList(
        tags.data.tag_list
          .filter(item => item.tag_type === 17)
          .map(item => ({
            id: item.tag_id,
            value: item.tag_id,
            label: item.tag_name,
            type: item.tag_type
          }))
      );
            
    }
    loadDate();
  }, []);

  return {
    tagList,
    tagBusinessList,
    loading,
  };
};
