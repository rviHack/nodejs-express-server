const express = require('express');
const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

//Imprt routes
const login = require('./src/user/login');
const signup = require('./src/user/signup');

//Mount routes
app.use('/login', login);
app.use("/signup", signup);

app.listen(port, () => {
    console.log("Server Listening on PORT:", port);
  });