import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
<<<<<<< Updated upstream

function App() {
=======
import ShowPets from './components/ShelterPages/ShowPets';
import AddPet from './components/ShelterPages/AddPet';
import Navbar from './components/Navbar';
import Pet from './components/Pet';

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
        <Route exact path='/pets' element={<Pet />} />
      </Routes>
    </>
  );

  {
    /*
>>>>>>> Stashed changes
  return (
    <div>
      <Register />
      <Login />
    </div>
  );
}

export default App;
