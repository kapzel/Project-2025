
import { gameStore } from "./gameStore.js";
import { isBought, getBoughtGames, setBoughtGames } from "./utils.js";

function renderGames(games) {
  document.getElementById("gameGrid").innerHTML = games
    .map(function (game) {
      const imgSrc = `./assets/${game.img}`;
      const bought = isBought(game.id);

      return `
     <article class="game-card">
      <img src="${imgSrc}" class="game-card--picture" alt="${game.name}">
      <div class="game-card--details">
      <div class="game-card--release-day ">Release day: ${game.releaseDate
        }</div>
        <div class="game-card--rating">Rating: ${game.rating}</div>
      <div class="game-card--name">${game.name}</div>
      <p>${game.description}</p>
      <div class="game-card-price-row">
        <span class="game-card--price">$ ${game.price}</span>
        <button 
        class="buy-btn" 
        data-id="${game.id}" 
        ${bought ? "disabled" : ""}
        onClick="buyGame(${game})" 
        >
        ${bought ? "Bought!" : "Buy game"}
        </button>
      </div>
      </div>
      
    </article>
    `;
    })
    .join("");
}

function sortGames(games, sortBy) {
  return [...games].sort(function (a, b) {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
    if (sortBy === "date") {
      return b.releaseDate.localeCompare(a.releaseDate);
    }
    if (sortBy === "price") {
      return a.price - b.price;
    }
    if (sortBy === "rating") {
      return b.rating - a.rating;
    }
    return 0;
  });
}

let currentSort = "name";
renderGames(sortGames(gameStore, currentSort));

document.querySelectorAll('input[name="sort"]').forEach(function (radio) {
  radio.addEventListener("change", function () {
    currentSort = this.value;
    renderGames(sortGames(gameStore, currentSort));
  });
});


document.querySelectorAll(".buy-btn:not([disabled])").forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const gameId = Number(e.currentTarget.getAttribute("data-id"));
    const boughtGames = getBoughtGames();

    if (!boughtGames.includes(gameId)) {
      boughtGames.push(gameId);
      setBoughtGames(boughtGames);
      renderGames(sortGames(gameStore, currentSort)); \
    }
  });
});


