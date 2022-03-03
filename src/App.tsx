import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home, TODO } from './components';

function App() {
  return (
    <div className="App">
      <header className="App-header"> TODO APP </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="todo" element={<TODO />} />
      </Routes>
    </div>
  );
}

export default App;
