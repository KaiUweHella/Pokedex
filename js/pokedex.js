let allPokemons = [];
let allTypes = [];

async function loadPokemon() {
  for (let i = 1; i <= 30; i++) {
    let urlPokemon = `https://pokeapi.co/api/v2/pokemon/${i}`;
    let response = await fetch(urlPokemon);
    let responseAsJson = await response.json();

    let urlSpecies = `https://pokeapi.co/api/v2/pokemon-species/${i}`;
    let responseSpecies = await fetch(urlSpecies);
    let responseSpeciesAsJson = await responseSpecies.json();

    let bothResponse = { ...responseAsJson, ...responseSpeciesAsJson };

    allPokemons.push(bothResponse);
  }

  loadEvolutionInfo();
}

async function loadMorePokemon() {
  let morePokemons = allPokemons.length + 20;

  for (let i = allPokemons.length; i <= morePokemons; i++) {
    let urlPokemon = `https://pokeapi.co/api/v2/pokemon/${i}`;
    let response = await fetch(urlPokemon);
    let responseAsJson = await response.json();
    let urlSpecies = `https://pokeapi.co/api/v2/pokemon-species/${i}`;
    let responseSpecies = await fetch(urlSpecies);
    let responseSpeciesAsJson = await responseSpecies.json();

    let bothResponse = { ...responseAsJson, ...responseSpeciesAsJson };

    allPokemons.push(bothResponse);
    loadMoreEvolutionInfo(i);
  }

  removeDuplicateEntries();
}

async function loadEvolutionInfo() {
  for (let i = 0; i < allPokemons.length; i++) {
    const element = allPokemons[i];
    let urlEvolution = element["evolution_chain"].url;
    let response = await fetch(urlEvolution);
    let responseAsJson = await response.json();

    element.evolution = responseAsJson;
  }
}

async function loadMoreEvolutionInfo(i) {
  const element = allPokemons[i];
  let urlEvolution = element["evolution_chain"].url;
  let response = await fetch(urlEvolution);
  let responseAsJson = await response.json();

  element.evolution = responseAsJson;
}

function removeDuplicateEntries() {
  const result = allPokemons.filter(
    (thing, index, self) =>
      index ===
      self.findIndex((t) => JSON.stringify(t) === JSON.stringify(thing))
  );

  allPokemons = result;
}

async function loadTypes() {
  for (let i = 1; i <= 20; i++) {
    let urlTypes = `https://pokeapi.co/api/v2/type/${i}`;
    let response = await fetch(urlTypes);
    let responseAsJson = await response.json();

    allTypes.push(responseAsJson);
  }
}