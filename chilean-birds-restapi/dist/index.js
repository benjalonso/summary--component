"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _expressConfig = _interopRequireDefault(require("./expressConfig.js"));
require("./database/database.js");
// en este archivo inicializamos el servidor 

// para ejecutarlo uso listen y le asigno un puerto
_expressConfig["default"].listen(_expressConfig["default"].get('port'));
// para saber que está ejecutando el servidor podemos hacer un console log así..
console.log('Server on port', _expressConfig["default"].get('port'));