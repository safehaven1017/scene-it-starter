function renderMoviesCarousel(movies) {
    const loadMovieSectionCarousel = document.querySelector('.carousel-inner');
    const movieHtmlArrayCarousel = movies.map(function(currentMovie, index) {
        return `<div class="carousel-item ${index === 0?'active':''}">
        <div class="carousel-caption d-none d-md-block carousel-text">
            <h5>${currentMovie.Title}</h5>
            <p>${currentMovie.Year}</p>
        </div>            
        <img src="${currentMovie.Poster}" class="d-block w-100 poster" alt="no_image.png">
                </div>`
    });  
    loadMovieSectionCarousel.innerHTML = movieHtmlArrayCarousel.join('');
}

function renderMoviesAccordion(movies) {
    const loadMovieSectionAccordion = document.querySelector('#accordionFlushExample');
    const movieHtmlArrayAccordion = movies.map(function(currentMovie, index) {
        return `<div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingOne">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${index}" aria-expanded="false" aria-controls="flush-collapseOne">
          ${currentMovie.Title}
          </button>
        </h2>
        <div id="flush-collapse${index}" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">
            <img src="${currentMovie.Poster}" alt="no_image.png" class="accordion-image">
            <div class="movie-details">
              <h3 class="movie-title"><strong>${currentMovie.Title}</strong></h3>
              <h5 class="release-date">Release Date: <em>${currentMovie.Year}</em></h5>
              <button class="add-movie" data-imdbid="${currentMovie.imdbID}">ADD</button>
            </div>
          </div>
        </div>
      </div>`
    });  
    loadMovieSectionAccordion.innerHTML = movieHtmlArrayAccordion.join('');
}

function saveToWatchlist(id, htmlObject) {
  let movie = {};
  movie = movieData.find(movieIndex => {
    if (movieIndex.imdbID == id) {
      return movieIndex;
    }
  })
  let watchlistJSON = localStorage.getItem('watchlist');
  let watchlist = JSON.parse(watchlistJSON);
  
  if (watchlist == null) {
    watchlist = [];
  }
  
  for (let i = 0; i < watchlist.length; i++) {
    if (watchlist[i].imdbID == id) {
      htmlObject.innerHTML = 'Title already added!';
      setTimeout(() => {
        htmlObject.innerHTML = 'ADD';
      }, 2000);
      return;
    }
  }
  watchlist.push(movie);
  console.log(watchlist);
  watchlistJSON = JSON.stringify(watchlist);
  localStorage.setItem('watchlist', watchlistJSON);
}

const myForm = document.querySelector('#searchbar-form');
const userInputString = document.querySelector('#search-shadow');

myForm.addEventListener('submit', function(event) { 
    // event listener code goes here
    event.preventDefault();
    encodedString = encodeURIComponent(userInputString.value);
    fetch(`http://www.omdbapi.com/?apikey=59354c85&s=${encodedString}`)
    .then(res => res.json())
    .then(movieObjectArray => {
      renderMoviesAccordion(movieObjectArray.Search);
      renderMoviesCarousel(movieObjectArray.Search);
      movieData = movieObjectArray.Search;
          document.addEventListener('click', function(event) {
              if (event.target.classList.value == 'add-movie') {
                saveToWatchlist(event.target.dataset.imdbid, event.target);
              }
          });
    });
     
});



