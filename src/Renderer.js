import React, { Component } from 'react';
import C3Chart from 'react-c3js';
import 'c3/c3.css';
var fire = function (item) {
  var year = ['year'];
  var fires = ['fires'];
  var deaths = ['deaths'];
  var affected = ['affected']
  for (var v in item.info) {
    var myVar = item.info[v];
    year.push(Number(myVar.year));
    fires.push(Number(myVar.eventCount));
    deaths.push(Number(myVar.totalDeaths));
    affected.push(Number(myVar.totalAffected));
  }
  var data = {
    xs: {
      fires: 'year',
      deaths: 'year',
      affected: 'year',
    },
    columns: [
      fires, year, deaths, affected
    ],
    type: 'scatter'
  }
  return <div>
    <img src="./fire.png" alt="fire" />
    <C3Chart data={data} />
  </div>
}

var hurricanes = function (item) {
  return <div>
    <img src="./hurricaneS.png" alt="hurricaneS" />
    <img src="./hurricaneHistory.png" alt="hurricaneHistory" height="1024" width="796" />
    <img src="./hurricaneMed.png" alt="hurricaneMed" height="1024" width="796" />
  </div>;
}
var Renderer = [
  fire, hurricanes
];

export default Renderer;