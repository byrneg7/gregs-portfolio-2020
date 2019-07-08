import React from 'react';
import logo from './logo.svg';
import './App.css';

import { testGET, testPOST } from './utils/api/testRoutes';

class App extends React.Component {
  componentDidMount(){
    testGET();
    testPOST();
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi There
          </p>
          <a
            href="/api/test"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
  }

export default App;
