function profileLekar(username, cb) {
  setTimeout(() => {
    cb({ _id: 2323, username, age: 26 });
  }, 3000);
}
function saarePostleakarAao(id, cb) {
  setTimeout(() => {
    cb({ _id: id, posts: ["hey", "hello"] });
  }, 4000);
}
function saareSavedpost(id, cb) {
  setTimeout(() => {
    cb({ _id: id, saved: ["aunty deat video", "How to drink water"] });
  }, 5000);
}
profileLekar("harsh", function (data) {
  console.log(data);
  saarePostleakarAao(data._id, function (posts) {
    console.log(posts);
    saareSavedpost(data._id, function (saved) {
      //callback hell
      console.log(saved);
    });
  });
});
