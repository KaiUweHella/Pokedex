let allPokemons = [];

async function init() {
  await loadPokemon();
  console.log(allPokemons);
}

async function loadPokemon() {
  for (let i = 1; i <= 20; i++) {
    let urlPokemon = `https://pokeapi.co/api/v2/pokemon/${i}`;
    let response = await fetch(urlPokemon);
    let responseAsJson = await response.json();
    let urlSpecies = `https://pokeapi.co/api/v2/pokemon-species/${i}`;
    let responseSpecies = await fetch(urlSpecies);
    let responseSpeciesAsJson = await responseSpecies.json();

    let bothResponse = {...responseAsJson, ...responseSpeciesAsJson};

    allPokemons.push(bothResponse);
  }
}



