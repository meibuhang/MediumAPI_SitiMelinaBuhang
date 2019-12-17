var express = require('express');
var bodyParser = require('body-parser');
const path = require('path');

const db = require("./config/config.json");
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
})); // support encoded bodies
app.use(express.static(path.resolve(__dirname, 'public')));
const port = 8080;

// app.get("/", (req, res) => {
//   res.send("Hello Express !");
// });


require('./router/categories')(app);
require('./router/user')(app);

//listen to defined port
app.listen(port, () => console.log("App listening at http://", port));