import React, { useState, useEffect } from "react";
import { useClientContext } from "../../../hook/useClientContent.jsx";
import ComponentCard from "./CardHierarchy";
// CSS
import { Container } from "./styles.jsx";

const HierarhyClient = (props) => {
  const { client, clientTarget } = useClientContext();
  const [hierarhy, setHierarhy] = useState();

  useEffect(() => {
    try {
      const Directors = client
        .filter((c) => c.release_id === clientTarget.release_id)
        .filter((c) => c.textRole === "Director (LCIO)")
        .sort((a, b) => (a.client || "").localeCompare(b.client || ""));

      const Superintendents = client
        .filter((c) => c.release_id === clientTarget.release_id)
        .filter((c) => c.textRole === "Superintendent (cCIO)")
        .sort((a, b) => (a.client || "").localeCompare(b.client || ""));
      const Managers = client
        .filter((c) => c.release_id === clientTarget.release_id)
        .filter((c) => c.textRole === "Project Manager")
        .sort((a, b) => (a.client || "").localeCompare(b.client || ""));
      const Coordinator = client
        .filter((c) => c.release_id === clientTarget.release_id)
        .filter(
          (c) =>
            c.textRole !== "Project Manager" &&
            c.textRole !== "Superintendent (cCIO)" &&
            c.textRole !== "Director (LCIO)"
        )
        .sort((a, b) => (a.client || "").localeCompare(b.client || ""));

      setHierarhy([
        {
          title: "Director",
          list: Directors,
          IAm: clientTarget.textRole === "Director (LCIO)",
        },
        {
          title: "Superintendent",
          list: Superintendents,
          IAm: clientTarget.textRole === "Superintendent (cCIO)",
        },
        {
          title: "Project Manager",
          list: Managers,
          IAm: clientTarget.textRole === "Project Manager",
        },
        {
          title: "Coordinator",
          list: Coordinator,
          IAm:
            clientTarget.textRole !== "Project Manager" &&
            clientTarget.textRole !== "Director (LCIO)" &&
            clientTarget.textRole !== "Superintendent (cCIO)",
        },
      ]);
    } catch {
      console.error("Error!! Contact the support");
    }
  }, [clientTarget]);

  return (
    <Container>
      {hierarhy
        ? hierarhy.map((h, index) => (
            <ComponentCard
              key={index}
              list={h.list}
              title={h.title}
              arrow={h.IAm}
            />
          ))
        : ""}
    </Container>
  );
};

export default HierarhyClient;
