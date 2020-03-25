import React from 'react'
import ItemsList from './components/itemslist'

const backgroundStyle = {
  backgroundImage: 'url(https://picsum.photos/1920/1080)'
}

function App() {
  return (
    <div className="bg-fixed h-screen" style={backgroundStyle}>
      <div>
        <ItemsList />
      </div>
    </div>
  );
}

export default App
