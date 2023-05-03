document.addEventListener("DOMContentLoaded", function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    responsiveClass: true,
    item: 4,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 4,
        nav: true,
        loop: false,
      },
    },
    slideBy: 1,
  });
});

let eventnew = document.getElementById("event-new");

let coupon = document.getElementsByClassName("uudai");

let offer = document.querySelector(".none");

let member = document.querySelector(".member");
let finright = document.querySelector("#finright");
let finleft = document.querySelector("#finleft");

let movieselec = document.querySelector(".movieselec");
const movies = JSON.parse(localStorage.getItem("listMovies"));

const pdetail = document.querySelector(".pdetail");

const detailnew = document.querySelector(".newdetail");
let newMovie = {};
const movieContent = document.getElementById("moviecontent");
let chitietPhim = document.querySelector(".chitietPhim");
let content = document.querySelector(".content");
console.log(member);
window.addEventListener("load", () => {
  offer.style.display = "none ";
});
eventnew.onclick = function (e) {
  if (e.target.classList.contains("uudai")) {
    member.style.display = "none";
    offer.style.display = "block";
    finleft.style.display = "none";
    finright.style.display = "inline";
    console.log("haha");
  }
  if (e.target.classList.contains("thanhviencgv")) {
    member.style.display = "block";
    offer.style.display = "none ";
    finleft.style.display = "inline";
    finright.style.display = "none";
    console.log("hihi");
  }
};

console.log(movies);
movieselec.innerHTML = "";
let check = -1;
for (let i = 0; i < movies.length; i++) {
  check = i;
  movieselec.innerHTML =
    movieselec.innerHTML +
    ` <div class="item"> 
  <div>
    <img src="${movies[i].posterUrl}" alt="">
    <div class="overlay">
      <button class="btndetail" id="${movies[i].id}">Xem chi tiết</button>
    </div>
  </div>`;
}
movieselec.onclick = function (e) {
  e.preventDefault();
  for (let key in movies) {
    if (e.target.getAttribute("id") == movies[key].id) {
      localStorage.setItem("id", JSON.stringify(movies[key]));
      window.location.href = `/hompage/detail.html`;
    }
  }
};
