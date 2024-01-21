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
  // 1.tạo mảng khác nhau trong trận đấu 
  const events = [
    [17, 'ghi bàn'],
    [30, 'thẻ vàng'],
    [45, 'ghi bàn'],
    [64, 'thẻ vàng'],
   
  ];
  // 2.xóa sự kiện phút 64
  // Tìm index của sự kiện thẻ vàng phút 64
const yellowCardIndex = events.findIndex(([minute, event]) => minute === 64 && event === 'thẻ vàng');
// console.log(yellowCardIndex);
// Nếu tìm thấy, xóa khỏi mảng events
if (yellowCardIndex !== -1) {
  events.splice(yellowCardIndex, 1);
}
//3. In ra console thông báo về số sự kiện và trung bình mỗi 9 phút:

const totalEvents = events.length;
const averageEventsPer9Minutes = totalEvents / 90 * 9;
console.log(`${totalEvents} sự kiện xảy ra, trung bình mỗi ${averageEventsPer9Minutes.toFixed(2)} phút.`);
// Lặp toàn bộ mảng sự kiện và in ra màn hình với đánh dấu cho từng hiệp:
events.forEach(([minute, event]) => {
  const half = minute <= 45 ? 'nhận thẻ' : 'ghi bàn';
  console.log(`[${half}] ${minute}: ${event}`);
});



  
  