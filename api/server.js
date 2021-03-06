const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

//import routers here
const authRouter = require("../auth/auth-router");
const usersRouter = require("../users/users-router");
const entriesRouter = require("../entries/entries-router");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(morgan('dev'));

server.get("/", (req, res) => {
    res.send("<h1>Sleep Tracker</h1>");
})

//use routes here
server.use("/auth", authRouter);
server.use("/users", usersRouter);
server.use("/entries", entriesRouter);

module.exports = server;