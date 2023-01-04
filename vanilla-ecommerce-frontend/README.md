## Catalogo Vanilla JS

_Interfaz visual básica con tematica de ecommerce realizada en Vanilla JS con la finalidad de consumir una api desarrollada en otro repositorio y alojada en los servicion de Heroku. La interfaz de usuario entrega de manera sencilla la visualización de los productos traidos de la api y tiene las siguientes funciones:_

- Paginacion
- Carro de compras 
- Categorias 
- Filtro de busqueda

[Demo del proyecto](https://golden-crostata-9b063f.netlify.app/)

## Deploy

Para ejecutar el proyecto es necesario installar los paquetes de las dependecias y construcción de la carpeta dist, por lo que se deben ejecutar los siguiente comandos:

```bash

npm install
npm run build
npm run preview

```

## Estructura del proyecto

La estructura del proyecto se realizó de manena sencilla al se un ejercicio sin tanto código, donde encontraremos el archivo de configuracion **package.json** con todos los comandos y modulos para instalar. Además el proyecto fue desarrollado con la herrmienta de compilación Vitejs,  por lo que tenemos una pequeña configuración en el archivo **vite.config.js**. Finalemente tenemos la carpeta **src** que es donde está alojado todo el código, que se divide en 3 secciones, donde en la primera está la estructura en el archivo **index.html**, en la carpeta **css** está el archivo de estilos **index.css**, que no contiene mucho debido a que casi la totalidad del proyecto se realizó con Bootstrap 5 para agilizar el desarrollo y enfocarnos de lleno a la funcionalidad del sitio, lo que nos deja con la carpeta **js**, que es donde está el archivo **main.js** que contiene todas las funciones, listeners y lo necesario para la interactividad del sitio. Cabe recalcar que en el archivo de Javascript hay comentarios para cada fragmento de código y así simplificar su entendimiento.

```bash
.
├── package.json
├── vite.config.js
├── README.md
└── src
    ├── css
    │   └── index.css
    ├── js
    │   └── main.js
    └── index.html

3 directories, 6 files
```