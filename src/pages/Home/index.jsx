import React from "react";
import UserList from "../../components/UserList";
import User from "../../components/UserList/User";

{/*Array de Usuários*/}
const users =[
  {
    name:"Bonequinha Cinza",
    id:2566789,
    
  },
  {
    name:"Bonequinha Cinza",
    id:2566789,
    
  },
  {
    name:"Bonequinha Cinza",
    id:2566789,
    
  },
  {
    name:"Bonequinha Cinza",
    id:2566789,
    
  },

]

  
class Home extends React.Component {


  render() {
    return (
      <>
      
        <h1>Let's go!</h1>
      
          {/*Lista de Usuários*/}
          <div>
           
          <UserList userCount={"("+ (users.length.toString()) +")"} user={
              users.map((item,i) =>(<User key={i} name={item.name} id={item.id}/>))}/> 
        
          </div>


      </>

    
    );
  }
}

export default Home;
