import { comments } from "./comments.js";

// Задание №2. Фильтрация от 5 и далее
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredNumbers = numbers.filter(function (number) {
  return number >= 5;
});

console.log(filteredNumbers);

// Задание №3. Проверка наличия элемента в массиве
const kitchenAppliances = [
  "Блендер",
  "Чайник",
  "Микроволновка",
  "Посудомойка",
  "Вытяжка",
];

const hasToaster = kitchenAppliances.includes("Тостер");
console.log(hasToaster);

const hasKettle = kitchenAppliances.includes("Чайник");
console.log(hasKettle);

// Задание №4. Изменение порядка элементов массива на противоположный
function reverseArray(array) {
  array.reverse();
}

reverseArray(numbers);
reverseArray(kitchenAppliances);

console.log(numbers);
console.log(kitchenAppliances);

// Задание №7. Фильтрация комментариев по электронной почте
const commentsWithComEmail = comments.filter(function (comment) {
  return comment.email.includes(".com");
});

console.log(commentsWithComEmail);

// Задание №8. Изменение postId
const commentsWithNewPostId = comments.map(function (comment) {
  return {
    ...comment,
    postId: comment.id <= 5 ? 2 : 1,
  };
});

console.log(commentsWithNewPostId);

// Задание №9. Перебор массива
const arrayWithIdAndName = comments.map(function (comment) {
  return {
    id: comment.id,
    name: comment.name,
  };
});

console.log(arrayWithIdAndName);

// Задание №10. Свойство isInvalid
const validatedComments = comments.map(function (comment) {
  return {
    ...comment,
    isInvalid: comment.body.length > 180,
  };
});

console.log(validatedComments);

// Задание №11. reduce и map
const emailsWithMap = comments.map(function (comment) {
  return comment.email;
});

console.log(emailsWithMap);

const emailsWithReduce = comments.reduce(function (emails, comment) {
  emails.push(comment.email);

  return emails;
}, []);

console.log(emailsWithReduce);

// Задание №12. Преобразование массива почт в строку
const emailsStringWithToString = emailsWithReduce.toString();

console.log(emailsStringWithToString);

const emailsStringWithJoin = emailsWithReduce.join(", ");

console.log(emailsStringWithJoin);