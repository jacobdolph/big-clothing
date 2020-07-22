const express = require("express");
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("public"));
}


app.listen(PORT, function () { console.log("Listening to PORT" + PORT) });