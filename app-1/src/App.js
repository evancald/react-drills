import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      items: ['spruce', 'willow', 'pine', 'chestnut', 'locust'],
      filteredItems: []
    }
  }

  handleChange = (event) => {
    this.setState({input: event.target.value});
  }

  handleClick = () => {
    const newItems = this.state.items.filter(item => item.includes(this.state.input));
    this.setState({filteredItems: newItems, input: ''});
  }

  render() {
    let items = this.state.items.map((item, i) => {
      return <div key={i}>{item}</div>
    });
    let filteredItems = this.state.filteredItems.map((item, i) => {
      return <div key={i}>{item}</div>
    })
    return (
      <div> 
        <input onChange={this.handleChange} value={this.state.input} placeholder='search text'/>
        <button onClick={this.handleClick}>Search</button>
        {items}
        <hr />
        <h4>Search Results</h4>
        {filteredItems}
      </div>
    );
  }
}

export default App;
