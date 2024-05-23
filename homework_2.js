"use strict";

// Задание 1

// class Library {
//   #books = [];
//   constructor(initialBooks) {
//     if (!Array.isArray(initialBooks)) {
//       throw new Error(
//         "Начальный список книг должен быть предоставлен в виде массива."
//       );
//     }

//     const uniqueBooks = new Set(initialBooks);
//     if (uniqueBooks.size !== initialBooks.length) {
//       throw new Error("Начальный список книг не может содержать дубликатов.");
//     }

//     this.#books = initialBooks;
//   }

//   get allBooks() {
//     return this.#books;
//   }

//   addBook(title) {
//     if (this.#books.includes(title)) {
//       throw new Error("Эта книга уже существует в библиотеке.");
//     }

//     this.#books.push(title);
//   }

//   removeBook(title) {
//     const index = this.#books.indexOf(title);
//     if (index === -1) {
//       throw new Error("Такой книги нет в библиотеке.");
//     }

//     this.#books.splice(index, 1);
//   }

//   hasBook(title) {
//     return this.#books.includes(title);
//   }
// }

// const myLibrary = new Library(["Книга 1", "Книга 2", "Книга 3"]);

// console.log(myLibrary.allBooks);

// myLibrary.addBook("Книга 4");
// console.log(myLibrary.allBooks);

// myLibrary.removeBook("Книга 2");
// console.log(myLibrary.allBooks);
// myLibrary.removeBook("Книга 5");
// console.log(myLibrary.allBooks);

// console.log(myLibrary.hasBook("Книга 1"));
// console.log(myLibrary.hasBook("Книга 2"));

// Задание 2

// const initialData = [
//     {
//       product: "Apple iPhone 13",
//       reviews: [
//         {
//           id: "1",
//           text: "Отличный телефон! Батарея держится долго.",
//         },
//         {
//           id: "2",
//           text: "Камера супер, фото выглядят просто потрясающе.",
//         },
//       ],
//     },
//     {
//       product: "Samsung Galaxy Z Fold 3",
//       reviews: [
//         {
//           id: "3",
//           text: "Интересный дизайн, но дорогой.",
//         },
//       ],
//     },
//     {
//       product: "Sony PlayStation 5",
//       reviews: [
//         {
//           id: "4",
//           text: "Люблю играть на PS5, графика на высоте.",
//         },
//       ],
//     },
//   ];

//   const userInput = document.querySelector('.user_input');
//   const sendBtn = document.querySelector('.send_btn');
//   const reviews = document.querySelector('.reviews');
//   const divError = document.querySelector('.error_msg');

//   initialData.forEach(element => {
//       const productName = document.createElement('h3');
//       productName.textContent = element.product;
//       reviews.appendChild(productName);
//       element.reviews.forEach(review => {
//           const defaultReview = document.createElement('p');
//           defaultReview.textContent = review.text;
//           reviews.appendChild(defaultReview);
//       });
//   });

//   sendBtn.addEventListener('click', function () {
//       try {
//           if (userInput.value.trim().length < 20 || userInput.value.trim().length > 500) {
//               throw new Error ('Несоответствующая длина текста')
//           }
//           const reviewElem = document.createElement('p');
//           reviewElem.textContent = (userInput.value);
//           reviews.appendChild(reviewElem);
//           divError.textContent = '';
//       } catch (error) {
//           divError.textContent = error.message;
//       }
//   });
