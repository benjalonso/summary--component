//esta funcion recibira un objeto del cliente y extrraera la info que necesitamos en relacion a las paginas y objetos por pagina que determinemos

export const getPagination = (page, size) => {
  const limit = size ? +size : 3;
  const offset = page ? page * limit : 0;
  return { limit, offset };
};
