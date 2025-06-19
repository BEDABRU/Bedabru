const products = [
  { name: "Amigurumi Conejo", price: 20000, image: "images/prod1.jpg" },
  { name: "Bolso de Mano", price: 35000, image: "images/prod2.jpg" },
  { name: "Monedero Flor", price: 15000, image: "images/prod3.jpg" }
];

const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

let cart = [];

function renderProducts() {
  products.forEach((product, index) => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="\${product.image}" alt="\${product.name}" />
      <h3>\${product.name}</h3>
      <p>Precio: $ \${product.price}</p>
      <button onclick="addToCart(\${index})">Añadir al carrito</button>
      <a href='https://wa.me/5700000000000?text=Hola!%20Quiero%20comprar%20\${encodeURIComponent(product.name)}' target='_blank'>
        <button>Comprar por WhatsApp</button>
      </a>
    `;
    productList.appendChild(div);
  });
}

function addToCart(index) {
  cart.push(products[index]);
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `🧶 \${item.name} - $ \${item.price}`;
    cartItems.appendChild(li);
    total += item.price;
  });
  cartTotal.textContent = total;
}

function clearCart() {
  cart = [];
  updateCart();
}

renderProducts();
