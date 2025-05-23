var express = require('express');
var server = express();
var routes = require('./routes/routes');
var mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv').config();

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DB Connected");
    } catch (error) {
        console.log("Error:", error.message);
    }
}

connectDB();


server.use(cors());
server.use(express.json());
server.use(routes);


const port = process.env.PORT || 8000;
server.listen(port, function check(error) {
    if (error) {
        console.log("Error:", error.message)
    }
    else {
        console.log("Listening...")
    }
});