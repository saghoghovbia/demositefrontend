import logo from './logo.svg';
import './App.css';
// import {testGet} from "./testConnection.js";
import axios from "axios";
import React from 'react';

function App() {
  // let resp;
  const [resp, setResp] = React.useState(null);

  React.useEffect(() => {
    axios.get('http://localhost:8080/ping').then(r =>{
      setResp(r.data);
      console.log(r.data)
    })
  }, [])
  console.log("app.js: ",resp);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Response from backend: {resp}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
