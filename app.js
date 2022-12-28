const express = require("express");
const expresslayouts = require("express-ejs-layouts")
const app = express();
const mongoose = require("mongoose");

const PORT = process.env.PORT || 5000;
app.use(express.static("public"));

mongoose.set("strictQuery", false);


//DB config
const db = require('./config/keys').MongoURI

//Connect to mongo
mongoose.connect(db, {useNewUrlParser: true})
    .then(() => console.log("MongoDB connected.."))
    .catch(err => console.log(err));
    

//EJS
app.use(expresslayouts);
app.set('view engine', 'ejs');

//BodyParse
app.use(express.urlencoded({extended: false}))


//Routes
app.use('/', require("./routes/index.js"));
app.use('/users', require("./routes/users.js"));






app.listen(PORT, console.log(`Server started on port ${PORT}`));