import React, { Component } from 'react'
import "./App.css"


export default class App extends Component {
  state = {
    Name: "",
    Department: "",
    Rating: "",
    output: []
  };

  changeEvent = (change) => {
    this.setState({ [change.target.name]: change.target.value })
    // console.log(this.state);
  };

  submitHandler = (sub) => {
    sub.preventDefault();
    const empObj = {
      Name: this.state.Name,
      Department: this.state.Department,
      Rating: this.state.Rating,
    }
    let arr = this.state.output;
    arr.push(empObj);
    this.setState({ output: arr })
  }
  render() {
    return (
      <div id='container'>
        <h1 id="heading">
          Employee Feedback Form
        </h1>
        <form>
          <label htmlFor="Name">Name</label>
          <input type="text" id='nameInput' name='Name' value={this.state.Name} onChange={this.changeEvent}></input>
          <br />
          <label htmlFor="Department">Department</label>
          <input type="text" id='deptInput' name='Department' value={this.state.Department} onChange={this.changeEvent}></input>
          <br />
          <label htmlFor="Rating">Rating</label>
          <input type="number" id='ratingInput' name='Rating' value={this.state.Rating} onChange={this.changeEvent}></input>
          <br />
          <button id='btn' onClick={this.submitHandler}>Submit</button>
        </form>
        <div id="dataShow">
          {this.state.output.map((value, index) => {
            return (
              <span id="detailBox" dekey={index}>Name={value.Name} |Department={value.Department} |Rating={value.Rating} <br /></span>
            );
          }
          )}
        </div>
      </div>

    )
  }
}

