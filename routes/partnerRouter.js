const express = require("express");
const partnerRouter = express.Router();

partnerRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })

  .get((req, res) => {
    res.end("Will send all the partners to you");
  })

  .post((req, res) => {
    res.end(
      `Will add the partners: ${req.body.name} with description ${req.body.description}`
    );
  })

  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /partners");
  })

  .delete((req, res) => {
    res.end("Deleting all partners");
  });

  partnerRouter.route("/:partnerId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })

  .get((req, res) => {
    res.end(`Will send details of partner: ${req.params.partnerId}`);
  })

  .post((req,  res) => {
    req.statusCode = 403;
    res.end('POST not supported')
  })

  .put((req, res) => {
    res.end(`Will update partner with description ${req.body.description} and name: ${req.body.name}`)
  })

  .delete((req, res) => {
    res.end(`Deleting partner: ${req.params.partnerId}`)
  })

module.exports = partnerRouter;
