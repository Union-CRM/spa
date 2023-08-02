import React from "react";

import Body from "../../../../assets/FontSystem/Body";
import Subtitle from "../../../../assets/FontSystem/Subtitle";

// CSS
import { PhotoI, Photo, Dados, DivAdjust } from "./styles.jsx";
import { useClientContext } from "../../../../hook/useClientContent";
import { Link } from "react-router-dom";

const CardsSecondary = (props) => {
  const {
    setClientTarget,
    setViewClient,
    clientTarget,
    setToggleState,
    setActiveTab,
  } = useClientContext();

  const handleClickViewClient = () => {
    setClientTarget(props.client);
    setToggleState(0);
    setActiveTab(0);
    //setViewClient(true);
  };

  return (
    <DivAdjust>
      {/*<Link
            to="/client"
            onClick={() => handleClickViewClient()}
            style={{ textDecoration: "none", color: "black" }}
          ></Link>*/}
      <Photo onClick={handleClickViewClient}>
        <PhotoI IsActive={clientTarget.id === props.client.id}>
          <Body
            //   onClick={handleEdit}
            type={"Body1"}
            name={props.client.client
              // name={client.client
              .match(/(^\S\S?|\b\S)?/g)
              .join("")
              .match(/(^\S|\S$)?/g)
              .join("")
              .toUpperCase()}
          />
        </PhotoI>
        <Dados>
          <Body type={"Body2"} name={SplitName(props.client.client)} />
          <Subtitle type={"TextDescription"} name={props.client.textRole} />
        </Dados>
      </Photo>
    </DivAdjust>
  );
};

export default CardsSecondary;

function SplitName(n) {
  var user = n ? n : "";
  var userSplit = user.split(" ");
  var user1 = userSplit[0] + " " + userSplit[userSplit.length - 1] + "";

  return user1;
}
