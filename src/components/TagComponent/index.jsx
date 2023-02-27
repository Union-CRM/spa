import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { Label, Container } from "./styles";

export const TagComponent = (props, placeholder, idTagOption) => {
  const animatedComponents = makeAnimated();
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = props.options;

  return (
    <>
      <Container>
        <Label>
          {props.label}

          <Select
            isMulti
            options={props.options}
            id={props.idTagOption}
            components={animatedComponents}
            placeholder={props.placeholder}
            onChange={(item) => setSelectedOptions(item)}
            isClearable={true}
            isSearchable={true}
            isDisabled={false}
            isLoading={false}
            isRtl={false}
            closeMenuOnSelect={false}
            theme={(theme) => ({
              ...theme,
              borderRadius: 5,
              colors: {
                ...theme.colors,
                primary: "#000",
              },
            })}
            styles={{
              placeholder: (styles, state) => ({
                ...styles,
                color: "#656464",
              }),

              control: (styles) => ({
                ...styles,
                backgroundColor: "none",
                minHeight: props.heights || "35px",
                maxHeight: "35px",
                top: props.top || "5px",
                maxWidth: props.width || "0%",
                cursor: "pointer",
                border: "2px solid  #d9d9d9",
              }),

              options: (
                styles,
                { data, isDisabled, isFocused, isSelected }
              ) => {
                console.log("options", data, isFocused, isSelected, isDisabled);
                return { ...styles, color: data.color };
              },

              valueContainer: (styles, { data }) => {
                return {
                  ...styles,
                  borderRadius: "5px",
                  top: props.topValue || "0px",
                  position: props.positions || "relative",
                  justifyContent: "left",
                  alignItems: "left",
                  border: "2px solid  #d9d9d9",
                  left: props.left || "0px",
                  minWidth: props.widths || "200px",
                  minHeight: props.heightsValue || "135px",
                  paddingLeft: "5px",
                  paddingTop: "5px",
                  paddingBottom: "5px",
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
                };
              },

              indicatorsContainer: (styles, { data }) => {
                return {
                  ...styles,
                  right: "0px",
                  top: "-2px",
                  position: props.positions || "absolute",
                };
              },
              menu: (baseStyles, state) => ({
                ...baseStyles,
                position: "relative",
                width: props.width || "126px",
              }),
              menuList: (baseStyles, state) => ({
                ...baseStyles,
                width: props.width || "126px",
                position: "relative",
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

              multiValue: (styles, { data }) => {
                return {
                  ...styles,
                  backgroundColor: data.color,
                  borderRadius: "7px",
                  color: "red",
                };
              },
              multiValueLabel: (styles, { data }) => {
                return {
                  ...styles,
                  color: "#000",
                };
              },

              multiValueLabelRemove: (styles, { data }) => {
                return {
                  ...styles,
                  color: "fff",
                  cursor: "pointer",
                  ":hover": {
                    color: "red",
                  },
                };
              },

              option: (styles, state) => ({
                ...styles,
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
