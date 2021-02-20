const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send("hello, world.");
})



//set up server port on 8000
app.listen(8000, () => {
    console.log("connected to port 8000!");
});