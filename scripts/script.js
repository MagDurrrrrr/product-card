const firstCard = document.querySelector(".product-card");
const allCards = document.querySelectorAll(".product-card");
const openGoogleButton = document.querySelector("#open-google-button");
const googleURL = "https://www.google.com";
const outputMessageButton = document.querySelector("#output-message-button");
const toggleButton = document.querySelector(".toggle-button");

const changeColorFirstCardButton = document.querySelector(
  "#change-first-card-color-button",
);
const changeColorAllCardsButton = document.querySelector(
  "#change-all-card-color-button",
);

const mainTitle = document.querySelector(".products__title");

const blueColor = "blue";
const darkKhakiColor = "#BDB76B";

changeColorFirstCardButton.addEventListener("click", () => {
  firstCard.style.backgroundColor = blueColor;
});

changeColorAllCardsButton.addEventListener("click", () => {
  allCards.forEach((card) => {
    card.style.backgroundColor = darkKhakiColor;
  });
});

openGoogleButton.addEventListener("click", openGoogle);
outputMessageButton.addEventListener("click", () => {
  outputMessage("ПРОВЕРКА СВЯЗИ");
});
mainTitle.addEventListener("mouseover", () => {
  console.log(mainTitle.textContent);
});
toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("toggle-button_active");
});

function openGoogle() {
  const answer = confirm("Вы действительно хотите открыть Google?");

  if (answer === true) {
    window.open(googleURL);
  }
}

function outputMessage(message) {
  alert(message);
  console.log(message);
}
