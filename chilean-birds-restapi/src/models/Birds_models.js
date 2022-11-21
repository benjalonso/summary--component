import { Schema, model } from "mongoose";
//mongoose paginate es una libreria de mongoose que nos ahorra la configuracion para la paginacion y la deja lista
import MongoosePaginate from "mongoose-paginate-v2";
//EL esquema es para que mongoose sepa que datos estoy guardando

//la propiedad trim es de js y lo que hace es que elimina los espacios vacíos en los strings
const birdSchema = new Schema(
  {
    main: {
      type: String,
      required: true,
      trim: true,
    },
    full: {
      type: String,
      required: true,
      trim: true,
    },
    thumbnail: {
      type: String,
      required: true,
      trim: true,
    },
    spanish: {
      type: String,
      required: true,
      trim: true,
    },
    english: {
      type: String,
      required: true,
      trim: true,
    },
    latin: {
      type: String,
      required: true,
      trim: true,
    },
    distribution: {
      type: String,
      required: true,
      trim: true,
    },
    habitat: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    feeding: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

//model es para poder interactuar desde el cófigo como crear, leer, modificar, etc.
birdSchema.plugin(MongoosePaginate);
export default model("Bird", birdSchema);
