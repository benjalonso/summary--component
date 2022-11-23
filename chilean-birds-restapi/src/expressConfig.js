//es buena practica tener la configuración aparte de la inicialización del servidor para no acumular código

// para añadir sintaxis de js moderno, ecma scripot 6, osea import/from debemos añadir en package.json type:module

// index.js será el archivo para usar los modulos y ejecutar nuestra app
import express from "express";

//morgan nos irá dando mensajes por consola de las cosas que vallamos realizando
import morgan from "morgan";

//cors nos permite interactual entre servidores de distinto origen
import cors from "cors";
//importamos las rutas que hicimos en el otro archivo y así tener mayor orden. le podemos dar el nombre que queramos
import BirdsRoutes from "./routes/birds.routes.js";

// al llamar a express me devolverá un  objeto, que será mi servidor, tendrá los métodos, rutas y todo eso
const app = express();

//usamos el modulo set para definir la variable port y si modificamos el puerto, solo lo hacemos desde aquí.
app.set("port", process.env.PORT || 3000);
//
//middlewares
//
app.use(cors());
app.use(morgan("dev"));
//esto es para que nuestra aplicación pueda entender métodos json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Chilean Birds Rest API" });
});

//aquí usamos la ruta principal
app.use("/", BirdsRoutes);

export default app;
