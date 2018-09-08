import React, { Component } from 'react';
class Disaster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
    }
  }
  toggleHover = () => {
    this.setState({
      hovered: !this.state.hovered
    })
  }
  click = () => {
    this.props.onClick(this.props.index, this.props.item);
  }
  render() {
  
    return (
      <div
        className='disaster'
        style={{
          height: '30px',
          color: this.state.hovered ? 'white' : 'black',
          backgroundColor: this.state.hovered ? '#555' : (null),
          textAlign: 'center',
          fontSize: '26px',
          display: 'block'
        }}
        onClick={this.click}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
      >
        {this.props.item.name}
      </div>
    );
  }
}
export default Disaster;