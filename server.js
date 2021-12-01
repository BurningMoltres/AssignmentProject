const express=require('express')
const app=express()
const port=5000;

const results=["Rajesh","Ramesh","Sayali","Sanjana","Asma"];
app.get("/",(req,res)=>
{
   
res.json(results);

})


app.get("/student/studentsList",(req,res)=>
{
   
res.json(results);

})

app.listen(process.env.port|| port,(req,res)=>{
    console.log("listeining on port no"+port);
});