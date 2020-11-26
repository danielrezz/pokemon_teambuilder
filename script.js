$( document ).ready(function() {
var pokemonInput = document.querySelector("#search-input");
var searchButton = document.querySelector("#search-button");
var querySearch = document.querySelector("#search-bar");

querySearch.addEventListener("submit", pokemonLog);

function pokemonLog(event) {
    event.preventDefault();
    searchPokemon();
};

function searchPokemon() {

    var pokemonName = pokemonInput.value;
    var queryURL = "https://pokeapi.co/api/v2/pokemon/" + pokemonName.toLowerCase();

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {

            console.log(response);

            $("#pokedex-name").text(response.name.charAt(0).toUpperCase() + response.name.slice(1));

            var spriteLink = response.sprites.front_default;

            $("#pokemon-sprite-img").attr("src", spriteLink);

        });
    };

});