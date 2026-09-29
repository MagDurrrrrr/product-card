import { products } from "./products.js";

function createProductCard(product) {
  return `
  <article class="product-card">
    <img
      class="product-card__image"
      src="${product.image}"
      alt="${product.title}"
    />
    <p class="product-card__category">${product.category}</p>
    <h2 class="product-card__title">${product.title}</h2>
    <p class="product-card__description">
      ${product.description}
    </p>
    <p class="product-card__subtitle">Состав:</p>
    <ul class="product-card__list">
      ${product.composition
        .map(function (item) {
          return `<li class="product-card__list-item">${item}</li>`;
        })
        .join("")}
    </ul>
    <div class="product-card__footer">
      <span class="product-card__price-label">Цена</span>
      <span class="product-card__price">${product.price} &#8381;</span>
    </div>
  </article>
  `;
}

const productsList = document.querySelector(".products__list");
// const productCards = products.map(function (product) {
//   return createProductCard(product);
// });
// const productCardHTML = productCards.join("");
// productsList.innerHTML = productCardHTML;

const result = products.reduce(function (accumulator, product) {
  accumulator.push({
    [product.title]: product.description,
  });
  return accumulator
}, []);

console.log(result);

function getCardCount() {
  const answer = prompt("Сколько карточек отобразить? От 1 до 5");
  const count = Number(answer);

  if (Number.isInteger(count) && count>=1 && count<=5) {
    return count;
  } else {
    alert("Введите число от 1 до 5");
    return getCardCount();
  }
}

function renderCards(productsArray) {
  const count = getCardCount();
  const selectedProducts = productsArray.slice(0, count);
  const productCards = selectedProducts.map(function (product) {
    return createProductCard(product);
  });
  const productCardsHTML = productCards.join("");
  productsList.innerHTML = productCardsHTML;
}

renderCards(products);