const router = require("express").Router();
const userController = require("../../controller/UserController");

// * route: /api/users

router.route("/")
    .post(userController.create)
    .get(userController.getAll);


module.exports = router;
