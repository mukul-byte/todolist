//jshint esversion:6
let items=["Buy food","Cook food","Eat Food"];
let workList=[];
const express= require("express");
const bodyparser=require("body-parser");
const date= require(__dirname+"/date.js");

const app= express();
// app.use(app.router);
// routes.initialize(app);
app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
    console.log("server started on port 3000");
    let day= date.getDate();

    res.render('list', {listTitle: day,newListItems:items});
});


app.get("/work",function(req,res){
    console.log("server started on port 3000");
    res.render('list', {listTitle: "Work List",newListItems:workList});
});
app.get("/about",function(req,res){
    console.log("server started on port 3000");
    res.render("about");
});

app.listen(3000,function(){
    console.log("server port is started on 3000");
});

app.post("/",function(req,res){
    let item= req.body.newItem;
    let buttonVal=req.body.button;
    console.log(req);
    if(buttonVal=="Work List")
    {
        workList.push(item);
        res.redirect("/work");
    }
    else
    {
        items.push(item);
        res.redirect("/");
    }
});
