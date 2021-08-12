import './App.css';
import ClassBased from './components/ClassBased';
import {useState, useRef, useEffect} from 'react';
import LifeCycle from './components/LifeCycle';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';

const App = () => {
  useState('hello');
  useState('there');
  // useEffect(() => {}, [username]);
  // useEffect(() => {}, [email]);

  const inputReference = useRef();

  const setFocus = () => {
    inputReference.current.focus();
  }

  return (
    <div className="App">
      <h2>Class-Based Components</h2>
      {/* <ClassBased someProp="Amazing stuff" /> */}

      <div>
        <input ref={inputReference} />
        <button onClick={setFocus}>Set Focus</button>
      </div>

      <Router>
        <nav>
          <Link to="/lifecycle">LifeCycle </Link>
          <Link to="/classbased">Class-Based</Link>
        </nav>

        <Switch>
          <Route path="/lifecycle" component={LifeCycle} />
          {/* <Route path="/classbased" component={ClassBased} /> */}

          <Route path="/classbased">
            <ClassBased someProp="whatever" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
