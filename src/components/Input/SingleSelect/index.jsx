import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { Label, Container } from "./styles";

export const SingleSelect = (props) => {
  const animatedComponents = makeAnimated();
  const [value, setValue] = useState(null);

  const options = [
    { id: 1, value: "Phellype Flaibam", label: "Phellype Flaibam" },
    { id: 2, value: "Carlos Costa", label: "Carlos Costa" },
    { id: 3, value: "Alexandre Sarda", label: "Alexandre Sarda" },
    { id: 4, value: "Patricia Melo", label: "Patricia Melo" },
  ];

  return (
    <>
      <Container>
        <Label>{props.label}</Label>

        <Select
          options={options}
          defaultValue={value}
          components={animatedComponents}
          onChange={setValue}
          isClearable={true}
          placeholder="Select this option"
          isSearchable={true}
          //isDisabled={false}
          isLoading={false}
          theme={(theme) => ({
            ...theme,
            borderRadius: 5,
            colors: {
              ...theme.colors,
              primary: "#BFBFBF",
            },
          })}
          styles={{
            placeholder: (baseStyles, state) => ({
              ...baseStyles,
              color: "#656464",
            }),

            control: (baseStyles, state) => ({
              ...baseStyles,
              width: "512px",
              borderColor: "#DFDFDF",
              cursor: "pointer",
            }),
            singleValue: (baseStyles, state) => ({
              ...baseStyles,
              color: "#656464",
            }),
            menu: (baseStyles, state) => ({
              ...baseStyles,
              width: "512px",
            }),
            option: (baseStyles, state) => ({
              ...baseStyles,
              backgroundColor: state.isSelected ? "#DFDFDF" : "#fff",
              color: state.isSelected ? "#656464" : "#656464",
              ":hover": {
                cursor: "pointer",
                backgroundColor: "#DFDFDF",
              },
            }),
          }}
        />
      </Container>
    </>
  );
};

export default SingleSelect;
