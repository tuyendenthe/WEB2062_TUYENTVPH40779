// Hàm tính khẩu phần ăn đề nghị
const calcRecommendedFood = weight => weight ** 0.75 * 28;

// Mảng thông tin chó
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

// c1
dogs.forEach(dog => {
  dog.recommendedFood = calcRecommendedFood(dog.weight);
});

// c2
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(`Chó của Sarah ăn quá ${sarahDog.curFood > sarahDog.recommendedFood ? 'nhiều' : 'ít'}!`);

// c3
const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recommendedFood).flatMap(dog => dog.owners);
const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recommendedFood).flatMap(dog => dog.owners);

//c4
console.log(`Những người chủ ${ownersEatTooMuch.join(' và ')} nuôi chó ăn quá nhiều!`);
console.log(`Những người chủ ${ownersEatTooLittle.join(' và ')} nuôi chó ăn quá ít!`);

//c5
const allDogsEatExactAmount = dogs.every(dog => dog.curFood === dog.recommendedFood);
console.log(`Tất cả chó ăn đúng khẩu phần đề nghị chưa? ${allDogsEatExactAmount}`);

// c6
const allDogsEatReasonableAmount = dogs.every(dog => dog.curFood > dog.recommendedFood * 0.90 && dog.curFood < dog.recommendedFood * 1.10);
console.log(`Tất cả chó ăn ở mức hợp lý chưa? ${allDogsEatReasonableAmount}`);

// c7
const dogsWithReasonableAmount = dogs.filter(dog => dog.curFood > dog.recommendedFood * 0.90 && dog.curFood < dog.recommendedFood * 1.10);
console.log('Chó ăn khẩu phần ăn hợp lý:', dogsWithReasonableAmount);

//c8
const sortedDogs = dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log('Chó được sắp xếp theo khẩu phần ăn đề nghị:', sortedDogs);
