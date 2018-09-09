import React, { Component } from 'react';
import Disaster from './Disaster.js'
import Data from './Data.js'
import C3Chart from 'react-c3js';
import 'c3/c3.css';
import Renderer from './Renderer.js'
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
          width: '15%',
          height: '100%',
          backgroundColor: '#f1f1ff'
        },
        content: {
          width: '85%',
          height: '100%',
          overflow: 'scroll',
        },
      }
    }
  }

  showContent = (index, item) => {
    var renderer = Renderer[index](item);
    this.setState((prevState, props) => {
      return {
        content:
          <div>
            <h1>{item.header}</h1>
            {renderer}
            <div>
              {item.intro}
            </div>
            <iframe
              src={item.gif}
              width="480" height="360" frameBorder="0" class="giphy-embed">
            </iframe>
            <div>
              {item.description}
            </div>

          </div>,
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


