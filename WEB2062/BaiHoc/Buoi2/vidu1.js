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
//   function có 3 cách để khai báo 
// cách 1 hàm khai báo declaration function
// function vidu(){

// }
// cách 2 hàm biểu thức expression function
// const vidu = function(){

// }
// cách 3 arrow function
// const vidu = ()=> {

// }
// 1. fist class function là gán 1 hàm vào giá trị 1 biến 

// 2. higher oder function là 1 hàm nhưng nhận 1 hàm khác vào làm tham số của nó 
// ví dụ 
const reserve = ["countinho","perisic"];
const vidu = function(team){
    // destructoring
    const [team1, team2] = game.players
   if(team == "team1"){
    return team1
   } else {
    return team1
   }
}
console.log(vidu("team1"));
function getallplayers(getAllplayers, reserve){
    // toán tử ... là spread openrator
const result = [getAllplayers, ...reserve]
return result
}
// getallplayers(vidu("team1"),["countinho","parvat"]);
// console.log(getallplayers(vidu("team1"),["countinho","parvat"]))


// callback function 
// console.log(vidu("team1"));
function getAllplayers(getteamMembers, reserve){
    // toán tử ... là spread openrator
    const team1 = vidu("team1");
    return [...team1, ...reserve]
}
console.log(getallplayers(vidu("team1"),["countinho","parvat"]))