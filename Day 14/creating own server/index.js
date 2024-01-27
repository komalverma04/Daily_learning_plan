import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import morgan from "morgan";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
var UserName = "";

function UserNamegenerator(req,res,next){
        console.log(req.body);
        UserName = req.body["first"] + req.body["last"];
        next();
}
app.use(UserNamegenerator);
app.get("/", (req,res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req,res) => {
    
    res.send(`<h1>Your User Name is: </h1><h2>${UserName} *-*.</h2>`);

});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
