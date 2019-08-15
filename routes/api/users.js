const router = require("express").Router();
const userController = require("../../controller/UserController");

// * route: /api/users

router.route("/")
    .post(userController.create)
    .get(userController.getAll);

router.route("/:username")
    .get(userController.findByUserName);

router.route("/login")
    .post(userController.validate);

module.exports = router;
