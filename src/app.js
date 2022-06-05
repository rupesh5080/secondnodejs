const express=require("express");
const app=express();
const path=require("path");
const hbs=require("hbs");
const port=process.env.PORT || 3000;
//static path for static page
const staticpath=path.join(__dirname,"../public");
const templates_path=(path.join(__dirname,"../templates/views"))
const partials_path=(path.join(__dirname,"../templates/partials"))
// console.log(staticpath);
//static page ko use karne ka tarika
app.use(express.static(staticpath));

// hbs view engine intall below//
app.set("view engine","hbs");
app.set("views",templates_path)
hbs.registerPartials(partials_path);
//first-route,second callback funtion
app.get("/",(req,res)=>{
    res.render("index");
})
 
app.get("/about",(req,res)=>{
    res.render("about");
})

app.get("/weather",(req,res)=>{
    res.render("weather");
})
app.get("*",(req,res)=>{
    res.render("404err");
})

//server listen

app.listen(port,()=>{
    console.log(`server is listening to the port no ${port}`)
})