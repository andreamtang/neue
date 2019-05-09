import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Aggregate() {
  return (
      <div className="Aggregate">
        <h2 style={{color: '#fff'}}>Number Text</h2>
      </div>
  )
}

function App() {  
  return (
    <div className="App-title">
      <h1>neue.</h1>
      <Aggregate/>
      <Aggregate/>
    </div>
  );
}

export default App;
