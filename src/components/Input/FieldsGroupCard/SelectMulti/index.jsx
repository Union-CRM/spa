import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
const animatedComponents = makeAnimated();

const options = [
  { value: 1, label: "Phellype Flaibam", color: "#3ddc97" },
  { value: "Carlos Costa", label: "Carlos Costa", color: "#ACD4FF" },
  { value: "Alexandre Sarda", label: "Alexandre Sarda", color: "#FFE60082" },
  { value: "Patricia Melo", label: "Patricia Melo", color: "#FFB2D1" },
];

export const MultiSelect = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const colorStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "none",
      height: "20px",
      width: "249.5px",
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

    menu: (styles, { data }) => {
      return {
        ...styles,
        width: "249px",
      };
    },
    menuList: (styles, { data }) => {
      return {
        ...styles,
        width: "249px",
        ":hover": {
          cursor: "pointer",
        },
      };
    },

    indicatorsContainer: (styles, { data }) => {
      return {
        ...styles,
        display: "flex",
        position: "absolute",
        right: "10px",
      };
    },

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
  };

  return (
    <>
      <Select
        isMulti
        options={options}
        components={animatedComponents}
        styles={colorStyles}
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

            primary: "black",
          },
        })}
      />
    </>
  );
};
