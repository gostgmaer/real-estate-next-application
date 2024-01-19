const express = require("express");
const realStateRoute = express.Router();
const {
  create,
  getData,
  getSingleRecord,
  remove,
  removeMany,
  update,
} = require("../controller/realstate/controller");
const createMiddleWare = require("../middleware/createMiddleWare");
const userMiddleWare = require("../middleware/userAccess");

realStateRoute.route("/realstate/record").post(createMiddleWare, create);
realStateRoute.route("/realstate/record").get(getData);
realStateRoute.route("/realstate/record/:id").get(getSingleRecord);
realStateRoute.route("/realstate/record/:id").patch(update);
realStateRoute.route("/realstate/record/:id").put(update);
realStateRoute.route("/realstate/record/:id").delete(remove);
realStateRoute.route("/realstate/record/bulk").delete(removeMany);
module.exports = realStateRoute;
