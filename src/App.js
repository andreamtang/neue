import React from 'react'; 
import './App.css';

function Aggregate() {
  return (
      <div className="Aggregate">
        <h2 style={{color: '#fff'}}>Number Text</h2>
      </div>
  )
}

function Filter() {
  return (
    <div>
      <img/>
      <input type="text"/>
      Filter
    </div>
  )
}

function Playlist() {
  return (
    <div style={{color: '#2E2E2F'}}>
      <h3>Playlist Name</h3>
      <ul><li>Song 1</li><li>Song 2</li><li>Song 3</li></ul>
    </div>
  )
}

function App() {  
  return (
    <div className="App-title">
      <h1>neue.</h1>
      <Aggregate/> 
      <Filter/>
      <Playlist/>
    </div>
  );
}

export default App;
