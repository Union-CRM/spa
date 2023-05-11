import React, { useState, useEffect } from "react";
import {
  ContainerDetails,
  DivBetween,
  DivEmail,
  DivRole,
  DivCustomer,
  DivRelease,
  DivBusiness,
  NoTags,
  DivTags,
  TagsClient,
  DivColors,
} from "./styles";
import { useClientContext } from "../../../hook/useClientContent";
import { useFetchRelease } from "../../../hook/useFetchRelease";
import { useFetchCustomer } from "../../../hook/useFetchCustomer";
import { useFetchRole } from "../../../hook/useFetchRole";
import { useFetchTag } from "../../../hook/useFetchTag";

const ClientDetails = (props) => {
  const { setModal, id } = props;

  const { releaseList } = useFetchRelease("release");
  const { customerList } = useFetchCustomer("Customer");
  const { roleList } = useFetchRole("Role");
  const { tagList } = useFetchTag("Tag");
  const [releaseObj, setReleaseObj] = useState({
    release_name: "",
    business_name: "",
  });

  const { client: clientList, loadData } = useClientContext();
  const client = clientList.filter((item) => item.id === props.id)[0];

  const { setId } = useClientContext();
  const [email, setEmail] = useState();
  const [release, setRelease] = useState();
  const [rose, setRole] = useState();
  const [business, setBusiness] = useState();
  const [customer, setCustomer] = useState();
  const [tags, setTags] = useState([]);

  useEffect(() => {
    if (props.title === "Details Clients") {
      const client = clientList.filter((item) => item.id === props.id)[0];
      setEmail(client.client_email);
      setReleaseObj({
        id: client.release_id,
        label: client.textRelease,
        business_id: client.business_id,
        business_name: client.textBusiness,
      });
      setBusiness(client.textBusiness);
      setCustomer({ id: client.customer_id, label: client.textCustomer });
      setRole({ id: client.role_id, label: client.textRole });
      setTags(
        client.tags.map((item) => ({
          value: item.value,
          label: item.label,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        }))
      );
    }
  }, [id, clientList]);

  return (
    <ContainerDetails>
      <DivBetween>
        <DivEmail>
          Email
          <span onChange={(event) => setEmail(event.target.value)}>
            {client.email}
          </span>
        </DivEmail>

        <DivRole>
          Role
          <span onChange={(event) => setRole(event.target.value)}>
            {client.textRole}
          </span>
        </DivRole>
      </DivBetween>

      <DivBetween>
        <DivCustomer>
          Customer
          <span onChange={(event) => setCustomer(event.target.value)}>
            {client.textCustomer}
          </span>
        </DivCustomer>

        <DivRelease>
          Release Train
          <span onChange={(event) => setRelease(event.target.value)}>
            {client.textRelease}
          </span>
        </DivRelease>
      </DivBetween>

      <DivBusiness>
        Business
        <span onChange={(event) => setBusiness(event.target.value)}>
          {client.textBusiness}
        </span>
      </DivBusiness>

      <DivTags>
        Tags
        {tags && tags.length === 0 ? (
          <NoTags>It has no tags.</NoTags>
        ) : (
          <TagsClient>
            {tags
              ? tags.map((t) => (
                  <DivColors colors={t.color}>{t.label}</DivColors>
                ))
              : ""}
          </TagsClient>
        )}
      </DivTags>
    </ContainerDetails>
  );
};

export default ClientDetails;

const colors = [
  "#836FFF",
  "#00BFFF",
  "#7FFFD4",
  "#00FA9A",
  "#00FF00",
  "#ADFF2F",
  "#BDB76B",
  "#FFDEAD",
  "#DEB887",
  "#9370DB",
  "#EE82EE",
  "#FFB6C1",
  "#F08080",
  "#FA8072",
  "#FFA07A",
  "#FFFF00",
  "#7B68EE",
  "#BC8F8F",
];
