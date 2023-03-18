const express = require('express');
const router = express.Router();

const Animal = require('../models/animalshelter');

router.post('/login', async (req, res, err) => {
    
    const {email, password} = req.body;
    //res.json(req.body);
    
    try {
    const shelterUser = await Animal.find({email});  // .findById(req.params.id); 

    console.log({email});
    console.log({password});
    console.log(shelterUser[0].email);
    console.log(shelterUser[0].password);
    console.log(shelterUser);

    if ((shelterUser[0].email == email) && (shelterUser[0].password == password))
    {
        console.log('access granted');
        res.send({ message: "Access Granted" });
        //res.redirect('http://localhost:5173/petdetails');
    }
    else 
    {
        console.log('invalid username or password');
        res.send({err});
        //res.json("invalid username or password");
        //res.redirect('http://localhost:5173/login');
    }

  } catch (err) {
        res.send("Access Denied");
        console.error(err);
        console.log('invalid username or password');
        //res.json("invalid username or password");
        //res.redirect('http://localhost:5173/login');
  }



});

module.exports = router;