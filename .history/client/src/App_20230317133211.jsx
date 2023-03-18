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

      {/*dummy routing to test authentication*/}
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/register"  element={<Register/>} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
