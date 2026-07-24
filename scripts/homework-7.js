const SPEED_OF_LIGHT = 299792458;
const productName = "Samsung Galaxy S27 Ultra";
const productPrice = 1200;
const serverName = "google-dns";
const ipAddress = "8.8.8.8";
const userCount = 1500000;

function showCurrentTemperature(city, temperature) {
  console.log(
    `Сейчас в ${city} температура — ${temperature} градусов по Цельсию`,
  );
}
showCurrentTemperature("Махачкале", 35);

function checkSpeed(speed) {
  if (speed > SPEED_OF_LIGHT) {
    console.log("Сверхсветовая скорость");
  } else if (speed < SPEED_OF_LIGHT) {
    console.log("Субсветовая скорость");
  } else {
    console.log("Скорость света");
  }
}

checkSpeed(300000000);
checkSpeed(200000000);
checkSpeed(299792458);

function buyProduct(currentBudget) {
  if (currentBudget >= productPrice) {
    console.log(`${productName} приобретен!`);
  } else {
    console.log(
      `Вам не хватает ${productPrice - currentBudget}$, пополните баланс`,
    );
  }
}
buyProduct(1200);
buyProduct(500);

function showServerInfo(serverName, ipAddress, userCount) {
  console.log(
    `Сервер ${serverName} имеет ${ipAddress}. Активных пользователей ${userCount}`,
  );
}
showServerInfo(serverName, ipAddress, userCount);
