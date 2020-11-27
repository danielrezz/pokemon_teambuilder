$( document ).ready(function() {
var pokemonInput = document.querySelector("#search-input");
var searchButton = document.querySelector("#search-button");
var querySearch = document.querySelector("#search-bar");
var renderTypes = [];

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
        

            if (response.types.length === 2) {
                var pokemonType2 = response.types[1].type.name;
                $("#pokemon-type").text("TYPE: " + pokemonType.charAt(0).toUpperCase() + pokemonType.slice(1) + ", " + pokemonType2.charAt(0).toUpperCase() + pokemonType2.slice(1));
            } else {
                $("#pokemon-type").text("TYPE: " + pokemonType.charAt(0).toUpperCase() + pokemonType.slice(1));
            };
        
            var ability1 = response.abilities[0].ability.name;
            var ability2 = response.abilities[1].ability.name;
            $("#pokemon-abilities").text("ABILITIES: " + ability1.charAt(0).toUpperCase() + ability1.slice(1) + ", " + ability2.charAt(0).toUpperCase() + ability2.slice(1));

            var pokemonHeight = response.height/10;
            var pokemonWeight = response.weight/10;
            $("#pokemon-height").text("HEIGHT: " + pokemonHeight + " m");
            $("#pokemon-weight").text("WEIGHT: " + pokemonWeight + " kg");
        });

        $.ajax({
            url: pokedexURL,
            method: "GET"
        }).then(function(response) {

            console.log(response);

            var pokemonSpecies = response.genera[7].genus;

            $("#pokemon-fact").text(response.flavor_text_entries[1].flavor_text);

            // $("#pokemon-type").css("background-color", response.color.name);

            $("#pokemon-species").text("SPECIES: " + pokemonSpecies);

        });
    };

    // function renderType() {

    //     $("#pokemon-type").empty();

    //     for (var i = 0; i < types.length; i++) {
    //         $("#pokemon-type").text(types[i].type.name);
    //     }

    // }

});