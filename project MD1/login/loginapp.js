let btnIn = document.getElementById("in");
let btnReg = document.getElementById("reg");
let login = document.getElementsByClassName("login");
let register = document.getElementsByClassName("register");
// console.log(form);

btnIn.onclick = function () {
  register.style.display = "none";
};
btnReg.onclick = function () {
  login.style.display = "none";
  register.style.display = "block";
};
const admin = JSON.parse(localStorage.getItem("admin"));
localStorage.setItem("admin", JSON.stringify(admin));
function handleLoginForm() {
  const mail = document.querySelector("#floatingInput").value;
  console.log(mail);
  const password = document.querySelector("#floatingPassword").value;
  console.log(password);
  const listUser = JSON.parse(localStorage.getItem("listUser")) || [];

  // const user = { mail: "mamcoi", password: "mamcoi123" };
  // listUser.push(user);
  // localStorage.setItem("listUser", JSON.stringify(listUser));
  let users = -1;
  for (let i = 0; i < listUser.length; i++) {
    users = listUser[i];
  }
  if (mail === admin.mail && password === admin.password) {
    console.log("haha");
    window.location.href = "/admin/admin.html";
  }
  if (mail === users.email && password === users.password) {
    localStorage.setItem("user_login", JSON.stringify(users));
    window.location.href = "/hompage/user.html";
  }
}

const form = document.getElementById("login");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  handleLoginForm();
});
