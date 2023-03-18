import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import ShowPets from './components/ShelterPages/ShowPets';

function App() {

  {/* dummy routing to test authentication */}
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/register"  element={<Register/>} />
        <Route exact path="/showpets"  element={<ShowPets/>} />
      </Routes>
    </Router>
  );


  {/* 
  return (
    <div>
      <Register />
      <div style={{ height: '100vh', backgroundColor: '#273036' }}></div>
      <Login />
    </div>
  );*/}
}

export default App;
