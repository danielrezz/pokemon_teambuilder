$( document ).ready(function() {
var pokemonInput = document.querySelector("#search-input");
var searchButton = document.querySelector("#search-button");
var querySearch = document.querySelector("#search-bar");
var renderTypes = [];
let teamslotId = 1;
var addToTeamBtn = document.querySelector("#add-to-team");
const removeFromTeamBtn1 = document.querySelector("#remove-from-team1");
const removeFromTeamBtn2 = document.querySelector("#remove-from-team2");
const removeFromTeamBtn3 = document.querySelector("#remove-from-team3");
const removeFromTeamBtn4 = document.querySelector("#remove-from-team4");
const removeFromTeamBtn5 = document.querySelector("#remove-from-team5");
const removeFromTeamBtn6 = document.querySelector("#remove-from-team6");


querySearch.addEventListener("submit", pokemonLog);


function pokemonLog(event) {
    event.preventDefault();
    searchPokemon();
};
function searchPokemon() {
    function clearPrevious() {
    console.clear();
    $("#weak-one").text(``);
    $("#weak-two").text(``);
    $("#weak-three").text(``);
    $("#weak-four").text(``);
    $("#weak-five").text(``);
    $("#weak-six").text(``);
    $("#weak-seven").text(``);
    $("#weak-eight").text(``);
    $("#weak-nine").text(``);
    $("#weak-ten").text(``);
    $("#weak-eleven").text(``);
    $("#weak-twelve").text(``);
    $("#weak-thirteen").text(``);
    $("#weak-fourteen").text(``);
    $("#weak-fifteen").text(``);
    $("#strong-one").text(``);
    $("#strong-two").text(``);
    $("#strong-three").text(``);
    $("#strong-four").text(``);
    $("#strong-five").text(``);
    $("#strong-six").text(``);
    $("#strong-seven").text(``);
    $("#strong-eight").text(``);
    $("#strong-nine").text(``);
    $("#strong-ten").text(``);
    $("#strong-eleven").text(``);
    $("#strong-twelve").text(``);
    $("#strong-thirteen").text(``);
    $("#strong-fourteen").text(``);
    $("#strong-fifteen").text(``); 
}
    clearPrevious();

    document.getElementById("weak-against").setAttribute("style", "display: block");
    document.getElementById("strong-against").setAttribute("style", "display: block");
    document.getElementById("add-to-team").setAttribute("style", "display: block");
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

            const pokemonType = response.types[0].type.name;
        

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

// DATA SET - ALL TYPE MATCHUPS    
            const testTypes = {
                bug: [{
                    type: "bug",
                    damage: 1
                }, 
                {
                    type: "dragon",
                    damage: 1
                }, 
                {
                    type: "electric",
                    damage: 1
                }, 
                {
                    type: "fighting",
                    damage: 0.5
                }, 
                {
                    type: "fire",
                    damage: 2
                }, 
                {
                    type: "flying",
                    damage: 2
                }, 
                {
                    type: "ghost",
                    damage: 1
                }, 
                {
                    type: "grass",
                    damage: 0.5
                }, 
                {
                    type: "ground",
                    damage: 0.5
                }, 
                {
                    type: "ice",
                    damage: 1
                }, 
                {
                    type: "normal",
                    damage: 1
                }, 
                {
                    type: "poison",
                    damage: 1
                }, 
                {
                    type: "psychic",
                    damage: 1
                }, 
                {
                    type: "rock",
                    damage: 2
                }, 
                {
                    type: "water",
                    damage: 1
                }
            ],
                dragon: [{
                    type: "bug",
                    damage: 1
                }, 
                {
                    type: "dragon",
                    damage: 2
                }, 
                {
                    type: "electric",
                    damage: 0.5
                }, 
                {
                    type: "fighting",
                    damage: 1
                }, 
                {
                    type: "fire",
                    damage: 0.5
                }, 
                {
                    type: "flying",
                    damage: 1
                }, 
                {
                    type: "ghost",
                    damage: 1
                }, 
                {
                    type: "grass",
                    damage: 0.5
                }, 
                {
                    type: "ground",
                    damage: 1
                }, 
                {
                    type: "ice",
                    damage: 2
                }, 
                {
                    type: "normal",
                    damage: 1
                }, 
                {
                    type: "poison",
                    damage: 1
                }, 
                {
                    type: "psychic",
                    damage: 1
                }, 
                {
                    type: "rock",
                    damage: 1
                }, 
                {
                    type: "water",
                    damage: 0.5
                }
            ],
                electric: [{
                    type: "bug",
                    damage: 1
                }, 
                {
                    type: "dragon",
                    damage: 1
                }, 
                {
                    type: "electric",
                    damage: 0.5
                }, 
                {
                    type: "fighting",
                    damage: 1
                }, 
                {
                    type: "fire",
                    damage: 1
                }, 
                {
                    type: "flying",
                    damage: 0.5
                }, 
                {
                    type: "ghost",
                    damage: 1
                }, 
                {
                    type: "grass",
                    damage: 1
                }, 
                {
                    type: "ground",
                    damage: 2
                }, 
                {
                    type: "ice",
                    damage: 1
                }, 
                {
                    type: "normal",
                    damage: 1
                }, 
                {
                    type: "poison",
                    damage: 1
                }, 
                {
                    type: "psychic",
                    damage: 1
                }, 
                {
                    type: "rock",
                    damage: 1
                }, 
                {
                    type: "water",
                    damage: 1
                }
            ],
                fighting: [{
                    type: "bug",
                    damage: 0.5
                }, 
                {
                    type: "dragon",
                    damage: 1
                }, 
                {
                    type: "electric",
                    damage: 1
                }, 
                {
                    type: "fighting",
                    damage: 1
                }, 
                {
                    type: "fire",
                    damage: 1
                }, 
                {
                    type: "flying",
                    damage: 2
                }, 
                {
                    type: "ghost",
                    damage: 1
                }, 
                {
                    type: "grass",
                    damage: 1
                }, 
                {
                    type: "ground",
                    damage: 1
                }, 
                {
                    type: "ice",
                    damage: 1
                }, 
                {
                    type: "normal",
                    damage: 1
                }, 
                {
                    type: "poison",
                    damage: 1
                }, 
                {
                    type: "psychic",
                    damage: 2
                }, 
                {
                    type: "rock",
                    damage: 0.5
                }, 
                {
                    type: "water",
                    damage: 1
                }
            ],
                fire: [{
                    type: "bug",
                    damage: 0.5
                }, 
                {
                    type: "dragon",
                    damage: 1
                }, 
                {
                    type: "electric",
                    damage: 1
                }, 
                {
                    type: "fighting",
                    damage: 1
                }, 
                {
                    type: "fire",
                    damage: 0.5
                }, 
                {
                    type: "flying",
                    damage: 1
                }, 
                {
                    type: "ghost",
                    damage: 1
                }, 
                {
                    type: "grass",
                    damage: 0.5
                }, 
                {
                    type: "ground",
                    damage: 2
                }, 
                {
                    type: "ice",
                    damage: 0.5
                }, 
                {
                    type: "normal",
                    damage: 1
                }, 
                {
                    type: "poison",
                    damage: 1
                }, 
                {
                    type: "psychic",
                    damage: 1
                }, 
                {
                    type: "rock",
                    damage: 2
                }, 
                {
                    type: "water",
                    damage: 2
                }
            ],
                flying: [{
                    type: "bug",
                    damage: 0.5
                }, 
                {
                    type: "dragon",
                    damage: 1
                }, 
                {
                    type: "electric",
                    damage: 2
                }, 
                {
                    type: "fighting",
                    damage: 0.5
                }, 
                {
                    type: "fire",
                    damage: 1
                }, 
                {
                    type: "flying",
                    damage: 1
                }, 
                {
                    type: "ghost",
                    damage: 1
                }, 
                {
                    type: "grass",
                    damage: 0.5
                }, 
                {
                    type: "ground",
                    damage: 0
                }, 
                {
                    type: "ice",
                    damage: 2
                }, 
                {
                    type: "normal",
                    damage: 1
                }, 
                {
                    type: "poison",
                    damage: 1
                }, 
                {
                    type: "psychic",
                    damage: 1
                }, 
                {
                    type: "rock",
                    damage: 2
                }, 
                {
                    type: "water",
                    damage: 1
                }
            ],
                ghost: [{
                    type: "bug",
                    damage: 0.5
                }, 
                {
                    type: "dragon",
                    damage: 1
                }, 
                {
                    type: "electric",
                    damage: 1
                }, 
                {
                    type: "fighting",
                    damage: 0
                }, 
                {
                    type: "fire",
                    damage: 1
                }, 
                {
                    type: "flying",
                    damage: 1
                }, 
                {
                    type: "ghost",
                    damage: 2
                }, 
                {
                    type: "grass",
                    damage: 1
                }, 
                {
                    type: "ground",
                    damage: 1
                }, 
                {
                    type: "ice",
                    damage: 1
                }, 
                {
                    type: "normal",
                    damage: 0
                }, 
                {
                    type: "poison",
                    damage: 0.5
                }, 
                {
                    type: "psychic",
                    damage: 1
                }, 
                {
                    type: "rock",
                    damage: 1
                }, 
                {
                    type: "water",
                    damage: 1
                }
            ],
                grass: [{
                    type: "bug",
                    damage: 2
                }, 
                {
                    type: "dragon",
                    damage: 1
                }, 
                {
                    type: "electric",
                    damage: 0.5
                }, 
                {
                    type: "fighting",
                    damage: 1
                }, 
                {
                    type: "fire",
                    damage: 2
                }, 
                {
                    type: "flying",
                    damage: 2
                }, 
                {
                    type: "ghost",
                    damage: 1
                }, 
                {
                    type: "grass",
                    damage: 0.5
                }, 
                {
                    type: "ground",
                    damage: 0.5
                }, 
                {
                    type: "ice",
                    damage: 2
                }, 
                {
                    type: "normal",
                    damage: 1
                }, 
                {
                    type: "poison",
                    damage: 2
                }, 
                {
                    type: "psychic",
                    damage: 1
                }, 
                {
                    type: "rock",
                    damage: 1
                }, 
                {
                    type: "water",
                    damage: 0.5
                }
            ],
                ground: [{
                    type: "bug",
                    damage: 1
                }, 
                {
                    type: "dragon",
                    damage: 1
                }, 
                {
                    type: "electric",
                    damage: 0
                }, 
                {
                    type: "fighting",
                    damage: 1
                }, 
                {
                    type: "fire",
                    damage: 1
                }, 
                {
                    type: "flying",
                    damage: 1
                }, 
                {
                    type: "ghost",
                    damage: 1
                }, 
                {
                    type: "grass",
                    damage: 2
                }, 
                {
                    type: "ground",
                    damage: 1
                }, 
                {
                    type: "ice",
                    damage: 2
                }, 
                {
                    type: "normal",
                    damage: 1
                }, 
                {
                    type: "poison",
                    damage: 0.5
                }, 
                {
                    type: "psychic",
                    damage: 1
                }, 
                {
                    type: "rock",
                    damage: 0.5
                }, 
                {
                    type: "water",
                    damage: 2
                }
            ],
                ice: [{
                    type: "bug",
                    damage: 1
                }, 
                {
                    type: "dragon",
                    damage: 1
                }, 
                {
                    type: "electric",
                    damage: 1
                }, 
                {
                    type: "fighting",
                    damage: 2
                }, 
                {
                    type: "fire",
                    damage: 2
                }, 
                {
                    type: "flying",
                    damage: 1
                }, 
                {
                    type: "ghost",
                    damage: 1
                }, 
                {
                    type: "grass",
                    damage: 1
                }, 
                {
                    type: "ground",
                    damage: 1
                }, 
                {
                    type: "ice",
                    damage: 0.5
                }, 
                {
                    type: "normal",
                    damage: 1
                }, 
                {
                    type: "poison",
                    damage: 1
                }, 
                {
                    type: "psychic",
                    damage: 1
                }, 
                {
                    type: "rock",
                    damage: 2
                }, 
                {
                    type: "water",
                    damage: 1
                }
            ],
                normal: [{
                    type: "bug",
                    damage: 1
                }, 
                {
                    type: "dragon",
                    damage: 1
                }, 
                {
                    type: "electric",
                    damage: 1
                }, 
                {
                    type: "fighting",
                    damage: 2
                }, 
                {
                    type: "fire",
                    damage: 1
                }, 
                {
                    type: "flying",
                    damage: 1
                }, 
                {
                    type: "ghost",
                    damage: 0
                }, 
                {
                    type: "grass",
                    damage: 1
                }, 
                {
                    type: "ground",
                    damage: 1
                }, 
                {
                    type: "ice",
                    damage: 1
                }, 
                {
                    type: "normal",
                    damage: 1
                }, 
                {
                    type: "poison",
                    damage: 1
                }, 
                {
                    type: "psychic",
                    damage: 1
                }, 
                {
                    type: "rock",
                    damage: 1
                }, 
                {
                    type: "water",
                    damage: 1
                }
            ],
                poison: [{
                    type: "bug",
                    damage: 0.5
                }, 
                {
                    type: "dragon",
                    damage: 1
                }, 
                {
                    type: "electric",
                    damage: 1
                }, 
                {
                    type: "fighting",
                    damage: 0.5
                }, 
                {
                    type: "fire",
                    damage: 1
                }, 
                {
                    type: "flying",
                    damage: 1
                }, 
                {
                    type: "ghost",
                    damage: 1
                }, 
                {
                    type: "grass",
                    damage: 0.5
                }, 
                {
                    type: "ground",
                    damage: 2
                }, 
                {
                    type: "ice",
                    damage: 1
                }, 
                {
                    type: "normal",
                    damage: 1
                }, 
                {
                    type: "poison",
                    damage: 1
                }, 
                {
                    type: "psychic",
                    damage: 2
                }, 
                {
                    type: "rock",
                    damage: 1
                }, 
                {
                    type: "water",
                    damage: 1
                }
            ],
                psychic: [{
                    type: "bug",
                    damage: 2
                }, 
                {
                    type: "dragon",
                    damage: 1
                }, 
                {
                    type: "electric",
                    damage: 1
                }, 
                {
                    type: "fighting",
                    damage: 0.5
                }, 
                {
                    type: "fire",
                    damage: 1
                }, 
                {
                    type: "flying",
                    damage: 1
                }, 
                {
                    type: "ghost",
                    damage: 2
                }, 
                {
                    type: "grass",
                    damage: 1
                }, 
                {
                    type: "ground",
                    damage: 1
                }, 
                {
                    type: "ice",
                    damage: 1
                }, 
                {
                    type: "normal",
                    damage: 1
                }, 
                {
                    type: "poison",
                    damage: 1
                }, 
                {
                    type: "psychic",
                    damage: 0.5
                }, 
                {
                    type: "rock",
                    damage: 1
                }, 
                {
                    type: "water",
                    damage: 1
                }
            ],
                rock: [{
                    type: "bug",
                    damage: 1
                }, 
                {
                    type: "dragon",
                    damage: 1
                }, 
                {
                    type: "electric",
                    damage: 1
                }, 
                {
                    type: "fighting",
                    damage: 2
                }, 
                {
                    type: "fire",
                    damage: 0.5
                }, 
                {
                    type: "flying",
                    damage: 0.5
                }, 
                {
                    type: "ghost",
                    damage: 1
                }, 
                {
                    type: "grass",
                    damage: 2
                }, 
                {
                    type: "ground",
                    damage: 2
                }, 
                {
                    type: "ice",
                    damage: 1
                }, 
                {
                    type: "normal",
                    damage: 0.5
                }, 
                {
                    type: "poison",
                    damage: 0.5
                }, 
                {
                    type: "psychic",
                    damage: 1
                }, 
                {
                    type: "rock",
                    damage: 1
                }, 
                {
                    type: "water",
                    damage: 2
                }
            ],
                water: [{
                    type: "bug",
                    damage: 1
                }, 
                {
                    type: "dragon",
                    damage: 1
                }, 
                {
                    type: "electric",
                    damage: 2
                }, 
                {
                    type: "fighting",
                    damage: 1
                }, 
                {
                    type: "fire",
                    damage: 0.5
                }, 
                {
                    type: "flying",
                    damage: 1
                }, 
                {
                    type: "ghost",
                    damage: 1
                }, 
                {
                    type: "grass",
                    damage: 2
                }, 
                {
                    type: "ground",
                    damage: 1
                }, 
                {
                    type: "ice",
                    damage: 0.5
                }, 
                {
                    type: "normal",
                    damage: 1
                }, 
                {
                    type: "poison",
                    damage: 1
                }, 
                {
                    type: "psychic",
                    damage: 1
                }, 
                {
                    type: "rock",
                    damage: 1
                }, 
                {
                    type: "water",
                    damage: 0.5
                }
            ],
        };
// FIRST TYPE MATCHUPS
            if (pokemonType === "bug") {
                var typeCalcFirstTypeBug = testTypes.bug[0].type;
                var damageCalcFirstTypeBug = testTypes.bug[0].damage;
                var typeCalcFirstTypeDragon = testTypes.bug[1].type;
                var damageCalcFirstTypeDragon = testTypes.bug[1].damage;
                var typeCalcFirstTypeElectric = testTypes.bug[2].type;
                var damageCalcFirstTypeElectric = testTypes.bug[2].damage;
                var typeCalcFirstTypeFighting = testTypes.bug[3].type;
                var damageCalcFirstTypeFighting = testTypes.bug[3].damage;
                var typeCalcFirstTypeFire = testTypes.bug[4].type;
                var damageCalcFirstTypeFire = testTypes.bug[4].damage;
                var typeCalcFirstTypeFlying = testTypes.bug[5].type;
                var damageCalcFirstTypeFlying = testTypes.bug[5].damage;
                var typeCalcFirstTypeGhost = testTypes.bug[6].type;
                var damageCalcFirstTypeGhost = testTypes.bug[6].damage;
                var typeCalcFirstTypeGrass = testTypes.bug[7].type;
                var damageCalcFirstTypeGrass = testTypes.bug[7].damage;
                var typeCalcFirstTypeGround = testTypes.bug[8].type;
                var damageCalcFirstTypeGround = testTypes.bug[8].damage;
                var typeCalcFirstTypeIce = testTypes.bug[9].type;
                var damageCalcFirstTypeIce = testTypes.bug[9].damage;
                var typeCalcFirstTypeNormal = testTypes.bug[10].type;
                var damageCalcFirstTypeNormal = testTypes.bug[10].damage;
                var typeCalcFirstTypePoison = testTypes.bug[11].type;
                var damageCalcFirstTypePoison = testTypes.bug[11].damage;
                var typeCalcFirstTypePsychic = testTypes.bug[12].type;
                var damageCalcFirstTypePsychic = testTypes.bug[12].damage;
                var typeCalcFirstTypeRock = testTypes.bug[13].type;
                var damageCalcFirstTypeRock = testTypes.bug[13].damage;
                var typeCalcFirstTypeWater = testTypes.bug[14].type;
                var damageCalcFirstTypeWater = testTypes.bug[14].damage;
            }
            else if (pokemonType === "dragon"){
                var typeCalcFirstTypeBug = testTypes.dragon[0].type;
                var damageCalcFirstTypeBug = testTypes.dragon[0].damage;
                var typeCalcFirstTypeDragon = testTypes.dragon[1].type;
                var damageCalcFirstTypeDragon = testTypes.dragon[1].damage;
                var typeCalcFirstTypeElectric = testTypes.dragon[2].type;
                var damageCalcFirstTypeElectric = testTypes.dragon[2].damage;
                var typeCalcFirstTypeFighting = testTypes.dragon[3].type;
                var damageCalcFirstTypeFighting = testTypes.dragon[3].damage;
                var typeCalcFirstTypeFire = testTypes.dragon[4].type;
                var damageCalcFirstTypeFire = testTypes.dragon[4].damage;
                var typeCalcFirstTypeFlying = testTypes.dragon[5].type;
                var damageCalcFirstTypeFlying = testTypes.dragon[5].damage;
                var typeCalcFirstTypeGhost = testTypes.dragon[6].type;
                var damageCalcFirstTypeGhost = testTypes.dragon[6].damage;
                var typeCalcFirstTypeGrass = testTypes.dragon[7].type;
                var damageCalcFirstTypeGrass = testTypes.dragon[7].damage;
                var typeCalcFirstTypeGround = testTypes.dragon[8].type;
                var damageCalcFirstTypeGround = testTypes.dragon[8].damage;
                var typeCalcFirstTypeIce = testTypes.dragon[9].type;
                var damageCalcFirstTypeIce = testTypes.dragon[9].damage;
                var typeCalcFirstTypeNormal = testTypes.dragon[10].type;
                var damageCalcFirstTypeNormal = testTypes.dragon[10].damage;
                var typeCalcFirstTypePoison = testTypes.dragon[11].type;
                var damageCalcFirstTypePoison = testTypes.dragon[11].damage;
                var typeCalcFirstTypePsychic = testTypes.dragon[12].type;
                var damageCalcFirstTypePsychic = testTypes.dragon[12].damage;
                var typeCalcFirstTypeRock = testTypes.dragon[13].type;
                var damageCalcFirstTypeRock = testTypes.dragon[13].damage;
                var typeCalcFirstTypeWater = testTypes.dragon[14].type;
                var damageCalcFirstTypeWater = testTypes.dragon[14].damage;
            }
            else if (pokemonType === "electric"){
                var typeCalcFirstTypeBug = testTypes.electric[0].type;
                var damageCalcFirstTypeBug = testTypes.electric[0].damage;
                var typeCalcFirstTypeDragon = testTypes.electric[1].type;
                var damageCalcFirstTypeDragon = testTypes.electric[1].damage;
                var typeCalcFirstTypeElectric = testTypes.electric[2].type;
                var damageCalcFirstTypeElectric = testTypes.electric[2].damage;
                var typeCalcFirstTypeFighting = testTypes.electric[3].type;
                var damageCalcFirstTypeFighting = testTypes.electric[3].damage;
                var typeCalcFirstTypeFire = testTypes.electric[4].type;
                var damageCalcFirstTypeFire = testTypes.electric[4].damage;
                var typeCalcFirstTypeFlying = testTypes.electric[5].type;
                var damageCalcFirstTypeFlying = testTypes.electric[5].damage;
                var typeCalcFirstTypeGhost = testTypes.electric[6].type;
                var damageCalcFirstTypeGhost = testTypes.electric[6].damage;
                var typeCalcFirstTypeGrass = testTypes.electric[7].type;
                var damageCalcFirstTypeGrass = testTypes.electric[7].damage;
                var typeCalcFirstTypeGround = testTypes.electric[8].type;
                var damageCalcFirstTypeGround = testTypes.electric[8].damage;
                var typeCalcFirstTypeIce = testTypes.electric[9].type;
                var damageCalcFirstTypeIce = testTypes.electric[9].damage;
                var typeCalcFirstTypeNormal = testTypes.electric[10].type;
                var damageCalcFirstTypeNormal = testTypes.electric[10].damage;
                var typeCalcFirstTypePoison = testTypes.electric[11].type;
                var damageCalcFirstTypePoison = testTypes.electric[11].damage;
                var typeCalcFirstTypePsychic = testTypes.electric[12].type;
                var damageCalcFirstTypePsychic = testTypes.electric[12].damage;
                var typeCalcFirstTypeRock = testTypes.electric[13].type;
                var damageCalcFirstTypeRock = testTypes.electric[13].damage;
                var typeCalcFirstTypeWater = testTypes.electric[14].type;
                var damageCalcFirstTypeWater = testTypes.electric[14].damage;
            }
            else if (pokemonType === "fighting"){
                var typeCalcFirstTypeBug = testTypes.fighting[0].type;
                var damageCalcFirstTypeBug = testTypes.fighting[0].damage;
                var typeCalcFirstTypeDragon = testTypes.fighting[1].type;
                var damageCalcFirstTypeDragon = testTypes.fighting[1].damage;
                var typeCalcFirstTypeElectric = testTypes.fighting[2].type;
                var damageCalcFirstTypeElectric = testTypes.fighting[2].damage;
                var typeCalcFirstTypeFighting = testTypes.fighting[3].type;
                var damageCalcFirstTypeFighting = testTypes.fighting[3].damage;
                var typeCalcFirstTypeFire = testTypes.fighting[4].type;
                var damageCalcFirstTypeFire = testTypes.fighting[4].damage;
                var typeCalcFirstTypeFlying = testTypes.fighting[5].type;
                var damageCalcFirstTypeFlying = testTypes.fighting[5].damage;
                var typeCalcFirstTypeGhost = testTypes.fighting[6].type;
                var damageCalcFirstTypeGhost = testTypes.fighting[6].damage;
                var typeCalcFirstTypeGrass = testTypes.fighting[7].type;
                var damageCalcFirstTypeGrass = testTypes.fighting[7].damage;
                var typeCalcFirstTypeGround = testTypes.fighting[8].type;
                var damageCalcFirstTypeGround = testTypes.fighting[8].damage;
                var typeCalcFirstTypeIce = testTypes.fighting[9].type;
                var damageCalcFirstTypeIce = testTypes.fighting[9].damage;
                var typeCalcFirstTypeNormal = testTypes.fighting[10].type;
                var damageCalcFirstTypeNormal = testTypes.fighting[10].damage;
                var typeCalcFirstTypePoison = testTypes.fighting[11].type;
                var damageCalcFirstTypePoison = testTypes.fighting[11].damage;
                var typeCalcFirstTypePsychic = testTypes.fighting[12].type;
                var damageCalcFirstTypePsychic = testTypes.fighting[12].damage;
                var typeCalcFirstTypeRock = testTypes.fighting[13].type;
                var damageCalcFirstTypeRock = testTypes.fighting[13].damage;
                var typeCalcFirstTypeWater = testTypes.fighting[14].type;
                var damageCalcFirstTypeWater = testTypes.fighting[14].damage;
            }
            else if (pokemonType === "fire"){
                var typeCalcFirstTypeBug = testTypes.fire[0].type;
                var damageCalcFirstTypeBug = testTypes.fire[0].damage;
                var typeCalcFirstTypeDragon = testTypes.fire[1].type;
                var damageCalcFirstTypeDragon = testTypes.fire[1].damage;
                var typeCalcFirstTypeElectric = testTypes.fire[2].type;
                var damageCalcFirstTypeElectric = testTypes.fire[2].damage;
                var typeCalcFirstTypeFighting = testTypes.fire[3].type;
                var damageCalcFirstTypeFighting = testTypes.fire[3].damage;
                var typeCalcFirstTypeFire = testTypes.fire[4].type;
                var damageCalcFirstTypeFire = testTypes.fire[4].damage;
                var typeCalcFirstTypeFlying = testTypes.fire[5].type;
                var damageCalcFirstTypeFlying = testTypes.fire[5].damage;
                var typeCalcFirstTypeGhost = testTypes.fire[6].type;
                var damageCalcFirstTypeGhost = testTypes.fire[6].damage;
                var typeCalcFirstTypeGrass = testTypes.fire[7].type;
                var damageCalcFirstTypeGrass = testTypes.fire[7].damage;
                var typeCalcFirstTypeGround = testTypes.fire[8].type;
                var damageCalcFirstTypeGround = testTypes.fire[8].damage;
                var typeCalcFirstTypeIce = testTypes.fire[9].type;
                var damageCalcFirstTypeIce = testTypes.fire[9].damage;
                var typeCalcFirstTypeNormal = testTypes.fire[10].type;
                var damageCalcFirstTypeNormal = testTypes.fire[10].damage;
                var typeCalcFirstTypePoison = testTypes.fire[11].type;
                var damageCalcFirstTypePoison = testTypes.fire[11].damage;
                var typeCalcFirstTypePsychic = testTypes.fire[12].type;
                var damageCalcFirstTypePsychic = testTypes.fire[12].damage;
                var typeCalcFirstTypeRock = testTypes.fire[13].type;
                var damageCalcFirstTypeRock = testTypes.fire[13].damage;
                var typeCalcFirstTypeWater = testTypes.fire[14].type;
                var damageCalcFirstTypeWater = testTypes.fire[14].damage;
            }
            else if (pokemonType === "flying"){
                var typeCalcFirstTypeBug = testTypes.flying[0].type;
                var damageCalcFirstTypeBug = testTypes.flying[0].damage;
                var typeCalcFirstTypeDragon = testTypes.flying[1].type;
                var damageCalcFirstTypeDragon = testTypes.flying[1].damage;
                var typeCalcFirstTypeElectric = testTypes.flying[2].type;
                var damageCalcFirstTypeElectric = testTypes.flying[2].damage;
                var typeCalcFirstTypeFighting = testTypes.flying[3].type;
                var damageCalcFirstTypeFighting = testTypes.flying[3].damage;
                var typeCalcFirstTypeFire = testTypes.flying[4].type;
                var damageCalcFirstTypeFire = testTypes.flying[4].damage;
                var typeCalcFirstTypeFlying = testTypes.flying[5].type;
                var damageCalcFirstTypeFlying = testTypes.flying[5].damage;
                var typeCalcFirstTypeGhost = testTypes.flying[6].type;
                var damageCalcFirstTypeGhost = testTypes.flying[6].damage;
                var typeCalcFirstTypeGrass = testTypes.flying[7].type;
                var damageCalcFirstTypeGrass = testTypes.flying[7].damage;
                var typeCalcFirstTypeGround = testTypes.flying[8].type;
                var damageCalcFirstTypeGround = testTypes.flying[8].damage;
                var typeCalcFirstTypeIce = testTypes.flying[9].type;
                var damageCalcFirstTypeIce = testTypes.flying[9].damage;
                var typeCalcFirstTypeNormal = testTypes.flying[10].type;
                var damageCalcFirstTypeNormal = testTypes.flying[10].damage;
                var typeCalcFirstTypePoison = testTypes.flying[11].type;
                var damageCalcFirstTypePoison = testTypes.flying[11].damage;
                var typeCalcFirstTypePsychic = testTypes.flying[12].type;
                var damageCalcFirstTypePsychic = testTypes.flying[12].damage;
                var typeCalcFirstTypeRock = testTypes.flying[13].type;
                var damageCalcFirstTypeRock = testTypes.flying[13].damage;
                var typeCalcFirstTypeWater = testTypes.flying[14].type;
                var damageCalcFirstTypeWater = testTypes.flying[14].damage;
            }
            else if (pokemonType === "ghost"){
                var typeCalcFirstTypeBug = testTypes.ghost[0].type;
                var damageCalcFirstTypeBug = testTypes.ghost[0].damage;
                var typeCalcFirstTypeDragon = testTypes.ghost[1].type;
                var damageCalcFirstTypeDragon = testTypes.ghost[1].damage;
                var typeCalcFirstTypeElectric = testTypes.ghost[2].type;
                var damageCalcFirstTypeElectric = testTypes.ghost[2].damage;
                var typeCalcFirstTypeFighting = testTypes.ghost[3].type;
                var damageCalcFirstTypeFighting = testTypes.ghost[3].damage;
                var typeCalcFirstTypeFire = testTypes.ghost[4].type;
                var damageCalcFirstTypeFire = testTypes.ghost[4].damage;
                var typeCalcFirstTypeFlying = testTypes.ghost[5].type;
                var damageCalcFirstTypeFlying = testTypes.ghost[5].damage;
                var typeCalcFirstTypeGhost = testTypes.ghost[6].type;
                var damageCalcFirstTypeGhost = testTypes.ghost[6].damage;
                var typeCalcFirstTypeGrass = testTypes.ghost[7].type;
                var damageCalcFirstTypeGrass = testTypes.ghost[7].damage;
                var typeCalcFirstTypeGround = testTypes.ghost[8].type;
                var damageCalcFirstTypeGround = testTypes.ghost[8].damage;
                var typeCalcFirstTypeIce = testTypes.ghost[9].type;
                var damageCalcFirstTypeIce = testTypes.ghost[9].damage;
                var typeCalcFirstTypeNormal = testTypes.ghost[10].type;
                var damageCalcFirstTypeNormal = testTypes.ghost[10].damage;
                var typeCalcFirstTypePoison = testTypes.ghost[11].type;
                var damageCalcFirstTypePoison = testTypes.ghost[11].damage;
                var typeCalcFirstTypePsychic = testTypes.ghost[12].type;
                var damageCalcFirstTypePsychic = testTypes.ghost[12].damage;
                var typeCalcFirstTypeRock = testTypes.ghost[13].type;
                var damageCalcFirstTypeRock = testTypes.ghost[13].damage;
                var typeCalcFirstTypeWater = testTypes.ghost[14].type;
                var damageCalcFirstTypeWater = testTypes.ghost[14].damage;
            }
            else if (pokemonType === "grass"){
                var typeCalcFirstTypeBug = testTypes.grass[0].type;
                var damageCalcFirstTypeBug = testTypes.grass[0].damage;
                var typeCalcFirstTypeDragon = testTypes.grass[1].type;
                var damageCalcFirstTypeDragon = testTypes.grass[1].damage;
                var typeCalcFirstTypeElectric = testTypes.grass[2].type;
                var damageCalcFirstTypeElectric = testTypes.grass[2].damage;
                var typeCalcFirstTypeFighting = testTypes.grass[3].type;
                var damageCalcFirstTypeFighting = testTypes.grass[3].damage;
                var typeCalcFirstTypeFire = testTypes.grass[4].type;
                var damageCalcFirstTypeFire = testTypes.grass[4].damage;
                var typeCalcFirstTypeFlying = testTypes.grass[5].type;
                var damageCalcFirstTypeFlying = testTypes.grass[5].damage;
                var typeCalcFirstTypeGhost = testTypes.grass[6].type;
                var damageCalcFirstTypeGhost = testTypes.grass[6].damage;
                var typeCalcFirstTypeGrass = testTypes.grass[7].type;
                var damageCalcFirstTypeGrass = testTypes.grass[7].damage;
                var typeCalcFirstTypeGround = testTypes.grass[8].type;
                var damageCalcFirstTypeGround = testTypes.grass[8].damage;
                var typeCalcFirstTypeIce = testTypes.grass[9].type;
                var damageCalcFirstTypeIce = testTypes.grass[9].damage;
                var typeCalcFirstTypeNormal = testTypes.grass[10].type;
                var damageCalcFirstTypeNormal = testTypes.grass[10].damage;
                var typeCalcFirstTypePoison = testTypes.grass[11].type;
                var damageCalcFirstTypePoison = testTypes.grass[11].damage;
                var typeCalcFirstTypePsychic = testTypes.grass[12].type;
                var damageCalcFirstTypePsychic = testTypes.grass[12].damage;
                var typeCalcFirstTypeRock = testTypes.grass[13].type;
                var damageCalcFirstTypeRock = testTypes.grass[13].damage;
                var typeCalcFirstTypeWater = testTypes.grass[14].type;
                var damageCalcFirstTypeWater = testTypes.grass[14].damage;
            }
            else if (pokemonType === "ground"){
                var typeCalcFirstTypeBug = testTypes.ground[0].type;
                var damageCalcFirstTypeBug = testTypes.ground[0].damage;
                var typeCalcFirstTypeDragon = testTypes.ground[1].type;
                var damageCalcFirstTypeDragon = testTypes.ground[1].damage;
                var typeCalcFirstTypeElectric = testTypes.ground[2].type;
                var damageCalcFirstTypeElectric = testTypes.ground[2].damage;
                var typeCalcFirstTypeFighting = testTypes.ground[3].type;
                var damageCalcFirstTypeFighting = testTypes.ground[3].damage;
                var typeCalcFirstTypeFire = testTypes.ground[4].type;
                var damageCalcFirstTypeFire = testTypes.ground[4].damage;
                var typeCalcFirstTypeFlying = testTypes.ground[5].type;
                var damageCalcFirstTypeFlying = testTypes.ground[5].damage;
                var typeCalcFirstTypeGhost = testTypes.ground[6].type;
                var damageCalcFirstTypeGhost = testTypes.ground[6].damage;
                var typeCalcFirstTypeGrass = testTypes.ground[7].type;
                var damageCalcFirstTypeGrass = testTypes.ground[7].damage;
                var typeCalcFirstTypeGround = testTypes.ground[8].type;
                var damageCalcFirstTypeGround = testTypes.ground[8].damage;
                var typeCalcFirstTypeIce = testTypes.ground[9].type;
                var damageCalcFirstTypeIce = testTypes.ground[9].damage;
                var typeCalcFirstTypeNormal = testTypes.ground[10].type;
                var damageCalcFirstTypeNormal = testTypes.ground[10].damage;
                var typeCalcFirstTypePoison = testTypes.ground[11].type;
                var damageCalcFirstTypePoison = testTypes.ground[11].damage;
                var typeCalcFirstTypePsychic = testTypes.ground[12].type;
                var damageCalcFirstTypePsychic = testTypes.ground[12].damage;
                var typeCalcFirstTypeRock = testTypes.ground[13].type;
                var damageCalcFirstTypeRock = testTypes.ground[13].damage;
                var typeCalcFirstTypeWater = testTypes.ground[14].type;
                var damageCalcFirstTypeWater = testTypes.ground[14].damage;
            }
            else if (pokemonType === "ice"){
                var typeCalcFirstTypeBug = testTypes.ice[0].type;
                var damageCalcFirstTypeBug = testTypes.ice[0].damage;
                var typeCalcFirstTypeDragon = testTypes.ice[1].type;
                var damageCalcFirstTypeDragon = testTypes.ice[1].damage;
                var typeCalcFirstTypeElectric = testTypes.ice[2].type;
                var damageCalcFirstTypeElectric = testTypes.ice[2].damage;
                var typeCalcFirstTypeFighting = testTypes.ice[3].type;
                var damageCalcFirstTypeFighting = testTypes.ice[3].damage;
                var typeCalcFirstTypeFire = testTypes.ice[4].type;
                var damageCalcFirstTypeFire = testTypes.ice[4].damage;
                var typeCalcFirstTypeFlying = testTypes.ice[5].type;
                var damageCalcFirstTypeFlying = testTypes.ice[5].damage;
                var typeCalcFirstTypeGhost = testTypes.ice[6].type;
                var damageCalcFirstTypeGhost = testTypes.ice[6].damage;
                var typeCalcFirstTypeGrass = testTypes.ice[7].type;
                var damageCalcFirstTypeGrass = testTypes.ice[7].damage;
                var typeCalcFirstTypeGround = testTypes.ice[8].type;
                var damageCalcFirstTypeGround = testTypes.ice[8].damage;
                var typeCalcFirstTypeIce = testTypes.ice[9].type;
                var damageCalcFirstTypeIce = testTypes.ice[9].damage;
                var typeCalcFirstTypeNormal = testTypes.ice[10].type;
                var damageCalcFirstTypeNormal = testTypes.ice[10].damage;
                var typeCalcFirstTypePoison = testTypes.ice[11].type;
                var damageCalcFirstTypePoison = testTypes.ice[11].damage;
                var typeCalcFirstTypePsychic = testTypes.ice[12].type;
                var damageCalcFirstTypePsychic = testTypes.ice[12].damage;
                var typeCalcFirstTypeRock = testTypes.ice[13].type;
                var damageCalcFirstTypeRock = testTypes.ice[13].damage;
                var typeCalcFirstTypeWater = testTypes.ice[14].type;
                var damageCalcFirstTypeWater = testTypes.ice[14].damage;
            }
            else if (pokemonType === "normal"){
                var typeCalcFirstTypeBug = testTypes.normal[0].type;
                var damageCalcFirstTypeBug = testTypes.normal[0].damage;
                var typeCalcFirstTypeDragon = testTypes.normal[1].type;
                var damageCalcFirstTypeDragon = testTypes.normal[1].damage;
                var typeCalcFirstTypeElectric = testTypes.normal[2].type;
                var damageCalcFirstTypeElectric = testTypes.normal[2].damage;
                var typeCalcFirstTypeFighting = testTypes.normal[3].type;
                var damageCalcFirstTypeFighting = testTypes.normal[3].damage;
                var typeCalcFirstTypeFire = testTypes.normal[4].type;
                var damageCalcFirstTypeFire = testTypes.normal[4].damage;
                var typeCalcFirstTypeFlying = testTypes.normal[5].type;
                var damageCalcFirstTypeFlying = testTypes.normal[5].damage;
                var typeCalcFirstTypeGhost = testTypes.normal[6].type;
                var damageCalcFirstTypeGhost = testTypes.normal[6].damage;
                var typeCalcFirstTypeGrass = testTypes.normal[7].type;
                var damageCalcFirstTypeGrass = testTypes.normal[7].damage;
                var typeCalcFirstTypeGround = testTypes.normal[8].type;
                var damageCalcFirstTypeGround = testTypes.normal[8].damage;
                var typeCalcFirstTypeIce = testTypes.normal[9].type;
                var damageCalcFirstTypeIce = testTypes.normal[9].damage;
                var typeCalcFirstTypeNormal = testTypes.normal[10].type;
                var damageCalcFirstTypeNormal = testTypes.normal[10].damage;
                var typeCalcFirstTypePoison = testTypes.normal[11].type;
                var damageCalcFirstTypePoison = testTypes.normal[11].damage;
                var typeCalcFirstTypePsychic = testTypes.normal[12].type;
                var damageCalcFirstTypePsychic = testTypes.normal[12].damage;
                var typeCalcFirstTypeRock = testTypes.normal[13].type;
                var damageCalcFirstTypeRock = testTypes.normal[13].damage;
                var typeCalcFirstTypeWater = testTypes.normal[14].type;
                var damageCalcFirstTypeWater = testTypes.normal[14].damage;
            }
            else if (pokemonType === "poison"){
                var typeCalcFirstTypeBug = testTypes.poison[0].type;
                var damageCalcFirstTypeBug = testTypes.poison[0].damage;
                var typeCalcFirstTypeDragon = testTypes.poison[1].type;
                var damageCalcFirstTypeDragon = testTypes.poison[1].damage;
                var typeCalcFirstTypeElectric = testTypes.poison[2].type;
                var damageCalcFirstTypeElectric = testTypes.poison[2].damage;
                var typeCalcFirstTypeFighting = testTypes.poison[3].type;
                var damageCalcFirstTypeFighting = testTypes.poison[3].damage;
                var typeCalcFirstTypeFire = testTypes.poison[4].type;
                var damageCalcFirstTypeFire = testTypes.poison[4].damage;
                var typeCalcFirstTypeFlying = testTypes.poison[5].type;
                var damageCalcFirstTypeFlying = testTypes.poison[5].damage;
                var typeCalcFirstTypeGhost = testTypes.poison[6].type;
                var damageCalcFirstTypeGhost = testTypes.poison[6].damage;
                var typeCalcFirstTypeGrass = testTypes.poison[7].type;
                var damageCalcFirstTypeGrass = testTypes.poison[7].damage;
                var typeCalcFirstTypeGround = testTypes.poison[8].type;
                var damageCalcFirstTypeGround = testTypes.poison[8].damage;
                var typeCalcFirstTypeIce = testTypes.poison[9].type;
                var damageCalcFirstTypeIce = testTypes.poison[9].damage;
                var typeCalcFirstTypeNormal = testTypes.poison[10].type;
                var damageCalcFirstTypeNormal = testTypes.poison[10].damage;
                var typeCalcFirstTypePoison = testTypes.poison[11].type;
                var damageCalcFirstTypePoison = testTypes.poison[11].damage;
                var typeCalcFirstTypePsychic = testTypes.poison[12].type;
                var damageCalcFirstTypePsychic = testTypes.poison[12].damage;
                var typeCalcFirstTypeRock = testTypes.poison[13].type;
                var damageCalcFirstTypeRock = testTypes.poison[13].damage;
                var typeCalcFirstTypeWater = testTypes.poison[14].type;
                var damageCalcFirstTypeWater = testTypes.poison[14].damage;
            }
            else if (pokemonType === "psychic"){
                var typeCalcFirstTypeBug = testTypes.psychic[0].type;
                var damageCalcFirstTypeBug = testTypes.psychic[0].damage;
                var typeCalcFirstTypeDragon = testTypes.psychic[1].type;
                var damageCalcFirstTypeDragon = testTypes.psychic[1].damage;
                var typeCalcFirstTypeElectric = testTypes.psychic[2].type;
                var damageCalcFirstTypeElectric = testTypes.psychic[2].damage;
                var typeCalcFirstTypeFighting = testTypes.psychic[3].type;
                var damageCalcFirstTypeFighting = testTypes.psychic[3].damage;
                var typeCalcFirstTypeFire = testTypes.psychic[4].type;
                var damageCalcFirstTypeFire = testTypes.psychic[4].damage;
                var typeCalcFirstTypeFlying = testTypes.psychic[5].type;
                var damageCalcFirstTypeFlying = testTypes.psychic[5].damage;
                var typeCalcFirstTypeGhost = testTypes.psychic[6].type;
                var damageCalcFirstTypeGhost = testTypes.psychic[6].damage;
                var typeCalcFirstTypeGrass = testTypes.psychic[7].type;
                var damageCalcFirstTypeGrass = testTypes.psychic[7].damage;
                var typeCalcFirstTypeGround = testTypes.psychic[8].type;
                var damageCalcFirstTypeGround = testTypes.psychic[8].damage;
                var typeCalcFirstTypeIce = testTypes.psychic[9].type;
                var damageCalcFirstTypeIce = testTypes.psychic[9].damage;
                var typeCalcFirstTypeNormal = testTypes.psychic[10].type;
                var damageCalcFirstTypeNormal = testTypes.psychic[10].damage;
                var typeCalcFirstTypePoison = testTypes.psychic[11].type;
                var damageCalcFirstTypePoison = testTypes.psychic[11].damage;
                var typeCalcFirstTypePsychic = testTypes.psychic[12].type;
                var damageCalcFirstTypePsychic = testTypes.psychic[12].damage;
                var typeCalcFirstTypeRock = testTypes.psychic[13].type;
                var damageCalcFirstTypeRock = testTypes.psychic[13].damage;
                var typeCalcFirstTypeWater = testTypes.psychic[14].type;
                var damageCalcFirstTypeWater = testTypes.psychic[14].damage;
            }
            else if (pokemonType === "rock"){
                var typeCalcFirstTypeBug = testTypes.rock[0].type;
                var damageCalcFirstTypeBug = testTypes.rock[0].damage;
                var typeCalcFirstTypeDragon = testTypes.rock[1].type;
                var damageCalcFirstTypeDragon = testTypes.rock[1].damage;
                var typeCalcFirstTypeElectric = testTypes.rock[2].type;
                var damageCalcFirstTypeElectric = testTypes.rock[2].damage;
                var typeCalcFirstTypeFighting = testTypes.rock[3].type;
                var damageCalcFirstTypeFighting = testTypes.rock[3].damage;
                var typeCalcFirstTypeFire = testTypes.rock[4].type;
                var damageCalcFirstTypeFire = testTypes.rock[4].damage;
                var typeCalcFirstTypeFlying = testTypes.rock[5].type;
                var damageCalcFirstTypeFlying = testTypes.rock[5].damage;
                var typeCalcFirstTypeGhost = testTypes.rock[6].type;
                var damageCalcFirstTypeGhost = testTypes.rock[6].damage;
                var typeCalcFirstTypeGrass = testTypes.rock[7].type;
                var damageCalcFirstTypeGrass = testTypes.rock[7].damage;
                var typeCalcFirstTypeGround = testTypes.rock[8].type;
                var damageCalcFirstTypeGround = testTypes.rock[8].damage;
                var typeCalcFirstTypeIce = testTypes.rock[9].type;
                var damageCalcFirstTypeIce = testTypes.rock[9].damage;
                var typeCalcFirstTypeNormal = testTypes.rock[10].type;
                var damageCalcFirstTypeNormal = testTypes.rock[10].damage;
                var typeCalcFirstTypePoison = testTypes.rock[11].type;
                var damageCalcFirstTypePoison = testTypes.rock[11].damage;
                var typeCalcFirstTypePsychic = testTypes.rock[12].type;
                var damageCalcFirstTypePsychic = testTypes.rock[12].damage;
                var typeCalcFirstTypeRock = testTypes.rock[13].type;
                var damageCalcFirstTypeRock = testTypes.rock[13].damage;
                var typeCalcFirstTypeWater = testTypes.rock[14].type;
                var damageCalcFirstTypeWater = testTypes.rock[14].damage;
            }
            else if (pokemonType === "water"){
                var typeCalcFirstTypeBug = testTypes.water[0].type;
                var damageCalcFirstTypeBug = testTypes.water[0].damage;
                var typeCalcFirstTypeDragon = testTypes.water[1].type;
                var damageCalcFirstTypeDragon = testTypes.water[1].damage;
                var typeCalcFirstTypeElectric = testTypes.water[2].type;
                var damageCalcFirstTypeElectric = testTypes.water[2].damage;
                var typeCalcFirstTypeFighting = testTypes.water[3].type;
                var damageCalcFirstTypeFighting = testTypes.water[3].damage;
                var typeCalcFirstTypeFire = testTypes.water[4].type;
                var damageCalcFirstTypeFire = testTypes.water[4].damage;
                var typeCalcFirstTypeFlying = testTypes.water[5].type;
                var damageCalcFirstTypeFlying = testTypes.water[5].damage;
                var typeCalcFirstTypeGhost = testTypes.water[6].type;
                var damageCalcFirstTypeGhost = testTypes.water[6].damage;
                var typeCalcFirstTypeGrass = testTypes.water[7].type;
                var damageCalcFirstTypeGrass = testTypes.water[7].damage;
                var typeCalcFirstTypeGround = testTypes.water[8].type;
                var damageCalcFirstTypeGround = testTypes.water[8].damage;
                var typeCalcFirstTypeIce = testTypes.water[9].type;
                var damageCalcFirstTypeIce = testTypes.water[9].damage;
                var typeCalcFirstTypeNormal = testTypes.water[10].type;
                var damageCalcFirstTypeNormal = testTypes.water[10].damage;
                var typeCalcFirstTypePoison = testTypes.water[11].type;
                var damageCalcFirstTypePoison = testTypes.water[11].damage;
                var typeCalcFirstTypePsychic = testTypes.water[12].type;
                var damageCalcFirstTypePsychic = testTypes.water[12].damage;
                var typeCalcFirstTypeRock = testTypes.water[13].type;
                var damageCalcFirstTypeRock = testTypes.water[13].damage;
                var typeCalcFirstTypeWater = testTypes.water[14].type;
                var damageCalcFirstTypeWater = testTypes.water[14].damage;
            }
// SECOND TYPE MATCHUPS
            if (pokemonType2 === "bug") {
                var typeCalcSecondTypeBug = testTypes.bug[0].type;
                var damageCalcSecondTypeBug = testTypes.bug[0].damage;
                var typeCalcSecondTypeDragon = testTypes.bug[1].type;
                var damageCalcSecondTypeDragon = testTypes.bug[1].damage;
                var typeCalcSecondTypeElectric = testTypes.bug[2].type;
                var damageCalcSecondTypeElectric = testTypes.bug[2].damage;
                var typeCalcSecondTypeFighting = testTypes.bug[3].type;
                var damageCalcSecondTypeFighting = testTypes.bug[3].damage;
                var typeCalcSecondTypeFire = testTypes.bug[4].type;
                var damageCalcSecondTypeFire = testTypes.bug[4].damage;
                var typeCalcSecondTypeFlying = testTypes.bug[5].type;
                var damageCalcSecondTypeFlying = testTypes.bug[5].damage;
                var typeCalcSecondTypeGhost = testTypes.bug[6].type;
                var damageCalcSecondTypeGhost = testTypes.bug[6].damage;
                var typeCalcSecondTypeGrass = testTypes.bug[7].type;
                var damageCalcSecondTypeGrass = testTypes.bug[7].damage;
                var typeCalcSecondTypeGround = testTypes.bug[8].type;
                var damageCalcSecondTypeGround = testTypes.bug[8].damage;
                var typeCalcSecondTypeIce = testTypes.bug[9].type;
                var damageCalcSecondTypeIce = testTypes.bug[9].damage;
                var typeCalcSecondTypeNormal = testTypes.bug[10].type;
                var damageCalcSecondTypeNormal = testTypes.bug[10].damage;
                var typeCalcSecondTypePoison = testTypes.bug[11].type;
                var damageCalcSecondTypePoison = testTypes.bug[11].damage;
                var typeCalcSecondTypePsychic = testTypes.bug[12].type;
                var damageCalcSecondTypePsychic = testTypes.bug[12].damage;
                var typeCalcSecondTypeRock = testTypes.bug[13].type;
                var damageCalcSecondTypeRock = testTypes.bug[13].damage;
                var typeCalcSecondTypeWater = testTypes.bug[14].type;
                var damageCalcSecondTypeWater = testTypes.bug[14].damage;
            }
            else if (pokemonType2 === "dragon"){
                var typeCalcSecondTypeBug = testTypes.dragon[0].type;
                var damageCalcSecondTypeBug = testTypes.dragon[0].damage;
                var typeCalcSecondTypeDragon = testTypes.dragon[1].type;
                var damageCalcSecondTypeDragon = testTypes.dragon[1].damage;
                var typeCalcSecondTypeElectric = testTypes.dragon[2].type;
                var damageCalcSecondTypeElectric = testTypes.dragon[2].damage;
                var typeCalcSecondTypeFighting = testTypes.dragon[3].type;
                var damageCalcSecondTypeFighting = testTypes.dragon[3].damage;
                var typeCalcSecondTypeFire = testTypes.dragon[4].type;
                var damageCalcSecondTypeFire = testTypes.dragon[4].damage;
                var typeCalcSecondTypeFlying = testTypes.dragon[5].type;
                var damageCalcSecondTypeFlying = testTypes.dragon[5].damage;
                var typeCalcSecondTypeGhost = testTypes.dragon[6].type;
                var damageCalcSecondTypeGhost = testTypes.dragon[6].damage;
                var typeCalcSecondTypeGrass = testTypes.dragon[7].type;
                var damageCalcSecondTypeGrass = testTypes.dragon[7].damage;
                var typeCalcSecondTypeGround = testTypes.dragon[8].type;
                var damageCalcSecondTypeGround = testTypes.dragon[8].damage;
                var typeCalcSecondTypeIce = testTypes.dragon[9].type;
                var damageCalcSecondTypeIce = testTypes.dragon[9].damage;
                var typeCalcSecondTypeNormal = testTypes.dragon[10].type;
                var damageCalcSecondTypeNormal = testTypes.dragon[10].damage;
                var typeCalcSecondTypePoison = testTypes.dragon[11].type;
                var damageCalcSecondTypePoison = testTypes.dragon[11].damage;
                var typeCalcSecondTypePsychic = testTypes.dragon[12].type;
                var damageCalcSecondTypePsychic = testTypes.dragon[12].damage;
                var typeCalcSecondTypeRock = testTypes.dragon[13].type;
                var damageCalcSecondTypeRock = testTypes.dragon[13].damage;
                var typeCalcSecondTypeWater = testTypes.dragon[14].type;
                var damageCalcSecondTypeWater = testTypes.dragon[14].damage;
            }
            else if (pokemonType2 === "electric"){
                var typeCalcSecondTypeBug = testTypes.electric[0].type;
                var damageCalcSecondTypeBug = testTypes.electric[0].damage;
                var typeCalcSecondTypeDragon = testTypes.electric[1].type;
                var damageCalcSecondTypeDragon = testTypes.electric[1].damage;
                var typeCalcSecondTypeElectric = testTypes.electric[2].type;
                var damageCalcSecondTypeElectric = testTypes.electric[2].damage;
                var typeCalcSecondTypeFighting = testTypes.electric[3].type;
                var damageCalcSecondTypeFighting = testTypes.electric[3].damage;
                var typeCalcSecondTypeFire = testTypes.electric[4].type;
                var damageCalcSecondTypeFire = testTypes.electric[4].damage;
                var typeCalcSecondTypeFlying = testTypes.electric[5].type;
                var damageCalcSecondTypeFlying = testTypes.electric[5].damage;
                var typeCalcSecondTypeGhost = testTypes.electric[6].type;
                var damageCalcSecondTypeGhost = testTypes.electric[6].damage;
                var typeCalcSecondTypeGrass = testTypes.electric[7].type;
                var damageCalcSecondTypeGrass = testTypes.electric[7].damage;
                var typeCalcSecondTypeGround = testTypes.electric[8].type;
                var damageCalcSecondTypeGround = testTypes.electric[8].damage;
                var typeCalcSecondTypeIce = testTypes.electric[9].type;
                var damageCalcSecondTypeIce = testTypes.electric[9].damage;
                var typeCalcSecondTypeNormal = testTypes.electric[10].type;
                var damageCalcSecondTypeNormal = testTypes.electric[10].damage;
                var typeCalcSecondTypePoison = testTypes.electric[11].type;
                var damageCalcSecondTypePoison = testTypes.electric[11].damage;
                var typeCalcSecondTypePsychic = testTypes.electric[12].type;
                var damageCalcSecondTypePsychic = testTypes.electric[12].damage;
                var typeCalcSecondTypeRock = testTypes.electric[13].type;
                var damageCalcSecondTypeRock = testTypes.electric[13].damage;
                var typeCalcSecondTypeWater = testTypes.electric[14].type;
                var damageCalcSecondTypeWater = testTypes.electric[14].damage;
            }
            else if (pokemonType2 === "fighting"){
                var typeCalcSecondTypeBug = testTypes.fighting[0].type;
                var damageCalcSecondTypeBug = testTypes.fighting[0].damage;
                var typeCalcSecondTypeDragon = testTypes.fighting[1].type;
                var damageCalcSecondTypeDragon = testTypes.fighting[1].damage;
                var typeCalcSecondTypeElectric = testTypes.fighting[2].type;
                var damageCalcSecondTypeElectric = testTypes.fighting[2].damage;
                var typeCalcSecondTypeFighting = testTypes.fighting[3].type;
                var damageCalcSecondTypeFighting = testTypes.fighting[3].damage;
                var typeCalcSecondTypeFire = testTypes.fighting[4].type;
                var damageCalcSecondTypeFire = testTypes.fighting[4].damage;
                var typeCalcSecondTypeFlying = testTypes.fighting[5].type;
                var damageCalcSecondTypeFlying = testTypes.fighting[5].damage;
                var typeCalcSecondTypeGhost = testTypes.fighting[6].type;
                var damageCalcSecondTypeGhost = testTypes.fighting[6].damage;
                var typeCalcSecondTypeGrass = testTypes.fighting[7].type;
                var damageCalcSecondTypeGrass = testTypes.fighting[7].damage;
                var typeCalcSecondTypeGround = testTypes.fighting[8].type;
                var damageCalcSecondTypeGround = testTypes.fighting[8].damage;
                var typeCalcSecondTypeIce = testTypes.fighting[9].type;
                var damageCalcSecondTypeIce = testTypes.fighting[9].damage;
                var typeCalcSecondTypeNormal = testTypes.fighting[10].type;
                var damageCalcSecondTypeNormal = testTypes.fighting[10].damage;
                var typeCalcSecondTypePoison = testTypes.fighting[11].type;
                var damageCalcSecondTypePoison = testTypes.fighting[11].damage;
                var typeCalcSecondTypePsychic = testTypes.fighting[12].type;
                var damageCalcSecondTypePsychic = testTypes.fighting[12].damage;
                var typeCalcSecondTypeRock = testTypes.fighting[13].type;
                var damageCalcSecondTypeRock = testTypes.fighting[13].damage;
                var typeCalcSecondTypeWater = testTypes.fighting[14].type;
                var damageCalcSecondTypeWater = testTypes.fighting[14].damage;
            }
            else if (pokemonType2 === "fire"){
                var typeCalcSecondTypeBug = testTypes.fire[0].type;
                var damageCalcSecondTypeBug = testTypes.fire[0].damage;
                var typeCalcSecondTypeDragon = testTypes.fire[1].type;
                var damageCalcSecondTypeDragon = testTypes.fire[1].damage;
                var typeCalcSecondTypeElectric = testTypes.fire[2].type;
                var damageCalcSecondTypeElectric = testTypes.fire[2].damage;
                var typeCalcSecondTypeFighting = testTypes.fire[3].type;
                var damageCalcSecondTypeFighting = testTypes.fire[3].damage;
                var typeCalcSecondTypeFire = testTypes.fire[4].type;
                var damageCalcSecondTypeFire = testTypes.fire[4].damage;
                var typeCalcSecondTypeFlying = testTypes.fire[5].type;
                var damageCalcSecondTypeFlying = testTypes.fire[5].damage;
                var typeCalcSecondTypeGhost = testTypes.fire[6].type;
                var damageCalcSecondTypeGhost = testTypes.fire[6].damage;
                var typeCalcSecondTypeGrass = testTypes.fire[7].type;
                var damageCalcSecondTypeGrass = testTypes.fire[7].damage;
                var typeCalcSecondTypeGround = testTypes.fire[8].type;
                var damageCalcSecondTypeGround = testTypes.fire[8].damage;
                var typeCalcSecondTypeIce = testTypes.fire[9].type;
                var damageCalcSecondTypeIce = testTypes.fire[9].damage;
                var typeCalcSecondTypeNormal = testTypes.fire[10].type;
                var damageCalcSecondTypeNormal = testTypes.fire[10].damage;
                var typeCalcSecondTypePoison = testTypes.fire[11].type;
                var damageCalcSecondTypePoison = testTypes.fire[11].damage;
                var typeCalcSecondTypePsychic = testTypes.fire[12].type;
                var damageCalcSecondTypePsychic = testTypes.fire[12].damage;
                var typeCalcSecondTypeRock = testTypes.fire[13].type;
                var damageCalcSecondTypeRock = testTypes.fire[13].damage;
                var typeCalcSecondTypeWater = testTypes.fire[14].type;
                var damageCalcSecondTypeWater = testTypes.fire[14].damage;
            }
            else if (pokemonType2 === "flying"){
                var typeCalcSecondTypeBug = testTypes.flying[0].type;
                var damageCalcSecondTypeBug = testTypes.flying[0].damage;
                var typeCalcSecondTypeDragon = testTypes.flying[1].type;
                var damageCalcSecondTypeDragon = testTypes.flying[1].damage;
                var typeCalcSecondTypeElectric = testTypes.flying[2].type;
                var damageCalcSecondTypeElectric = testTypes.flying[2].damage;
                var typeCalcSecondTypeFighting = testTypes.flying[3].type;
                var damageCalcSecondTypeFighting = testTypes.flying[3].damage;
                var typeCalcSecondTypeFire = testTypes.flying[4].type;
                var damageCalcSecondTypeFire = testTypes.flying[4].damage;
                var typeCalcSecondTypeFlying = testTypes.flying[5].type;
                var damageCalcSecondTypeFlying = testTypes.flying[5].damage;
                var typeCalcSecondTypeGhost = testTypes.flying[6].type;
                var damageCalcSecondTypeGhost = testTypes.flying[6].damage;
                var typeCalcSecondTypeGrass = testTypes.flying[7].type;
                var damageCalcSecondTypeGrass = testTypes.flying[7].damage;
                var typeCalcSecondTypeGround = testTypes.flying[8].type;
                var damageCalcSecondTypeGround = testTypes.flying[8].damage;
                var typeCalcSecondTypeIce = testTypes.flying[9].type;
                var damageCalcSecondTypeIce = testTypes.flying[9].damage;
                var typeCalcSecondTypeNormal = testTypes.flying[10].type;
                var damageCalcSecondTypeNormal = testTypes.flying[10].damage;
                var typeCalcSecondTypePoison = testTypes.flying[11].type;
                var damageCalcSecondTypePoison = testTypes.flying[11].damage;
                var typeCalcSecondTypePsychic = testTypes.flying[12].type;
                var damageCalcSecondTypePsychic = testTypes.flying[12].damage;
                var typeCalcSecondTypeRock = testTypes.flying[13].type;
                var damageCalcSecondTypeRock = testTypes.flying[13].damage;
                var typeCalcSecondTypeWater = testTypes.flying[14].type;
                var damageCalcSecondTypeWater = testTypes.flying[14].damage;
            }
            else if (pokemonType2 === "ghost"){
                var typeCalcSecondTypeBug = testTypes.ghost[0].type;
                var damageCalcSecondTypeBug = testTypes.ghost[0].damage;
                var typeCalcSecondTypeDragon = testTypes.ghost[1].type;
                var damageCalcSecondTypeDragon = testTypes.ghost[1].damage;
                var typeCalcSecondTypeElectric = testTypes.ghost[2].type;
                var damageCalcSecondTypeElectric = testTypes.ghost[2].damage;
                var typeCalcSecondTypeFighting = testTypes.ghost[3].type;
                var damageCalcSecondTypeFighting = testTypes.ghost[3].damage;
                var typeCalcSecondTypeFire = testTypes.ghost[4].type;
                var damageCalcSecondTypeFire = testTypes.ghost[4].damage;
                var typeCalcSecondTypeFlying = testTypes.ghost[5].type;
                var damageCalcSecondTypeFlying = testTypes.ghost[5].damage;
                var typeCalcSecondTypeGhost = testTypes.ghost[6].type;
                var damageCalcSecondTypeGhost = testTypes.ghost[6].damage;
                var typeCalcSecondTypeGrass = testTypes.ghost[7].type;
                var damageCalcSecondTypeGrass = testTypes.ghost[7].damage;
                var typeCalcSecondTypeGround = testTypes.ghost[8].type;
                var damageCalcSecondTypeGround = testTypes.ghost[8].damage;
                var typeCalcSecondTypeIce = testTypes.ghost[9].type;
                var damageCalcSecondTypeIce = testTypes.ghost[9].damage;
                var typeCalcSecondTypeNormal = testTypes.ghost[10].type;
                var damageCalcSecondTypeNormal = testTypes.ghost[10].damage;
                var typeCalcSecondTypePoison = testTypes.ghost[11].type;
                var damageCalcSecondTypePoison = testTypes.ghost[11].damage;
                var typeCalcSecondTypePsychic = testTypes.ghost[12].type;
                var damageCalcSecondTypePsychic = testTypes.ghost[12].damage;
                var typeCalcSecondTypeRock = testTypes.ghost[13].type;
                var damageCalcSecondTypeRock = testTypes.ghost[13].damage;
                var typeCalcSecondTypeWater = testTypes.ghost[14].type;
                var damageCalcSecondTypeWater = testTypes.ghost[14].damage;
            }
            else if (pokemonType2 === "grass"){
                var typeCalcSecondTypeBug = testTypes.grass[0].type;
                var damageCalcSecondTypeBug = testTypes.grass[0].damage;
                var typeCalcSecondTypeDragon = testTypes.grass[1].type;
                var damageCalcSecondTypeDragon = testTypes.grass[1].damage;
                var typeCalcSecondTypeElectric = testTypes.grass[2].type;
                var damageCalcSecondTypeElectric = testTypes.grass[2].damage;
                var typeCalcSecondTypeFighting = testTypes.grass[3].type;
                var damageCalcSecondTypeFighting = testTypes.grass[3].damage;
                var typeCalcSecondTypeFire = testTypes.grass[4].type;
                var damageCalcSecondTypeFire = testTypes.grass[4].damage;
                var typeCalcSecondTypeFlying = testTypes.grass[5].type;
                var damageCalcSecondTypeFlying = testTypes.grass[5].damage;
                var typeCalcSecondTypeGhost = testTypes.grass[6].type;
                var damageCalcSecondTypeGhost = testTypes.grass[6].damage;
                var typeCalcSecondTypeGrass = testTypes.grass[7].type;
                var damageCalcSecondTypeGrass = testTypes.grass[7].damage;
                var typeCalcSecondTypeGround = testTypes.grass[8].type;
                var damageCalcSecondTypeGround = testTypes.grass[8].damage;
                var typeCalcSecondTypeIce = testTypes.grass[9].type;
                var damageCalcSecondTypeIce = testTypes.grass[9].damage;
                var typeCalcSecondTypeNormal = testTypes.grass[10].type;
                var damageCalcSecondTypeNormal = testTypes.grass[10].damage;
                var typeCalcSecondTypePoison = testTypes.grass[11].type;
                var damageCalcSecondTypePoison = testTypes.grass[11].damage;
                var typeCalcSecondTypePsychic = testTypes.grass[12].type;
                var damageCalcSecondTypePsychic = testTypes.grass[12].damage;
                var typeCalcSecondTypeRock = testTypes.grass[13].type;
                var damageCalcSecondTypeRock = testTypes.grass[13].damage;
                var typeCalcSecondTypeWater = testTypes.grass[14].type;
                var damageCalcSecondTypeWater = testTypes.grass[14].damage;
            }
            else if (pokemonType2 === "ground"){
                var typeCalcSecondTypeBug = testTypes.ground[0].type;
                var damageCalcSecondTypeBug = testTypes.ground[0].damage;
                var typeCalcSecondTypeDragon = testTypes.ground[1].type;
                var damageCalcSecondTypeDragon = testTypes.ground[1].damage;
                var typeCalcSecondTypeElectric = testTypes.ground[2].type;
                var damageCalcSecondTypeElectric = testTypes.ground[2].damage;
                var typeCalcSecondTypeFighting = testTypes.ground[3].type;
                var damageCalcSecondTypeFighting = testTypes.ground[3].damage;
                var typeCalcSecondTypeFire = testTypes.ground[4].type;
                var damageCalcSecondTypeFire = testTypes.ground[4].damage;
                var typeCalcSecondTypeFlying = testTypes.ground[5].type;
                var damageCalcSecondTypeFlying = testTypes.ground[5].damage;
                var typeCalcSecondTypeGhost = testTypes.ground[6].type;
                var damageCalcSecondTypeGhost = testTypes.ground[6].damage;
                var typeCalcSecondTypeGrass = testTypes.ground[7].type;
                var damageCalcSecondTypeGrass = testTypes.ground[7].damage;
                var typeCalcSecondTypeGround = testTypes.ground[8].type;
                var damageCalcSecondTypeGround = testTypes.ground[8].damage;
                var typeCalcSecondTypeIce = testTypes.ground[9].type;
                var damageCalcSecondTypeIce = testTypes.ground[9].damage;
                var typeCalcSecondTypeNormal = testTypes.ground[10].type;
                var damageCalcSecondTypeNormal = testTypes.ground[10].damage;
                var typeCalcSecondTypePoison = testTypes.ground[11].type;
                var damageCalcSecondTypePoison = testTypes.ground[11].damage;
                var typeCalcSecondTypePsychic = testTypes.ground[12].type;
                var damageCalcSecondTypePsychic = testTypes.ground[12].damage;
                var typeCalcSecondTypeRock = testTypes.ground[13].type;
                var damageCalcSecondTypeRock = testTypes.ground[13].damage;
                var typeCalcSecondTypeWater = testTypes.ground[14].type;
                var damageCalcSecondTypeWater = testTypes.ground[14].damage;
            }
            else if (pokemonType2 === "ice"){
                var typeCalcSecondTypeBug = testTypes.ice[0].type;
                var damageCalcSecondTypeBug = testTypes.ice[0].damage;
                var typeCalcSecondTypeDragon = testTypes.ice[1].type;
                var damageCalcSecondTypeDragon = testTypes.ice[1].damage;
                var typeCalcSecondTypeElectric = testTypes.ice[2].type;
                var damageCalcSecondTypeElectric = testTypes.ice[2].damage;
                var typeCalcSecondTypeFighting = testTypes.ice[3].type;
                var damageCalcSecondTypeFighting = testTypes.ice[3].damage;
                var typeCalcSecondTypeFire = testTypes.ice[4].type;
                var damageCalcSecondTypeFire = testTypes.ice[4].damage;
                var typeCalcSecondTypeFlying = testTypes.ice[5].type;
                var damageCalcSecondTypeFlying = testTypes.ice[5].damage;
                var typeCalcSecondTypeGhost = testTypes.ice[6].type;
                var damageCalcSecondTypeGhost = testTypes.ice[6].damage;
                var typeCalcSecondTypeGrass = testTypes.ice[7].type;
                var damageCalcSecondTypeGrass = testTypes.ice[7].damage;
                var typeCalcSecondTypeGround = testTypes.ice[8].type;
                var damageCalcSecondTypeGround = testTypes.ice[8].damage;
                var typeCalcSecondTypeIce = testTypes.ice[9].type;
                var damageCalcSecondTypeIce = testTypes.ice[9].damage;
                var typeCalcSecondTypeNormal = testTypes.ice[10].type;
                var damageCalcSecondTypeNormal = testTypes.ice[10].damage;
                var typeCalcSecondTypePoison = testTypes.ice[11].type;
                var damageCalcSecondTypePoison = testTypes.ice[11].damage;
                var typeCalcSecondTypePsychic = testTypes.ice[12].type;
                var damageCalcSecondTypePsychic = testTypes.ice[12].damage;
                var typeCalcSecondTypeRock = testTypes.ice[13].type;
                var damageCalcSecondTypeRock = testTypes.ice[13].damage;
                var typeCalcSecondTypeWater = testTypes.ice[14].type;
                var damageCalcSecondTypeWater = testTypes.ice[14].damage;
            }
            else if (pokemonType2 === "normal"){
                var typeCalcSecondTypeBug = testTypes.normal[0].type;
                var damageCalcSecondTypeBug = testTypes.normal[0].damage;
                var typeCalcSecondTypeDragon = testTypes.normal[1].type;
                var damageCalcSecondTypeDragon = testTypes.normal[1].damage;
                var typeCalcSecondTypeElectric = testTypes.normal[2].type;
                var damageCalcSecondTypeElectric = testTypes.normal[2].damage;
                var typeCalcSecondTypeFighting = testTypes.normal[3].type;
                var damageCalcSecondTypeFighting = testTypes.normal[3].damage;
                var typeCalcSecondTypeFire = testTypes.normal[4].type;
                var damageCalcSecondTypeFire = testTypes.normal[4].damage;
                var typeCalcSecondTypeFlying = testTypes.normal[5].type;
                var damageCalcSecondTypeFlying = testTypes.normal[5].damage;
                var typeCalcSecondTypeGhost = testTypes.normal[6].type;
                var damageCalcSecondTypeGhost = testTypes.normal[6].damage;
                var typeCalcSecondTypeGrass = testTypes.normal[7].type;
                var damageCalcSecondTypeGrass = testTypes.normal[7].damage;
                var typeCalcSecondTypeGround = testTypes.normal[8].type;
                var damageCalcSecondTypeGround = testTypes.normal[8].damage;
                var typeCalcSecondTypeIce = testTypes.normal[9].type;
                var damageCalcSecondTypeIce = testTypes.normal[9].damage;
                var typeCalcSecondTypeNormal = testTypes.normal[10].type;
                var damageCalcSecondTypeNormal = testTypes.normal[10].damage;
                var typeCalcSecondTypePoison = testTypes.normal[11].type;
                var damageCalcSecondTypePoison = testTypes.normal[11].damage;
                var typeCalcSecondTypePsychic = testTypes.normal[12].type;
                var damageCalcSecondTypePsychic = testTypes.normal[12].damage;
                var typeCalcSecondTypeRock = testTypes.normal[13].type;
                var damageCalcSecondTypeRock = testTypes.normal[13].damage;
                var typeCalcSecondTypeWater = testTypes.normal[14].type;
                var damageCalcSecondTypeWater = testTypes.normal[14].damage;
            }
            else if (pokemonType2 === "poison"){
                var typeCalcSecondTypeBug = testTypes.poison[0].type;
                var damageCalcSecondTypeBug = testTypes.poison[0].damage;
                var typeCalcSecondTypeDragon = testTypes.poison[1].type;
                var damageCalcSecondTypeDragon = testTypes.poison[1].damage;
                var typeCalcSecondTypeElectric = testTypes.poison[2].type;
                var damageCalcSecondTypeElectric = testTypes.poison[2].damage;
                var typeCalcSecondTypeFighting = testTypes.poison[3].type;
                var damageCalcSecondTypeFighting = testTypes.poison[3].damage;
                var typeCalcSecondTypeFire = testTypes.poison[4].type;
                var damageCalcSecondTypeFire = testTypes.poison[4].damage;
                var typeCalcSecondTypeFlying = testTypes.poison[5].type;
                var damageCalcSecondTypeFlying = testTypes.poison[5].damage;
                var typeCalcSecondTypeGhost = testTypes.poison[6].type;
                var damageCalcSecondTypeGhost = testTypes.poison[6].damage;
                var typeCalcSecondTypeGrass = testTypes.poison[7].type;
                var damageCalcSecondTypeGrass = testTypes.poison[7].damage;
                var typeCalcSecondTypeGround = testTypes.poison[8].type;
                var damageCalcSecondTypeGround = testTypes.poison[8].damage;
                var typeCalcSecondTypeIce = testTypes.poison[9].type;
                var damageCalcSecondTypeIce = testTypes.poison[9].damage;
                var typeCalcSecondTypeNormal = testTypes.poison[10].type;
                var damageCalcSecondTypeNormal = testTypes.poison[10].damage;
                var typeCalcSecondTypePoison = testTypes.poison[11].type;
                var damageCalcSecondTypePoison = testTypes.poison[11].damage;
                var typeCalcSecondTypePsychic = testTypes.poison[12].type;
                var damageCalcSecondTypePsychic = testTypes.poison[12].damage;
                var typeCalcSecondTypeRock = testTypes.poison[13].type;
                var damageCalcSecondTypeRock = testTypes.poison[13].damage;
                var typeCalcSecondTypeWater = testTypes.poison[14].type;
                var damageCalcSecondTypeWater = testTypes.poison[14].damage;
            }
            else if (pokemonType2 === "psychic"){
                var typeCalcSecondTypeBug = testTypes.psychic[0].type;
                var damageCalcSecondTypeBug = testTypes.psychic[0].damage;
                var typeCalcSecondTypeDragon = testTypes.psychic[1].type;
                var damageCalcSecondTypeDragon = testTypes.psychic[1].damage;
                var typeCalcSecondTypeElectric = testTypes.psychic[2].type;
                var damageCalcSecondTypeElectric = testTypes.psychic[2].damage;
                var typeCalcSecondTypeFighting = testTypes.psychic[3].type;
                var damageCalcSecondTypeFighting = testTypes.psychic[3].damage;
                var typeCalcSecondTypeFire = testTypes.psychic[4].type;
                var damageCalcSecondTypeFire = testTypes.psychic[4].damage;
                var typeCalcSecondTypeFlying = testTypes.psychic[5].type;
                var damageCalcSecondTypeFlying = testTypes.psychic[5].damage;
                var typeCalcSecondTypeGhost = testTypes.psychic[6].type;
                var damageCalcSecondTypeGhost = testTypes.psychic[6].damage;
                var typeCalcSecondTypeGrass = testTypes.psychic[7].type;
                var damageCalcSecondTypeGrass = testTypes.psychic[7].damage;
                var typeCalcSecondTypeGround = testTypes.psychic[8].type;
                var damageCalcSecondTypeGround = testTypes.psychic[8].damage;
                var typeCalcSecondTypeIce = testTypes.psychic[9].type;
                var damageCalcSecondTypeIce = testTypes.psychic[9].damage;
                var typeCalcSecondTypeNormal = testTypes.psychic[10].type;
                var damageCalcSecondTypeNormal = testTypes.psychic[10].damage;
                var typeCalcSecondTypePoison = testTypes.psychic[11].type;
                var damageCalcSecondTypePoison = testTypes.psychic[11].damage;
                var typeCalcSecondTypePsychic = testTypes.psychic[12].type;
                var damageCalcSecondTypePsychic = testTypes.psychic[12].damage;
                var typeCalcSecondTypeRock = testTypes.psychic[13].type;
                var damageCalcSecondTypeRock = testTypes.psychic[13].damage;
                var typeCalcSecondTypeWater = testTypes.psychic[14].type;
                var damageCalcSecondTypeWater = testTypes.psychic[14].damage;
            }
            else if (pokemonType2 === "rock"){
                var typeCalcSecondTypeBug = testTypes.rock[0].type;
                var damageCalcSecondTypeBug = testTypes.rock[0].damage;
                var typeCalcSecondTypeDragon = testTypes.rock[1].type;
                var damageCalcSecondTypeDragon = testTypes.rock[1].damage;
                var typeCalcSecondTypeElectric = testTypes.rock[2].type;
                var damageCalcSecondTypeElectric = testTypes.rock[2].damage;
                var typeCalcSecondTypeFighting = testTypes.rock[3].type;
                var damageCalcSecondTypeFighting = testTypes.rock[3].damage;
                var typeCalcSecondTypeFire = testTypes.rock[4].type;
                var damageCalcSecondTypeFire = testTypes.rock[4].damage;
                var typeCalcSecondTypeFlying = testTypes.rock[5].type;
                var damageCalcSecondTypeFlying = testTypes.rock[5].damage;
                var typeCalcSecondTypeGhost = testTypes.rock[6].type;
                var damageCalcSecondTypeGhost = testTypes.rock[6].damage;
                var typeCalcSecondTypeGrass = testTypes.rock[7].type;
                var damageCalcSecondTypeGrass = testTypes.rock[7].damage;
                var typeCalcSecondTypeGround = testTypes.rock[8].type;
                var damageCalcSecondTypeGround = testTypes.rock[8].damage;
                var typeCalcSecondTypeIce = testTypes.rock[9].type;
                var damageCalcSecondTypeIce = testTypes.rock[9].damage;
                var typeCalcSecondTypeNormal = testTypes.rock[10].type;
                var damageCalcSecondTypeNormal = testTypes.rock[10].damage;
                var typeCalcSecondTypePoison = testTypes.rock[11].type;
                var damageCalcSecondTypePoison = testTypes.rock[11].damage;
                var typeCalcSecondTypePsychic = testTypes.rock[12].type;
                var damageCalcSecondTypePsychic = testTypes.rock[12].damage;
                var typeCalcSecondTypeRock = testTypes.rock[13].type;
                var damageCalcSecondTypeRock = testTypes.rock[13].damage;
                var typeCalcSecondTypeWater = testTypes.rock[14].type;
                var damageCalcSecondTypeWater = testTypes.rock[14].damage;
            }
            else if (pokemonType2 === "water"){
                var typeCalcSecondTypeBug = testTypes.water[0].type;
                var damageCalcSecondTypeBug = testTypes.water[0].damage;
                var typeCalcSecondTypeDragon = testTypes.water[1].type;
                var damageCalcSecondTypeDragon = testTypes.water[1].damage;
                var typeCalcSecondTypeElectric = testTypes.water[2].type;
                var damageCalcSecondTypeElectric = testTypes.water[2].damage;
                var typeCalcSecondTypeFighting = testTypes.water[3].type;
                var damageCalcSecondTypeFighting = testTypes.water[3].damage;
                var typeCalcSecondTypeFire = testTypes.water[4].type;
                var damageCalcSecondTypeFire = testTypes.water[4].damage;
                var typeCalcSecondTypeFlying = testTypes.water[5].type;
                var damageCalcSecondTypeFlying = testTypes.water[5].damage;
                var typeCalcSecondTypeGhost = testTypes.water[6].type;
                var damageCalcSecondTypeGhost = testTypes.water[6].damage;
                var typeCalcSecondTypeGrass = testTypes.water[7].type;
                var damageCalcSecondTypeGrass = testTypes.water[7].damage;
                var typeCalcSecondTypeGround = testTypes.water[8].type;
                var damageCalcSecondTypeGround = testTypes.water[8].damage;
                var typeCalcSecondTypeIce = testTypes.water[9].type;
                var damageCalcSecondTypeIce = testTypes.water[9].damage;
                var typeCalcSecondTypeNormal = testTypes.water[10].type;
                var damageCalcSecondTypeNormal = testTypes.water[10].damage;
                var typeCalcSecondTypePoison = testTypes.water[11].type;
                var damageCalcSecondTypePoison = testTypes.water[11].damage;
                var typeCalcSecondTypePsychic = testTypes.water[12].type;
                var damageCalcSecondTypePsychic = testTypes.water[12].damage;
                var typeCalcSecondTypeRock = testTypes.water[13].type;
                var damageCalcSecondTypeRock = testTypes.water[13].damage;
                var typeCalcSecondTypeWater = testTypes.water[14].type;
                var damageCalcSecondTypeWater = testTypes.water[14].damage;
            }
// multiplying type matchups for dual types
            function matchupCalc() {
                        var bothTypeCalcBug = (damageCalcFirstTypeBug * damageCalcSecondTypeBug);
                        var bothTypeCalcDragon = (damageCalcFirstTypeDragon * damageCalcSecondTypeDragon);
                        var bothTypeCalcElectric = (damageCalcFirstTypeElectric * damageCalcSecondTypeElectric);
                        var bothTypeCalcFighting = (damageCalcFirstTypeFighting * damageCalcSecondTypeFighting);
                        var bothTypeCalcFire = (damageCalcFirstTypeFire * damageCalcSecondTypeFire);
                        var bothTypeCalcFlying = (damageCalcFirstTypeFlying * damageCalcSecondTypeFlying);
                        var bothTypeCalcGhost = (damageCalcFirstTypeGhost * damageCalcSecondTypeGhost);
                        var bothTypeCalcGrass = (damageCalcFirstTypeGrass * damageCalcSecondTypeGrass);
                        var bothTypeCalcGround = (damageCalcFirstTypeGround * damageCalcSecondTypeGround);
                        var bothTypeCalcIce = (damageCalcFirstTypeIce * damageCalcSecondTypeIce);
                        var bothTypeCalcNormal = (damageCalcFirstTypeNormal * damageCalcSecondTypeNormal); 
                        var bothTypeCalcPoison = (damageCalcFirstTypePoison * damageCalcSecondTypePoison);
                        var bothTypeCalcPsychic = (damageCalcFirstTypePsychic * damageCalcSecondTypePsychic);
                        var bothTypeCalcRock = (damageCalcFirstTypeRock * damageCalcSecondTypeRock);
                        var bothTypeCalcWater = (damageCalcFirstTypeWater * damageCalcSecondTypeWater);

                        console.log(bothTypeCalcBug);
                        console.log(bothTypeCalcDragon);
                        console.log(bothTypeCalcElectric);
                        console.log(bothTypeCalcFighting);
                        console.log(bothTypeCalcFire);
                        console.log(bothTypeCalcFlying);
                        console.log(bothTypeCalcGhost);
                        console.log(bothTypeCalcGrass);
                        console.log(bothTypeCalcGround);
                        console.log(bothTypeCalcIce);
                        console.log(bothTypeCalcNormal);
                        console.log(bothTypeCalcPoison);
                        console.log(bothTypeCalcPsychic);
                        console.log(bothTypeCalcRock);
                        console.log(bothTypeCalcWater);

                    // display on "TAKES MORE DAMAGE FROM:" column only if searched pokemon takes more than 1x damage
                        if (bothTypeCalcBug > 1) {
                            $("#weak-one").text(typeCalcFirstTypeBug.toUpperCase() + ": " + bothTypeCalcBug + "x")
                        }
                        if (bothTypeCalcDragon > 1) {
                            $("#weak-two").text(typeCalcFirstTypeDragon.toUpperCase() + ": " + bothTypeCalcDragon + "x")
                        }
                        if (bothTypeCalcElectric > 1) {
                            $("#weak-three").text(typeCalcFirstTypeElectric.toUpperCase() + ": " + bothTypeCalcElectric + "x")
                        }
                        if (bothTypeCalcFighting > 1) {
                            $("#weak-four").text(typeCalcFirstTypeFighting.toUpperCase() + ": " + bothTypeCalcFighting + "x")
                        }
                        if (bothTypeCalcFire > 1) {
                            $("#weak-five").text(typeCalcFirstTypeFire.toUpperCase() + ": " + bothTypeCalcFire + "x")
                        }
                        if (bothTypeCalcFlying > 1) {
                            $("#weak-six").text(typeCalcFirstTypeFlying.toUpperCase() + ": " + bothTypeCalcFlying + "x")
                        }
                        if (bothTypeCalcGhost > 1) {
                            $("#weak-seven").text(typeCalcFirstTypeGhost.toUpperCase() + ": " + bothTypeCalcGhost + "x")
                        }
                        if (bothTypeCalcGrass > 1) {
                            $("#weak-eight").text(typeCalcFirstTypeGrass.toUpperCase() + ": " + bothTypeCalcGrass + "x")
                        }
                        if (bothTypeCalcGround > 1) {
                            $("#weak-nine").text(typeCalcFirstTypeGround.toUpperCase() + ": " + bothTypeCalcGround + "x")
                        }
                        if (bothTypeCalcIce > 1) {
                            $("#weak-ten").text(typeCalcFirstTypeIce.toUpperCase() + ": " + bothTypeCalcIce + "x")
                        }
                        if (bothTypeCalcNormal > 1) {
                            $("#weak-eleven").text(typeCalcFirstTypeNormal.toUpperCase() + ": " + bothTypeCalcNormal + "x")
                        }
                        if (bothTypeCalcPoison > 1) {
                            $("#weak-twelve").text(typeCalcFirstTypePoison.toUpperCase() + ": " + bothTypeCalcPoison + "x")
                        }
                        if (bothTypeCalcPsychic > 1) {
                            $("#weak-thirteen").text(typeCalcFirstTypePsychic.toUpperCase() + ": " + bothTypeCalcPsychic + "x")
                        }
                        if (bothTypeCalcRock > 1) {
                            $("#weak-fourteen").text(typeCalcFirstTypeRock.toUpperCase() + ": " + bothTypeCalcRock + "x")
                        }
                        if (bothTypeCalcWater > 1) {
                            $("#weak-fifteen").text(typeCalcFirstTypeWater.toUpperCase() + ": " + bothTypeCalcWater + "x")
                        }




                    // display on "TAKES LESS DAMAGE FROM:" column only if searched pokemon takes less than 1x damage
                        if (bothTypeCalcBug < 1) {
                            $("#strong-one").text(typeCalcFirstTypeBug.toUpperCase() + ": " + bothTypeCalcBug + "x")
                        }
                        if (bothTypeCalcDragon < 1) {
                            $("#strong-two").text(typeCalcFirstTypeDragon.toUpperCase() + ": " + bothTypeCalcDragon + "x")
                        }
                        if (bothTypeCalcElectric < 1) {
                            $("#strong-three").text(typeCalcFirstTypeElectric.toUpperCase() + ": " + bothTypeCalcElectric + "x")
                        }
                        if (bothTypeCalcFighting < 1) {
                            $("#strong-four").text(typeCalcFirstTypeFighting.toUpperCase() + ": " + bothTypeCalcFighting + "x")
                        }
                        if (bothTypeCalcFire < 1) {
                            $("#strong-five").text(typeCalcFirstTypeFire.toUpperCase() + ": " + bothTypeCalcFire + "x")
                        }
                        if (bothTypeCalcFlying < 1) {
                            $("#strong-six").text(typeCalcFirstTypeFlying.toUpperCase() + ": " + bothTypeCalcFlying + "x")
                        }
                        if (bothTypeCalcGhost < 1) {
                            $("#strong-seven").text(typeCalcFirstTypeGhost.toUpperCase() + ": " + bothTypeCalcGhost + "x")
                        }
                        if (bothTypeCalcGrass < 1) {
                            $("#strong-eight").text(typeCalcFirstTypeGrass.toUpperCase() + ": " + bothTypeCalcGrass + "x")
                        }
                        if (bothTypeCalcGround < 1) {
                            $("#strong-nine").text(typeCalcFirstTypeGround.toUpperCase() + ": " + bothTypeCalcGround + "x")
                        }
                        if (bothTypeCalcIce < 1) {
                            $("#strong-ten").text(typeCalcFirstTypeIce.toUpperCase() + ": " + bothTypeCalcIce + "x")
                        }
                        if (bothTypeCalcNormal < 1) {
                            $("#strong-eleven").text(typeCalcFirstTypeNormal.toUpperCase() + ": " + bothTypeCalcNormal + "x")
                        }
                        if (bothTypeCalcPoison < 1) {
                            $("#strong-twelve").text(typeCalcFirstTypePoison.toUpperCase() + ": " + bothTypeCalcPoison + "x")
                        }
                        if (bothTypeCalcPsychic < 1) {
                            $("#strong-thirteen").text(typeCalcFirstTypePsychic.toUpperCase() + ": " + bothTypeCalcPsychic + "x")
                        }
                        if (bothTypeCalcRock < 1) {
                            $("#strong-fourteen").text(typeCalcFirstTypeRock.toUpperCase() + ": " + bothTypeCalcRock + "x")
                        }
                        if (bothTypeCalcWater < 1) {
                            $("#strong-fifteen").text(typeCalcFirstTypeWater.toUpperCase() + ": " + bothTypeCalcWater + "x")
                        }
            };
// type matchups for monotypes
            function matchupCalcMonotype() {
                // display on "TAKES MORE DAMAGE FROM:" column only if searched pokemon takes more than 1x damage
                    if (damageCalcFirstTypeBug > 1) {
                        $("#weak-one").text(typeCalcFirstTypeBug.toUpperCase() + ": " + damageCalcFirstTypeBug + "x")
                    }
                    if (damageCalcFirstTypeDragon > 1) {
                        $("#weak-two").text(typeCalcFirstTypeDragon.toUpperCase() + ": " + damageCalcFirstTypeDragon + "x")
                    }
                    if (damageCalcFirstTypeElectric > 1) {
                        $("#weak-three").text(typeCalcFirstTypeElectric.toUpperCase() + ": " + damageCalcFirstTypeElectric + "x")
                    }
                    if (damageCalcFirstTypeFighting > 1) {
                        $("#weak-four").text(typeCalcFirstTypeFighting.toUpperCase() + ": " + damageCalcFirstTypeFighting + "x")
                    }
                    if (damageCalcFirstTypeFire > 1) {
                        $("#weak-five").text(typeCalcFirstTypeFire.toUpperCase() + ": " + damageCalcFirstTypeFire + "x")
                    }
                    if (damageCalcFirstTypeFlying > 1) {
                        $("#weak-six").text(typeCalcFirstTypeFlying.toUpperCase() + ": " + damageCalcFirstTypeFlying + "x")
                    }
                    if (damageCalcFirstTypeGhost > 1) {
                        $("#weak-seven").text(typeCalcFirstTypeGhost.toUpperCase() + ": " + damageCalcFirstTypeGhost + "x")
                    }
                    if (damageCalcFirstTypeGrass > 1) {
                        $("#weak-eight").text(typeCalcFirstTypeGrass.toUpperCase() + ": " + damageCalcFirstTypeGrass + "x")
                    }
                    if (damageCalcFirstTypeGround > 1) {
                        $("#weak-nine").text(typeCalcFirstTypeGround.toUpperCase() + ": " + damageCalcFirstTypeGround + "x")
                    }
                    if (damageCalcFirstTypeIce > 1) {
                        $("#weak-ten").text(typeCalcFirstTypeIce.toUpperCase() + ": " + damageCalcFirstTypeIce + "x")
                    }
                    if (damageCalcFirstTypeNormal > 1) {
                        $("#weak-eleven").text(typeCalcFirstTypeNormal.toUpperCase() + ": " + damageCalcFirstTypeNormal + "x")
                    }
                    if (damageCalcFirstTypePoison > 1) {
                        $("#weak-twelve").text(typeCalcFirstTypePoison.toUpperCase() + ": " + damageCalcFirstTypePoison + "x")
                    }
                    if (damageCalcFirstTypePsychic > 1) {
                        $("#weak-thirteen").text(typeCalcFirstTypePsychic.toUpperCase() + ": " + damageCalcFirstTypePsychic + "x")
                    }
                    if (damageCalcFirstTypeRock > 1) {
                        $("#weak-fourteen").text(typeCalcFirstTypeRock.toUpperCase() + ": " + damageCalcFirstTypeRock + "x")
                    }
                    if (damageCalcFirstTypeWater > 1) {
                        $("#weak-fifteen").text(typeCalcFirstTypeWater.toUpperCase() + ": " + damageCalcFirstTypeWater + "x")
                    }




                // display on "TAKES LESS DAMAGE FROM:" column only if searched pokemon takes less than 1x damage
                    if (damageCalcFirstTypeBug < 1) {
                        $("#strong-one").text(typeCalcFirstTypeBug.toUpperCase() + ": " + damageCalcFirstTypeBug + "x")
                    }
                    if (damageCalcFirstTypeDragon < 1) {
                        $("#strong-two").text(typeCalcFirstTypeDragon.toUpperCase() + ": " + damageCalcFirstTypeDragon + "x")
                    }
                    if (damageCalcFirstTypeElectric < 1) {
                        $("#strong-three").text(typeCalcFirstTypeElectric.toUpperCase() + ": " + damageCalcFirstTypeElectric + "x")
                    }
                    if (damageCalcFirstTypeFighting < 1) {
                        $("#strong-four").text(typeCalcFirstTypeFighting.toUpperCase() + ": " + damageCalcFirstTypeFighting + "x")
                    }
                    if (damageCalcFirstTypeFire < 1) {
                        $("#strong-five").text(typeCalcFirstTypeFire.toUpperCase() + ": " + damageCalcFirstTypeFire + "x")
                    }
                    if (damageCalcFirstTypeFlying < 1) {
                        $("#strong-six").text(typeCalcFirstTypeFlying.toUpperCase() + ": " + damageCalcFirstTypeFlying + "x")
                    }
                    if (damageCalcFirstTypeGhost < 1) {
                        $("#strong-seven").text(typeCalcFirstTypeGhost.toUpperCase() + ": " + damageCalcFirstTypeGhost + "x")
                    }
                    if (damageCalcFirstTypeGrass < 1) {
                        $("#strong-eight").text(typeCalcFirstTypeGrass.toUpperCase() + ": " + damageCalcFirstTypeGrass + "x")
                    }
                    if (damageCalcFirstTypeGround < 1) {
                        $("#strong-nine").text(typeCalcFirstTypeGround.toUpperCase() + ": " + damageCalcFirstTypeGround + "x")
                    }
                    if (damageCalcFirstTypeIce < 1) {
                        $("#strong-ten").text(typeCalcFirstTypeIce.toUpperCase() + ": " + damageCalcFirstTypeIce + "x")
                    }
                    if (damageCalcFirstTypeNormal < 1) {
                        $("#strong-eleven").text(typeCalcFirstTypeNormal.toUpperCase() + ": " + damageCalcFirstTypeNormal + "x")
                    }
                    if (damageCalcFirstTypePoison < 1) {
                        $("#strong-twelve").text(typeCalcFirstTypePoison.toUpperCase() + ": " + damageCalcFirstTypePoison + "x")
                    }
                    if (damageCalcFirstTypePsychic < 1) {
                        $("#strong-thirteen").text(typeCalcFirstTypePsychic.toUpperCase() + ": " + damageCalcFirstTypePsychic + "x")
                    }
                    if (damageCalcFirstTypeRock < 1) {
                        $("#strong-fourteen").text(typeCalcFirstTypeRock.toUpperCase() + ": " + damageCalcFirstTypeRock + "x")
                    }
                    if (damageCalcFirstTypeWater < 1) {
                        $("#strong-fifteen").text(typeCalcFirstTypeWater.toUpperCase() + ": " + damageCalcFirstTypeWater + "x")
                    }
            };

// if monotype, run monotype function
            if (pokemonType2 == null) {
                matchupCalcMonotype();
            }
// if not monotype, run dual type function
            else {
                matchupCalc();
            }

});

        $.ajax({
            url: pokedexURL,
            method: "GET"
        }).then(function(response) {

            console.log(response);

            var pokemonSpecies = response.genera[7].genus;

            $("#pokemon-fact").text(response.flavor_text_entries[0].flavor_text);

            // $("#pokemon-type").css("background-color", response.color.name);

            $("#pokemon-species").text("SPECIES: " + pokemonSpecies);

        });
};
function addToTeam() {

    var pokeSprite = document.querySelector("#pokemon-sprite-img").getAttribute("src");
    var pokeName = document.querySelector("#pokedex-name").textContent;
    var pokeType = document.querySelector("#pokemon-type").textContent.slice(5);
    
    localStorage.setItem("sprite", pokeSprite);
    localStorage.setItem("pokeName", pokeName);
    localStorage.setItem("pokeType", pokeType);
    localStorage.setItem("blank-img", "./pokeball.png")
    
    var notDefault1 = document.getElementById("poke-sprite1").getAttribute("src");
    var notDefault2 = document.getElementById("poke-sprite2").getAttribute("src");
    var notDefault3 = document.getElementById("poke-sprite3").getAttribute("src");
    var notDefault4 = document.getElementById("poke-sprite4").getAttribute("src");
    var notDefault5 = document.getElementById("poke-sprite5").getAttribute("src");
    var notDefault6 = document.getElementById("poke-sprite6").getAttribute("src");

    if (notDefault1 === "./pokeball.png") {
        document.getElementById("remove-from-team1").setAttribute("style", "display: block");
        document.getElementById("poke-sprite1").setAttribute("src", localStorage.getItem("sprite"));
        document.getElementById("team-pokemon1-text").innerHTML = `NAME: ` + localStorage.getItem("pokeName");
        document.getElementById("team-pokemon1-text2").innerHTML = `TYPE: `+ localStorage.getItem("pokeType");
    }
    
    else if (notDefault2 === "./pokeball.png") {
        document.getElementById("remove-from-team2").setAttribute("style", "display: block");
        document.getElementById("poke-sprite2").setAttribute("src", localStorage.getItem("sprite"));
        document.getElementById("team-pokemon2-text").innerHTML = `NAME: ` + localStorage.getItem("pokeName");
        document.getElementById("team-pokemon2-text2").innerHTML = `TYPE: `+ localStorage.getItem("pokeType");
    }

    else if (notDefault3 === "./pokeball.png") {
        document.getElementById("remove-from-team3").setAttribute("style", "display: block");
        document.getElementById("poke-sprite3").setAttribute("src", localStorage.getItem("sprite"));
        document.getElementById("team-pokemon3-text").innerHTML = `NAME: ` + localStorage.getItem("pokeName");
        document.getElementById("team-pokemon3-text2").innerHTML = `TYPE: `+ localStorage.getItem("pokeType");
    }

    else if (notDefault4 === "./pokeball.png") {
        document.getElementById("remove-from-team4").setAttribute("style", "display: block");
        document.getElementById("poke-sprite4").setAttribute("src", localStorage.getItem("sprite"));
        document.getElementById("team-pokemon4-text").innerHTML = `NAME: ` + localStorage.getItem("pokeName");
        document.getElementById("team-pokemon4-text2").innerHTML = `TYPE: `+ localStorage.getItem("pokeType");
    }

    else if (notDefault5 === "./pokeball.png") {
        document.getElementById("remove-from-team5").setAttribute("style", "display: block");
        document.getElementById("poke-sprite5").setAttribute("src", localStorage.getItem("sprite"));
        document.getElementById("team-pokemon5-text").innerHTML = `NAME: ` + localStorage.getItem("pokeName");
        document.getElementById("team-pokemon5-text2").innerHTML = `TYPE: `+ localStorage.getItem("pokeType");
    }

    else if (notDefault6 === "./pokeball.png") {
        document.getElementById("remove-from-team6").setAttribute("style", "display: block");
        document.getElementById("poke-sprite6").setAttribute("src", localStorage.getItem("sprite"));
        document.getElementById("team-pokemon6-text").innerHTML = `NAME: ` + localStorage.getItem("pokeName");
        document.getElementById("team-pokemon6-text2").innerHTML = `TYPE: `+ localStorage.getItem("pokeType");
    }

};
function removeFromTeamOne() {
    document.getElementById("remove-from-team1").setAttribute("style", "display: none");
    localStorage.removeItem("sprite");
    localStorage.removeItem("pokeType");
    localStorage.removeItem("pokeName");
    document.getElementById("poke-sprite1").setAttribute("src", "./pokeball.png");
    document.getElementById("team-pokemon1-text").innerHTML = ``;
    document.getElementById("team-pokemon1-text2").innerHTML = ``;
};
function removeFromTeamTwo() {
    document.getElementById("remove-from-team2").setAttribute("style", "display: none");
    localStorage.removeItem("sprite");
    localStorage.removeItem("pokeType");
    localStorage.removeItem("pokeName");
    document.getElementById("poke-sprite2").setAttribute("src", "./pokeball.png");
    document.getElementById("team-pokemon2-text").innerHTML = ``;
    document.getElementById("team-pokemon2-text2").innerHTML = ``;
};
function removeFromTeamThree() {
    document.getElementById("remove-from-team3").setAttribute("style", "display: none");
    localStorage.removeItem("sprite");
    localStorage.removeItem("pokeType");
    localStorage.removeItem("pokeName");
    document.getElementById("poke-sprite3").setAttribute("src", "./pokeball.png");
    document.getElementById("team-pokemon3-text").innerHTML = ``;
    document.getElementById("team-pokemon3-text2").innerHTML = ``;
};
function removeFromTeamFour() {
    document.getElementById("remove-from-team4").setAttribute("style", "display: none");
    localStorage.removeItem("sprite");
    localStorage.removeItem("pokeType");
    localStorage.removeItem("pokeName");
    document.getElementById("poke-sprite4").setAttribute("src", "./pokeball.png");
    document.getElementById("team-pokemon4-text").innerHTML = ``;
    document.getElementById("team-pokemon4-text2").innerHTML = ``;
};
function removeFromTeamFive() {
    document.getElementById("remove-from-team5").setAttribute("style", "display: none");
    localStorage.removeItem("sprite");
    localStorage.removeItem("pokeType");
    localStorage.removeItem("pokeName");
    document.getElementById("poke-sprite5").setAttribute("src", "./pokeball.png");
    document.getElementById("team-pokemon5-text").innerHTML = ``;
    document.getElementById("team-pokemon5-text2").innerHTML = ``;
};
function removeFromTeamSix() {
    document.getElementById("remove-from-team6").setAttribute("style", "display: none");
    localStorage.removeItem("sprite");
    localStorage.removeItem("pokeType");
    localStorage.removeItem("pokeName");
    document.getElementById("poke-sprite6").setAttribute("src", "./pokeball.png");
    document.getElementById("team-pokemon6-text").innerHTML = ``;
    document.getElementById("team-pokemon6-text2").innerHTML = ``;
};

addToTeamBtn.addEventListener("click", addToTeam);
removeFromTeamBtn1.addEventListener("click", removeFromTeamOne);
removeFromTeamBtn2.addEventListener("click", removeFromTeamTwo);
removeFromTeamBtn3.addEventListener("click", removeFromTeamThree);
removeFromTeamBtn4.addEventListener("click", removeFromTeamFour);
removeFromTeamBtn5.addEventListener("click", removeFromTeamFive);
removeFromTeamBtn6.addEventListener("click", removeFromTeamSix);


});

