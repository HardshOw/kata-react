import React, {Component} from 'react';
import Home from './pages/Home/Home'
import './App.css';
import './tailwind.generated.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home/>
      </div>
    );
  }
}

export default App;
