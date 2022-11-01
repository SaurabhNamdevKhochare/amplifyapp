import logo from './logo.svg';
import './App.css';
import React from 'react';

// function sayHello() {
//   alert("Hello!");
// }

async function handleClick() {
  var jsonData = {
    PacketType: 'IALRT05',
    PacketFormat: "xml",
    Protocol: "http"
  }
 
    const response = await fetch(`https://ccpd-apachesrv01.camdenpd.com/shotspotterevents`, {
    //const response = await fetch(`https://35.160.113.226:3008/shotspotterevents`, {
        method: 'POST',
        mode: 'no-cors' as RequestMode,
        headers: {'Content-Type': 'application/xml'},
        body: JSON.stringify({user: jsonData})
      })
    return await response.json();
  
}

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <h1>Hello Saurabh Code Sucessfully deployed on AWS.</h1>
    //     <button type='button' className='button' onClick={() => sayHello()}>Click This Button!</button>
    //     {/* <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a> */}
    //   </header>
    // </div>
    <div className="App">
    <button  onClick={handleClick} style={{
      textAlign: 'center',
      width: '100px',
      border: '1px solid gray',
      borderRadius: '5px'
    }}>
      Fire shotspotter API
    </button>
    </div>
  );
}

export default App;
