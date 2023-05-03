const booking = JSON.parse(localStorage.getItem("booking"));
const user_login = JSON.parse(localStorage.getItem("user_login"));
const listUser = JSON.parse(localStorage.getItem("listUser"));
const detail = document.querySelector(".detail");
const info = document.querySelector(".info");
const history = document.querySelector(".history");
const detailinfo = document.querySelector(".detailinfo");
const invoice = document.querySelector(".invoice");
if (booking) {
  const theaterName = document.querySelector("#theater-name");
  const movieName = document.querySelector("#movie-name");
  const bookingDate = document.querySelector("#booking-date");
  const bookingTime = document.querySelector("#booking-time");
  const bookingSeats = document.querySelector("#booking-seats");
  const ticketPrice = document.querySelector("#ticket-price");
  const totalPrice = document.querySelector("#total-price");

  theaterName.textContent = "Rạp: " + booking.theater;
  movieName.textContent = booking.movie;
  bookingDate.textContent = booking.date;
  bookingTime.textContent = booking.time;
  bookingSeats.textContent = booking.seats;

  const ticketPriceValue = 80000;
  const ticketPriceFormatted = ticketPriceValue.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  ticketPrice.textContent = ticketPriceFormatted;

  const totalValue = booking.seats * ticketPriceValue;
  const totalValueFormatted = totalValue.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  totalPrice.innerHTML = `<b>TỔNG TIỀN THANH TOÁN: ${totalValueFormatted}</b>`;

  //   document.querySelector("#invoice-container").style.display = "block";
}

function renderUser() {
  detail.innerHTML = `      <div class="name"><b>Tên</b> </div>
  <div>${user_login.name}</div>
  <div ><b>Email</b> </div>
  <div class="mail">${user_login.email}</div>
  <div class="phone"><b>Số điện thoại</b> </div>
  <div>${user_login.phone}</div>
  <div class="address"><b>Địa chỉ</b> </div>
  <div>${user_login.address}</div>
  <button class="btn btn-primary btn-update">Thay đổi</button>`;
}
renderUser();
let mail = document.querySelector(".mail");
detail.onclick = function (e) {
  let email = mail.textContent;
  console.log(email);
  let findIndex = -1;
  for (let i = 0; i < listUser.length; i = i + 1) {
    if (listUser[i].email === email) {
      findIndex = i;
    }
  }
  if (findIndex != -1) {
    updateIndex = findIndex;
    let email = listUser[findIndex].email;

    if (e.target.classList.contains("btn-update")) {
      console.log("hjdsa");

      detail.innerHTML = `<div class="col-12">
    <label for="inputName" class="form-label">Name</label>
    <input type="text" class="form-control" id="inputName">
  </div>
  <div class="col-12">
  <div class="email">Email: ${email}</div>
  </div>
  <div class="col-12">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword">
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Địa chỉ</label>
    <input type="text" class="form-control" id="inputAddress">
  </div>
  <div class="col-12">
    <label for="inputDob" class="form-label">Ngày tháng năm sinh</label>
    <input type="date" class="form-control" id="inputDob" >
  </div>
  <div class="col-12 col-md-6">
    <label for="inputPhone" class="form-label">Số điện thoại</label>
    <input type="text" class="form-control" id="inputPhone">
  </div>
  <div class="col-md-6">
    <label for="inputgender" class="form-label">Giới tính</label>
    <select id="inputgender" class="form-select">
      <option selected>Chọn...</option>
      <option>Nam</option>
      <option>Nữ</option>
    </select>
    <button class="btn btn-info btn-confirm">Confirm</button>
                                <button class="btn btn-danger btn-cancel">Cancel</button>
  </div>`;
    }

    if (e.target.classList.contains("btn-confirm")) {
      // Get the updated movie data from the input fields

      let newname = document.getElementById("inputName").value;

      let newpassw = document.getElementById("inputPassword").value;
      let newaddress = document.getElementById("inputAddress").value;
      let newdob = document.getElementById("inputDob").value;
      let newphone = document.getElementById("inputPhone").value;
      let newgender = document.getElementById("inputgender").value;
      console.log(newname);
      listUser[updateIndex] = {
        ...listUser[updateIndex],
        name: newname,
        email: email,
        password: newpassw,
        address: newaddress,
        dob: newdob,
        phone: newphone,
        gender: newgender,
      };
      localStorage.setItem("listUser", JSON.stringify(listUser));
      alert("Thay đổi thành công! Vui lòng đăng nhập lại");
      window.location.href = "/login/login.html";
      // Update the movie data in the movies array
    }
    if (e.target.classList.contains("btn-cancel")) {
      let email = mail.textContent;

      let originalData;
      for (let i = 0; i < listUser.length; i = i + 1) {
        if (listUser[i].email === email) {
          originalData = listUser[i];
          break;
        }
      }
      detail.innerHTML = `      <div class="name"><b>Tên</b> </div>
  <div>${originalData.name}</div>
  <div class="email"><b>Email</b> </div>
  <div>${originalData.email}</div>
  <div class="phone"><b>Số điện thoại</b> </div>
  <div>${originalData.phone}</div>
  <div class="address"><b>Địa chỉ</b> </div>
  <div>${originalData.address}</div>
  <button class="btn btn-primary btn-update">Thay đổi</button>`;
    }
  }
};
info.addEventListener("click", function () {
  detailinfo.style.display = "block";
  info.style.backgroundColor = "red";
  info.style.color = "white";
  invoice.style.display = "none";
  history.style.backgroundColor = "grey";
  history.style.color = "black";
});
history.addEventListener("click", function () {
  detailinfo.style.display = "none";
  invoice.style.display = "block";
  info.style.backgroundColor = "grey";
  info.style.color = "black";
  history.style.backgroundColor = "red";
  history.style.color = "white";
});
