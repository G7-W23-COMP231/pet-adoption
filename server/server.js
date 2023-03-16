import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import Shelter from './mongodb/models/Shelter.js';
import connectDB from './mongodb/connectDB.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json('It is working');
});

app.post('/register', async (req, res) => {
  try {
    const data = req.body;

    const { email, location, password, shelterName } = data;

    await Shelter.create({
      email,
      location,
      password,
      shelterName,
    });

    res.status(200).json('reg');
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

const startServer = async () => {
  try {
    connectDB(
      'mongodb+srv://petadoption:Welcome123@cluster0.cytkpzs.mongodb.net/?retryWrites=true&w=majority'
    );
    app.listen(8000, () => {
      console.log('App is running on http://localhost:8000');
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
