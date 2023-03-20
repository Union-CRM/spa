import React from "react";
import { Chart } from "react-google-charts";

export const dataBase = {
  names: [
    "Itáu - Torre 1",
    "Itáu - Torre 2",
    "Itáu - Torre 3",
    "Automação Sustentada",
  ],
  groups: [40, 20, 20, 20],
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
  backgroundColor: "#F5F7FA",
  pieHole: 0.6,
  is3D: false,
  legend: "left",
  pieSliceText: "value",
  chartArea: { left: 75, top: 75, right: 0, bottom: 50 },
  slices: {
    0: { offset: 0.02, color: "#FFD012" },
    1: { offset: 0.02, color: "#07D95A" },
    2: { offset: 0.02, color: "#BB1E00" },
    3: { offset: 0.02, color: "#0AC9C9" },
  },
};

export function Donut() {
  return (
    <Chart
      chartType="PieChart"
      width="437px"
      height="300px"
      data={data}
      options={options}
    />
  );
}
