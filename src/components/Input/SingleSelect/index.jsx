import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { Label, Container } from "./styles";

export const SingleSelect = (props) => {
  const animatedComponents = makeAnimated();
  const [value, setValue] = useState(null);

  const options = props.option;

  return (
    <>
      <Container>
        <Label>{props.label}</Label>

        <Select
          options={props.options}
          defaultValue={value}
          id={props.idSingleOption}
          components={animatedComponents}
          onChange={setValue}
          isClearable={true}
          placeholder={props.placeholder}
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
              width: props.sizeSingle || "512px",
              borderColor: "#DFDFDF",
              cursor: "pointer",
            }),
            singleValue: (baseStyles, state) => ({
              ...baseStyles,
              color: "#656464",
            }),
            menu: (baseStyles, state) => ({
              ...baseStyles,
              width: props.sizeSingle || "512px",
            }),
            menuList: (baseStyles, state) => ({
              ...baseStyles,
              width: props.sizeSingle || "512px",
              overflowY: "scroll",
              "&::-webkit-scrollbar": {
                backgroundColor: "#FFF",
              },
              "&::-webkit-scrollbar-thumb ": {
                backgroundColor: "#DFDFDF",
              },
              "&::-webkit-scrollbar--track-piece": {
                backgroundColor: "#DFDFDF",
              },
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
