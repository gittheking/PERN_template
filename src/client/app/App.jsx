// import the libs we need
import React            from 'react'
import ReactDOM         from 'react-dom'

// create a React Component called _App_
export default class App extends React.Component{

  render(){
    return (
      <h1>Hello World</h1>
    )
  }
}

// mount our App at #container
ReactDOM.render(<App />, document.querySelector('#container'))
