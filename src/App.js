import React, { Component } from 'react';
import Disaster from './Disaster.js'
import Data from './Data.js'
import C3Chart from 'react-c3js';
import 'c3/c3.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.showContent = this.showContent.bind(this)
    this.state = {
      currentDisaster: 0,
      content: '',
      styles: {
        app: {
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          height: '100%',

        },
        leftMenu: {
          width: '20%',
          height: '100%',
          backgroundColor: '#f1f1f1'
        },
        content: {
          width: '80%',
          height: '100%',
        },
      }
    }
  }

  showContent = (index, item) => {
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
    var axis = {
      x: {
        label: 'Sepal.Width',
        tick: {
          fit: false
        }
      },
      y: {
        label: 'Petal.Width'
      }

    }
    this.setState((prevState, props) => {
      return {
        content: <C3Chart data={data} />,
        currentDisaster: index
      }
    });
  }


  render() {
    return (
      <div id='App' style={this.state.styles.app}>
        <div id='leftMenu' style={this.state.styles.leftMenu}>
          {
            Data.map((item, i) => {
              return <Disaster index={i} key={i} item={item} onClick={this.showContent} current={this.state.currentDisaster == i ? true : false} />
            })
          }
        </div>
        <div id='content' style={this.state.styles.content}>
          {this.state.content}
        </div>
      </div>
    );
  }
}
export default App;


