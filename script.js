$( document ).ready(function() {

var pokemonInput = document.querySelector("#search-input");
var searchButton = document.querySelector("#search-button");
var querySearch = document.querySelector(".search-bar");

querySearch.addEventListener("submit", pokemonLog);

function pokemonLog(event) {
    event.preventDefault();
    console.log(pokemonInput.value);
};

<<<<<<< HEAD
});
=======
function searchPokemon() {
    var movie = $(this).attr.
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
}

>>>>>>> 7c33f3f94fa4979625b08c12d89e527da28b98ef
