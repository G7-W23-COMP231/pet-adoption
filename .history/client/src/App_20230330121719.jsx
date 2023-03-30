import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import AddPet from './components/ShelterPages/AddPet';
import Navbar from './components/Navbar';
import UserLogin from './components/UserLogin';
import UserRegister from './components/UserRegister';
import ShowPets from './components/Pets';

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
        <Route exact path='/UserLogin' element={<UserLogin />} />
        <Route exact path='/UserRegister' element={<UserRegister />} />
        <Route exact path='/petownersurvey' element={<PetOwnerSurvey />} />
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
