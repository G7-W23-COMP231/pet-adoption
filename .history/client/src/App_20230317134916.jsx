import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import reactLogo from './assets/react.svg';
import './App.css';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import PetDetails from './components/ShelterPages/PetDetails';

function App() {
  
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Register />
          <div style={{ height: '100vh', backgroundColor: '#273036' }}></div>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/petdetails">
          <PetDetails />
        </Route>
      </Switch>
    </div>
  );

  {/*return (
    <div>
      <Register />
      <div style={{ height: '100vh', backgroundColor: '#273036' }}></div>
      <Login />
    </div>
  );*/}
}

export default App;
