import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { Label, Container, DivSvg, DivSvg2 } from "./styles";
import { ReactComponent as Contact } from "../../../assets/svg/Contact.svg";
import { ReactComponent as Drop } from "../../../assets/svg/Drop.svg";

export const TagComponent = (props, placeholder, idTagOption) => {
  const animatedComponents = makeAnimated();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const colors = ["#FFC0CB", "#DDA0DD", "#F5DEB3", "#98FB98", "#87CEEB"];

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const options = props.options.map((item) => ({
    value: item.value,
    label: item.label,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  })); //props.options;
  //console.log(options.map((item)=>({value:item.value,label:item.label,color:colors[getRandomInt(colors.length-1)]})))

  const DropdownIndicator = () => {
    if (props.indicator) {
      if (props.indicator === "guest")
        return (
          <DivSvg>
            <Contact fill={"#888C95"} width={"20px"} />
          </DivSvg>
        );
    } else {
      return (
        <DivSvg2>
          <Drop width={"15px"} />
        </DivSvg2>
      );
    }
  };

  return (
    <>
      <Container>
        <Label>
          {props.label}
          <Select
            isMulti
            components={{
              DropdownIndicator,
              animatedComponents,
              IndicatorSeparator: () => null,
            }}
            options={options}
            value={props.tags}
            id={props.idTagOption}
            placeholder={props.placeholder}
            onChange={(item) => props.set(item)}
            isClearable={true}
            isSearchable={false}
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
                color: "#fff",
              }),

              container: (state) => ({
                width: "100%",
                position: "relative",
                gridTemplateColumns: "40% 60%",
                display: props.display || "grid",
              }),

              control: (state) => ({
                border: `2px solid ${
                  props.placeholder === "" ? "#888C95" : "#b03535"
                }`,
                height: "28px !important",
                top: props.top || "0px",
                left: props.left || "0",
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
                  display: "block",
                  position: props.positions || "absolute",
                  borderRadius: "5px",
                  top: props.top || "0",
                  border: "2px solid  #888C95",
                  width: props.widths || "90%",
                  height: props.heights || "12.5vh",
                  marginLeft: props.marginLeft || "",
                  left: props.Left || "0",
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
                fontSize: "0.8rem",
                overflowY: "scroll",

                "&::-webkit-scrollbar": {
                  backgroundColor: "#fff",
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
                  height: "fit-content",
                  borderRadius: "7px",
                  color: "red",
                  width: "fit-content",
                  flexWrap: "wrap",
                  fontSize: "0.9rem",
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
