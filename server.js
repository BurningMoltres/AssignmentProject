const express=require('express')
const app=express()
const port=5000;

const results=["Rajesh","Ramesh","Sayali","Sanjana"];
app.get("/student/studentsList",(req,res)=>
{
   
res.json(results);

})

app.listen(port,(req,res)=>{
    console.log("listeining on port no"+port);
});