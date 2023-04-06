import React from "react";
import { Chart } from "react-google-charts";
import { Grafico } from "./styles";

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
    title:'Grafico',
   
    pieHole: 0.4,
    is3D: false,
    legend:"none", 
    width:"80",
    height:"80",
    background:"none",
    tooltip: { trigger: 'none' },
    areaOpacity: 0.3,
    /*{
      position: 'bottom',
      textStyle: {color: 'blue', fontSize: 16, fontFamily:"Houschka Rounded Alt"}
      
    },*/
  
    pieSliceText: "none",
    chartArea: { left: 8, top: 0, right: 8, bottom: 0 },
    slices: {
      0:{ offset: 0.02, color: "#BB1E00" },
      1: { offset: 0.02, color: "#FFD012" },
      2: { offset: 0.02, color: "#07D95A" },
    }
    
  };
  //className='grafico'
  const Donut = () => {
    return (
      <Grafico>
        <Chart 
          chartType="PieChart"
         /* width="437px"
          height="300px"*/
          data={data}
          options={options}
         /* style={{width: '22vw', height: '30vh'}}*/

        />
        
      </Grafico>
      
    );
  }
  
  export default Donut;