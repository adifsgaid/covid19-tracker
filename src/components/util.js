import React from "react";
import numeral from "numeral";

export const sortData = (data) =>{
    const sortedData = [...data];
   return sortedData.sort((a,b)=> ((a.cases > b.cases) ? - 1 : 1))} 


export const prettyPrintStat = (stat) =>
  stat >= 1000 ? `+${numeral(stat).format("0.0a")}` : stat ;
    