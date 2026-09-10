let form = document.querySelector("form");
let username = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photo = document.querySelector("#photo");
const userManager = {
  users: [],
  init: function () {
    form.addEventListener("submit", this.submitForm.bind(this));
  },
  submitForm: function (evn) {
    evn.preventDefault();
    this.addUser();
  },

  addUser: function () {
    this.users.push({
      username: username.value,
      role: role.value,
      bio: bio.value,
      photo: photo.value,
    });
    form.reset();
    this.renderUi();
  },
  renderUi: function (user) {
    document.querySelector(".users").innerHTML = "";
    this.users.forEach(function (user) {
      let card = document.createElement("div");
      card.className =
        "inline-block bg-white/90 backdrop-blur rounded-2xl shadow-xl p-4 flex flex-col items-center";

      let img = document.createElement("img");
      img.className =
        "w-28 h-28 rounded-full object-cover mb-5 border-4 border-blue-200 shadow";
      img.src = user.photo;
      img.alt = "User Photo";

      let h2 = document.createElement("h2");
      h2.className = "text-2xl font-bold mb-1 text-blue-700";
      h2.textContent = user.username;

      let role = document.createElement("p");
      role.className = "text-purple-500 mb-2 font-medium";
      role.textContent = user.role;

      let bio = document.createElement("p");
      bio.className = "text-gray-700 text-center";
      bio.textContent = user.bio;

      card.appendChild(img);
      card.appendChild(h2);
      card.appendChild(role);
      card.appendChild(bio);

      document.querySelector(".users").appendChild(card);
    });
  },
  removeUser: function () {},
};
userManager.init();
