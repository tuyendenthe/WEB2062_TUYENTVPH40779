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
  
  // Nhiệm vụ 1: Tạo mảng cầu thủ cho mỗi đội
  const [players1, players2] = game.players;
  const A = game.players[0];
  const B = game.players[1];
  console.log('cầu thủ đội 1 gồm :',...A);
  console.log('cầu thủ đội 2 gồm :',...B);
 


  // Nhiệm vụ 2: Phân loại thủ môn và cầu thủ khác
  const [gk1, ...fieldPlayers1] = players1;
  console.log('thủ môn đội 1',gk1);
  const [gk2, ...fieldPlayers2] = players2;
  console.log('thủ môn đội 2',gk2);
  
  // Nhiệm vụ 3: Tạo mảng tất cả cầu thủ
  const allPlayers = [...players1, ...players2];
  console.log('tất cả các cầu thủ tham gia trên sân',allPlayers);
  
  // Nhiệm vụ 4: Thêm cầu thủ vào đội và tạo mảng cuối cùng
  const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
  console.log("cầu thủ được thêm ở cuối mảng",players1Final);
  
  // Nhiệm vụ 5: Tạo biến tỷ lệ kết quả trận đấu
  const { team1, x: draw, team2 } = game.odds;
  console.log(`Tỷ lệ kết quả trận đấu:
    ${game.team1}: ${team1}
    Hòa: ${draw}
    ${game.team2}: ${team2}`);
  // Nhiệm vụ 6: Hàm in ra tên cầu thủ đã ghi bàn
  const printGoals = (...goalScorers) => {
    console.log('Cầu thủ đã ghi bàn:', ...goalScorers);
  };
  

  printGoals(...game.scored);
  
  // Nhiệm vụ 7: In ra đội chiến thắng không sử dụng if/else hoặc toán tử 3 ngôi
  console.log(`${team1 > team2 ? game.team1 : game.team2} chiến thắng!`);
  