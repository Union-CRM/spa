import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { Label, Container } from "./styles";

export const SingleSelect = (props) => {
  const animatedComponents = makeAnimated();
  const [value, setValue] = useState(null);

  return (
    <>
      <Container>
        <Label>
          {props.label}

          <Select
            options={props.options}
            defaultValue={value}
            id={props.idSingleOption}
            components={animatedComponents}
            onChange={setValue}
            isClearable={false}
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
              placeholder: (styles, state) => ({
                ...styles,
                color: "#656464",
              }),

              control: (baseStyles, state) => ({
                ...baseStyles,
                width: props.sizeSingle || "80%",
                border: "2px solid  #888C95",
                minHeight: "35px",
                cursor: "pointer",
                top: "5px",
              }),

              dropdownIndicator: (styles, { data }) => {
                return {
                  ...styles,
                  color: "#888C95",
                };
              },

              singleValue: (baseStyles, state) => ({
                ...baseStyles,
                color: "#656464",
                width: props.sizeSingle || "512px",
              }),
              menu: (baseStyles, state) => ({
                ...baseStyles,
                maxWidth: props.sizeMenu || "auto",
              }),
              menuList: (baseStyles, state) => ({
                ...baseStyles,
                maxWidth: props.sizeMenuList || "auto",
                overflowY: "scroll",
                "&::-webkit-scrollbar": {
                  backgroundColor: "#DFDFDF",
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
        </Label>
      </Container>
    </>
  );
};

export default SingleSelect;
