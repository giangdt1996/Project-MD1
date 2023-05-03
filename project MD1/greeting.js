const userLogin = JSON.parse(localStorage.getItem("user_login"));
let username = userLogin.name;
if (username) {
  var greeting = document.querySelector(".greeting");
  greeting.innerHTML = `<a href="/history/history.html" style="text-decoration:none;color:black">XIN CHÀO ${username}</a>`;
} else {
  var greeting = document.querySelector(".greeting");
  greeting.innerHTML = `<a id="btn-login-sigin" href="../login/login.html" class="loginout" target="_blank"><i class="fa-solid fa-circle-user"></i>ĐĂNG NHẬP/ĐĂNG KÝ</a>`;
}
