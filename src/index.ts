// new index.ts code
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

// app typed to "Express" as imported from above
const app: Express = express();
const port = process.env.PORT || 3000;

// req and res typed to "Request" and "Response respectively" as imported from above
app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server!!!");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

// // index.js old code
// const express = require("express");

// // require and configure the package
// const dotenv = require("dotenv");
// dotenv.config();

// const app = express();
// const port = process.env.PORT;

// app.get("/", (req, res) => {
//   res.send("Express + TypeScript Server");
// });

// app.listen(port, () => {
//   console.log(`[server]: Server is running at http://localhost:${port}`);
// });