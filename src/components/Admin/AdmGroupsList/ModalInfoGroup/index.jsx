import React, { useState, useEffect, useRef } from "react";

import {
  ContainerCentral,
  Container,
  PositionTitle,
  H1,
  Form,
  DivBetween,
  Content,
  DivGroups,
  TitleDivGroup,
  TotalGroups,
  IconGroup,
  DivTotalMembers,
  TitleDivMembers,
  IconMembers,
  TotalMembers,
  DivGraphic,
  GraphicGroup,
  TitleGraphic,
} from "./styles";

import ButtonDefault from "../../../../assets/Buttons/ButtonDefault";
import { UsersComponents } from "../UsersComponents";
import SingleSelect from "../../../Geral/Input/SingleSelect";
import { useFetchCustomer } from "../../../../hook/useFetchCustomer";
import { useFetchAdmGroupList } from "../../../../hook/useFetchAdmGroupList";
import {useGroupListContext} from "../../../../hook/useGroupListContext";
import {Donut} from "../../../../components/Admin/AdmGraphicGroup/Donut";

//Icons
import { ReactComponent as Groups } from "../../../../assets/svg/Groups.svg";
import { ReactComponent as PeopleTeams } from "../../../../assets/svg/PeopleTeams.svg";

const InfoGroup = (props) => {
    const { group: groupList} = useGroupListContext();
  
   // const tamanho = groupList.length;
  // const tamanhoUser = users.length;
    
    const { setModal, id } = props;
    useEffect(() => {
      if (props.title === "Info Group") {
    
      }
    }, []);

    const totalUsers = groupList.reduce((acc, cur) => {
      return acc + cur.usersCount;
    }, 0);
    const totalGroups = groupList.length;

  return (
    <>
      <ContainerCentral>
        <Container>
        
          <Form>
          
            <DivBetween>
            
            <DivGroups>
              <Content>
            <IconGroup>
                <Groups
                  style={{
                    fill: "#E41165",
                    width: "25%",
                    height:"25%",
                  }}
                />
               
              </IconGroup>

              <TitleDivGroup>
                    Groups
                </TitleDivGroup>
                      
                <TotalGroups >
                  {totalGroups}
                </TotalGroups>
                </Content>
            </DivGroups>

{/*MEMBERS*/}
      
              <DivTotalMembers>
              <Content>
              <IconMembers>
                <PeopleTeams
                  style={{
                    fill: "#E41165",
                    width: "25%",
                    height:"25%",
                  }}
                />
               
              </IconMembers>

              <TitleDivMembers>
                    Total Members
                </TitleDivMembers>

                <TotalMembers>
               {totalUsers}
                </TotalMembers>
                </Content>
              </DivTotalMembers>

              </DivBetween>


              {/*GRAPHIC*/}

            <GraphicGroup>
         <TitleGraphic>
            Members for Group
            </TitleGraphic>
            <DivGraphic>

          </DivGraphic>
            </GraphicGroup>
            
          </Form>{" "}
        
        </Container>
       
      </ContainerCentral>
    </>
  );
};

export default InfoGroup;

const status_mok = [
  { id: 1, value: "Active", label: "Active" },
  { id: 2, value: "Inactive", label: "Inactive" },
];

function totalUsers (){
  
}