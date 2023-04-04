import React from 'react'
import Select from "react-select"
import Body from '../../../assets/FontSystem/Body';
import { PositionLabel } from './styles'


const Clock = ({label}) => {

  
    const options = [
        { value: " 00:00 ", label:" 00:00 "},
        { value: " 00:30 ", label:" 00:30 "},
        { value: " 01:00 ", label:" 01:00 "},
        { value: " 01:30 ", label:" 01:30 "},
        { value: " 02:00 ", label:" 02:00 "},
        { value: " 02:30 ", label:" 02:30 "},
        { value: " 03:00 ", label:" 03:00 "},
        { value: " 03:30 ", label:" 03:30 "},
        { value: " 04:00 ", label:" 04:00 "},
        { value: " 04:30 ", label:" 04:30 "},
        { value: " 05:00 ", label:" 05:00 "},
        { value: " 05:30 ", label:" 05:30 "},
        { value: " 06:00 ", label:" 06:00 "},
        { value: " 06:30 ", label:" 06:30 "},
        { value: " 07:00 ", label:" 07:00 "},
        { value: " 07:30 ", label:" 07:30 "},
        { value: " 08:00 ", label:" 08:00 "},
        { value: " 08:30 ", label:" 08:30 "},
        { value: " 09:00 ", label:" 09:30 "},
        { value: " 10:00 ", label:" 10:00 "},
        { value: " 10:30 ", label:" 10:30 "},
        { value: " 11:00 ", label:" 11:00 "},
        { value: " 11:30 ", label:" 11:30 "},
        { value: " 12:00 ", label:" 12:00 "},
        { value: " 12:30 ", label:" 12:30 "},
        { value: " 13:00 ", label:" 13:00 "},
        { value: " 13:30 ", label:" 13:30 "},
        { value: " 14:00 ", label:" 14:00 "},
        { value: " 14:30 ", label:" 14:30 "},
        { value: " 15:00 ", label:" 15:00 "},
        { value: " 15:30 ", label:" 15:30 "},
        { value: " 16:00 ", label:" 16:00 "},
        { value: " 16:30 ", label:" 16:30 "},
        { value: " 17:00 ", label:" 17:00 "},
        { value: " 17:30 ", label:" 17:30 "},
        { value: " 18:00 ", label:" 18:00 "},
        { value: " 18:30 ", label:" 18:30 "},
        { value: " 19:00 ", label:" 19:00 "},
        { value: " 19:30 ", label:" 19:30 "},
        { value: " 20:00 ", label:" 20:00 "},
        { value: " 20:30 ", label:" 20:30 "},
        { value: " 21:00 ", label:" 21:00 "},
        { value: " 21:30 ", label:" 21:30 "},
        { value: " 22:00 ", label:" 22:00 "},
        { value: " 22:30 ", label:" 22:30 "},
        { value: " 23:00 ", label:" 23:00 "},
        { value: " 23:30 ", label:" 23:30 "},
    ];

    const customStyles = {

        placeholder: (baseStyles, state) => ({
            ...baseStyles,
            color: "#656464",
            fontSize: "14px",
            fontFamily: "Arial",
        }),

        option: (defaultStyles, state) => ({
          ...defaultStyles,
          color: state.isSelected ? "#212529" : "#000000",
          backgroundColor: state.isSelected ? "#a0a0a0" : "#FFFFFF",
          fontSize: "14px",
        }),
    
        control: (defaultStyles) => ({
          ...defaultStyles,
          backgroundColor: "#FFFFFF",
          border: "2px solid #d9d9d9",
          padding: "10px",
          boxShadow: "none",
          width: "150px",
          height: "37px",
          borderRadius: "8px",
        }),

        menu: (defaultStyles) => ({
            ...defaultStyles,
            width: "150px",
            borderRadius: "8px",
        }),

        valueContainer: (defaultStyles) => ({
            ...defaultStyles,
            height: '30px',
            padding: '0 6px',
            marginTop: '-10px',
            marginLeft: '24px'
        }),

        indicatorsContainer: (defaultStyles) => ({
            ...defaultStyles,
            marginTop:'-10px'
        }),

        singleValue: (defaultStyles) => ({ ...defaultStyles, 
            color: "#000000",
            fontSize: "14px",
        }),

      };

  return (
    <>
    <PositionLabel>
      <Body type={"Body2"} name={label}></Body>
    </PositionLabel>
    <Select components={{ IndicatorSeparator: () => null }}
      placeholder={"00:00"}
      options={options}
      styles={customStyles}
      theme={(theme) => ({
        ...theme,
        borderRadius: 5,
        colors: {
          ...theme.colors,
          primary: "#BFBFBF",
        },
      })}/>
    </>
  )
}

export default Clock