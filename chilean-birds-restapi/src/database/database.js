import  config  from "../config.js";
import mongoose from "mongoose";

//metodo conect nos sirve para conectar la base de datos, dejando el protocolo que sería en este caso mongodb, luego dejamos el servidor que en este caso sería localhost y luego el nombre de la base de datos, que en caso de no existir la crea automáticamente.


//no es una buena práctica dejar las direcciones, contraseñas o cualquier api token dentro del código, entonces usamos variables de entorno que dejamos en nuestro archivo .env
(async () => {
  const db = await mongoose.connect(config.mongodbURL);
  console.log("Database is connected to: ", db.connection.name);
})();
