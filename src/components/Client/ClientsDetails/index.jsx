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

const ClientDetails = (props) => {
  const { id } = props;

  const { client: clientList, clientTarget } = useClientContext();
  //const client = clientList.filter((item) => item.id === props.id)[0];

  const [tags, setTags] = useState([]);

  useEffect(() => {
    if (props.title === "Details Clients") {
      setTags(
        clientTarget.tags.map((item) => ({
          value: item.value,
          label: item.label,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        }))
      );
    }
  }, [id, clientList, clientTarget.tags, props.title]);

  return (
    <ContainerDetails>
      <DivBetween>
        <DivEmail>
          Email
          <span>{clientTarget.email}</span>
        </DivEmail>

        <DivRole>
          Role
          <span>{clientTarget.textRole}</span>
        </DivRole>
      </DivBetween>

      <DivBetween>
        <DivCustomer>
          Customer
          <span>{clientTarget.textCustomer}</span>
        </DivCustomer>

        <DivRelease>
          Release Train
          <span>{clientTarget.textRelease}</span>
        </DivRelease>
      </DivBetween>

      <DivBusiness>
        Business
        <span>{clientTarget.textBusiness}</span>
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
