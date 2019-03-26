import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';

const particleParams = {
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area": 1500
      }
    },
    "line_linked": {
      "enable": false,
    },
    "move": {
      "direction": "random",
      "speed": 0.1
    },
    "size": {
      "value": 2
    },
    "opacity": {
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.05
      }
    }
  },
  "retina_detect": true
}

class App extends Component {
  render() {
    return (
      <div>
        <Particles
          className="particles"
          params={particleParams}
        />
        <div className="App">
          <div className="content">
            Hey <span role="img" aria-label="sunglasses-emoji">😎</span>,
            <br></br>
            I am Sebastien Bailouni, a Melbourne based IT and Design student majoring in Software
            Development and Communication Design.
            <br></br>
            To see some of my work check out my <a href="https://www.instagram.com/designbyseba" target="_blank" rel="noopener noreferrer">Instagram</a>.
            <br></br>
            Also, check out my <a href="https://www.linkedin.com/in/sebastien-bailouni-956002123/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
            <br></br>
            Or chuck me an email at <a href="mailto:sbailouni@gmail.com" target="_blank" rel="noopener noreferrer">sbailouni@gmail.com</a>.
        </div>
        </div>
      </div>
    );
  }
}

export default App;
