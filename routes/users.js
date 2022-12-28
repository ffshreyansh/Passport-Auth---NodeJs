const express  = require("express");
const router = express.Router();

//Login Page
router.get('/login', (req, res) => res.render('login'));


//Register Page
router.get('/register', (req, res) => res.render('register'));

router.post("/register", (req, res) => {
    const {name, email, password, password2} = req.body
    let errors = []

    //check required fields
    if(!name || !email || !password || !password2){
        errors.push({msg: "please fill all fields"  });

    }

    //check passwords match
    if(password !== password2){
        errors.push({msg: "Password don't match"});
    }

    //check password length
    if(password.length < 6){
        errors.push({msg: "password must be greater than 6 characters"})
    }

    if(errors.length > 0)
    {
        res.render("register",{
            errors,
            name,
            email,
            password,
            password2
        });
    }else {
        res.send("pass")
    }
});


module.exports = router;