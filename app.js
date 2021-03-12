const express = require("express");
const routes = require("./routes/routes.js");
const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

routes(app);

var server = app.listen(process.env.port, function () {
    console.log("App running on port.", server.address().port);
});
