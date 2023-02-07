import React from "react";
import { Chart } from "react-google-charts";


export const dataBase = {

    names: ["Itáu - Torre 1", "Itáu - Torre 2", "Itáu - Torre 3", "Automação Sustentada"],
    groups: [25, 25, 25, 25]

};

let arrIndice = Object.keys(dataBase);
let arrValues = Object.values(dataBase);
export let data = [];

for (let i = 0; i < arrValues[0].length; i++) {
    data[i] = arrValues.map((item) => {
        return item[i];
    });
}


data.unshift(arrIndice);

export const options = {
  backgroundColor: '#F5F7FA',
  graphic: {
    area: {left: '200px'},
  },
  pieHole: 0.6,
  is3D: false,
  legend: 'left',
  pieSliceText: 'value',
  StyleTitleStyle: {
    fontName: 'Houschka Rounded Alt',
    fontSize: 20,
  },
  slices: { 
    0: { offset: 0.02, color: "#FFD012"},
    1: { offset: 0.02, color: "#07D95A"  },
    2: { offset: 0.02, color: "#BB1E00" },
    3: { offset: 0.02, color: "#0AC9C9" },
  }
};


export function Donut() {
  return (
      <Chart
      chartType="PieChart"
      width="440px"
      height="300px"
      data={data}
      options={options}
      />
  );
}