const express = require("express");
const promotionRouter = express.Router();

promotionRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })

  .get((req, res) => {
    res.end("Will send all the promotions to you");
  })

  .post((req, res) => {
    res.end(
      `Will add the promotions: ${req.body.name} with description ${req.body.description}`
    );
  })

  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /promotions");
  })

  .delete((req, res) => {
    res.end("Deleting all promotions");
  });

  promotionRouter.route("/:promotionId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })

  .get((req, res) => {
    res.end(`Will send details of promotion: ${req.params.promotionId}`);
  })

  .post((req,  res) => {
    res.statusCode = 403;
    res.end('POST not supported')
  })

  .put((req, res) => {
    res.end(`Will update promotion with description ${req.body.description} and name: ${req.body.name}`)
  })

  .delete((req, res) => {
    res.end(`Deleting promotion: ${req.params.promotionId}`)
  })

module.exports = promotionRouter;