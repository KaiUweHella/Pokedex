function overviewHTML(i) {
  const mainTyp = allPokemons[i].types[0].type.name;
  const img = allPokemons[i].sprites.other["official-artwork"].front_default;
  const name = allPokemons[i].names[5].name;
  let shownNumber = i;

  shownNumber++;
  if (shownNumber.toString().length < 2) shownNumber = "0" + shownNumber;

  return /*html*/ `
        <div class="pokemon-background" style="background-color: rgba(var(--color-${mainTyp}), 0.2);" onclick="showOverlay(${i})">
            <span class="id-number" style="color: rgba(var(--color-${mainTyp}), 0.25);">
                ${shownNumber}
                <span class="pokemon-name" style="  color: rgba(var(--color-${mainTyp}), 1);">
                    ${name}
                </span>
            </span>
            <div class="category" id="category-id${i}">
                <!-- load category -->
            </div>
            <img class="pokemon-img" src="${img}" alt="">
        </div>
    `;
}

function categoryHTML(pokemonCategory) {
  const categoryName = pokemonCategory.type.name;

  return /*html*/ `
    <img class="round-img-category" src="./img/typ_icon/${categoryName}.svg" alt="">
    `;
}

function overlayHTML(i) {
  const mainTyp = allPokemons[i].types[0].type.name;
  const img = allPokemons[i].sprites.other["official-artwork"].front_default;
  const name = allPokemons[i].names[5].name;
  let shownNumber = i;

  shownNumber++;
  if (shownNumber.toString().length < 2) shownNumber = "0" + shownNumber;

  return /*html*/ `
    <div class="pos-rel" onload="animationOnload()">
            <div class="pokemon-card">
                <div class="card-header" id="card-header">
                <img class="back-icon" src="./img/arrow-left-to-bracket.svg" alt="" onclick="hideOverlay()">
                    <div style="background: linear-gradient(0deg, rgba(var(--color-${mainTyp}-gradient), 1) 0%, rgba(var(--color-${mainTyp}), 1) 100%); border-radius: 16px 16px 0 0;">
                        <div class="pokemon-id-number">
                            <span class="id-number-card">${shownNumber}<span class="pokemon-name-card">${name}</span></span>
                        </div>
                        <div class="img-pokemon-container">
                            <img class="img-card" src="${img}" alt="">
                            <img class="angle-left" onclick="showPokemonBefore(${i})" src="./img/angle-left.svg" alt="">
                            <img class="angle-right" onclick="showNextPokemon(${i})" src="./img/angle-right.svg" alt="">
                        </div>
                    </div>
                    <!-- ---------------------------- start: small header ----------------------------- -->
                    <div class="bg-color small-header d-none">
                        <div>
                            <span class="id-number-card">${shownNumber}<span class="pokemon-name-card">${name}</span></span>
                        </div>
                        <img class="img-card-small" src="${img}" alt="">
                        <img class="angle-left-small" src="./img/angle-left.svg" alt="">
                        <img class="angle-right-small" src="./img/angle-right.svg" alt="">
                    </div>
                    <!-- ---------------------------- end: small header ----------------------------- -->
                    <div class="round-edge" style="background: rgba(var(--color-${mainTyp}-gradient), 1)"></div>
                </div>
                <div class="info-container" id="info-container">
                    <div class="pokemon-card-category margin-top-12" id="category-card">
                        <!-- load category -->
                    </div>
                    <div class="pokemon-info" id="pokemon-info">
                        <!-- load infos -->
                    </div>
                    <div class="basic-statistics dp-flex">
                        <h3>Basis-Statistiken</h3>
                        <div id="stats">
                            <!-- load stats -->
                        </div>
                    </div>
                    <div class="dp-flex" id="evolution">

                    </div>
                    <div class="evolution-images " id="evolution-img">
                        <!-- load evolution -->
                    </div>
                    <div class="description dp-flex" id="description-container">
                        <h3>Beschreibung</h3>
                        <div id="description">
                            <!-- load description -->
                        </div>
                    </div>
                    <div class="dp-flex" id="strength-container">
                        <h3>Stärke</h3>
                        <div class="pokemon-card-category" id="strength">
                            <!-- load strength -->
                        </div>
                    </div>
                    <div class="weakness dp-flex">
                        <h3>Schwäche</h3>
                        <div class="pokemon-card-category" id="weakness">
                            <!-- load weakness -->
                        </div>
                    </div>
                    <div class="varieties dp-flex d-none">
                        <h3>Mega-Entwicklung</h3>
                        <div class="varieties-container" style="background: rgba(var(--color-${mainTyp}), 0.5)">
                            <div class="pokemon-card-varieties" id="varieties">
                                <div class="varieties-element dp-flex">
                                    <img class="varieties-img" src="./img/charizard-mega-y.png" alt="">
                                    <span class="varieties-color" style="color: rgba(var(--color-${mainTyp}-gradient), 1)">Mega-Glurak X</span>
                                </div>
                                <div class="varieties-element dp-flex">
                                    <img class="varieties-img" src="./img/charizard-gmax.png" alt="">
                                    <span class="varieties-color">Mega-Glurak X</span>
                                </div>
                                <div class="varieties-element dp-flex">
                                    <img class="varieties-img" src="./img/charizard-mega-x.png" alt="">
                                    <span class="varieties-color">Mega-Glurak X</span>
                                </div>
                            </div>
                            <img class="angle-left-varieties d-none" onclick="rightScroll()" id="scroll-left" src="./img/angle-left.svg" alt="">
                            <img class="angle-right-varieties" onclick="leftScroll()" id="scroll-right" src="./img/angle-right.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div id="catch-pokemon" class="d-none">
                <img id="open-ball" src="./img/open_pokeball.png" alt="">
            </div>
        </div>
    `;
}

function cardCategoryHTML(pokemonCategory) {
  const categoryName = pokemonCategory.type.name;

  return /*html*/ `
    <div class="category-with-name" style="background-color: rgba(var(--color-${categoryName}, 1));">
        <img class="round-img-category" src="./img/typ_icon/${categoryName}.svg" alt="">
        <span class="card-category-name">${categoryName}</span>
    </div>
    `;
}

function infoHTML(content, title) {
  return /*html*/ `
    <div class="info-column">
        <span class="info-content">${content}</span>
        <span class="info-title">${title}</span>
    </div>
    `;
}

function statsHTML(baseStat, statName, pokemonFirstCategory, baseStatWidth) {
  return /*html*/ `
    <div class="each-statistics">
        <span class="stat">${statName}</span>
        <span class="base-stat">${baseStat}</span>
        <div class="progress-bar">
            <div style="width: ${
              baseStatWidth
            }%; background-color: rgba(var(--color-${pokemonFirstCategory}), 1);"></div>
        </div>
    </div>
    `;
}

function evolutionHTML(evolution, mainTyp) {
  return /*html*/ `  
        <img class="evolution-img" style="background-color: rgba(var(--color-${mainTyp}), 0.3);" src="${evolution.img}" alt="">
    `;
}

function strengthHTML(i){
    return /*html*/ `
    <div class="category-with-name" style="background-color: rgba(var(--color-${i}), 1);">
        <img class="round-img-category" src="./img/typ_icon/${i}.svg" alt="">
        <span class="card-category-name">${i}</span>
    </div>
    `;
}

function weaknessHTML(i){
    return /*html*/ `
    <div class="category-with-name" style="background-color: rgba(var(--color-${i}), 1);">
        <img class="round-img-category" src="./img/typ_icon/${i}.svg" alt="">
        <span class="card-category-name">${i}</span>
    </div>
    `;
}

function loadHTML(){
    return /*html*/ `
        <div class="onload-gifs">
            <img src="./img/1.gif" alt="">
            <img src="./img/4.gif" alt="">
            <img src="./img/7.gif" alt="">
            <img src="./img/25.gif" alt="">
        </div>
    `;
}