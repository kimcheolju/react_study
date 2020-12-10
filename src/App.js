import logo from './logo.svg';
import './App.css';
import Layout from './views/index'
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="main">
        <Layout/>
      </div>

    );
  }
}

export default App;
