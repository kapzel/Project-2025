import { gameStore } from "./gameStore.js";

gameStore.forEach((game) => {
  console.log("game :", game);
});

function renderGames(games) {
  document.getElementById("gameGrid").innerHTML = games
    .map((game) => {
      const imgSrc = `./assets/${game.img}`;

      return `
     <article class="game-card">
      <img src="${imgSrc}" class="game-card--picture" alt="${game.name}">
      <div class="game-card--details">
      <div class="game-card--release-day ">Release day: ${game.releaseDate}</div>
      <div class="game-card--name">${game.name}</div>
      <p>${game.description}</p>
      <div class="game-card-price-row">
        <span class="game-card--price">₹ ${game.price}</span>
        <button class="buy-btn" onClick="buyGame(${game})" >Buy game</button>
      </div>
      
      
      </div>
      
    </article>
    `;
    })
    .join("");
}

function sortGames(games, sortBy) {
  return [...games].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
    if (sortBy === "date") {
      return b.releaseDate.localeCompare(a.releaseDate); // Newest first
    }
    if (sortBy === "price") {
      return a.price - b.price; // Low to high
    }
    if (sortBy === "rating") {
      return b.rating - a.rating; // High to low
    }
    return 0;
  });
}

// Initial render
let currentSort = "name";
renderGames(sortGames(gameStore, currentSort));

// Listen for sort change
document.querySelectorAll('input[name="sort"]').forEach((radio) => {
  radio.addEventListener("change", function () {
    currentSort = this.value;
    renderGames(sortGames(gameStore, currentSort));
  });
});
