import React from "react";
import { Card } from "./styles";
import edit from "../../imagens/edit.svg";
import finish from "../../imagens/finish.svg";
import trash from "../../imagens/trash.svg";
import calendar from "../../imagens/calendar.svg";
import {
  Editar,
  Trash,
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
            <Editar src={edit} />
 
          </button>
          <button onClick={deleteSelectedCard}>
            <Trash src={trash} />
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
          <Calendar src={calendar} /> {props.deliveryDate}
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
