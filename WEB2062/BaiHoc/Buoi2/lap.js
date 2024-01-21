// Dữ liệu từ API
const game = {
    team1: 'Bayern Munich',
    team2: 'Borussia Dortmund',
    players: [['Neuer', 'Pavard', 'Sule', 'Hernandez', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski'],
              ['Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze']],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };
//   vòng lặp 
// for of 
// ví dụ 
const [team1, team2]= game.players
for(let player of team1){
    console.log(player);
}
// ví dụ khác lôi all ra
for(let [index,value] of Object.entries(game)){
    console.log(index,value);
}
// for in
// ví dụ 

// for(let player in team1){
//     console.log(player);
// }
for(let player in Object.entries(game)){
    console.log(player);
}
// for(let key in game){
//     console.log(game[key]);
// }