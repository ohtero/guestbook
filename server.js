const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");
const PORT = process.env.PORT || 3000;

const multer = require('multer');
const upload = multer({ dest: 'uploads/'});

const fs = require("fs");

const savedMessages = require("./messages.json");

const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(cors());

app.get("/", (req, res) => {
  res.render("pages/index");
});

app.get("/guestbook", (req, res) => {
  const messages = require("./messages.json");
  res.render("pages/guestbook", { messages: messages });
});

app.get("/newmessage", (req, res) => {
  res.render("pages/newmessage");
});

app.post("/newmessage", urlencodedParser, (req, res) => {
  class Message {
    constructor(name, country, message) {
      this.name = name;
      this.country = country;
      this.message = message;
    }
  }

  const newMessage = new Message(
    req.body.name,
    req.body.country,
    req.body.message
  );
  savedMessages.unshift(newMessage);
  fs.writeFileSync("./messages.json", JSON.stringify(savedMessages));
  res.render("pages/newmessage");
});

app.get("/ajaxmessage", (req, res) => {
  res.render("pages/ajaxmessage");
});

app.post("/ajaxmessage", jsonParser, (req, res) => {
  if (req) {
    savedMessages.unshift(req.body);
    fs.writeFileSync("./messages.json", JSON.stringify(savedMessages));
    console.log(req.body);
  }
  // res.render("pages/ajaxmessage")

});

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
