  console.log("xin chào")
  'use strict';
  const restaurant = {
    name : 'classico italiano',
    location : 'via angelo taivanti 13, firenze,italy',
    categories : ['italiano', 'pizeria','vagetarian','oganic'],
    starMenu:['focaccia','bruscheta','garlic','bread','caprese salad'],
    mainMenu:['pizza','pastas','risotto'],
    oder : function(starterIndex,mainIndex){
        return [this.starMenu[starterIndex],this.starMenu[mainIndex]];
    }
  }
  const arr = [2,3,4];
  const a = arr[0];
  const b = arr[1];
  const c = arr[2];
  const [x,y,z] = arr;
  console.log(x,y,z);
  console.log(arr);
  let [first,,second]= restaurant.categories;
  console.log(first,second);
//   const temp = main;
//   main = secondary;
//   secondary = temp;
//   console.log(main,secondary);

//  [secondary,main]=[main,secondary];
//  console.log(main,secondary);
 const [starter,mainCourse] = restaurant.oder(2,0);
 console.log(starter,mainCourse);
 const nested =[4,2,[5,6]];
 const [j,,i] = nested;
 console.log(j,i);