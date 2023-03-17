const express = require('express');
const router = express.Router();

const Animal = require('../models/animalshelter');

router.post('/login', async (req, res) => {
    
    const {email, password} = req.body;
    //res.json(req.body);
    
    try {
    const shelterUser = await Animal.find({email});  // .findById(req.params.id); 
    console.log(shelterUser);
    console.log(shelterUser);
    console.log({email});

    if (shelterUser != '')
    {
        alert('access granted');
    }
    else 
        console.log('email not found');

    //res.send({ email: shelterUser.email, password: shelterUser.password });

  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;