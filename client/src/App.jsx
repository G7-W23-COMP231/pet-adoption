import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import AddPet from "./components/ShelterPages/AddPet";
import Navbar from "./components/Navbar";
import UserLogin from "./components/UserLogin";
import UserRegister from "./components/UserRegister";
import Pets from "./components/Pets";
import PetOwnerSurvey from "./components/Survey/PetOwnerSurvey";
import UploadImage from "./components/UploadImage";
import Petdetail from "./components/Petdetail";
import EditPet from "./components/ShelterPages/EditPet";
import axios from "axios";

function App() {
  const [isShelterLogin, setIsShelterLogin] = useState(false);
  const [isUserLogin, setIsUserLogin] = useState(false);
  const [petId, setPetId] = useState("");
  const [currentPet, setCurrentPet] = useState(null);
  {
    /* dummy routing to test authentication */
  }

  useEffect(() => {
    const getPetById = async () => {
      if (!petId) return; //https://petadoptionteam.azurewebsites.net/
      const pet = await axios.get(`http://localhost:5000/pets/pet/${petId}`);
      setCurrentPet(pet.data);
    };

    getPetById();
  }, [petId]);

  return (
    <>
      <nav>
        <Navbar
          isShelterLogin={isShelterLogin}
          setIsShelterLogin={setIsShelterLogin}
          isUserLogin={isUserLogin}
          setIsUserLogin={setIsUserLogin}
        />
      </nav>
      {/* <UploadImage /> */}

      <Routes>
        <Route exact path="/" element={<h1>Home</h1>} />
        <Route
          exact
          path="/shelter/login"
          element={
            <Login
              setIsShelterLogin={setIsShelterLogin}
              setIsUserLogin={setIsUserLogin}
            />
          }
        />
        <Route exact path="/shelter/register" element={<Register />} />
        <Route
          exact
          path="/showpets"
          element={
            <Pets
              isUserLogin={isUserLogin}
              isShelterLogin={isShelterLogin}
              setPetId={setPetId}
            />
          }
        />
        <Route exact path="/addpet" element={<AddPet />} />
        <Route exact path="/pets/*" element={<Petdetail pet={currentPet} />} />

        <Route
          exact
          path="/user/login"
          element={<UserLogin setIsUserLogin={setIsUserLogin} />}
        />
        <Route exact path="/user/register" element={<UserRegister />} />
        <Route exact path="/petownersurvey" element={<PetOwnerSurvey />} />
        <Route exact path="/editpet/" element={<EditPet pet={currentPet} />} />
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
