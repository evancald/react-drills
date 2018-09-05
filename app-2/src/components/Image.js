import React, { Component } from 'react';
import './Image.css';

class Image extends Component {
  render() {
    return (
      <div className = "image-container">
        <img src={this.props.img} alt="cat pic" />
      </div>
    )
  }
}

export default Image;