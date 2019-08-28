const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config({ path: __dirname + "/.env" });

const ACCESS_TOKEN = process.env.YELP_TOKEN;
const YELP_API_URL = "https://api.yelp.com/v3/graphql";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000"
  })
);

app.use(bodyParser.json());

app.post("/api", (req, resp) => {
  request.post(
    {
      url: YELP_API_URL,
      method: "POST",
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`
      },
      json: true,
      body: req.body
    },
    (err, res, body) => {
      resp.send(body);
    }
  );
});

app.listen(5000);
