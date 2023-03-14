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
            onChange={(item) => props.set(item)}
            isClearable={false}
            isSearchable={true}
            isDisabled={false}
            isLoading={false}
            isRtl={false}
            required
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
                color: "#fff",
              }),

              container: (state) => ({
                width: "100%",
                position: "relative",
                gridTemplateColumns: "40% 60%",
                display: "grid",
              }),

              control: (state) => ({
                border: `2px solid ${
                  props.placeholder === "" ? "#888C95" : "#b03535"
                }`,
                height: "28px !important",
                top: props.top || "0px",
                width: props.width || "100%",
                gridColumn: "1",
                display: "grid",
                cursor: "pointer",
                borderRadius: "5px",
              }),

              valueContainer: (styles, { data }) => {
                return {
                  ...styles,
                  gridColumn: "2",
                  display: "grid",
                  position: props.positions || "absolute",
                  borderRadius: "5px",
                  top: props.top || "0px",
                  border: "2px solid  #888C95",
                  width: props.widths || "90%",
                  height: "12.5vh",
                  left: "11%",
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

              options: (
                styles,
                { data, isDisabled, isFocused, isSelected }
              ) => {
                console.log("options", data, isFocused, isSelected, isDisabled);
                return { ...styles, color: data.color };
              },

              indicatorsContainer: (state) => {
                return {
                  color: "#888C95",
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "center",
                  height: "80%",
                };
              },

              dropdownIndicator: (styles, { data }) => {
                return {
                  ...styles,
                  color: "#888C95",
                };
              },

              menu: (baseStyles, state) => ({
                ...baseStyles,
                maxWidth: props.sizeMenu || "auto",
                maxHeight: props.heightMenu || "110px",
              }),

              menuList: (baseStyles, state) => ({
                ...baseStyles,
                maxWidth: props.sizeMenuList || "auto",
                maxHeight: props.heightMenu || "110px",
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
