//es una buena práctica que las configuraciones de las variables de entorno las desarrollemos en un archivo aparte y desde auí llamamos a las variables de archivo .env para ser usadas en nuestro programa.

import {config} from "dotenv"
//usamos el modulo config para cargar las variables de entorno
config()
export default {
    mongodbURL: process.env.MONGODB_URI
}