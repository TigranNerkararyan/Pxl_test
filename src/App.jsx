import React from 'react';
import './App.scss';
import {Header} from './components/Header';
import {Content} from './components/Table/Content';

function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
    </div>
  );
}

export default App;
