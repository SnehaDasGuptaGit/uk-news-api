const express = require("express");
const routes = require("./routes/routes.js");
const app = express();
const dotenv = require('dotenv');
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
dotenv.config();
routes(app);

var server = app.listen(process.env.port, function () {
    console.log("App running on port.", server.address().port);
});
