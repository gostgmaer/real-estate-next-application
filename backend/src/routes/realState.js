const express = require("express");
const realestateRoute = express.Router();
const {
  create,
  getData,
  getSingleRecord,
  remove,
  removeMany,
  update,
} = require("../controller/realestate/controller");
const createMiddleWare = require("../middleware/createMiddleWare");
const userMiddleWare = require("../middleware/userAccess");

realestateRoute.route("/realestate/record").post(createMiddleWare, create);
realestateRoute.route("/realestate/record").get(getData);
realestateRoute.route("/realestate/record/:id").get(getSingleRecord);
realestateRoute.route("/realestate/record/:id").patch(update);
realestateRoute.route("/realestate/record/:id").put(update);
realestateRoute.route("/realestate/record/:id").delete(remove);
realestateRoute.route("/realestate/record/bulk").delete(removeMany);
module.exports = realestateRoute;
