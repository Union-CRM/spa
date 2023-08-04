import React, { useState, useEffect } from "react";
import Body from "../../../../assets/FontSystem/Body";
import Subtitle from "../../../../assets/FontSystem/Subtitle";
import { ReactComponent as ArrowDown } from "../../../../assets/svg/Drop.svg";
import { ReactComponent as UpArrow } from "../../../../assets/svg/UpArrow.svg";
import { useClientContext } from "../../../../hook/useClientContent.jsx";
import CardsSecondary from "../CardsSecondary";

// CSS
import {
  Container,
  CardHierarchy,
  DivPhoto,
  DivDadosCard,
  DivPhotoI,
  PositionArrow,
  DivSecondPositions,
} from "./styles.jsx";

const ComponentCard = (props) => {
  const [divOpen, setDivOpen] = useState(!props.arrow);
  const [arrow, setArrow] = useState(props.arrow);
  const { clientTarget } = useClientContext();
  // const [] = useState();
  const [length, setLength] = useState(props.list ? props.list.length : 0);
  const handleState = () => {
    setArrow(!arrow);
    setDivOpen(!divOpen);
  };

  useEffect(() => {
    setLength(props.list ? props.list.length : 0);
    setArrow(props.arrow);
    setDivOpen(!props.arrow);
  }, [clientTarget, props.list]);

  return (
    <>
      <Container $mode={divOpen}>
        <CardHierarchy>
          {/*<DivPhoto>
            <DivPhotoI>
              <Body
                //   onClick={handleEdit}
                type={"Body1"}
                name={"Abilia Brandao De Oliveira Neta "
                  // name={client.client
                  .match(/(^\S\S?|\b\S)?/g)
                  .join("")
                  .match(/(^\S|\S$)?/g)
                  .join("")
                  .toUpperCase()}
              />
            </DivPhotoI>
          </DivPhoto>*/}
          <DivDadosCard>
            {/*<Body type={"Body2"} name="Abilia Brandao De Oliveira Neta" />*/}
            <Body type={"Body2"} name={props.title} />
          </DivDadosCard>
          <PositionArrow name="seta" onClick={() => handleState()}>
            {!arrow && <ArrowDown />}
            {arrow && <UpArrow />}
          </PositionArrow>
        </CardHierarchy>
        {!divOpen ? (
          <DivSecondPositions>
            {length > 0 ? (
              props.list.map((c, index) => (
                <CardsSecondary key={index} client={c} />
              ))
            ) : (
              <span>There are no clients registered in this role</span>
            )}
          </DivSecondPositions>
        ) : (
          <DivSecondPositions />
        )}
      </Container>
    </>
  );
};

export default ComponentCard;

function SplitClientName(n) {
  const user = n ? n : "";
  var userSplit = user.split(" ");
  var user1 = userSplit[0] + " " + userSplit[userSplit.length - 1] + "";

  return user1;
}
