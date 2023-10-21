import express from 'express';
import path from 'path';
import Landing from "./controllers/login";

// middleware
app.use(express.json());
app.set('view engine', 'ejs');
app.set("views",path.resolve("./views"));


const port=8080;
app= express();



app.get('/',Landing);


app.listen(port,()=>{
    console.log(`Development Server started http://127.0.0.1:${port}`);
})








