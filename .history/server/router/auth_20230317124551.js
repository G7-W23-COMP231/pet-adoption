const express = require('express');
const router = express.Router();

const Animal = require('../models/animalshelter');

router.post('/login', async (req, res) => {
    
    const {email, password} = req.body;
    //res.json(req.body);
    
    try {
    const shelterUser = await Animal.find({email});  // .findById(req.params.id); 

    console.log({email});
    console.log({password});
    console.log(shelterUser.email);
    console.log(shelterUser.password);


    if ((shelterUser.email == {email}) && (shelterUser.password == {password}))
    {
        console.log('access granted');
    }
    else 
        console.log('invalid user name or password');

    //res.send({ email: shelterUser.email, password: shelterUser.password });

  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;