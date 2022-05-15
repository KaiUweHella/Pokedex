async function init() {
  await loadPokemon();
  loadOverview();
  loadCategory();
  await loadTypes();
}

function loadOverview() {
  document.getElementById("overview").innerHTML = "";
  for (let i = 0; i < allPokemons.length; i++) {
    document.getElementById("overview").innerHTML += overviewHTML(i);
  }
}

function loadCategory() {
  for (let i = 0; i < allPokemons.length; i++) {
    const pokemon = allPokemons[i];
    for (let j = 0; j < pokemon.types.length; j++) {
      const pokemonCategory = pokemon.types[j];
      document.getElementById(`category-id${i}`).innerHTML +=
        categoryHTML(pokemonCategory);
    }
  }
}

function loadOverview() {
  document.getElementById("overview").innerHTML = "";
  for (let i = 0; i < allPokemons.length; i++) {
    document.getElementById("overview").innerHTML += overviewHTML(i);
  }
}

async function showMorePokemons() {
  showAnimation();
  await loadMorePokemon();
  showBtn();
  loadOverview();
  loadCategory();
}

function showAnimation() {
  document.getElementById("load-more-animation").classList.remove("d-none");
  document.getElementById("load-more-btn").classList.add("d-none");
}

function showBtn() {
  document.getElementById("load-more-animation").classList.add("d-none");
  document.getElementById("load-more-btn").classList.remove("d-none");
}

function showOverlay(i) {
  loadOverlay(i);
}

function hideOverlay() {
  document.getElementById("overlay").classList.add("d-none");
}

function loadOverlay(i) {
  let overlay = document.getElementById("overlay");
  overlay.classList.remove("d-none");
  overlay.innerHTML = "";
  overlay.innerHTML = overlayHTML(i);
  loadCardInfo(i);
}

function loadCardInfo(i) {
  loadCardCetgory(i);
  loadPokemonInfo(i);
  loadStats(i);
  loadEvolution(i);
  loadDescription(i);
  showStrength(i);
  showWeakness(i);
}

function loadCardCetgory(i) {
  const pokemon = allPokemons[i];
  for (let j = 0; j < pokemon.types.length; j++) {
    const pokemonCategory = pokemon.types[j];
    document.getElementById("category-card").innerHTML +=
      cardCategoryHTML(pokemonCategory);
  }
}

/* -------------------------------------------------------------------------- */
/*                              load general info                             */
/* -------------------------------------------------------------------------- */

function loadPokemonInfo(i) {
  loadGenera(i);
  loadHeight(i);
  loadWeight(i);
}

function loadGenera(i) {
  let generaText = allPokemons[i].genera[4].genus;
  const genera = generaText.split("-");

  let content = genera[0];
  let title = "Pokemon";

  document.getElementById("pokemon-info").innerHTML += infoHTML(content, title);
}

function loadHeight(i) {
  let height = allPokemons[i].height;

  var newHeight = (height / 10).toFixed(1).toString().replace(".", ",") + " m";

  let content = newHeight;
  let title = "Größe";

  document.getElementById("pokemon-info").innerHTML += infoHTML(content, title);
}

function loadWeight(i) {
  let weight = allPokemons[i].weight;

  let newWeight = (weight / 10).toFixed(1).toString().replace(".", ",") + " kg";

  let content = newWeight;
  let title = "Größe";

  document.getElementById("pokemon-info").innerHTML += infoHTML(content, title);
}

/* -------------------------------------------------------------------------- */
/*                              load basic stats                           */
/* -------------------------------------------------------------------------- */

function loadStats(i) {
  const pokemon = allPokemons[i];
  for (let j = 0; j < pokemon.stats.length; j++) {
    const pokemonStats = pokemon.stats[j];
    const pokemonFirstCategory = pokemon.types[0].type.name;
    const baseStat = pokemonStats["base_stat"];
    let statName = pokemonStats.stat.name;

    if (statName == "hp") {
      statName = "KP";
    }
    if (statName == "attack") {
      statName = "ANG";
    }
    if (statName == "defense") {
      statName = "VERT";
    }
    if (statName == "special-attack") {
      statName = "SP.-ANG";
    }
    if (statName == "special-defense") {
      statName = "SP.-VERT";
    }
    if (statName == "speed") {
      statName = "INIT";
    }

    document.getElementById("stats").innerHTML += statsHTML(
      baseStat,
      statName,
      pokemonFirstCategory
    );
  }
}

/* -------------------------------------------------------------------------- */
/*                              load evolution                           */
/* -------------------------------------------------------------------------- */

function loadEvolution(i) {
  const pokemon = allPokemons[i];

  if (pokemon.evolution.chain["evolves_to"][0]["evolves_to"] != "") {
    loadEvolutionTitle();
    loadThreeEvolutions(pokemon);
  }
  if (pokemon.evolution.chain["evolves_to"][0]["evolves_to"] == "") {
    loadEvolutionTitle();
    loadTwoEvolutions(pokemon);
  }
}

function loadEvolutionTitle() {
  document.getElementById("evolution").innerHTML = `<h3>Entwicklungen</h3>`;
}

function loadThreeEvolutions(pokemon) {
  const firstDevelopmentName = pokemon.evolution.chain.species.name;
  const secondDevelopmentName =
    pokemon.evolution.chain["evolves_to"][0].species.name;
  const thirdDevelopmentName =
    pokemon.evolution.chain["evolves_to"][0]["evolves_to"][0].species.name;

  for (let j = 0; j < allPokemons.length; j++) {
    const name = allPokemons[j].name;
    const mainTyp = allPokemons[j].types[0].type.name;
    const img = allPokemons[j].sprites.other["official-artwork"].front_default;

    if (name == firstDevelopmentName) {
      document.getElementById("evolution-img").innerHTML += evolutionHTML(
        img,
        mainTyp,
        j
      );
    }
    if (name == secondDevelopmentName) {
      document.getElementById("evolution-img").innerHTML += evolutionHTML(
        img,
        mainTyp,
        j
      );
    }
    if (name == thirdDevelopmentName) {
      document.getElementById("evolution-img").innerHTML += evolutionHTML(
        img,
        mainTyp,
        j
      );
    }
  }
}

function loadTwoEvolutions(pokemon) {
  const firstDevelopmentName = pokemon.evolution.chain.species.name;
  const secondDevelopmentName =
    pokemon.evolution.chain["evolves_to"][0].species.name;

  for (let j = 0; j < allPokemons.length; j++) {
    const name = allPokemons[j].name;
    const mainTyp = allPokemons[j].types[0].type.name;
    const img = allPokemons[j].sprites.other["official-artwork"].front_default;

    if (name == firstDevelopmentName) {
      document.getElementById("evolution-img").innerHTML += evolutionHTML(
        img,
        mainTyp,
        j
      );
    }
    if (name == secondDevelopmentName) {
      document.getElementById("evolution-img").innerHTML += evolutionHTML(
        img,
        mainTyp,
        j
      );
    }
  }
}

/* -------------------------------------------------------------------------- */
/*                              load description                              */
/* -------------------------------------------------------------------------- */

function loadDescription(i) {
  const description = allPokemons[i]["flavor_text_entries"][41]["flavor_text"];

  document.getElementById(
    "description"
  ).innerHTML = `<span class="description-text">${description}</span>`;
}

/* -------------------------------------------------------------------------- */
/*                                load strength                               */
/* -------------------------------------------------------------------------- */

function showStrength(i) {
  const mainTyp = allPokemons[i].types[0].type.name;

  for (let j = 0; j < allTypes.length; j++) {
    const typ = allTypes[j];
    if (typ.name == mainTyp) {
      loadStrength(typ);
      if (typ["damage_relations"]["double_damage_to"] == "") {
        document.getElementById("strength-container").classList.add("d-none");
      }
    }
  }
}

function loadStrength(typ) {
  let array = typ["damage_relations"]["double_damage_to"];
  for (let i = 0; i < array.length; i++) {
    const doubleDamageTo = array[i].name;
    document.getElementById("strength").innerHTML +=
      strengthHTML(doubleDamageTo);
  }
}

/* -------------------------------------------------------------------------- */
/*                                load weakness                               */
/* -------------------------------------------------------------------------- */

function showWeakness(i) {
  const mainTyp = allPokemons[i].types[0].type.name;

  for (let j = 0; j < allTypes.length; j++) {
    const typ = allTypes[j];
    if (typ.name == mainTyp) {
      loadWeakness(typ);
      if (typ["damage_relations"]["double_damage_from"] == "") {
        document.getElementById("strength-container").classList.add("d-none");
      }
    }
  }
}

function loadWeakness(typ) {
  let array = typ["damage_relations"]["double_damage_from"];
  for (let i = 0; i < array.length; i++) {
    const doubleDamageFrom = array[i].name;
    document.getElementById("weakness").innerHTML +=
      strengthHTML(doubleDamageFrom);
  }
}

/* -------------------------------------------------------------------------- */
/*                              show next pokemon                             */
/* -------------------------------------------------------------------------- */

function showNextPokemon(i) {
  if ((i+1) == allPokemons.length) {
    hideOverlay();
  } else {
    i++;
    loadOverlay(i);
  }
}

function showPokemonBefore(i) {
  if (i <= 1) {
    hideOverlay();
  } else {
    i--;
    loadOverlay(i);
  }
}
