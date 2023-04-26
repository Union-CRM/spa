import axios from "axios";
import { useClientContext } from "./useClientContent";

export const useFetchClient = () => {
  const { loadData } = useClientContext();
  const insertClient = async (client) => {
    console.log(client);

    axios
      .post(
        "http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8083/union/v1/clients/",
        {
          client_name: client.client,
          client_email: client.email,
          client_role: parseInt(client.role_id),
          customer_id: parseInt(client.customer_id),
          release_id: parseInt(client.release_id),
          business_id: parseInt(client.business_id),
          user_id: parseInt(client.user_id),
          tags: client.tags.map((t) => ({ tag_id: parseInt(t.id) })),
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

  const updateStatusClient = async (client_id) => {
    axios
      .put(
        `http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8083/union/v1/clients/update/status/${client_id}`,
        {},
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then(function (response) {
        //console.log(response);
        loadData();
      })
      .catch(function (error) {
        console.log(error.response);
      });
  };

  const updateClient = async (client_id, client) => {
    axios
      .put(
        `http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8083/union/v1/clients/update/${client_id}`,
        {
          client_name: client.client,
          client_email: client.email,
          client_role: parseInt(client.role_id),
          customer_id: parseInt(client.customer_id),
          release_id: parseInt(client.release_id),
          business_id: parseInt(client.business_id),
          user_id: parseInt(client.user_id),
          tags: client.tags.map((t) => ({
            tag_id: parseInt(t.value),
            tag_name: t.label,
          })),
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then(function (response) {
        //console.log(response);
        loadData();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return {
    insertClient,
    updateClient,
    updateStatusClient,
  };
};
