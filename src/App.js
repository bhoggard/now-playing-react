import React, { Component } from 'react';
import './App.css';
import Piece from './Piece'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Now Playing</h1>
        <Piece source="counterstream" name="Counterstream Radio" url="http://counterstreamradio.net/" />
        <Piece source="dronezone" name="Dronze Zone" url="http://somafm.com/dronezone/" />
        <Piece source="newsounds" name="New Sounds" url="https://www.newsounds.org/" />
        <Piece source="wkcr" name="WKCR Columbia University" url="https://www.cc-seas.columbia.edu/wkcr/" />
        <Piece source="yle" name="Yle Klassinen" url="http://yle.fi/radio/yleklassinen/suora/" />
      </div>
    );
  }
}

export default App;
