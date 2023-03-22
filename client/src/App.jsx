import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import ShowPets from './components/ShelterPages/ShowPets';
import AddPet from './components/ShelterPages/AddPet';
import Navbar from './components/Navbar';

function App() {
  {
    /* dummy routing to test authentication */
  }
  return (
    <>
      <nav>
        <Navbar />
      </nav>

      <Routes>
        <Route exact path='/' element={<h1>Homepage</h1>} />
        <Route exact path='/signin' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/showpets' element={<ShowPets />} />
        <Route exact path='/addpet' element={<AddPet />} />
      </Routes>
    </>
  );

  {
    /*
  return (
    <div>
      <Register />
      <div style={{ height: '100vh', backgroundColor: '#273036' }}></div>
      <Login />
    </div>
  );*/
  }
}

export default App;
