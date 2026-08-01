// Задание №3. Объект на основе личных данных
const userProfile = {
  firstName: "Магомед",
  lastName: "Умаханов",
  age: 27,
  email: "magomed@dgu.ru",
  university: "Дагестанский государственный университет",
  country: "Россия",
  region: "Дагестан",
  city: "Махачкала",
  studyDirection: "Электроника и наноэлектроника",
};

// Задание №4. Объект с данными автомобиля
const car = {
  brand: "LiXiang",
  model: "L9 Livis",
  year: 2026,
  color: "Black",
  transmission: "Automatic",
};
car.owner = userProfile;
console.log(car);

// Задание №5. Добавление максимальной скорости
function addMaxSpeed(carObject) {
  if (!("maxSpeed" in carObject)) {
    console.log("Значение отсутствует");
    carObject.maxSpeed = 200;
    console.log("Добавлено значение максимальная скорость");
  }
}
addMaxSpeed(car);
addMaxSpeed(car);
console.log(car);

// Задание №6. Объект и его свойство
function showObjectProperty(object, property) {
  console.log(object[property]);
}
showObjectProperty(car, "model");
showObjectProperty(car, "color");
showObjectProperty(userProfile, "age");

// Задание №7. Названия продуктов
const products = [
  "Хлеб",
  "Сыр",
  "Молоко",
  "Яблоки",
  "Пончики",
];

// Задание №8. Список книг
const books = [
  {
    title: "1984",
    author: "Джордж Оруэлл",
    year: 1949,
    coverColor: "Желтый",
    genre: "Антиутопия",
  },
  {
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    year: 1967,
    coverColor: "Черный",
    genre: "Роман",
  },
  {
    title: "Успешный трейдинг на фондовом рынке",
    author: "Дмитрий Михнов",
    year: 2021,
    coverColor: "Черный",
    genre: "Финансы и инвестиции",
  },
  {
    title: "Богатый папа, бедный папа",
    author: "Роберт Кийосаки",
    year: 1997,
    coverColor: "Фиолетовый",
    genre: "Финансовая грамотность",
  },
];
books.push({
  title: "Атомные привычки",
  author: "Джеймс Клир",
  year: 2018,
  coverColor: "Белый",
  genre: "Саморазвитие",
});
console.log(books);

// Задание №9. Объединение двух массивов книг
const stephenKingBooks = [
  {
    title: "Оно",
    author: "Стивен Кинг",
    year: 1986,
    coverColor: "Черный",
    genre: "Ужасы",
  },
  {
    title: "Сияние",
    author: "Стивен Кинг",
    year: 1977,
    coverColor: "Красный",
    genre: "Ужасы",
  },
  {
    title: "Темная Башня: Стрелок",
    author: "Стивен Кинг",
    year: 1982,
    coverColor: "Темно-синий",
    genre: "Темное фэнтези",
  },
];
const allBooks = [...books, ...stephenKingBooks];
console.log(allBooks);

// Задание №10. Добавление свойства isRare
function addRarityProperty(booksArray) {
  return booksArray.map(function (book) {
    return {
      ...book,
      isRare: book.year > 2000,
    };
  });
}
const booksWithRare = addRarityProperty(allBooks);
console.log(booksWithRare);