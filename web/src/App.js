// import logo from './logo.svg';
import './App.css'; // import CSS file
import React from 'react';

// function App() {
//   return (
//     <div className="App">
//       <p className='redText'>Hello world</p>
//       <p className='myNewClass'>first react project</p>
//       <button>click me</button>
//     </div>
//   );
// }

const englishContent = "Hello";
const spanContent = "Hola";
const axios = require('axios');

class App extends React.Component {
  // init states at the top of react class like this
  // only one state. it's type of object
  state = {
    counter: 0,
    lightSwitch: false,
    content: "test",
    myFavoriteState: "California",
    isSpanish: false,
    fact: "no fact yet",
  }

  handleCounter() {
    this.setState({ counter: this.state.counter + 1 });
  }

  handleLightSwitch() {
    // if (this.state.lightSwitch === true) {
    //   this.setState({lightSwitch: false});
    // } else {
    //   this.setState({lightSwitch: true});
    // }
    this.setState({ lightSwitch: !this.state.lightSwitch });
  }

  handleLanguage() {
    this.setState({ isSpanish: !this.state.isSpanish });
  }

  getFact() {
    var getAppClass = this; // bc within scope of axios, we can't directly use 'this' keyword
    axios
      .get("https://uselessfacts.jsph.pl/random.json?language=en")
      .then(function (response) {
        // handle success
        console.log(response.data.text);
        getAppClass.setState({fact: response.data.text})
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }


  // to reference a state: this.state.<the name of the state>
  render() {
    return (
      <div className="App">

        <p>Fact: {this.state.fact}</p>
        <button onClick={() => this.getFact()}>Get Fact</button>

        <p className='redText'>{this.state.isSpanish ? spanContent : englishContent}</p>
        <button onClick={() => this.handleLanguage()}>change language</button>

        <p className='myNewClass'>counter: {this.state.counter}</p>
        <button onClick={() => this.handleCounter()}>increment counter</button>

        <p className='myNewClass'>LightSwitch: {this.state.lightSwitch.toString()}</p>
        <button onClick={() => this.handleLightSwitch()}>flip switch</button>

      </div>
    );
  }
}

export default App;
