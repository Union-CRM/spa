import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useClientContext } from "../../../../hook/useClientContent";
import { FaUserCircle } from "react-icons/fa";
import { ReactComponent as Contact } from "../../../../assets/svg/Contact.svg";
import {
  Label,
  ContainerSelect,
  SelectContainer,
  SelectedOptionsContainer,
  Dropdown,
  DropdownOption,
  DropdownButton,
  SelectedOption,
  RemoveButton,
  DivIconAndSelect,
  IconUser,
  DivNoOptions,
  ContainerOptions,
} from "./styles";

import { useUserContext } from "../../../../hook/useUserContext";
import { useFetchUsersNotin } from "../../../../hook/useFetchUsersNotin";

export const selectedOptions = [];
export const UsersComponents = (props, placeholder, idTagOption) => {
  const colors = ["#FFC0CB", "#DDA0DD", "#F5DEB3", "#98FB98", "#87CEEB"];

  /*const option = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5", "Option 6", "Option 7", "Option 8", "Option 9", "Option 10", "Option 11",
  "Option 12", "Option 13", "Option 14", "Option 15", "Option 16"];*/

  /*const option = props.option.map((item)=>({value:item.value,label:item.label,color:colors[Math.floor(Math.random() * (colors.length-1))]}));//props.options;
  //console.log(options.map((item)=>({value:item.value,label:item.label,color:colors[getRandomInt(colors.length-1)]})))*/

  /*const [guest, setGuest] = useState([]);
  const [clientOption, setClientOption] = useState([]);
  const { client: clientList } = useClientContext();*/

  const { userNotin: usersNotin, userListSub: userSub } = useFetchUsersNotin();

  const { loadUserSub, loadUserNotin } = useFetchUsersNotin();

  useEffect(() => {
    loadUserNotin();
    loadUserSub();
  }, []);

  const usersList = userSub.concat(usersNotin);

  useEffect(() => {
    if (usersList) {
      setUserOption(
        usersList.map((c) => ({ id: c.id, value: c.id, label: c.name }))
      );
    }
  }, [usersNotin, userSub]);

  const [userOption, setUserOption] = useState([]);
  const { users: userList } = useUserContext();

  const [setSelectedOptions] = useState([]);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleOptionChange = (userOption) => {
    setSelectedOptions([...selectedOptions, userOption]);
    setDropdownOpen(true);
  };

  const handleRemoveOption = (optionToRemove) => {
    const updatedSelectedOptions = selectedOptions.filter(
      (userOption) => userOption !== optionToRemove
    );
    setSelectedOptions(updatedSelectedOptions);
  };

  const availableOptions = userOption.filter(
    (userOption) => !selectedOptions.includes(userOption)
  );

  useEffect(() => {
    if (userList) {
      setUserOption(
        userList.map((c) => ({ id: c.id, value: c.id, label: c.name }))
      );
    }
  }, []);

  return (
    <>
      <ContainerSelect>
        <Label>Users:</Label>
        <SelectContainer>
          <DropdownButton onClick={() => setDropdownOpen(!dropdownOpen)}>
            <DivIconAndSelect>
              {"Select Users "}
              <IconUser>
                <Contact
                  style={{
                    fill: "#B5B5B5",
                  }}
                />
              </IconUser>
            </DivIconAndSelect>
          </DropdownButton>

          {dropdownOpen && (
            <Dropdown>
              {availableOptions.length > 0 ? (
                availableOptions.map((userOption) => (
                  <DropdownOption
                    onClick={() => handleOptionChange(userOption)}
                  >
                    {userOption.label}
                  </DropdownOption>
                ))
              ) : (
                <DivNoOptions>No options</DivNoOptions>
              )}
            </Dropdown>
          )}
        </SelectContainer>

        <ContainerOptions>
          <SelectedOptionsContainer>
            {selectedOptions.map((userOption) => (
              <SelectedOption key={userOption.label}>
                {userOption.label}
                <RemoveButton onClick={() => handleRemoveOption(userOption)}>
                  X
                </RemoveButton>
              </SelectedOption>
            ))}
          </SelectedOptionsContainer>
        </ContainerOptions>
      </ContainerSelect>
    </>
  );
};
