const movies = JSON.parse(localStorage.getItem("listMovies")) || [];

// let listMovies = localStorage.setItem("listMovies", JSON.stringify(movies));
// query HTML element
const tbody = document.getElementById("tbody");
const form = document.getElementById("main-form");

let updateIndex = undefined;

// render movies
function renderMovies() {
  tbody.innerHTML = "";
  for (let i = 0; i < movies.length; i++) {
    tbody.innerHTML =
      tbody.innerHTML +
      `<tr id="${movies[i].id}">
                <th scope="row">${movies[i].id}</th>
                <td><img src="${movies[i].posterUrl}" style="width:"100px" height="150px"></td>
                <td>${movies[i].title}</td>
                <td>${movies[i].director}</td>
                <td>${movies[i].actors}</td>
                <td>${movies[i].genre}</td>
                <td>${movies[i].releaseDate}</td>
                <td>${movies[i].duration}</td>
                <td>${movies[i].language}</td>
                <td>${movies[i].rating}</td>
                <td>${movies[i].trailerUrl}</td>
                <td>${movies[i].description}</td>
                
                <td>
                    <button class="btn btn-success btn-update">Update</button>
                    <button class="btn btn-danger btn-delete">Delete</button>
                </td>
          </tr>`;
  }
}

renderMovies();

form.onsubmit = function (e) {
  e.preventDefault();

  let movie = {
    id: Number(form.id.value),
    posterUrl: form.posterUrl.value,
    title: form.title.value,
    director: form.director.value,
    actors: form.actors.value,
    genre: form.genre.value,
    releaseDate: form.releaseDate.value,
    duration: form.duration.value,
    language: form.language.value,
    rating: form.rating.value,
    trailerUrl: form.trailerUrl.value,
    description: form.description.value,
  };

  movies.push(movie);
  localStorage.setItem("listMovies", JSON.stringify(movies));
  renderMovies();
};

tbody.onclick = function (e) {
  let td = e.target.parentElement.parentElement;

  if (e.target.classList.contains("btn-update")) {
    console.log("hjdsa");
    let id = Number(e.target.parentElement.parentElement.id); // id
    console.log(id);

    let findIndex = -1;
    for (let i = 0; i < movies.length; i = i + 1) {
      if (movies[i].id === id) {
        findIndex = i;
      }
    }
    if (findIndex != -1) {
      updateIndex = findIndex;
      let find = movies[findIndex];
      console.log(find.posterUrl);
      td.innerHTML = `<tr>
                            <td><input type="text" id="id-input" placeholder="ID"/></td>
                            <td><input type="text" id="posterUrl-input" placeholder="Poster Url"/></td>
                            <td><input type="text" id="title-input" placeholder="Title"/></td>
                            <td><input type="text"  id="director-input" placeholder="director"/></td>
                            <td><input type="text"  id="actors-input"placeholder="actors"/></td>
                            <td><input type="text" id="genre-input"placeholder="genre"/></td>
                            <td><input type="date"  id="realeaseDate-input"placeholder="release Date"/></td>
                            <td><input type="text"  id="duration-input"placeholder="Duration"/></td>
                            <td><input type="text"  id="language-input" placeholder="Language"/></td>
                            <td><input type="text"  id="rating-input"placeholder="Rating"/></td>
                            <td><input type="text"  id="trailerUrl-input"placeholder="Trailer Url"/></td>
                            <td><input type="text"  id="description-input"placeholder="Description"/></td>
                            
                            <td>
                                <button class="btn btn-info btn-confirm">Confirm</button>
                                <button class="btn btn-danger btn-cancel">Cancel</button>
                            </td>
                        </tr>`;
    }
  }
  // let confirmBtn = document.querySelector(".btn-confirm");
  // let cancelBtn = document.querySelector(".btn-cancel");

  if (e.target.classList.contains("btn-confirm")) {
    // Get the updated movie data from the input fields

    let newid = Number(
      e.target.parentElement.parentElement.children[0].children[0].value
    );
    let newposterUrl =
      e.target.parentElement.parentElement.children[1].children[0].value;
    let newtitle =
      e.target.parentElement.parentElement.children[2].children[0].value;
    let newdirector =
      e.target.parentElement.parentElement.children[3].children[0].value;
    let newactors =
      e.target.parentElement.parentElement.children[4].children[0].value;
    let newgenre =
      e.target.parentElement.parentElement.children[5].children[0].value;
    let newduration =
      e.target.parentElement.parentElement.children[6].children[0].value;
    let newreleaseDate =
      e.target.parentElement.parentElement.children[7].children[0].value;
    let newlanguage =
      e.target.parentElement.parentElement.children[8].children[0].value;
    let newrating =
      e.target.parentElement.parentElement.children[9].children[0].value;
    let newtrailerUrl =
      e.target.parentElement.parentElement.children[10].children[0].value;
    let newdescription =
      e.target.parentElement.parentElement.children[11].children[0].value;
    // console.log(
    //   newid,
    //   newposterUrl,
    //   newtitle,
    //   newdirector,
    //   newactors,
    //   newgenre,
    //   newduration,
    //   newreleaseDate,
    //   newlanguage,
    //   newrating,
    //   newtrailerUrl,
    //   newdescription
    // );
    movies[updateIndex] = {
      ...movies[updateIndex],
      id: newid,
      posterUrl: newposterUrl,
      title: newtitle,
      director: newdirector,
      actors: newactors,
      genre: newgenre,
      releaseDate: newreleaseDate,
      duration: newduration,
      language: newlanguage,
      rating: newrating,
      trailerUrl: newtrailerUrl,
      description: newdescription,
    };
    localStorage.setItem("listMovies", JSON.stringify(movies));
    renderMovies();
    // Update the movie data in the movies array
  }
  if (e.target.classList.contains("btn-cancel")) {
    let id = Number(e.target.parentElement.parentElement.id);
    let td = e.target.parentElement.parentElement;
    let originalData;
    for (let i = 0; i < movies.length; i = i + 1) {
      if (movies[i].id === id) {
        originalData = movies[i];
        break;
      }
    }
    td.innerHTML = `
      <td>${originalData.id}</td>
      <td><img src="${originalData.posterUrl}" alt="poster" class="poster" style="width:"100px" height="150px"/></td>
      <td>${originalData.title}</td>
      <td>${originalData.director}</td>
      <td>${originalData.actors}</td>
      <td>${originalData.genre}</td>
      <td>${originalData.releaseDate}</td>
      <td>${originalData.duration}</td>
      <td>${originalData.language}</td>
      <td>${originalData.rating}</td>
      <td>${originalData.trailerUrl}</td>
      <td>${originalData.description}</td>
      <td>
        <button class="btn btn-success btn-update">Update</button>
        <button class="btn btn-danger btn-delete">Delete</button>
      </td>
    `;
  }

  if (e.target.classList.contains("btn-delete")) {
    let id = Number(e.target.parentElement.parentElement.id);
    let check = -1;
    for (let i = 0; i < movies.length; i++) {
      if (id == movies[i].id) {
        check = i;
      }
    }
    if (check != -1) {
      movies.splice(check, 1);
    }
    localStorage.setItem("listMovies", JSON.stringify(movies));
    renderMovies();
  }
};
