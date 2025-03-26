import React, { useState, useEffect } from 'react';
import './App.css';
import EmployeeList from './components/EmployeeList';  // Import EmployeeList component

function App() {
  return (
    <div className="App">
      <h1>Employee Management System</h1>
      <EmployeeList />  {/* Display the EmployeeList component */}
    </div>
  );
}

export default App;
