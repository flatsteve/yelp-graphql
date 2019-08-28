const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const cors = require("cors");

const ACCESS_TOKEN =
  "dw33k4P4VtwPiAcaR4idzeq4Vc2fHbbsnqq5AIIkezSddoxZQjAg0dBAIPcj6BbCikyUbcW_yLRZOKV0vmWc85liUTFa2hn-Y4FDlrO9perxrxTrKUmXEyHZBCZlXXYx";
const YELP_API_URL = "https://api.yelp.com/v3/graphql";

var app = express();

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
