function overviewHTML(i) {
  const mainTyp = allPokemons[i].types[0].type.name;
  const img = allPokemons[i].sprites.other["official-artwork"].front_default;
  const name = allPokemons[i].names[5].name;
  let shownNumber = i;

  shownNumber++;
  if (shownNumber.toString().length < 2) 
  shownNumber = "0" + shownNumber;

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

function overlayHTML(i){
    const mainTyp = allPokemons[i].types[0].type.name;
    const img = allPokemons[i].sprites.other["official-artwork"].front_default;
    const name = allPokemons[i].names[5].name;
    let shownNumber = i;
  
    shownNumber++;
    if (shownNumber.toString().length < 2) 
    shownNumber = "0" + shownNumber;

    return /*html*/ `
    <div class="pos-rel">
            <div class="pokemon-card">
                <div class="card-header">
                    <div style="background: rgba(var(--color-${mainTyp}), 1)">
                        <div class="pokemon-id-number">
                            <span class="id-number-card">${shownNumber}<span class="pokemon-name-card">${name}</span></span>
                        </div>
                        <div class="img-pokemon-container">
                            <img class="img-card" src="${img}" alt="">
                            <img class="angle-left" src="./img/angle-left.svg" alt="">
                            <img class="angle-right" src="./img/angle-right.svg" alt="">
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
                    <div class="round-edge" style="background: rgba(var(--color-${mainTyp})"></div>
                </div>
                <div class="info-container">
                    <div class="pokemon-card-category margin-top-12">
                        <div class="category-with-name" style="background-color: rgba(var(--color-grass, 1));">
                            <img class="round-img-category" src="./img/typ_icon/grass.svg" alt="">
                            <span class="card-category-name">Grass</span>
                        </div>
                        <div class="category-with-name" style="background-color: rgba(var(--color-poison, 1));">
                            <img class="round-img-category" src="./img/typ_icon/poison.svg" alt="">
                            <span class="card-category-name">Poison</span>
                        </div>
                    </div>
                    <div class="pokemon-info">
                        <div class="info-column">
                            <span class="info-content">Samen</span>
                            <span class="info-title">Pokemon</span>
                        </div>
                        <div class="info-column border-left">
                            <span class="info-content">0,7 m</span>
                            <span class="info-title">Größe</span>
                        </div>
                        <div class="info-column border-left">
                            <span class="info-content">6,9 kg</span>
                            <span class="info-title">Gewicht</span>
                        </div>
                    </div>
                    <div class="basic-statistics dp-flex">
                        <h3>Basis-Statistiken</h3>
                        <div class="each-statistics">
                            <span class="stat">KP</span>
                            <span class="base-stat">45</span>
                            <div class="progress-bar">
                                <div></div>
                            </div>
                        </div>
                        <div class="each-statistics">
                            <span class="stat">ANG</span>
                            <span class="base-stat">49</span>
                            <div class="progress-bar">
                                <div></div>
                            </div>
                        </div>
                        <div class="each-statistics">
                            <span class="stat">VERT</span>
                            <span class="base-stat">49</span>
                            <div class="progress-bar">
                                <div></div>
                            </div>
                        </div>
                        <div class="each-statistics">
                            <span class="stat">SP.-ANG</span>
                            <span class="base-stat">65</span>
                            <div class="progress-bar">
                                <div></div>
                            </div>
                        </div>
                        <div class="each-statistics">
                            <span class="stat">SP.-VERT</span>
                            <span class="base-stat">65</span>
                            <div class="progress-bar">
                                <div></div>
                            </div>
                        </div>
                        <div class="each-statistics">
                            <span class="stat">INIT</span>
                            <span class="base-stat">45</span>
                            <div class="progress-bar">
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div class="dp-flex">
                        <h3>Entwicklungen</h3>
                        <div class="evolution-images">
                            <img class="evolution-img" src="./img/bulbasaur.png" alt="">
                            <img class="evolution-img" src="./img/ivysaur.png" alt="">
                            <img class="evolution-img" src="./img/venusaur.png" alt="">
                        </div>
                    </div>
                    <div class="description dp-flex">
                        <h3>Beschreibung</h3>
                        <span class="description-text">Bisasam macht gern einmal ein Nickerchen im Sonnenschein. Auf
                            seinem Rücken trägt es einen Samen. Indem es Sonnenstrahlen aufsaugt, wird er zunehmend
                            größer.</span>
                    </div>
                    <div class="dp-flex">
                        <h3>Stärke</h3>
                        <div class="pokemon-card-category">
                            <div class="category-with-name color-water">
                                <img class="round-img-category" src="./img/typ_icon/water.svg" alt="">
                                <span class="card-category-name">Water</span>
                            </div>
                            <div class="category-with-name color-ground">
                                <img class="round-img-category" src="./img/typ_icon/ground.svg" alt="">
                                <span class="card-category-name">Ground</span>
                            </div>
                            <div class="category-with-name color-rock">
                                <img class="round-img-category" src="./img/typ_icon/rock.svg" alt="">
                                <span class="card-category-name">Rock</span>
                            </div>
                        </div>
                    </div>
                    <div class="weakness dp-flex">
                        <h3>Schwäche</h3>
                        <div class="pokemon-card-category">
                            <div class="category-with-name color-water">
                                <img class="round-img-category" src="./img/typ_icon/water.svg" alt="">
                                <span class="card-category-name">Water</span>
                            </div>
                            <div class="category-with-name color-ground">
                                <img class="round-img-category" src="./img/typ_icon/ground.svg" alt="">
                                <span class="card-category-name">Ground</span>
                            </div>
                            <div class="category-with-name color-rock">
                                <img class="round-img-category" src="./img/typ_icon/rock.svg" alt="">
                                <span class="card-category-name">Rock</span>
                            </div>
                            <div class="category-with-name color-ground">
                                <img class="round-img-category" src="./img/typ_icon/ground.svg" alt="">
                                <span class="card-category-name">Ground</span>
                            </div>
                            <div class="category-with-name color-rock">
                                <img class="round-img-category" src="./img/typ_icon/rock.svg" alt="">
                                <span class="card-category-name">Rock</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="catch-pokemon">
                <img id="open-ball" src="./img/open_pokeball.png" alt="">
            </div>
            <img class="back-icon" src="./img/arrow-left-to-bracket.svg" alt="" onclick="hideOverlay()">
        </div>
    `;
}