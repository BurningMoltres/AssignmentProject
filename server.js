const express=require('express')
const app=express()
const port=5000;

const results=["Rajesh","Ramesh","Sayali","Sanjana","Asma"];
app.listen(process.env.PORT|| port,(req,res)=>{
    console.log("listeining on port no"+port);
});

app.get("/",(req,res)=>
{
   
res.json(results);

})


app.get("https://practice-studentdetailslink.herokuapp.com/student/studentsList",(req,res)=>
{
   
res.json(results);

})

app.get("/student/studentsList",(req,res)=>
{
   
res.json(results);

})

//list of imp commands
//git push heroku Head:master
//git push origin3 main --force
//git commit -am "update in the studentListUrl"(skip the staging area and go directly to commit)
//git add --all(add all the changes at once)
