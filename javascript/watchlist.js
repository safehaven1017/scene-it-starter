function renderMoviesCards(movies) {
    const loadMovieSectionCards = document.querySelector('#cards-list');
    const movieHtmlArrayCards = movies.map(function(currentMovie) {
        return `<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${currentMovie.Poster}" alt="no_image.png">
        <div class="card-body">
            <h3><strong>${currentMovie.Title}</strong></h3>
            <h5>Release Date: ${currentMovie.Year}</h5>
            <button class="btn btn-primary input-group-btn" type="submit" id="remove-button" data-imdbid="${currentMovie.imdbID}">Remove From Watchlist</button>
        </div>
    </div>`
    });  
    loadMovieSectionCards.innerHTML = movieHtmlArrayCards.join('');
}

function removeMovieFromWatchlist(id) {
    for (let i = 0; i < watchlist.length; i++) {
        if (id == watchlist[i].imdbID) {
            watchlist.splice(i, 1);
        }
    }
    renderMoviesCards(watchlist);
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', watchlistJSON);
}











let watchlistJSON = localStorage.getItem('watchlist');
let watchlist = JSON.parse(watchlistJSON);

if (watchlist == null) {
    watchlist = [];
}
renderMoviesCards(watchlist);

document.addEventListener('click', event => {
    if (event.target.id == 'remove-button') {
        removeMovieFromWatchlist(event.target.dataset.imdbid);
    }
})

