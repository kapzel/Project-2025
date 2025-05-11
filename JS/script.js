const storeGames = [
  {
    id: 101,
    name: "God of war",
    price: 90,
    releaseDate: "2018",
    rating: 9,
  },
  {
    id: 102,
    name: "Witcher 3",
    price: 110,
    releaseDate: "2015",
    rating: 9.2,
  },
  {
    id: 103,
    name: "Metal Gear Solid 3",
    price: 70,
    releaseDate: "2004",
    rating: 9.2,
  },
  {
    id: 104,
    name: "Skyrim",
    price: 69,
    releaseDate: "2011",
    rating: 9.1,
  },
  {
    id: 105,
    name: "NFS Most Wanted",
    price: 43,
    releaseDate: "2005",
    rating: 8.4,
  },
  {
    id: 106,
    name: "Oblivion Remastered",
    price: 200,
    releaseDate: "2025",
    rating: 6.1,
  },
  {
    id: 107,
    name: "Cs2",
    price: 0,
    releaseDate: "2023",
    rating: 8.6,
  },
  {
    id: 108,
    name: "Jedi Survivior",
    price: 85,
    releaseDate: "2023",
    rating: 7.5,
  },
  {
    id: 109,
    name: "ET Game",
    price: 40,
    releaseDate: "1982",
    rating: 1,
  },
  {
    id: 110,
    name: "Red Dead Redemption ",
    price: 120,
    releaseDate: "2010",
    rating: 9,
  },
  {
    id: 111,
    name: "Euro Truck Sim.2",
    price: 70,
    releaseDate: "2012",
    rating: 9.8
  },
  {
    id: 112,
    name: "Undertale",
    price: 47,
    releaseDate: "2015",
    rating: 10,
  },
];
const tableElement = document.getElementById("gameTable").innerHTML = storeGames.id + "," + storeGames.name + "," + storeGames.price + "," + storeGames.releaseDate + "," + storeGames.rating;


