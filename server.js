const express = require("express");
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const savedMessages = require("./messages.json");

// page routings

app.get("/", (req, res) => {
  res.render("pages/index");
});

app.get("/guestbook", (req, res) => {
  res.render("pages/guestbook", { messages: savedMessages });
});

app.get("/newmessage", (req, res) => {
  res.render("pages/newmessage");
});

app.get("/ajaxmessage", (req, res) => {
  res.render("pages/ajaxmessage", { messages: savedMessages });
});

// post request handling

app.post("/newmessage", (req, res) => {
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

app.post("/ajaxmessage", (req, res) => {
  if (req) {
    savedMessages.unshift(req.body);
    fs.writeFileSync("./messages.json", JSON.stringify(savedMessages));
    res.send(savedMessages);
  }
});

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
