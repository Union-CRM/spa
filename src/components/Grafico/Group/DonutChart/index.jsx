import React from "react";
import { Chart } from "react-google-charts";
import { Grafico } from "./styles";

export const dataBase = {
  names: ["Late", "Near", "On time"],
  groups: [10, 2, 8],
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
  title: "20",

  pieHole: 0.7,
  is3D: false,
  legend: "none",
  width: "45",
  height: "45",
  background: "none",
  tooltip: { trigger: "none" },
  areaOpacity: 0.3,
  pieSliceText: "none",
  chartArea: { left: 8, top: 0, right: 8, bottom: 0 },
  slices: {
    0: { offset: 0.02, color: "#FF2B02" },
    1: { offset: 0.02, color: "#FFD012" },
    2: { offset: 0.02, color: "#07D95A" },
  },
};

const DonutChart = () => {
  return (
    <Grafico>
      <Chart chartType="PieChart" data={data} options={options} />
    </Grafico>
  );
};

export default DonutChart;
