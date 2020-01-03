import React from 'react';
import Menu from './menu/index';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
      </BrowserRouter>
    </div>
  );
}

export default App;
