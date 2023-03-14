import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { Label } from "./styles";

export const MultiSelect = (props) => {
  const animatedComponents = makeAnimated();
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = props.option;

  return (
    <>
      <Label>
        {props.label3}
        <Select
          isMulti
          options={props.options}
          id={props.idMultiOption}
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
              border: "2px solid  #888C95",
              minHeight: props.heights || "39px",
              top: props.top || "-1.8px",
              width: props.width || "256px",
              cursor: "pointer",
              border: "2px solid  #d9d9d9",
            }),

            options: (styles, { data, isDisabled, isFocused, isSelected }) => {
              console.log("options", data, isFocused, isSelected, isDisabled);
              return { ...styles, color: data.color };
            },

            valueContainer: (styles, { data }) => {
              return {
                ...styles,
                borderRadius: "5px",
                top: props.top || "50px",
                position: props.positions || "absolute",
                border: "2px solid  #888C95",
                right: "-1px",
                width: props.widths || "513px",
                maxHeight: props.heighsts || "80px",
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
                position: props.positions || "absolute",
              };
            },
            dropdownIndicator: (styles, { data }) => {
              return {
                ...styles,
                color: "#888C95",
              };
            },
            menuList: (baseStyles, state) => ({
              ...baseStyles,
              width: props.width || "256px",
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
    </>
  );
};
