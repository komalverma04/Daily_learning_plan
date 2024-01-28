import express from "express";
// implementing my express server

const app = express();
const port = 3000;

const today = new Date();

app.get("/", (req,res)=>{
    const data = {
        title: "EJS tags",
        htmlcontent: "<strong>This is some strong text.</strong>",
        items: ["Web Development", "Machine Learning", "DSA"],
        second: today.getSeconds()
 };
    res.render("index.ejs",data);
});
    

app.listen(port, ()=>{
    console.log(`Server is running on port no. ${port}.`);
});
