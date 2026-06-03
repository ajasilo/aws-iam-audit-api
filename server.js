const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const users = [
  {
    username: "john.admin",
    mfa: "Enabled",
    lastLogin: "2026-06-01",
    risk: "Low"
  },
  {
    username: "finance.admin",
    mfa: "Disabled",
    lastLogin: "2026-03-15",
    risk: "High"
  },
  {
    username: "legacy.user",
    mfa: "Disabled",
    lastLogin: "2026-02-10",
    risk: "Critical"
  }
];

app.get("/", (req, res) => {
  res.send("AWS IAM Audit API Running");
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/inactive-users", (req, res) => {
  res.json([
    users[1],
    users[2]
  ]);
});

app.get("/risk-summary", (req, res) => {
  res.json({
    low: 1,
    high: 1,
    critical: 1
  });
});

app.listen(5000, () => {
  console.log("AWS IAM Audit API running on port 5000");
});