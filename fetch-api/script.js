function getUsers() {
  fetch("https://randomuser.me/api/?results=3")
    .then((raw) => raw.json())
    .then((data) => {
      data.results.forEach(function (user) {
        // Create div
        let div = document.createElement("div");

        // Create article
        let article = document.createElement("article");

        article.className =
          "w-full max-w-sm rounded-2xl bg-white p-6 text-center shadow-lg";

        // Create img
        let img = document.createElement("img");

        img.className = "mx-auto h-24 w-24 rounded-full object-cover";
        img.src = user.picture.large;
        img.alt = "Portrait of Alex Morgan";

        // Create h1
        let h1 = document.createElement("h1");

        h1.className = "mt-4 text-xl font-bold";
        h1.textContent = user.name.first + " " + user.name.last;

        // Create p
        let p = document.createElement("p");

        p.className = "mt-1 text-sm text-slate-500";
        p.textContent = "Product Designer · New York";

        // Create button
        let button = document.createElement("button");

        button.className =
          "mt-5 w-full rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700";

        button.textContent = "View profile";

        //Put img, h1, p, button inside article
        article.appendChild(img);
        article.appendChild(h1);
        article.appendChild(p);
        article.appendChild(button);

        // Put article inside div
        div.appendChild(article);

        // Put div inside body
        document.querySelector(".main").appendChild(div);
      });
    });
}
