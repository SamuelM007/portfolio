import express from "express";

const app = express();

const PORT = 2999;

app.use(express.static("public"));

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(`${import.meta.dirname}/views/index.html`);
});

const Contacts = [];

app.post("/confirmation", (req, res) => {
  const Contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    job: req.body.job,
    company: req.body.company,
    linkedin: req.body.linkedin,
    email: req.body.email,
    meet: req.body.meet,
    other: req.body.other,
    message: req.body.message,
    mailing: req.body.mailing,
    format: req.body.format,
    timestamp: new Date(),
  };

  Contacts.push(Contact);
  res.sendFile(`${import.meta.dirname}/views/confirmation.html`);
});

app.get("/admin", (req, res) => {
  res.render("admin", { Contacts });
});

app.get("/contact", (req, res) => {
  res.sendFile(`${import.meta.dirname}/views/contact.html`);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
