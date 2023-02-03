import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

export const MultiSelect = () => {
  const animatedComponents = makeAnimated();
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = [
    { value: 1, label: "Phellype Flaibam", color: "#3ddc97" },
    { value: "Carlos Costa", label: "Carlos Costa", color: "#ACD4FF" },
    { value: "Alexandre Sarda", label: "Alexandre Sarda", color: "#FFE60082" },
    { value: "Patricia Melo", label: "Patricia Melo", color: "#FFB2D1" },
  ];

  return (
    <>
      <Select
        isMulti
        options={options}
        components={animatedComponents}
        placeholder="Select this option"
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

            primary: "#DFDFDF",
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
            height: "20px",
            width: "256px",
            cursor: "pointer",
            borderColor: "#d9d9d9",
          }),

          options: (styles, { data, isDisabled, isFocused, isSelected }) => {
            console.log("options", data, isFocused, isSelected, isDisabled);
            return { ...styles, color: data.color };
          },

          valueContainer: (styles, { data }) => {
            return {
              ...styles,
              borderRadius: "5px",
              top: "50px",
              position: "absolute",
              border: "0.3px solid #D9D9D9",
              right: "-1px",
              width: "512px",
              paddingLeft: "5px",
              paddingTop: "5px",
              paddingBottom: "5px",
            };
          },

          indicatorsContainer: (styles, { data }) => {
            return {
              ...styles,
              right: "0px",
              position: "absolute",
            };
          },
          menu: (baseStyles, state) => ({
            ...baseStyles,
            width: "256px",
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
    </>
  );
};
