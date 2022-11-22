"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
//mongoose paginate es una libreria de mongoose que nos ahorra la configuracion para la paginacion y la deja lista
// import MongoosePaginate from "mongoose-paginate-v2";
//EL esquema es para que mongoose sepa que datos estoy guardando

//la propiedad trim es de js y lo que hace es que elimina los espacios vacíos en los strings
var birdSchema = new _mongoose.Schema({
  main: {
    type: String,
    required: true,
    trim: true
  },
  full: {
    type: String,
    required: true,
    trim: true
  },
  thumbnail: {
    type: String,
    required: true,
    trim: true
  },
  spanish: {
    type: String,
    required: true,
    trim: true
  },
  english: {
    type: String,
    required: true,
    trim: true
  },
  latin: {
    type: String,
    required: true,
    trim: true
  },
  distribution: {
    type: String,
    required: true,
    trim: true
  },
  habitat: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  feeding: {
    type: String,
    required: true,
    trim: true
  },
  type: {
    type: String,
    required: true,
    trim: true
  }
}, {
  versionKey: false,
  timestamps: true
});

//model es para poder interactuar desde el cófigo como crear, leer, modificar, etc.
// birdSchema.plugin(MongoosePaginate);
var _default = (0, _mongoose.model)("Bird", birdSchema);
exports["default"] = _default;