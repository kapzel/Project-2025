import { gameStore } from "./gameStore.js";

gameStore.forEach((game) => {
  console.log("game :", game);
});

function buyGame(game) {
  console.log("Game :", game);
}

function createGameCard(game) {
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
}

document.getElementById("gameGrid").innerHTML = gameStore
  .map(createGameCard)
  .join("");
