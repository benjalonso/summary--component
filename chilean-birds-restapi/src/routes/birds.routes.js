//importar express y usamos router, definir nuestras rutas y que sea una para cada endpoint, así tendremos más orden
import { Router } from "express";
import Bird from "../models/Birds_models.js";
//así ejecutamos routes y conectamos nuestra variable a router
const router = Router();

//cuiando vallamos a la ruta birds quiero que respondar con un texto que diga 'Birds'
router.get("/birds", (req, res) => {
  res.send("Birds");
});

router.post("/add", async (req, res) => {
  const new_bird = new Bird({
    images: {
      main: req.body.main,
      full: req.body.full,
      thumbnail: req.body.thumbnail,
    },
    name: {
      spanish: req.body.spanish,
      english: req.body.english,
      latin: req.body.latin,
    },
    distribution: req.body.distribution,
    habitat: req.body.habitat,
    description: req.body.description,
    feeding: req.body.feeding,
  });
  await new_bird.save();
  console.log(new_bird);
  res.json("New bird added");
});

export default router;
