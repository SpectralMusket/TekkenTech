const express = require("express");
const app = express();

app.set('view engine', 'ejs');



app.use(logger);



app.use(express.static("public"));

app.get("/", (req, res) => {
    console.log("doodoo");
    res.render("index");
})

function logger(req, res, next) {
    console.log();
    var string = "METHOD = " + req.method + " | PATH = " + req.path + " | URL = " + req.originalUrl + " | IP = " + req.ip;
    console.log(string);
    next();
}


// app.get('/', (req, res) => {
//     console.log("hello req /");
//     // res.render("index");
//     res.send("views/beginners.html");
// })
app.listen(3000);