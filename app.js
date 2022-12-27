const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;


//Routes
app.use('/', require("./routes/index.js"));
app.use('/users', require("./routes/users.js"));






app.listen(PORT, console.log(`Server started on port ${PORT}`));