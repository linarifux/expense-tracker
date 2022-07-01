import React from "react";
import { Chart, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Labels from "./Labels";
import {default as api} from '../store/apiSlice'

import { chartData, getTotal } from "../helper/helper";

Chart.register(ArcElement);


const Graph = () => {
  const {data, isFetching, isLoading, isError} = api.useGetLabelsQuery() 
  let result
  let total
  if(data){
    total = getTotal(data)
  result = <Doughnut {  ...chartData(data)} />
  }
  chartData()
  return (
    <div className="flex justify-content max-w-xs mx-auto">
      <div className="item">
        <div className="chart relative">
          {result}
          <h3 className="mb-4 font-bold title">
            Total
            <span className="block text-3xl text-emerald-400">${total}</span>
          </h3>
        </div>
        <div className="flex flex-col py-10 gap-4">
          {/* Labels */}
          <Labels />
        </div>
      </div>
    </div>
  );
};

export default Graph;
