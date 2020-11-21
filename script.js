$( document ).ready(function() {

var pokemonInput = document.querySelector("#search-input");
var searchButton = document.querySelector("#search-button");
var querySearch = document.querySelector(".search-bar");

querySearch.addEventListener("submit", pokemonLog);

function pokemonLog(event) {
    event.preventDefault();
    console.log(pokemonInput.value);
};

});