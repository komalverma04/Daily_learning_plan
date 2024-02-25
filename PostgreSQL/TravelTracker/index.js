import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "Millionaire148",
  port: 5432
});
db.connect();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
async function checkVisisted(){

  const result = await db.query(
    "SELECT country_code FROM visited_countries"
    );
  let countries = [];
  result.rows.forEach(country => {
    countries.push(country.country_code);
  });
  return countries;
}
app.get("/", async (req, res) => {
const countries = await checkVisisted();
res.render("index.ejs", {countries : countries,
total: countries.length});

});

app.post("/add", async (req,res) => {
  const country = req.body["country"];
  try{
    const result = await db.query(
      "SELECT country_code FROM countries WHERE LOWER(country_name) like '%' || $1 || '%';",
      [country.toLowerCase()]
      );
      
        const newcountry_code = result.rows[0].country_code;
        try{
          await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [newcountry_code]);
        }catch(err){
          const countries = await checkVisisted();
    res.render("index.ejs",{
      countries: countries,
      total: countries.length,
      error: "country already exists"
      
    });
        }
        
        res.redirect("/");
       
        
  }catch(err){
     const countries = await checkVisisted();
    res.render("index.ejs",{
      countries: countries,
      total: countries.length,
      error: "no data for given country"
      
    });
  }
});
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
