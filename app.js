const express = require("express");
const path = require("path");
const http = require("http");
const cors = require("cors");
require("./db/mongoconnect");
const Task = require('./models/Task');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));


app.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.json(tasks);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Error fetching tasks", err });
  }
});

app.post("/tasks", async (req, res) => {
  try {
    const { id, done, text } = req.body;
    const newTask = new Task({ id, done, text });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Error creating task", err });
  }
});

const server = http.createServer(app);

let port = process.env.PORT || 3001;
server.listen(port);