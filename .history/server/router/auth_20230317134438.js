const express = require('express');
const router = express.Router();

const Animal = require('../models/animalshelter');

router.post('/login', async (req, res) => {
    
    const {email, password} = req.body;
    //res.json(req.body);
    
    try {
    const shelterUser = await Animal.find({email});  // .findById(req.params.id); 
    //const shelterUser = await Animal.findById(req.params.email);  //  

    console.log({email});
    console.log({password});
    console.log(shelterUser[0].email);
    console.log(shelterUser[0].password);
    console.log(shelterUser);

    if ((shelterUser[0].email == email) && (shelterUser[0].password == password))
    {
        //console.log('access granted');
        res.json("access granted");

        return res.redirect('/petdetails');
    }
    else 
    {
        res.json("invalid username or password");

        return res.redirect('/login');
    }

  } catch (err) {
    //console.error(err);
        res.json("invalid username or password");

        return res.redirect('/login');
  }
});

module.exports = router;