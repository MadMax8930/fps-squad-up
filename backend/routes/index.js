/**  @format */

const express = require("express");
const router = express.Router();

const apiUser = require("./users");
const apiPost = require("./posts");
const apiComments = require("./comments");
const apiImages = require("./images");

router.use(apiUser);
router.use(apiPost);
router.use(apiImages);
router.use(apiComments);

module.exports = router;