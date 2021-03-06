import React, { Component } from 'react';
import './App.css';
import Image from './components/Image';
import ToDos from './components/ToDos';

class App extends Component {
  state = {
    email: '',
    password: '',
    newTask: '',
    listOfTasks: []
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleClick = () => {
    alert(`You entered email as ${this.state.email} and password as ${this.state.password}`);
  }

  addTask = () => {
    const newListOfTasks = this.state.listOfTasks;
    newListOfTasks.push(this.state.newTask);
    this.setState({listOfTasks: newListOfTasks, newTask: ''});
  }

  render() {
    let toDoList = this.state.listOfTasks.map((task, index) => {
      return (
        <ToDos key={index} task={task} />
      )
    });
    return (
      <div>
        <div className="login">
          <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
          <input type="password" name= "password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
          <button onClick={this.handleClick}>Login</button>
        </div>
        <div>
          <Image img="data:image/jpeg;base64,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" />
        </div>
        <div className="to-do">
          <h4>To Do</h4>
          <input type="text" name="newTask" placeholder="Task" value={this.state.newTask} onChange={this.handleChange} />
          <button onClick={this.addTask}>Add Task</button>
          <ToDos tasks={this.state.listOfTasks} />
        </div>
        <div>
          {toDoList}
        </div>
      </div>
    );
  }
}

export default App;
