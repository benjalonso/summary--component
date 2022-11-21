"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _config = _interopRequireDefault(require("../config.js"));
var _mongoose = _interopRequireDefault(require("mongoose"));
//metodo conect nos sirve para conectar la base de datos, dejando el protocolo que sería en este caso mongodb, luego dejamos el servidor que en este caso sería localhost y luego el nombre de la base de datos, que en caso de no existir la crea automáticamente.

//no es una buena práctica dejar las direcciones, contraseñas o cualquier api token dentro del código, entonces usamos variables de entorno que dejamos en nuestro archivo .env
(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  var db;
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _mongoose["default"].connect(_config["default"].mongodbURL);
        case 3:
          db = _context.sent;
          console.log("Database is connected to: ", db.connection.name);
          _context.next = 10;
          break;
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, null, [[0, 7]]);
}))();