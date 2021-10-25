/**
 * File: src/app.js
 * Date:
 * Author: Abel L Mbula
 */

const express = require("express");
const path = require("path");

const app = express();


/**
 * App configuration
 */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => res.render("index", {title: "Home"}));

module.exports = app;