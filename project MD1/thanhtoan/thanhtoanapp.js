const booking = JSON.parse(localStorage.getItem("booking"));
let confirm = document.querySelector(".btn-confirm");

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

confirm.onclick = function () {};
