import React from "react";
import {default as api} from '../store/apiSlice'
import Backup from "./extra/Backup";
import {getLabels} from '../helper/helper'

const Labels = () => {

  const {data, isFetching, isLoading, isError} = api.useGetLabelsQuery() 
  let result

  if(data){
    result = getLabels(data, 'type')
  }
  
  return <>
    {result?.map((value, index) => <LabelComponent key={index} data={value} isFetching={isFetching} isLoading={isLoading} isError={isError} />)}
  </>;
};

function LabelComponent({data, isError, isFetching, isLoading}) {
    if(!data){
        return <Backup isError={isError} isFetching={isFetching} isLoading={isLoading}/>
    }
  return (
    <div className="labels flex justify-between">
      <div className="flex gap-2">
        <div className="w-2 h-2 rounded py-3" style={{background: data.color ?? '#f9c74f'}}>

        </div>
        <h3 className="text-md">{data.type??''}</h3>
      </div>
      <h3 className="font-bold">{Math.round(data.percent)??0}%</h3>
    </div>
  );
}

export default Labels;
