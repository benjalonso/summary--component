//importar express y usamos router, definir nuestras rutas y que sea una para cada endpoint, así tendremos más orden
import { Router } from "express";
import * as BirdsController from "../controllers/bird.controller.js";
//así ejecutamos routes y conectamos nuestra variable a router
const router = Router();

//cuiando vallamos a la ruta birds quiero que respondar con un texto que diga 'Birds'
router.get("/birds", BirdsController.getAllBirds);

router.get("/bird/:id", BirdsController.getOneBird);

router.get("/type", BirdsController.getByType);

router.post("/add", BirdsController.createBird);

router.delete("/:id", BirdsController.deleteBird);

router.put("/:id", BirdsController.modifyBird);

export default router;
