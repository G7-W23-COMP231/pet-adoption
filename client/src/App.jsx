import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Register from './components/Register/Register';
import Login from './components/Login/Login';

function App() {
  return (
    <div>
      <Register />
      <div style={{ height: '100vh', backgroundColor: '#273036' }}></div>
      <Login />
    </div>
  );
}

export default App;
