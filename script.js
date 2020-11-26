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
    var pokedexURL = "https://pokeapi.co/api/v2/pokemon-species/" + pokemonName.toLowerCase();

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {

            console.log(response);

            $("#pokedex-name").text(response.name.charAt(0).toUpperCase() + response.name.slice(1));

            var spriteLink = response.sprites.front_default;

            $("#pokemon-sprite-img").attr("src", spriteLink);

            var pokemonType = response.types[0].type.name;
            console.log(pokemonType);

            $("#pokemon-type").text("Type: " + pokemonType.charAt(0).toUpperCase() + pokemonType.slice(1));

            var ability1 = response.abilities[0].ability.name;
            var ability2 = response.abilities[1].ability.name;
            $("#pokemon-abilities").text("Abilities: " + ability1 + ", " + ability2);

        });

        $.ajax({
            url: pokedexURL,
            method: "GET"
        }).then(function(response) {

            console.log(response);

            var pokemonSpecies = response.genera[7].genus;
            console.log(pokemonSpecies);

            $("#pokemon-fact").text(response.flavor_text_entries[1].flavor_text);

            // $("#pokemon-type").css("background-color", response.color.name);

            $("#pokemon-species").text("Species: " + pokemonSpecies);

        });
    };

});