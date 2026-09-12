function kuchDerBaadChalunga(fnc) {
  setTimeout(fnc, Math.floor(Math.random() * 10) * 1000);
}
kuchDerBaadChalunga(function () {
  console.log("hey");
});
