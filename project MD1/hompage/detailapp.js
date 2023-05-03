const movies = JSON.parse(localStorage.getItem("listMovies")) || [];
const movieContent = document.getElementById("moviecontent");

let id = JSON.parse(localStorage.getItem("id"));

movieContent.innerHTML = `
      <div class="detail">
        <div>
          <img src=${id.posterUrl} alt="">
        </div>
        <div>
          <h3>${id.title}</h3>
          <hr>
          <div><b>Đạo diễn:</b> ${id.director}</div>
          <div><b>Diễn viên:</b> ${id.actors}</div>
          <div><b>Thể loại:</b> ${id.genre}</div>
          <div><b>Khởi chiếu:</b> ${id.releaseDate}</div>
          <div><b>Thời lượng:</b> ${id.duration}</div>
          <div><b>Ngôn ngữ:</b> ${id.language}</div>
          <div><b>Rated:</b> ${id.rating}</div>
          <a href="/booking/booking.html" >Mua Vé</a>
        </div>
      </div>
    `;

const eventNew = document.querySelector(".event-new");
for (let i = 0; i < movies.length; i++) {
  const html = `
    <li class="thanhviencgv"><i class="fa-regular fa-hand-point-right" id="finleft"></i>Chi tiết</li>
    <li class="uudai"><a href="${movies[i].trailerUrl}" target="_blank"><i class="fa-regular fa-hand-point-right" id="finright"></i>Trailer</a></li>
  `;

  eventNew.innerHTML = html;
}

const pdetail = document.querySelector(".pdetail");
for (let i = 0; i < movies.length; i++) {
  pdetail.textContent = `${id.description}`;
}
