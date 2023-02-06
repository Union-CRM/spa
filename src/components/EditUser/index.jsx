import React from "react";
import IconSystem from "../../assets/IconSystem";
import{DivForm,Title,DivUser,DivCenter,DivStatus,InputUser, InputEmail,SelectStatus,
    SelectLevel, TitleEmail, TitleLevel,DivEmail,DivLevel,Button1,Button2} from "./styles.jsx";

import ButtonDefault from "../../assets/Buttons/ButtonDefault";

function EditUser(){
    return(


    <DivForm>
         <Title>
             <h1>Edit User</h1>
        </Title>


            <DivUser>
            <p>User Name</p>
                <InputUser type="text" />
            </DivUser>
    
          <DivCenter> 
            <DivEmail>
                 <TitleEmail>Email</TitleEmail>
                 <InputEmail type="text"/>
            </DivEmail>
            <DivLevel>
                 <TitleLevel>Level</TitleLevel>
                <SelectLevel>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
                </SelectLevel>
            </DivLevel>
          </DivCenter>

          <DivStatus>
            <p>Status</p>
             <SelectStatus>
             <option value="">Ativo</option>
              <option value="">Inativo</option>
            </SelectStatus>
          </DivStatus>

        <Button1>
          <ButtonDefault name="Save" type="true"></ButtonDefault>
        </Button1>
        <Button2>
          <ButtonDefault name="Cancel" type="false" width={"1000px"}></ButtonDefault>
        </Button2>      
  </DivForm>
 )
} export default EditUser;