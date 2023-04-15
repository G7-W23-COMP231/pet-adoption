import axios from 'axios';
const getPetById = async (id, setData) => {
  if (!id) return; //https://petadoptionteam.azurewebsites.net/
  const pet = await axios.get(`http://localhost:5000/pets/pet/${id}`);
  setData(pet.data);
  return pet;
};

export default getPetById;
