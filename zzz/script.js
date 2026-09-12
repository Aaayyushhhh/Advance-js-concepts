// prototypal inheritence
let coffee = {
  color: " dark",
  drink: function () {
    console.log("gu t gut gut");
  },
};
let starbucks = Object.create(coffee);
starbucks.drink();
