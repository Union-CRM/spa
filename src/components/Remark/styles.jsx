import styled from "styled-components";

export const Editar=styled.img`
width: 13.5px;
margin-right: 5px;

`
export const Trash=styled.img`
width: 11px;
`
export const Finish=styled.img`
width: 11px;
background-color: #43BA65;
`
export const Calendar=styled.img`
width: 11px;


`

export const Card = styled.div`
  width: 250px;
  height: 172px;
  background-color: #F5F7FA;
  box-shadow: 0 2px 15px rgb(0, 0, 0, 0.5);
  color: #333;
  border-radius: 0.5rem;
  margin: 1rem;
  font-size: 0.5rem;
  position: relative;
  flex-direction: column;
  


  .color-bar {
    width: 14px;
    height: 172px;
    background-color: #00953B;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 8px 0px 0px 8px;}

    
    .rectangle {
    position: absolute;
    width: 81px;
    height: 14px;
    left: 34px;
    top: 10px;
    background-color: #00953B;
    border-radius: 8px;
    text-align: center;
    padding: 0.1rem;
    
   
    p {

    color: #F5F7FA;
    font-size: 0.7rem;
  
    }
  }


  .text1 {
    margin-top: 18px;
    display: flex;
    justify-content: left;
    padding: 1rem;
    flex-direction: column;
    margin-left: 8px;
  
    
    h1{
    color: #000000;
    font-size: 0.7rem;
    
  }

   h2{
   
    
    color: #000000;
    font-size: 0.6rem;
    font-weight: normal;
   }

   }

    .card-header {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;



    .icons-container {
      position: absolute;
      right: 0;
      top: 0;
      padding:11px;
      
     

        button {
        border: none;
        margin-left: 1rem;
        font-size: 1rem;
        line-height: 0;
        cursor: pointer;
        color: #1f1e1e;
        background-color: #F5F7FA;

        &:hover {
          color: #000000;
          transition: all 0.9s linear;
        }
      }
    }

  }
  
  .calendar {
    margin-left: 8px;
    button {
        border: none;
        margin-left: 1rem;
        font-size:  12px;;
        line-height: 0;
        cursor: pointer;
        color: #1f1e1e;
        background-color: #F5F7FA;
        flex-direction: row;
        font-weight: normal;
       

        &:hover {
          color: #000000;
          transition: all 0.9s linear;
        }

   }
    
  }

  .text{
    
    display: flex;
    justify-content: left;
    flex-direction: column;
    padding: 11px;
    position: absolute;
    margin-left: 12px;

    h3{
    color: #656464;
    font-size: 10px;
    font-weight: normal;
  }

   
  }
  .rectangle2 {
    position: absolute;
    border: 1px solid ;
    border-color:#00953B;
    background-color: #FFFFFF;
    border-radius: 8px;
    width: 118px;
    height: 17px;
    left: 37px;
    top: 140px;
    text-align: center;
  

  .separador {
    position: absolute;
    width: 0px;
    height: 16.03px;
    left: 85px;
    top: 136px;

    border: 1px solid #656464;
    }
  h4 {
    color: #656464;
    height: 5px;
    font-size: 8px;
    font-weight: normal;
    text-align: center;
    display: inline-block;
    margin-top: 5px;
    }
      }



  `
  