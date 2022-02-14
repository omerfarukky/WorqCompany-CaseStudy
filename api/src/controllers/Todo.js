const httpStatus = require("http-status");
const { insert, list, updatedT } = require("../services/Todo");

const createTodo = (req, res) => {
  insert(req.body)
    .then((response) => {
      res.status(httpStatus.CREATED).send(response);
    })
    .catch((err) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
    });
};

const getAllTodo = (req, res) => {
  list()
    .then((response) => res.status(httpStatus.OK).send(response))
    .catch((err) => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err));
};

const updateTodo = (req, res) => {
  updatedT(req.body, req.params.id)
    .then((response) => {
      res.status(httpStatus.OK).send(response);
    })
    .catch((err) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
    });
};

module.exports = {
  createTodo,
  getAllTodo,
  updateTodo,
};
