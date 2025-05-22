var express = require('express');
var server = express();
var routes = require('./routes/routes');
var mongoose = require('mongoose');
const cors = require('cors');
const { StreamChat } = require('stream-chat');
require("dotenv").config();

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

const serverClient = StreamChat.getInstance('nxa8ucggh8y6', 'sezcwn2bryaw4vjvc3uh7jb2kkycur8tgt22pewmz7ejjzq3bnavxsxfsxu3ktzh');


server.use(cors());
server.use(express.json());
server.use(routes);

server.post('/getToken', (req, res) => {
    const { userId } = req.body;
    const token = serverClient.createToken(userId);
    res.send({ token });
});

server.listen(process.env.PORT, function check(error) {
    if (error) {
        console.log("Error:", error.message)
    }
    else {
        console.log("Listening...")
    }
});