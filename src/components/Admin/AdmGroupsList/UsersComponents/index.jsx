import React, { useState, useEffect } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { Label, Container, DivSvg, DivSvg2 } from "./styles";
import {ReactComponent as Contact} from "../../../../assets/svg/Contact.svg"


export const UsersComponents = (props, placeholder, idTagOption) => {
  const animatedComponents = makeAnimated();
  const [selectedOptions, setSelectedOptions] = useState([]);

const DropdownIndicator = () => {
    if (props.indicator){
      if(props.indicator === "guest")
        return (
          <DivSvg>
          <Contact fill={"#888C95"} width={"20px"}/>
        </DivSvg>  
        )
    }else{
     
    }
  };
  
  const options = props.options.map((item) => ({
    value: item.value,
    label: item.label,
   
  }));


  return (
    <>
      <Container>
        <Label>
          {props.label}
          <Select
            isMulti
            options={options}
            value={props.tags}
            onChange={(item) => props.set(item)}
            components={{ DropdownIndicator, animatedComponents, IndicatorSeparator: () => null }}
            id={props.idTagOption}
            placeholder={props.placeholder}
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
                gridTemplateRows:"75% 25%",
                display: "grid",
              }),

              control: (state) => ({
                border: `2px solid ${
                  props.placeholder === "" ? "#888C95" : "#b03535"
                }`,
                height: "100% !important",
                top: props.top || "0px",
                width: props.width || "99%",
                gridRow:"1",
                display: "grid",
                cursor: "pointer",
                borderRadius: "5px",
              }),

              valueContainer: (styles, { data }) => {
                return {
                  ...styles,
                  gridRow:"2",
                  display: "grid",
                  position: props.positions || "absolute",
                  borderRadius: "5px",
                  top: props.top || "9px",
                  border: "2px solid  #888C95",
                  width: props.widths || "100%",
                  height: props.heights || "90px",
                  marginLeft: props.marginLeft || "0%",
                  left: "0%",
                  paddingTop: "0px",
                  paddingBottom: "0px",
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
                  width:"fit-content",
                  backgroundColor: "#F5F5F5",
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