import React from "react";

import{UserListComponentSt,H2,UserCount,UserItem,UserListSt} from "./styles.jsx";

function UserList(props){

        return( 

        <UserListComponentSt >
            
            <H2>Users
                 <UserCount>{props.userCount}</UserCount>
            </H2>
                
            <UserListSt>
                    <UserItem>{props.user}</UserItem>
                </UserListSt>

         </UserListComponentSt>

         )
          
    
 
};  export default UserList;