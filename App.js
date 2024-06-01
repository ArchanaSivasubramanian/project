import React, { useState } from 'eact'
// src/App.js
import React from 'react';
import Budget from './Budget';
import ToDoList from './ToDolist';
import './App.css';

function App() {
  return(
    <div className="App">
      <Budget/>
      <ToDoList/>
    </div>
  )
}
  
export default App;