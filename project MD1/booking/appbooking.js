const movies = JSON.parse(localStorage.getItem("listMovies")) || [];
const movie = document.querySelector("#movie");
let form = document.querySelector("form");
for (i = 0; i < movies.length; i++) {
  movie.innerHTML += `<option value="${movies[i].title}">${movies[i].title}</option>`;
}
form.addEventListener("submit", (event) => {
  event.preventDefault();

  let date = document.querySelector("#date").value;

  // Kiểm tra ngày đặt vé có được nhập hay không
  if (date === "") {
    alert("Vui lòng chọn ngày đặt vé.");
    return;
  }
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let date = document.querySelector("#date").value;
    let seats = seatamount.length;

    // Kiểm tra ngày đặt vé có được nhập hay không
    if (date === "") {
      alert("Vui lòng chọn ngày đặt vé.");
      return;
    }

    // Kiểm tra số lượng ghế đặt có được nhập hay không
    // if (isNaN(seats) || seats <= 0) {
    //   alert("Vui lòng nhập số lượng ghế đặt hợp lệ.");
    //   return;
    // }

    // Nếu nhập đầy đủ thông tin, tiếp tục xử lý đặt vé
    let time = document.querySelector("#time").value;
    let theater = document.querySelector("#theater").value;
    let movie = document.querySelector("#movie").value;

    let booking = {
      movie,
      date,
      time,
      theater,
      seats,
    };

    localStorage.setItem("booking", JSON.stringify(booking));
    alert("Đã lưu thông tin đặt vé vào LocalStorage.");
    window.location.href = "/thanhtoan/thanhtoan.html";
  });

  // Kiểm tra số lượng ghế đặt có được nhập hay không
  // if (isNaN(seats) || seats <= 0) {
  //   alert("Vui lòng nhập số lượng vé cần đặt. !");
  //   return;
  // }

  // Nếu nhập đầy đủ thông tin, tiếp tục xử lý đặt vé
  let time = document.querySelector("#time").value;
  let theater = document.querySelector("#theater").value;
  let movie = document.querySelector("#movie").value;
  let seats = seatamount.length;
  let booking = {
    movie,
    date,
    time,
    theater,
    seats,
  };

  localStorage.setItem("booking", JSON.stringify(booking));
  alert("Đã lưu thông tin đặt vé");
  window.location.href = "/thanhtoan/thanhtoan.html";
});

//MODAL
let box = document.getElementById("box");
let ghe = document.getElementById("chosedseats");
let price = document.getElementById("price");
let total = document.getElementById("total");
let amount = document.getElementById("amount");
const boxData = JSON.parse(localStorage.getItem("boxData"));

// localStorage.setItem("boxData",JSON.stringify(boxData))

const boxElement = document.getElementById("box");

for (let i = 0; i < boxData.length; i++) {
  const rowElement = document.createElement("div");
  rowElement.className = "row" + (i + 1);
  for (let j = 0; j < boxData[i].length; j++) {
    const spanElement = document.createElement("span");
    spanElement.innerHTML = boxData[i][j];
    rowElement.appendChild(spanElement);
  }
  boxElement.appendChild(rowElement);
}

box.addEventListener("click", function (e) {
  seatamount = [];
  let mySpan = document.getElementsByClassName("mySpan");
  ghe.innerText = "  ";
  if (e.target.tagName === "SPAN") {
    // Chỉ xử lý khi click vào phần tử là thẻ span
    const targetSpan = e.target;
    if (targetSpan.classList.contains("mySpan")) {
      targetSpan.classList.remove("mySpan");

      for (let i = 0; i < mySpan.length; i++) {
        ghe.innerText += " " + mySpan[i].innerText;
        seatamount.push(ghe.innerText);
      }
      amount.innerHTML = `<b>Số lượng vé</b> ${seatamount.length}`;
    } else {
      targetSpan.classList.add("mySpan");
      for (let i = 0; i < mySpan.length; i++) {
        ghe.innerText += " " + mySpan[i].innerText;
        seatamount.push(ghe.innerText);
        console.log(seatamount);
        amount.innerHTML = `<b>Số lượng vé</b> ${seatamount.length}`;
        // selectedSeatsCount++;
      }
    }
  }
});
