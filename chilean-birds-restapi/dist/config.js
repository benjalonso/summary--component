"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _dotenv = require("dotenv");
//es una buena práctica que las configuraciones de las variables de entorno las desarrollemos en un archivo aparte y desde auí llamamos a las variables de archivo .env para ser usadas en nuestro programa.

//usamos el modulo config para cargar las variables de entorno
(0, _dotenv.config)();
var _default = {
  mongodbURL: process.env.MONGODB_URI
};
exports["default"] = _default;