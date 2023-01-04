//  Las constantes que llevan $ son elementos del DOM que se encuentran en el HTML y que se utilizan en el JS

const $products = document.getElementById("products");
const $cardTemplate = document.getElementById("cardTemplate").content;
const $cartTemplate = document.getElementById("cartTemplate").content;
const $footerTemplate = document.getElementById("footerTemplate").content;
const $cartBody = document.getElementById("cartBody");
const $cardFooter = document.getElementById("cardFooter");
const $fragment = document.createDocumentFragment();
const $buscador = document.getElementById("buscador");
const $anterior = document.getElementById("anterior");
const $siguiente = document.getElementById("siguiente");
const $energetica = document.getElementById("energetica");
const $pisco = document.getElementById("pisco");
const $ron = document.getElementById("ron");
const $bebida = document.getElementById("bebida");
const $snack = document.getElementById("snack");
const $cerveza = document.getElementById("cerveza");
const $vodka = document.getElementById("vodka");
const $titulo = document.getElementById("titulo");
const $badgeCart = document.getElementById("badgeCart");
const $actual = document.getElementById("actual");
let catalogo = [];
let page = 0;
let cart = [];

//  Evento que al cargar la pagina ejecutara la funcion fetchData para mostrar los productos en la interfaz de usuario
window.onload = function () {
  fetchData(page);
  $actual.textContent = page;
};

// Funcion que filtra los productos por busqueda y los muestra en la interfaz de usuario
const filterItems = (ev) => {
  ev.preventDefault();
  ev.target.value
    ? fetchDataBySearching(ev.target.value, page)
    : fetchData(page);
  $buscador.textContent = "";
};

// Funcion que muestra los productos en la interfaz de usuario
const showProducts = (data) => {
  $products.innerHTML = "";

  data.rows.map((product) => {
    if (product.url_image === "" || product.url_image === null) {
      product.url_image =
        "https://plantillasdememes.com/img/plantillas/imagen-no-disponible01601774755.jpg";
    }
    $cardTemplate.querySelector("h2").textContent = product.id;
    $cardTemplate.querySelector("h5").textContent = product.name;
    $cardTemplate.querySelector("span").textContent = product.price;
    $cardTemplate.querySelector("img").setAttribute("src", product.url_image);
    $cardTemplate.querySelector("h3").textContent = product.category;
    const clone = $cardTemplate.cloneNode(true);
    $fragment.appendChild(clone);
  });
  $products.appendChild($fragment);
};

// Funcion que traera los productos de la api y ejecutara la funcion showProducts para mostrarlos en la interfaz de usuario
const fetchData = async (page = { page }) => {
  try {
    const response = await fetch(
      `https://vanilla-catalogo-backend-production.up.railway.app/products?page=${page}`
    );
    const data = await response.json();
    catalogo = data;
    showProducts(catalogo);
    // console.log(catalogo);
  } catch (error) {
    console.log(error);
  }
};

// Funcion que trae los productos por busqueda desde la api segun el parametro que se le pase directamente desde el input de busqueda
const fetchDataBySearching = async (name, page = { page }) => {
  try {
    const response = await fetch(
      `https://servidorcatalogobsal3.herokuapp.com/productsBySearchBar?page=${page}&name=${name}`
    );
    const data = await response.json();
    catalogo = data;
    // console.log(catalogo);
    showProducts(catalogo);
  } catch (error) {
    console.log(error);
  }
};

//  Funcion que muestra productos por categorias segun el parametro que se le pase desde el boton de la categoria correspondiente
const fetchDataByCategory = async (category, page = { page }) => {
  try {
    const response = await fetch(
      `https://servidorcatalogobsal3.herokuapp.com/productsByCategory?page=${page}&category=${category}`
    );
    const data = await response.json();
    catalogo = data;
    showProducts(catalogo);
  } catch (error) {
    console.log(error);
  }
};

//  Funcion que muestra productos que hay actualmente en el carrito
const showCart = () => {
  $cartBody.innerHTML = "";
  cart.map((product) => {
    $cartTemplate.querySelector("th").textContent = product.id;
    $cartTemplate.querySelectorAll("td")[0].textContent = product.name;
    $cartTemplate.querySelectorAll("td")[1].textContent = product.quantity;
    $cartTemplate.querySelector("span").textContent =
      product.quantity * product.price;
    $cartTemplate.querySelector(".btn-info").dataset.id = product.id;
    $cartTemplate.querySelector(".btn-danger").dataset.id = product.id;

    const clone = $cartTemplate.cloneNode(true);
    $fragment.appendChild(clone);
  });
  $cartBody.appendChild($fragment);
  showFooter();
};

//  Funcion que muestra un resumen del carrito y si esta vacio muestra un mensaje de que esta vacio
const showFooter = () => {
  $cardFooter.innerHTML = "";
  $badgeCart.textContent = "";
  if (cart.length === 0) {
    $cardFooter.innerHTML = `<th scope="row" colspan="5">Añade productos a tu carro!</th>`;
    return;
  }
  const nQuantity = cart.reduce(
    (acumulador, el) => acumulador + el.quantity,
    0
  );
  const nPrice = cart.reduce(
    (acumulador, el) => acumulador + el.quantity * el.price,
    0
  );
  $badgeCart.textContent = nQuantity;
  $footerTemplate.querySelector("td").textContent = nQuantity;
  $footerTemplate.querySelector("span").textContent = nPrice;

  const clone = $footerTemplate.cloneNode(true);
  $fragment.appendChild(clone);
  $cardFooter.appendChild($fragment);
  const $cleanCart = document.getElementById("cleanCart");
  $cleanCart.addEventListener("click", () => {
    cart = [];
    showCart();
  });
};

//  Funcion que ejecuta el adicion de productos al carrito, pasando el objeto a ser añadido como parametro
const addToCart = (e) => {
  if (e.target.classList.contains("addButton")) {
    setCart(e.target.parentElement);
  }
  e.stopPropagation(); // Evita que se propague el evento al padre
};

const setCart = (obj) => {
  const product = {
    id: parseInt(obj.querySelector("h2").textContent),
    name: obj.querySelector("h5").textContent,
    price: obj.querySelector("span").textContent,
    quantity: 1,
  };
  if (cart.hasOwnProperty(product.id)) {
    product.quantity = cart[product.id].quantity + 1;
  }
  cart[product.id] = { ...product };
  showCart();
};

//  Funcion que ejecuta la eliminacion o adicion de productos del carrito segun el boton presionado y el id del producto y actualiza el carrito cada vez que se presiona un boton
const btnActions = (e) => {
  if (e.target.classList.contains("btn-info")) {
    const product = cart[e.target.dataset.id];
    product.quantity++;
    cart[e.target.dataset.id] = { ...product };
    showCart();
  } else if (e.target.classList.contains("btn-danger")) {
    const product = cart[e.target.dataset.id];
    product.quantity--;
    if (product.quantity === 0) {
      delete cart[e.target.dataset.id];
    }
    showCart();
  }
  e.stopPropagation();
};

//  Evento que escucha el boton de adicion o eliminacion de productos del carrito
$cartBody.addEventListener("click", (e) => {
  btnActions(e);
});

//  Evento que ejecuta la funcion de busqueda de productos por nombre y actualiza el catalogo
$buscador.addEventListener("keyup", (e) => {
  e.preventDefault();
  if (e.code === "Enter") {
    filterItems(e);
  }
});

//  Eventos que ejecutan la funcion de busqueda de productos por categoria y actualiza el catalogo segun la categoria pasada como parametro
$energetica.addEventListener("click", () => {
  fetchDataByCategory(1, page);
  page = 0;
  $actual.textContent = page;
});
$pisco.addEventListener("click", () => {
  fetchDataByCategory(2, page);
  page = 0;
  $actual.textContent = page;
});
$ron.addEventListener("click", () => {
  fetchDataByCategory(3, page);
  page = 0;
  $actual.textContent = page;
});
$bebida.addEventListener("click", () => {
  fetchDataByCategory(4, page);
  page = 0;
  $actual.textContent = page;
});
$snack.addEventListener("click", () => {
  fetchDataByCategory(5, page);
  page = 0;
  $actual.textContent = page;
});
$cerveza.addEventListener("click", () => {
  fetchDataByCategory(6, page);
  page = 0;
  $actual.textContent = page;
});
$vodka.addEventListener("click", () => {
  fetchDataByCategory(7, page);
  page = 0;
  $actual.textContent = page;
});

//  Eventos que realizan la paginacion de los productos
$siguiente.addEventListener("click", () => {
  let limit = Math.trunc(catalogo.count / 8);
  if (page < limit) {
    page++;
    fetchData(page);
    $actual.textContent = page;
  }
});

$anterior.addEventListener("click", () => {
  if (page !== 0) {
    page--;
    fetchData(page);
    $actual.textContent = page;
  }
});

//  Evento que despliega todos los productos del catalogo al hacer click en el titulo
$titulo.addEventListener("click", () => {
  fetchData(page);
  page = 0;
  $actual.textContent = page;
});

//  Evento que agrega los productos al carrito al hacer click en el boton de añadir
$products.addEventListener("click", (e) => {
  addToCart(e);
});
