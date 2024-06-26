"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// new index.ts code
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// app typed to "Express" as imported from above
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// req and res typed to "Request" and "Response respectively" as imported from above
app.get("/", (req, res) => {
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
