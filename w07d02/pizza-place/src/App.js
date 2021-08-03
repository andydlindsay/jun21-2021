import './App.css';
import {useState} from 'react';
import Header from './components/Header';
// import VisitorCounter from './components/VisitorCounter';
import Pizza from './components/Pizza';
import FragmentTag from './components/FragmentTag';

const App = () => {
  const [heading] = useState('Pat\'s Pizza Place');

  return (
    <div className="App">
      <FragmentTag />
      <Header message={heading} />
      {/* <VisitorCounter /> */}
      <Pizza />
    </div>
  );
};

export default App;
