const express = require("express");
const { createTodo, getAllTodo, updateTodo } = require("../controllers/Todo");
const router = express.Router();

router.route("/").post(createTodo);
router.route("/").get(getAllTodo);
router.route("/:id").put(updateTodo);

module.exports = router;
