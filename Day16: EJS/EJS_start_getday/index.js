import express from "express";
const app = express();
const port = 3000;

app.get("/", (req,res)=>{
    const today = new Date();
    const day = today.getDay();
    if(day == 0 || day == 6){
        res.render("index.ejs", {DayType: "a weekend",
        Advice: "It is the time to Enjoy"});    
    }else{
        res.render("index.ejs", {DayType: "a weekday",
        Advice: "It is the time to work hard"});
    }

});

app.listen(port,()=>{
console.log(`server is running on port ${port}. `);
});
