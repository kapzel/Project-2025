import { gameStore } from "./gameStore.js";
import { isBought, getBoughtGames, setBoughtGames } from "./utils.js";

function renderLibrary() {
    // Filter user's bought games
    const boughtIDs = getBoughtGames();
    const myGames = gameStore.filter((game) => boughtIDs.includes(game.id));

    const grid = document.getElementById("libraryGrid");

    if (myGames.length === 0) {
        grid.innerHTML = `<div class="empty">You haven't bought any games yet!</div>`;
        return;
    }

    grid.innerHTML = myGames
        .map((game) => {
            const imgSrc = `./assets/${game.img}`;

            return `
        <article class="game-card">
      <img src="${imgSrc}" class="game-card--picture" alt="${game.name}">
      <div>Release day: ${game.releaseDate}</div>
      <div class="game-card--name">${game.name}</div>
      <p>${game.description}</p>
      <div class="game-card-price-row">
        <span class="game-card--price">Bought</span>
      </div>
    </article>`;
        })
        .join("");
}

renderLibrary();