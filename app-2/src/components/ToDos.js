import React, {Component} from 'react';
import './ToDos.css';

class ToDos extends Component {
  render() {
  return (
    <ul className="to-do">{ this.props.task }</ul>
  )}
}

export default ToDos;