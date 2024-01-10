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
  
  // In ra cầu thủ và số bàn thắng đã ghi
  game.scored.forEach((player, index) => {
    console.log(`người ghi bàn thứ ${index + 1} là : ${player}`);
  });
  
  //  Tính tỉ lệ kết quả trận đấu và in ra console
  const [team1, draw, team2] = Object.values(game.odds);
  const tiletrungbinh = (team1 + draw + team2) / 3;
  console.log(`Tỉ lệ trung bình: ${tiletrungbinh}`);
  
  // In ra tỉ lệ cược đẹp như yêu cầu
  console.log(`Tỉ lệ thắng của ${game.team1}: ${team1}`);
  console.log(`Tỉ lệ hòa: ${draw}`);
  console.log(`Tỉ lệ thắng của ${game.team2}: ${team2}`);
  
  // Tạo đối tượng 'scorers'
  const scorers = {};
  game.scored.forEach(player => {
    scorers[player] = (scorers[player] || 0) + 1;
  });
  
  console.log('Đối tượng scorers:', scorers);
  