async function loadMoreEvolutionInfo(i) {
    const element = allPokemons[i];
    let urlEvolution = element["evolution_chain"].url;
    let response = await fetch(urlEvolution);
    let responseAsJson = await response.json();
  
    element.evolution = responseAsJson;
  }

  const firstName = pokemon.evolution.chain.species.name;
  const secondName =pokemon.evolution.chain["evolves_to"][0].species.name;
  const thirdName = pokemon.evolution.chain["evolves_to"][0]["evolves_to"][0].species.name;

  for (let j = 0; j < allPokemons.length; j++) {
    const name = allPokemons[j].name;
    const mainTyp = allPokemons[j].types[0].type.name;
    const img = allPokemons[j].sprites.other["official-artwork"].front_default;

    if (name == firstName) {
      document.getElementById("evolution-img").innerHTML += evolutionHTML(img, mainTyp, j);
    }
    if (name == secondName) {
      document.getElementById("evolution-img").innerHTML += evolutionHTML(img, mainTyp, j);
    }
    if (name == thirdName) {
      document.getElementById("evolution-img").innerHTML += evolutionHTML(img, mainTyp, j);
    }
  }

  else {
    if (pokemon.evolution.chain["evolves_to"][0]["evolves_to"] != "") {
      loadEvolutionTitle();
      loadThreeEvolutions(name, pokemon);
    }
    if (pokemon.evolution.chain["evolves_to"][0]["evolves_to"] == "") {
      loadEvolutionTitle();
      loadTwoEvolutions(name, pokemon);
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