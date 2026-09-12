let pr = new Promise(function (res, rej) {
  setTimeout(() => {
    let rn = Math.floor(Math.random() * 10);
    if (rn > 5) {
      res(rn);
    } else {
      rej(rn);
    }
  }, 3000);
});
pr.then(function (val) {
  console.log(val);
}).catch(function (val) {
  console.log(val);
});
