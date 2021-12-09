function renderMoviesCarousel(movies) {
    const loadMovieSectionCarousel = document.querySelector('.carousel-inner');
    const movieHtmlArrayCarousel = movies.map(function(currentMovie, index) {
        return `<div class="carousel-item ${index === 0?'active':''}">
        <div class="carousel-caption d-none d-md-block carousel-text">
            <h5>${currentMovie.Title}</h5>
            <p>${currentMovie.Year}</p>
        </div>            
        <img src="${currentMovie.Poster}" class="d-block w-100 poster" alt="...">
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
            <img src="${currentMovie.Poster}" alt="" class="accordion-image">
            <div class="movie-details">
              <h3 class="movie-title"><strong>${currentMovie.Title}</strong></h3>
              <h5 class="release-date">Release Date: <em>${currentMovie.Year}</em></h5>
              <button class="add-movie">ADD</button>
            </div>
          </div>
        </div>
      </div>`
    });  
    loadMovieSectionAccordion.innerHTML += movieHtmlArrayAccordion.join('');
}

document.addEventListener('DOMContentLoaded', function() {
	// code here will execute after the document is loaded
});

const myForm = document.querySelector('#searchbar-form');
myForm.addEventListener('submit', function(e){
    // event listener code goes here
    preventDefault();
    renderMoviesAccordion(movieData);
    renderMoviesCarousel(movieData);
    
})

