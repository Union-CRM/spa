import React, { useEffect, useState } from "react";
import Cards from "../../components/Remark";





export default  function Home() {
  const [cardsData, setCardsData] = useState([
    { id: 1, title: "Apresentação Institucional TCS", author: "Gilberto Anderson", estimatedDate:"10 Feb 2023", deliveryDate:"07 Feb 2023", description:"Jornada Digital Itaubers", subdescription:"Financas Risco de Credito e Capital", Client:"Bruno lins"},
    { id: 2, title: "Apresentação Institucional TCS", author: "Isabela Bueno", estimatedDate:"11 Feb 2023", deliveryDate:"08 Feb 2023", description:"Jornada Digital Itaubers", subdescription:"Financas Risco de Credito e Capital", Client:"Tcs"},
    { id: 3, title: "Apresentação Institucional TCS", author: "Vinicius Tristão", estimatedDate:"12 Feb 2023", deliveryDate:"09 Feb 2023", description:"Jornada Digital Itaubers", subdescription:"Financas Risco de Credito e Capital", Client:"Itau"},

  ])

  const [cards, setCards] = useState([])

    useEffect(() => {
      setCards(cardsData)
    }, [cardsData])

    function deleteCard(id) {
      let cardsWithoutDeletedOne = cards.filter((card) => {
        return card.id !== id;
      })
    
      setCardsData(cardsWithoutDeletedOne)
    }

    

    
    return (
      <>
        <h1>Let's go!</h1>
        
         
            {cards.map((card) => {
              return (
                <Cards key={card.id} id={card.id} title={card.title} author={card.author} estimatedDate={card.estimatedDate} deliveryDate={card.deliveryDate} description={card.description} subdescription={card.subdescription} Client={card.Client} deleteCard={deleteCard}/>
               
               
                )

            })
            }
          
        
      </>
    );
  
}



