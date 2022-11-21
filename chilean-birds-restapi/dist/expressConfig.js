"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cors = _interopRequireDefault(require("cors"));
var _birdsRoutes = _interopRequireDefault(require("./routes/birds.routes.js"));
//es buena practica tener la configuración aparte de la inicialización del servidor para no acumular código

// para añadir sintaxis de js moderno, ecma scripot 6, osea import/from debemos añadir en package.json type:module

// index.js será el archivo para usar los modulos y ejecutar nuestra app

//morgan nos irá dando mensajes por consola de las cosas que vallamos realizando

//cors nos permite interactual entre servidores de distinto origen

//importamos las rutas que hicimos en el otro archivo y así tener mayor orden. le podemos dar el nombre que queramos

// al llamar a express me devolverá un  objeto, que será mi servidor, tendrá los métodos, rutas y todo eso
var app = (0, _express["default"])();

//usamos el modulo set para definir la variable port y si modificamos el puerto, solo lo hacemos desde aquí.
app.set("port", process.env.PORT || 3000);
//
//middlewares
//
app.use((0, _cors["default"])());
app.use((0, _morgan["default"])("dev"));
//esto es para que nuestra aplicación pueda entender métodos json
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.get("/", function (req, res) {
  res.json({
    message: "Welcome to Chilean Birds Rest API"
  });
});

//aquí usamos la ruta principal
app.use("/api", _birdsRoutes["default"]);
var _default = app;
exports["default"] = _default;