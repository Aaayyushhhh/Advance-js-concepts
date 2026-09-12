class User {
  constructor(name, address, username, email, role) {
    this.name = name;
    this.address = address;
    this.username = username;
    this.email = email;
    this.role = "user";
  }
  checkRole() {
    console.log(` you are a ${this.role}`);
  }
  write(text) {
    let h1 = document.createElement("h1");
    h1.textContent = `${this.name}:${text}`;
    document.body.appendChild(h1);
  }
}

class Admin extends User {
  constructor(name, address, username, email) {
    super(name, address, username, email);
    this.role = "Admin";
  }

  remove() {
    document.querySelectorAll("h1").forEach(function (elem) {
      elem.remove();
    });
  }
}
let u1 = new User("aayush", "uk", "aayush007", "aayushrana3043@gmail.com");

let u2 = new User(
  "aayushiiiii",
  "AUS",
  "aayushIIII007",
  "aayushrana@gmail.com",
);
let admin = new Admin("bhenekalund", "up", "sexymanager009", "SUA@gmail.com");
