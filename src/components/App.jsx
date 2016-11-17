// import the libs we need
import React, { Component } from 'react';
import './normalize.css';
import style from './App.css';

// create a React Component called _App_
class App extends Component {

  render(){
    return (
      <div id="app-container">
        <header>
          <h1>Welcome to PERN Template</h1>
        </header>
        <div id={style['description-body']}>
          <p>
            Welcome to PERN Template. This is a temporary Hello World component 
            that may be replaced with the rest of your React client application
          </p>
        </div>
      </div>
    );
  }
}

export default App;
