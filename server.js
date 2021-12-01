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

