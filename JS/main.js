let numberN;
let numberM;
let sum = 0;

do {
      numberN = parseInt(prompt("Введите число N", 0), 10);
      numberM = parseInt(prompt("Введите число M", 0), 10);
} while ((Number.isNaN (numberN)) || (Number.isNaN(numberM)));

let result = confirm("Пропускать парные числа?");
for (let i = numberN; i <= numberM; i++) {
      
  if(!result) {
      sum=sum+i;

} else if (i%2==1) {
      sum=sum+i;
}
}
console.log(sum); 

// Этот код работает, но мне кажется что лучше его записать как написано ниже, только непонятно как записать правильно.

// let numberN;
// let numberM;
// let sum = 0;

// do {
//       numberN = parseInt(prompt("Введите число N", 0), 10);
//       numberM = parseInt(prompt("Введите число M", 0), 10);
// } while ((Number.isNaN (numberN)) || (Number.isNaN(numberM)));


// let result = confirm("Пропускать парные числа?");
// for (let i = numberN; i <= numberM; i++) {
      
//   if(!result) {
//       sum=sum+i;

// } else {
//       sum=sum + (i%2==1);
// }
// }
// console.log(sum);     



















