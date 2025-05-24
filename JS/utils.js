import { BOUGHT_GAMES_KEY } from "../config.js";

export function getBoughtGames() {
  return JSON.parse(localStorage.getItem(BOUGHT_GAMES_KEY) || "[]");
}

export function setBoughtGames(arr) {
  localStorage.setItem(BOUGHT_GAMES_KEY, JSON.stringify(arr));
}

export function isBought(id) {
  return getBoughtGames().includes(id);
}
