"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPagination = void 0;
//esta funcion recibira un objeto del cliente y extrraera la info que necesitamos en relacion a las paginas y objetos por pagina que determinemos

var getPagination = function getPagination(page, size) {
  var limit = size ? +size : 3;
  var offset = page ? page * limit : 0;
  return {
    limit: limit,
    offset: offset
  };
};
exports.getPagination = getPagination;