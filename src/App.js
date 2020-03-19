import React from 'react'
import './App.css'
import ItemsList from './components/itemslist'

function App() {
  return (
    <div className="App">
      <div>
        <h1>
          The whole app fits in here
        </h1>
        <ItemsList />
      </div>
    </div>
  );
}

export default App
