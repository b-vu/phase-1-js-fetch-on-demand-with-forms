const init = () => {
  const search = document.querySelector("form");
  search.addEventListener("submit", e => {
      e.preventDefault();
      console.log(e.target["searchByID"].value);

      fetch(`http://localhost:3000/movies/${e.target["searchByID"].value}`)
      .then(res => res.json())
      .then(data => displayMovie(data));
  });
}

const displayMovie = data => {
    console.log(data);
    const movieDetails = document.querySelector("#movieDetails");
    console.log(movieDetails.childNodes);
    movieDetails.childNodes[1].textContent = data.title;
    movieDetails.childNodes[3].textContent = data.summary;
}

document.addEventListener('DOMContentLoaded', init);