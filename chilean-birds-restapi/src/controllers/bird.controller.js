import Bird from "../models/Birds_models.js";

export const getAllBirds = async (req, res) => {
  try {
    const page = req.query.page || 0;
    const limit = req.query.limit || 1;
    const name = req.query.name;
    const birds = await Bird.find(name && { spanish: name })
      .skip(page * limit)
      .limit(limit)
      const totalBirds = await Bird.find()
      .estimatedDocumentCount()
    //podemos personalizar la respuesta de birds creando un obj con la propiedades que necesitamos
    res.json({
      birds: birds,
      totalCount: totalBirds,
      totalPages: Math.trunc(totalBirds/limit)
    });
 
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something goes wrong",
    });
  }
};
//almacenamos el objeto en una constante y de manera asíncrona guardamos ese objeto en la base de datos con el método .save() y como despuesta enviamos un mensaje para dar aviso que el objeto se ha añadido a la base de dato.
export const createBird = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Content cannot be empty" });
  }
  try {
    const new_bird = new Bird({
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
      type: req.body.type,
    });
    const birdSaved = await new_bird.save();
    res.json(birdSaved);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something goes wrong",
    });
  }
};

export const getOneBird = async (req, res) => {
  const { id } = req.params;
  try {
    const bird = await Bird.findById(id);

    if (!bird)
      return res
        .status(404)
        .json({ message: `Task with id ${id} does not exist` });
    res.json(bird);
  } catch (error) {
    res.status(500).json({
      message: error.message || `Error retriving Bird with id ${id}`,
    });
  }
};
//se debe modificar para que al hacer click en el lado del cliente nos de el tipo y sea más dinámico
export const getByType = async (req, res) => {
  try {
    const birds = await Bird.find({ type: "Rapaz" });
    res.json(birds);
  } catch (error) {
    res.status(500).json({
      message: `Error retriving birds with type: RAPAZ`,
    });
  }
};

export const modifyBird = async (req, res) => {
  const { id } = req.params;
  try {
    const updateBird = await Bird.findByIdAndUpdate(id, req.body);
    res.json(`Ave ${id} actualizada`);
  } catch (error) {
    res.status(500).json({
      message: `Cannot modify bird with id: ${id}`,
    });
  }
};

export const deleteBird = async (req, res) => {
  const { id } = req.params;
  try {
    await Bird.findByIdAndDelete(id);
    res.json("Bird deleted successfully");
  } catch (error) {
    res.status(500).json({
      message: `Cannot delete bird with id: ${id}`,
    });
  }
};
