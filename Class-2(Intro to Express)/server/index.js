const express = require("express");

const app = express();
app.use(express.json())

let courses = [
  { id: 1, name: "Java" },
  { id: 2, name: "DBMS" },
  { id: 3, name: "JavaScript" },
];

// Get all Courses
app.get("/courses", (req, res) => {
  res.send(courses);
});

// get a course by id
app.get("/courses/:id", (req, res) => {
  // console.log(req.params)
  //    res.send(courses)

  // solution for this

  let course = courses.find((course) => course.id === parseInt(req.params.id));
  res.send(course);
});


// create a course



app.post('/courses'  , (req , res)=>{
      let course = {
        id : req.body.id,
        name : req.body.name,
      }

      courses.push(course)
      res.send(courses)
})

// update a resource


// delete a resource





app.listen(8001, () => {
  console.log("Sever Running");
});
