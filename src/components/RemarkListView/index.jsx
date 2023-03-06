import React from "react";
import { Card } from "./styles";
import edit from "../../imagens/edit.svg";
import finish from "../../imagens/finish.svg";
import trash from "../../imagens/trash.svg";
import calendar from "../../imagens/calendar.svg";
import IconSystem from "../../assets/IconSystem";
import {
  Finish,
  Calendar,
  ColorBar,
  Rectangle,
  Text1,
  Rectangle2,
  Text,
  Calendar2,
  CardHeader,
  IconsContainer,
} from "./styles";

function Cards(props) {
  function deleteSelectedCard() {
    props.deleteCard(props.id);
  }

  return (
    <Card>
      <ColorBar />
      <CardHeader>
        <Rectangle>
          {" "}
          <p> Finished</p>{" "}
        </Rectangle>
        <IconsContainer>
          <button>
            <IconSystem icon={"Edit"} height={"11px"} />
 
          </button>
          <button onClick={deleteSelectedCard}>
          <IconSystem icon={"Trash"}  height={"11px"} />
          </button>
        </IconsContainer>
      </CardHeader>

      <Text1>
        <h1>{props.title}</h1>
        <h2>{props.author}</h2>
      </Text1>

      <Calendar2>
        <button>
          <Finish src={finish} color="#43BA65" /> {props.estimatedDate}
        </button>
        <button>
        <IconSystem icon={"Calendar"} height={"11px"} />{props.deliveryDate}
        </button>
      </Calendar2>

      <Text>
        <h3>{props.description}</h3>
        <h3> {props.subdescription}</h3>
      </Text>

      <Rectangle2>
        <h4>Client | {props.Client} </h4>
      </Rectangle2>
    </Card>
  );
}

export default Cards;
