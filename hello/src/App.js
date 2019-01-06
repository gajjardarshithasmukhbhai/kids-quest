import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount()
  {
    fetch("darshit/api")
    .then(res=>res.json().then(data=>this.setState({customer:data})))  
    fetch("/hasmukh/api")
    .then(res=>res.json().then(data=>this.setState({
      hasu:data
    })))  
  }
  constructor(props)
  {
    super(props);
    this.state={
      customer:[],
      hasu:"",

    }
  }
  render() {
    return (
      <div >
        <header >
          <p>
            <center>
              <img src={logo} className="App-logo" alt="logo" />
              <h1>{this.state.hasu}</h1>
            </center>
            <center>{this.state.customer.map((name,i)=>{
              return <li key={name.i}>{name.firstname}</li>
            })}</center>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
