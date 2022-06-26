async function init() {
  await loadPokemon();
  await loadTypes();
  await loadEvolutions();
  loadOverview();
  loadCategory();
  showBtn();
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

function showLoadingScreen() {
  document.getElementById("overlay").classList.remove("d-none");
  document.getElementById("overlay").innerHTML = loadHTML();
}

async function showMorePokemons() {
  showAnimation();
  await loadMorePokemon();
  await loadMoreEvolutions();
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

// function animation(){
//   const scroller = document.querySelector("#info-container");

//   scroller.addEventListener("scroll", (event) => {
//     if (scroller.scrollTop <= 10) {
//
//       return;
//     }
//
//   });
// }

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
    let baseStatWidth = pokemonStats["base_stat"];

    newStatName = chooseStatName(statName);

    if (baseStat >= 100) {
      baseStatWidth = 100;
    }

    document.getElementById("stats").innerHTML += statsHTML(
      baseStat,
      newStatName,
      pokemonFirstCategory,
      baseStatWidth
    );
  }
}

function chooseStatName(statName) {
  if (statName == "hp") {
    return (newStatName = "KP");
  }
  if (statName == "attack") {
    return (newStatName = "ANG");
  }
  if (statName == "defense") {
    return (newStatName = "VERT");
  }
  if (statName == "special-attack") {
    return (newStatName = "SP.-ANG");
  }
  if (statName == "special-defense") {
    return (newStatName = "SP.-VERT");
  }
  if (statName == "speed") {
    return (newStatName = "INIT");
  }
}

/* -------------------------------------------------------------------------- */
/*                              load evolution                           */
/* -------------------------------------------------------------------------- */

function loadEvolution(i) {
  const pokemon = allPokemons[i];
  const name = pokemon.name;
  showEvolutions(name, pokemon);
  addStyle(name);
}

function loadEvolutionTitle() {
  document.getElementById("evolution").innerHTML = `<h3>Entwicklungen</h3>`;
}

function addStyle(name) {
  for (let i = 0; i < pokemonEvolution.length; i++) {
    const evolution = pokemonEvolution[i];
    for (let j = 0; j < evolution.length; j++) {
      const evolutionName = evolution[j].name;
      if (name == evolutionName) {
        if (evolution.length > 3) {
          document
            .getElementById("evolution-img")
            .classList.remove("evolution-images");
          document
            .getElementById("evolution-img")
            .classList.add("evolution-more-images");
        }
      }
    }
  }
}

function showEvolutions(name, pokemon) {
  const mainTyp = pokemon.types[0].type.name;
  for (let i = 0; i < pokemonEvolution.length; i++) {
    const evolution = pokemonEvolution[i];
    for (let j = 0; j < evolution.length; j++) {
      const evolutionName = evolution[j].name;
      if (name == evolutionName) {
        for (let k = 0; k < evolution.length; k++) {
          const evolutionPos = evolution[k];
          loadEvolutionTitle();
          document.getElementById("evolution-img").innerHTML += evolutionHTML(
            evolutionPos,
            mainTyp
          );
        }
      }
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

  if (description == "") {
    document.getElementById("description-container").classList.add("d-none");
  }
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
  if (i + 1 >= allPokemons.length) {
    i = 0;
    loadOverlay(i);
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

/* -------------------------------------------------------------------------- */
/*                              scroll varieties                              */
/* -------------------------------------------------------------------------- */

function leftScroll() {
  let left = document.getElementById("varieties");
  left.scrollLeft += 400;

  if (left.scrollLeft >= 0) {
    document.getElementById("scroll-left").classList.remove("d-none");
  }
  if (left.scrollLeft >= 600) {
    document.getElementById("scroll-right").classList.add("d-none");
  }
}

function rightScroll() {
  let right = document.getElementById("varieties");
  right.scrollLeft -= 400;

  if (right.scrollLeft <= 300) {
    document.getElementById("scroll-left").classList.add("d-none");
  }
  if (right.scrollLeft >= 0) {
    document.getElementById("scroll-right").classList.remove("d-none");
  }
}
