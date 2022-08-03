import logo from './logo.svg';
import './App.css';

function sayHello() {
  alert("Hello!");
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello Saurabh Code Sucessfully deployed on AWS.</h1>
        <button type='button' className='button' onClick={() => sayHello()}>Click This Button!</button>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
