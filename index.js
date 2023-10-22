import express from 'express';
import path from 'path';
import Landing from "./controllers/Land.js";
import getUser from "./controllers/getUser.js";
import Logins from "./controllers/Logins.js";
import Connection from './connection.js';
import bodyParser from 'body-parser';
import Page from "./controllers/index.js";

const app = express();



// settings
app.set('view engine', 'ejs');
app.set("views",path.resolve("./views"));
app.use(express.static('public'));
app.use(express.json());

// middleware
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

Connection()
const port=8080;



app.get('/',Page);
app.get('/signup',Landing);
app.post('/submit-form',getUser);
app.get('/login',Logins);


app.listen(port,()=>{
    console.log(`Development Server started http://127.0.0.1:${port}`);
})








