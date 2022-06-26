function filterPosts() {
  let search = document.getElementById("input-search").value;
  search = search.toLowerCase();

  searchName(search);
}

function searchName(search) {
  document.getElementById("overview").innerHTML = "";

  for (let i = 0; i < allPokemons.length; i++) {
    if (allPokemons[i].names[5].name.toLowerCase().includes(search)) {
      document.getElementById("overview").innerHTML += overviewHTML(i);
    }
  }
}
