const fetchMoviesJSON = async (searchQuery) => {

    const response = await fetch(window.location.href + 'movies.json');
    const movies = await response.json();
    if (searchQuery == undefined || searchQuery == "") {//.target.value
        return movies;
    }
    else {
        return movies.filter(movie => movie.title.toLowerCase().includes(searchQuery.toLowerCase()));//.target.value
    }
}

export { fetchMoviesJSON };