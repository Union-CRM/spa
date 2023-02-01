import React from "react";
import {Card} from "./styles";
import edit from "../../imagens/edit.svg"
import finish from "../../imagens/finish.svg"
import trash from "../../imagens/trash.svg"
import calendar from "../../imagens/calendar.svg"
import { Editar, Trash, Finish, Calendar} from "./styles";


function Cards(props){

    
  
      function deleteSelectedCard() {
        props.deleteCard(props.id);
      }
     
        
        
 
  return(
               
  <Card> 

<div className="color-bar"></div>

    <div className="card-header">
      <div className="rectangle"> <p> Finished</p></div>
      <div className="icons-container">
      <button><Editar src={edit} /></button> 
        <button onClick={deleteSelectedCard}><Trash src= {trash}/></button>
      </div>
    </div>
    <div className="text1">
      <h1>{props.title}</h1>
      <h2>{props.author}</h2></div>

      <div className="calendar">
      <button><Finish src= {finish} color="#43BA65"/> {props.estimatedDate}</button> 
      <button><Calendar src= {calendar}/> {props.deliveryDate}</button>  </div>

      <div className="text"> 
      <h3>{props.description}</h3> 
      <h3> {props.subdescription}</h3> 
      </div>
     
      
    
    <div className="rectangle2">
     <h4>Client | {props.Client} </h4>
      </div>  
    
      
 
  </Card>

      
  )
}

export default Cards