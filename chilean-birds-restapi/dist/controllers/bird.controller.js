"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modifyBird = exports.getOneBird = exports.getByType = exports.getAllBirds = exports.deleteBird = exports.createBird = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _express = require("express");
var _Birds_models = _interopRequireDefault(require("../models/Birds_models.js"));
var _getPagination2 = _interopRequireDefault(require("../libs/getPagination.js"));
var getAllBirds = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$query, size, page, title, condition, _getPagination, limit, offset, birds;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$query = req.query, size = _req$query.size, page = _req$query.page, title = _req$query.title;
            condition = title ? {
              //en caso que le titulo exista creamos un obj que tenga la propiedad title que contenga una regex que estará basada en el titulo que le está pasando el cliente
              title: {
                $regex: new RegExp(title),
                $options: "i"
              }
            } : {};
            _getPagination = (0, _getPagination2["default"])(page, size), limit = _getPagination.limit, offset = _getPagination.offset;
            _context.next = 6;
            return _Birds_models["default"].paginate(condition, {
              offset: offset,
              limit: limit
            });
          case 6:
            birds = _context.sent;
            //podemos personalizar la respuesta de birds creando un obj con la propiedades que necesitamos
            res.json(birds);
            _context.next = 13;
            break;
          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            res.status(500).json({
              message: _context.t0.message || "Something goes wrong"
            });
          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));
  return function getAllBirds(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

//almacenamos el objeto en una constante y de manera asíncrona guardamos ese objeto en la base de datos con el método .save() y como despuesta enviamos un mensaje para dar aviso que el objeto se ha añadido a la base de dato.
exports.getAllBirds = getAllBirds;
var createBird = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var new_bird, birdSaved;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (req.body) {
              _context2.next = 2;
              break;
            }
            return _context2.abrupt("return", res.status(400).send({
              message: "Content cannot be empty"
            }));
          case 2:
            _context2.prev = 2;
            new_bird = new _Birds_models["default"]({
              main: req.body.main,
              full: req.body.full,
              thumbnail: req.body.thumbnail,
              spanish: req.body.spanish,
              english: req.body.english,
              latin: req.body.latin,
              distribution: req.body.distribution,
              habitat: req.body.habitat,
              description: req.body.description,
              feeding: req.body.feeding,
              type: req.body.type
            });
            _context2.next = 6;
            return new_bird.save();
          case 6:
            birdSaved = _context2.sent;
            res.json(birdSaved);
            _context2.next = 13;
            break;
          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](2);
            res.status(500).json({
              message: _context2.t0.message || "Something goes wrong"
            });
          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 10]]);
  }));
  return function createBird(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.createBird = createBird;
var getOneBird = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, bird;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.prev = 1;
            _context3.next = 4;
            return _Birds_models["default"].findById(id);
          case 4:
            bird = _context3.sent;
            if (bird) {
              _context3.next = 7;
              break;
            }
            return _context3.abrupt("return", res.status(404).json({
              message: "Task with id ".concat(id, " does not exist")
            }));
          case 7:
            res.json(bird);
            _context3.next = 13;
            break;
          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](1);
            res.status(500).json({
              message: _context3.t0.message || "Error retriving Bird with id ".concat(id)
            });
          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 10]]);
  }));
  return function getOneBird(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
//se debe modificar para que al hacer click en el lado del cliente nos de el tipo y sea más dinámico
exports.getOneBird = getOneBird;
var getByType = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var birds;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _Birds_models["default"].find({
              type: "Rapaz"
            });
          case 3:
            birds = _context4.sent;
            res.json(birds);
            _context4.next = 10;
            break;
          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            res.status(500).json({
              message: "Error retriving birds with type: RAPAZ"
            });
          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 7]]);
  }));
  return function getByType(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.getByType = getByType;
var modifyBird = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, updateBird;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _context5.prev = 1;
            _context5.next = 4;
            return _Birds_models["default"].findByIdAndUpdate(id, req.body);
          case 4:
            updateBird = _context5.sent;
            res.json("Ave ".concat(id, " actualizada"));
            _context5.next = 11;
            break;
          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](1);
            res.status(500).json({
              message: "Cannot modify bird with id: ".concat(id)
            });
          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 8]]);
  }));
  return function modifyBird(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.modifyBird = modifyBird;
var deleteBird = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _context6.prev = 1;
            _context6.next = 4;
            return _Birds_models["default"].findByIdAndDelete(id);
          case 4:
            res.json("Bird deleted successfully");
            _context6.next = 10;
            break;
          case 7:
            _context6.prev = 7;
            _context6.t0 = _context6["catch"](1);
            res.status(500).json({
              message: "Cannot delete bird with id: ".concat(id)
            });
          case 10:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 7]]);
  }));
  return function deleteBird(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
exports.deleteBird = deleteBird;