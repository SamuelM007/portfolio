import express from "express";

const app = express();

const PORT = 2999;

app.use(express.static("public"));

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
    email: req.body.linkedin,
    met: req.body.meet,
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
  res.send(Contacts);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
