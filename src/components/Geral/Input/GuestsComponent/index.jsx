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

export const GuestComponent = (props, placeholder, idTagOption) => {
  const colors = ["#FFC0CB", "#DDA0DD", "#F5DEB3", "#98FB98", "#87CEEB"];

  /*const option = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5", "Option 6", "Option 7", "Option 8", "Option 9", "Option 10", "Option 11",
  "Option 12", "Option 13", "Option 14", "Option 15", "Option 16"];*/

  /*const option = props.option.map((item)=>({value:item.value,label:item.label,color:colors[Math.floor(Math.random() * (colors.length-1))]}));//props.options;
  //console.log(options.map((item)=>({value:item.value,label:item.label,color:colors[getRandomInt(colors.length-1)]})))*/

  const [guest, setGuest] = useState([]);
  const [clientOption, setClientOption] = useState([]);
  const { client: clientList } = useClientContext();

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleOptionChange = (clientOption) => {
    setSelectedOptions([...selectedOptions, clientOption]);
    setDropdownOpen(true);
  };

  const handleRemoveOption = (optionToRemove) => {
    const updatedSelectedOptions = selectedOptions.filter(
      (clientOption) => clientOption !== optionToRemove
    );
    setSelectedOptions(updatedSelectedOptions);
  };

  const availableOptions = clientOption.filter(
    (clientOption) => !selectedOptions.includes(clientOption)
  );

  useEffect(() => {
    if (clientList) {
      setClientOption(
        clientList
          .filter((c) => c.status === "Active")
          .map((c) => ({ id: c.id, value: c.id, label: c.client }))
      );
    }
  }, []);

  return (
    <>
      <ContainerSelect>
        <Label>Guests:</Label>
        <SelectContainer>
          <DropdownButton onClick={() => setDropdownOpen(!dropdownOpen)}>
            <DivIconAndSelect>
              {"Select guests "}
              <IconUser>
                <Contact
                  style={{
                    fill: "#ccc",
                  }}
                />
              </IconUser>
            </DivIconAndSelect>
          </DropdownButton>

          {dropdownOpen && (
            <Dropdown>
              {availableOptions.length > 0 ? (
                availableOptions.map((clientOption) => (
                  <DropdownOption
                    onClick={() => handleOptionChange(clientOption)}
                  >
                    {clientOption.label}
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
            {selectedOptions.map((clientOption) => (
              <SelectedOption key={clientOption.label}>
                {clientOption.label}
                <RemoveButton onClick={() => handleRemoveOption(clientOption)}>
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
