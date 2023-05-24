const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(function (request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post("/process-form", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;

    // Process the data as desired (e.g., save to a database, send an email)
    console.log(name);
    res.send("Data received successfully!"); // Send a response to the client
    res.redirect('http://127.0.0.1:5500/data.html' )
    
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
