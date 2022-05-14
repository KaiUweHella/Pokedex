async function init() {
  await loadPokemon();
  loadOverview();
  loadCategory();
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
  let overlay = document.getElementById("overlay")
  overlay.classList.remove("d-none");
  overlay.innerHTML = '';
  overlay.innerHTML = overlayHTML(i);
}

function hideOverlay(){
  document.getElementById("overlay").classList.add("d-none");
}
