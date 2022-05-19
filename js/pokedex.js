let allPokemons = [];
let pokemonEvolution = [];
let searchArray = [];
let allTypes = [];

async function loadPokemon() {
  for (let i = 1; i <= 30; i++) {
    let responseAsJson = await loadPokemonAPI(i);
    let responseSpeciesAsJson = await loadPokemonSpeciesAPI(i);

    let bothResponse = { ...responseAsJson, ...responseSpeciesAsJson };

    allPokemons.push(bothResponse);
  }
}

async function loadPokemonSpeciesAPI(i) {
  let urlSpecies = `https://pokeapi.co/api/v2/pokemon-species/${i}`;
  let responseSpecies = await fetch(urlSpecies);
  let responseSpeciesAsJson = await responseSpecies.json();

  return responseSpeciesAsJson;
}

async function loadPokemonAPI(i) {
  let urlPokemon = `https://pokeapi.co/api/v2/pokemon/${i}`;
  let response = await fetch(urlPokemon);
  let responseAsJson = await response.json();

  return responseAsJson;
}

async function loadMorePokemon() {
  let morePokemons = allPokemons.length + 10;

  for (let i = allPokemons.length; i <= morePokemons; i++) {
    let responseAsJson = await loadPokemonAPI(i);
    let responseSpeciesAsJson = await loadPokemonSpeciesAPI(i);

    let bothResponse = { ...responseAsJson, ...responseSpeciesAsJson };

    allPokemons.push(bothResponse);
  }
}

async function loadEvolutions() {
  await loadChain();
  await loadEvolutionImg();
}

async function loadChain() {
  for (let i = 1; i < 40; i++) {
    let urlEvolution = `https://pokeapi.co/api/v2/evolution-chain/${i}/`;
    let response = await fetch(urlEvolution);
    let responseAsJson = await response.json();

    loadEvolutionInName(responseAsJson);
  }
}

function loadEvolutionInName(responseAsJson) {
  const evolution = responseAsJson;
  const firstName = evolution.chain.species.name;
  if (evolution.chain["evolves_to"] != "") {
    let secondName = evolution.chain["evolves_to"][0].species.name;
    if (evolution.chain["evolves_to"][0]["evolves_to"] == "") {
      let secondName = testArray(evolution);
      pokemonEvolution.push([
        {
          name: firstName,
        },
        ...secondName,
      ]);
    } else {
      const thirdName =
        evolution.chain["evolves_to"][0]["evolves_to"][0].species.name;

      pokemonEvolution.push([
        {
          name: firstName,
        },
        {
          name: secondName,
        },
        {
          name: thirdName,
        },
      ]);
    }
  }
}

function testArray(evolution) {
  let secondName = [];
  for (let i = 0; i < evolution.chain["evolves_to"].length; i++) {
    const pokemonName = evolution.chain["evolves_to"][i].species.name;

    secondName.push({ name: pokemonName });
  }

  return secondName;
}

async function loadEvolutionImg() {
  for (let i = 0; i < pokemonEvolution.length; i++) {
    const evolution = pokemonEvolution[i];
    for (let j = 0; j < evolution.length; j++) {
      const name = evolution[j].name;
      let urlPokemon = `https://pokeapi.co/api/v2/pokemon/${name}`;

      let response = await fetch(urlPokemon);
      let responseAsJson = await response.json();

      let imgURL =
        responseAsJson.sprites.other["official-artwork"].front_default;

      evolution[j].img = imgURL;
    }
  }
}

async function loadMoreEvolutions() {
  await loadMoreChain();
  await loadMoreEvolutionImg();
  loadNumber = loadNumber + 10;
}

let loadNumber = 40;

async function loadMoreChain() {
  let length = loadNumber + 1;
  let evolutionLength = loadNumber + 10;
  for (let i = length; i < evolutionLength; i++) {
    let urlEvolution = `https://pokeapi.co/api/v2/evolution-chain/${i}/`;
    let response = await fetch(urlEvolution);
    let responseAsJson = await response.json();

    loadMoreEvolutionInName(responseAsJson);
  }
}

function loadMoreEvolutionInName(responseAsJson) {
  const evolution = responseAsJson;
  const firstName = evolution.chain.species.name;
  if (evolution.chain["evolves_to"] != "") {
    let secondName = evolution.chain["evolves_to"][0].species.name;
    if (evolution.chain["evolves_to"][0]["evolves_to"] == "") {
      let secondName = testArray(evolution);
      pokemonEvolution.push([
        {
          name: firstName,
        },
        ...secondName,
      ]);
    } else {
      const thirdName =
        evolution.chain["evolves_to"][0]["evolves_to"][0].species.name;

      pokemonEvolution.push([
        {
          name: firstName,
        },
        {
          name: secondName,
        },
        {
          name: thirdName,
        },
      ]);
    }
  }
}

async function loadMoreEvolutionImg() {
  let evolutionOldLength = pokemonEvolution.length - 10;
  for (let i = evolutionOldLength; i < pokemonEvolution.length; i++) {
    const evolution = pokemonEvolution[i];
    for (let j = 0; j < evolution.length; j++) {
      const name = evolution[j].name;
      let urlPokemon = `https://pokeapi.co/api/v2/pokemon/${name}`;

      let response = await fetch(urlPokemon);
      let responseAsJson = await response.json();

      let imgURL =
        responseAsJson.sprites.other["official-artwork"].front_default;

      evolution[j].img = imgURL;
    }
  }
}

async function loadTypes() {
  for (let i = 1; i <= 18; i++) {
    await fillAllTypes(i);
  }
  for (let i = 10001; i <= 10002; i++) {
    await fillAllTypes(i);
  }
}

async function fillAllTypes(i) {
  let urlTypes = `https://pokeapi.co/api/v2/type/${i}`;
  let response = await fetch(urlTypes);
  let responseAsJson = await response.json();

  allTypes.push(responseAsJson);
}

async function loadSearch() {
  let search = document.getElementById("input-search").value;
  if(!search){
    alert('Bitte gebe etwas ein');
    return
  }  
  let nameOrId = search.toLowerCase();
  let responseAsJson = await loadPokemonAPI(nameOrId);
  let responseSpeciesAsJson = await loadPokemonSpeciesAPI(nameOrId);
  let bothResponse = { ...responseAsJson, ...responseSpeciesAsJson };
  allPokemons.push(bothResponse);
  let i = allPokemons.length - 1;
  await evolutionOfSearch(i);
  showOverlay(i);
  deleteSearch();
}

async function evolutionOfSearch(i){
  let inArray = check(i);
  if (!inArray) {
    await loadSearchEvolutions(i);
  }
}

function check(i) {
  const pokemon = allPokemons[i];
  const name = pokemon.name;
  for (let i = 0; i < pokemonEvolution.length; i++) {
    const evolution = pokemonEvolution[i];
    for (let j = 0; j < evolution.length; j++) {
      const evolutionName = evolution[j].name;
      if (name == evolutionName) {
        return true;
      }
    }
  }
}

function deleteSearch() {
  document.getElementById("input-search").value = ``;
  allPokemons.pop();
  pokemonEvolution.pop();
}

async function loadSearchEvolutions() {
  await loadSearchChain();
  await loadSearchEvolutionImg();
}

async function loadSearchChain() {
  let i = allPokemons.length - 1;
  let urlEvolution = allPokemons[i].evolution_chain.url;
  let response = await fetch(urlEvolution);
  let responseAsJson = await response.json();

  loadSearchEvolutionInName(responseAsJson);
}

function loadSearchEvolutionInName(responseAsJson) {
  const evolution = responseAsJson;
  const firstName = evolution.chain.species.name;
  if (evolution.chain["evolves_to"] != "") {
    let secondName = evolution.chain["evolves_to"][0].species.name;
    if (evolution.chain["evolves_to"][0]["evolves_to"] == "") {
      let secondName = SearchEvolutionArray(evolution);
      pokemonEvolution.push([
        {
          name: firstName,
        },
        ...secondName,
      ]);
    } else {
      const thirdName =
        evolution.chain["evolves_to"][0]["evolves_to"][0].species.name;

      pokemonEvolution.push([
        {
          name: firstName,
        },
        {
          name: secondName,
        },
        {
          name: thirdName,
        },
      ]);
    }
  }
}

function SearchEvolutionArray(evolution) {
  let secondName = [];
  for (let i = 0; i < evolution.chain["evolves_to"].length; i++) {
    const pokemonName = evolution.chain["evolves_to"][i].species.name;

    secondName.push({ name: pokemonName });
  }

  return secondName;
}

async function loadSearchEvolutionImg() {
  let i = pokemonEvolution.length - 1;
  const evolution = pokemonEvolution[i];
  for (let j = 0; j < evolution.length; j++) {
    const name = evolution[j].name;
    let urlPokemon = `https://pokeapi.co/api/v2/pokemon/${name}`;
    let response = await fetch(urlPokemon);
    let responseAsJson = await response.json();

    let imgURL = responseAsJson.sprites.other["official-artwork"].front_default;

    evolution[j].img = imgURL;
  }
}
