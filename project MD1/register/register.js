const registerForm = document.querySelector(".register");

// localStorage.setItem("user_login", JSON.stringify({}));

registerForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Lấy giá trị của các trường input
  const name = document.getElementById("inputName").value;
  const email = document.getElementById("inputEmail4").value;
  const password = document.getElementById("inputPassword4").value;
  const address = document.getElementById("inputAddress").value;
  const dob = document.getElementById("inputDob").value;
  const phone = document.getElementById("inputCity").value;
  const gender = document.getElementById("inputState").value;
  const agreement = document.getElementById("gridCheck").checked;

  // Kiểm tra các trường input có đầy đủ thông tin
  if (
    !name ||
    !email ||
    !password ||
    !address ||
    !dob ||
    !phone ||
    !gender ||
    !agreement
  ) {
    alert("Vui lòng điền đầy đủ thông tin");
    return;
  }

  // Kiểm tra xem email đã được đăng ký trước đó chưa
  const listUser = JSON.parse(localStorage.getItem("listUser")) || [];

  const existingUser = listUser.find((user) => user.email === email);
  if (existingUser) {
    alert("Email đã được đăng ký trước đó");
    return;
  }

  // Tạo đối tượng user mới
  const user = {
    name,
    email,
    password,
    address,
    dob,
    phone,
    gender,
  };

  // Thêm user mới vào danh sách user
  const newUserList = listUser.concat(user);
  localStorage.setItem("listUser", JSON.stringify(newUserList));

  // Thông báo đăng ký thành công và chuyển hướng đến trang đăng nhập
  alert("Đăng ký thành công");
  window.location.href = "/login/login.html";
});
