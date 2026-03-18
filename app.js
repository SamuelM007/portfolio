import express from "express";
import mysql2 from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = 2999;

app.use(express.static("public"));

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(`${import.meta.dirname}/views/index.html`);
});

const Contacts = [];

const pool = mysql2
  .createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
  })
  .promise();

app.post("/confirmation", async (req, res) => {
  const params = [
    req.body.firstName,
    req.body.lastName,
    req.body.job ? req.body.job : null,
    req.body.company ? req.body.company : null,
    req.body.linkedin ? req.body.linkedin : null,
    req.body.email ? req.body.email : null,
    req.body.meet,
    req.body.other ? req.body.other : null,
    req.body.message ? req.body.message : null,
    req.body.mailing ? req.body.mailing : null,
    req.body.format ? req.body.format : null,
    new Date(),
  ];

  const sql = ` INSERT INTO contacts (fname, lname, job, company, linkedin, email, meet, other, message, mailing, format, timestamp) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  // const Contact = {
  //   firstName: req.body.firstName,
  //   lastName: req.body.lastName,
  //   job: req.body.job,
  //   company: req.body.company,
  //   linkedin: req.body.linkedin,
  //   email: req.body.email,
  //   meet: req.body.meet,
  //   other: req.body.other,
  //   message: req.body.message,
  //   mailing: req.body.mailing,
  //   format: req.body.format,
  //   timestamp: new Date(),
  // };

  // Contacts.push(Contact);

  const result = await pool.execute(sql, params);
  res.render("confirmation", { Contact: req.body });
});

app.get("/admin", async (req, res) => {
  const contacts = await pool.query(
    "Select * FROM contacts ORDER BY timestamp DESC",
  );
  res.render("admin", { Contacts: contacts[0] });
});

app.get("/contact", (req, res) => {
  res.sendFile(`${import.meta.dirname}/views/contact.html`);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
