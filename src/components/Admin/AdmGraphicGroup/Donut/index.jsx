import React from "react";
import { Chart } from "react-google-charts";

export const dataBase = {
  names: [
    "Late",
    "Near",
    "On time",
  ],
  groups: [10,2,8],
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
  pieHole: 0.7,
  // pieHole:0.7
  legend: "none",
  pieSliceText: "none",
  chartArea:{ left: 120, top: 120, right: 120, bottom: 140 },
  slices: {
    0: { offset: 0.02, color: "#FFD012" },
    1: { offset: 0.02, color: "#07D95A" },
    2: { offset: 0.02, color: "#BB1E00" },
  },
};

/*

const textCenter = {
  id: 'textCenter',
  beforeDatasetsDraw(chart,args,pluginOptions) {
    const { ctx, data } = chart;

    ctx.save();
    ctx.font = 'bolder 30px sans-serif';
    ctx.fillStyle = 'red';
    ctx.fillText('text', chart.getDatasetMeta(0).data[0].x,y);
  }
}


*/

const Donut = () => {
  return (
    <Chart
      chartType="PieChart"
      width="450px"
      height="380px"
      data={data}
      options={options}
    />
  );
}

export default Donut;
