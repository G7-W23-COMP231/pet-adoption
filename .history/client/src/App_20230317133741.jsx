import { useState } from 'react';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';

import reactLogo from './assets/react.svg';
import './App.css';
import 
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import PetDetails from './components/ShelterPages/PetDetails';

function App() {
  return (
    <div>
      <Register />
      <div style={{ height: '100vh', backgroundColor: '#273036' }}></div>
      <Login />

      {/*dummy routing to test authentication*/}
      <Router>
        <Routes>
          <Route exact path="/register"  element={<Register/>} />
          <Route exact path="/petdetails"  element={<PetDetails/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
