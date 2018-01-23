import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Fabric
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { Button, ButtonType } from 'office-ui-fabric-react/lib/Button';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';

class App extends Component {
  render() {
    return (
      <Fabric className="App">
        <img src={logo} className="App-logo" alt="logo" style={{marginTop: '2em'}}/>
      </Fabric>
    );
  }
}

export default App;


