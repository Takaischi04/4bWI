import React, { useState } from 'react';
import ListTemplate from './components/templates/ListTemplate.js';
import Content from './components/templates/ContentTemplate.js';

function App() {
  return (
    <div className="w-full h-screen bg-black flex">
      <ListTemplate />
      <Content />
    </div>
  );
}

export default App;
