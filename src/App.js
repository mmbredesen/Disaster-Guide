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
    const data = {
      columns: [
        ['data1', 30, 200, 100, 400, 150, 250],
        ['data2', 50, 20, 10, 40, 15, 25]
      ]
    };
    this.setState((prevState, props)=>{
      return{
        content: <C3Chart data={data} />
      }
    });
  }


  render() {
    return (
      <div id='App' style={this.state.styles.app}>
        <div id='leftMenu' style={this.state.styles.leftMenu}>
          {
            Data.map((item, i) => {
              return <Disaster index={i} key={i} item={item} onClick={this.showContent}/>
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


