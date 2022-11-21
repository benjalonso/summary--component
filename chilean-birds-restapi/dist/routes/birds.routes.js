"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var BirdsController = _interopRequireWildcard(require("../controllers/bird.controller.js"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
//importar express y usamos router, definir nuestras rutas y que sea una para cada endpoint, así tendremos más orden

//así ejecutamos routes y conectamos nuestra variable a router
var router = (0, _express.Router)();

//cuiando vallamos a la ruta birds quiero que respondar con un texto que diga 'Birds'
router.get("/birds", BirdsController.getAllBirds);
router.get("/bird/:id", BirdsController.getOneBird);
router.get("/type", BirdsController.getByType);
router.post("/add", BirdsController.createBird);
router["delete"]("/:id", BirdsController.deleteBird);
router.put("/:id", BirdsController.modifyBird);
var _default = router;
exports["default"] = _default;