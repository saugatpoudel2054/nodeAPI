const express = require("express");

const auth_routes = require('./auth.route');
const home_routes = require('./home.route');
const user_routes = require('./user.route');
const brand_routes = require('./brand.route');

const app = express();

app.use(home_routes);
app.use(auth_routes);
app.use(user_routes);
app.use(brand_routes);

module.exports = app;

