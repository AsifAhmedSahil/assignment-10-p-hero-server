const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');


app.use(cors());


const categories = require("./data/category.json")
const courses = require("./data/courses.json");


app.get("/",(req,res)=>{
    res.send("Blockchain Course Api Running")
})

app.get("/course-categories",(req,res)=>{
    res.send(categories)
})

app.get('/courses/:id',(req,res)=>{
    const id = req.params.id;
    console.log(id)
    const selectedCourse = courses.find(course => course.category_id === id);
    res.send(selectedCourse)
    // res.send(categories)
})
app.get('/checkout/:id',(req,res)=>{
    const id = req.params.id;
    console.log(id)
    const selectedCourse = courses.find(course => course._id === id);
    res.send(selectedCourse)
    // res.send(categories)
})

app.get("/category/:id", (req,res)=>{
    const id = req.params.id;
    const categoryCourses = courses.filter(cate =>cate.category_id === id);
    res.send(categoryCourses)
})

app.listen(port,()=>{
    console.log("blockchain course on port ",port);
})