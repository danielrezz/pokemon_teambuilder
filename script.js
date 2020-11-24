var pokemonInput = document.querySelector("#search-input");
var searchButton = document.querySelector("#search-button");

searchButton.addEventListener('click', pokemonLog);

function pokemonLog(event) {
    event.preventDefault();
    console.log(pokemonInput.value);
}

function searchPokemon() {
    var movie = $(this).attr.
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
}

