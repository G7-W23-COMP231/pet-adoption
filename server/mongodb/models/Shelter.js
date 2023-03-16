import mongoose from 'mongoose';

const db = mongoose.connection.useDb('petadoption');

const ShelterSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  location: { type: String, required: true },
  password: { type: String, required: true },
  shelterName: { type: String, required: true },
});

const Shelter = db.model('Shelter', ShelterSchema, 'animalshelter');

export default Shelter;
