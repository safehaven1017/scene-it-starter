function renderMoviesCards(movies) {
    const loadMovieSectionCards = document.querySelector('#cards-list');
    const movieHtmlArrayCards = movies.map(function(currentMovie) {
        return `<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${currentMovie.Poster}" alt="no_image.png">
        <div class="card-body">
            <h3><strong>${currentMovie.Title}</strong></h3>
            <h5>Release Date: ${currentMovie.Year}</h5>
            <button class="btn btn-primary input-group-btn" type="submit" id="search-button">Remove From Watchlist</button>
        </div>
    </div>`
    });  
    loadMovieSectionCards.innerHTML = movieHtmlArrayCards.join('');
}

renderMoviesCards(movieData);