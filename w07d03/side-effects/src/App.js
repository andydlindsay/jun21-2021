import './App.css';
import {useEffect, useState} from 'react';
import Appointments from './components/Appointments';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  // useEffect(() => {
  //   setCounter(counter + 1);
  //   // setCounter((prevCounter) => prevCounter + 1);
  // }, [counter]);
  
  // useEffect(() => {
  //   document.title = `(${counter}) welcome to our site`;
  //   console.log('changed the document title');
  // }, [counter, searchTerm]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log(`the current count is ${counter}`);
  //   }, 3000);

  //   const cleanup = () => {
  //     clearInterval(interval);
  //     console.log('interval cleared');
  //   };
    
  //   return cleanup; 
  // }, [counter]);

  return (
    <div className="App">
      <h2>useEffect Hook</h2>
      {/* <h2>Count: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Click me</button>

      <div>
        <h2>Search term: {searchTerm}</h2>
        <input
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div> */}
      <Appointments/>
    </div>
  );
};

export default App;
