import React, { useState, useEffect } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { Label, Container } from "./styles";

export const SingleSelect = (props) => {
  const { options, value } = props;
  const animatedComponents = makeAnimated();
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    let i = 0;
    let v = props.value;
    props.options.map((option) => {
      if (v == option.label) {
        setIndex(i);
      }
      i = i + 1;
    });
  }, [value]);

  return (
    <>
      <Label>
        {props.label}
        <Select
          required
          options={props.options}
          value={props.options[index]}
          id={props.idSingleOption}
          components={animatedComponents}
          onChange={(event) => props.set(event.value)}
          isClearable={false}
          placeholder={props.placeholder}
          isSearchable={true}
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
              "::placeholder-shown": {
                borderColor: "red",
              },
            }),

            control: () => ({
              width: props.sizeSingle || "100%",
              border: `2px solid ${
                props.placeholder === "" ? "#888C95" : "#b03535"
              }`,
              height: "28px !important",
              position: "relative !important",
              cursor: "pointer",
              backgroundColor: "transparent",
              display: "flex",
              borderRadius: "5px",
              top: "0px",
              alignItems: "center",
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
    </>
  );
};

export default SingleSelect;
