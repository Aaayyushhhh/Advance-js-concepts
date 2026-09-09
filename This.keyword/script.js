// //method ke andar
// let obj = {
//   name: "harsh",
//   sayName: function () {
//     console.log(this);
//   },
// };
// obj.sayName();
// // event handler
// document.querySelector("h1").addEventListener("click", function () {
//   console.log(this);
// });
// //class ke andar
// class Abcd {
//   constructor() {
//     console.log("heeh");
//     this.a = 12;
//   }
// }
// let val = new Abcd();
// // this in global scope and fucntion value is always a window

//call apply and binf
// let obj = {
//   name: "harsh",
// };

// function abcd() {
//   console.log(this);
// }
// abcd.call(obj);

// let obj = {
//   names: "harsh",
//   age: 12,
// };
// function abcd(a, b, c) {
//   console.log(this, a, b, c);
// }
// abcd.apply(obj, [1, 2, 3]);
//example for apply

// let obj = {
//   names: "harsh",
//   age: 12,
// };
// function abcd(a, b, c) {
//   console.log(this, a, b, c);
// }
// let fnc = abcd.bind(obj, 1, 2, 3);
// fnc();
//example for bind
