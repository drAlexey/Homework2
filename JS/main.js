let numberN;
let numberM;
let sum = 0;

do {
  numberN = parseInt(prompt("Введите число N", 0),10);
} while ((Number.isNaN (numberN)) || numberN <= 0);

do {
  numberM = parseInt(prompt("Введите число M", 0), 10);
} while ((Number.isNaN (numberN)) || numberM <= 0);

let skipEvenNumbers = confirm("Пропускать парные числа?");

for (let i = numberN; i <= numberM; i++) {
  if(!skipEvenNumbers) {
    sum=sum+i;
  } else if (i % 2 == 1) {
      sum=sum+i;
    }
}

console.log(sum);
   

// N = 10, M = 100, skipEvenNumbers = true —> 2475
// N = 10, M = 100, skipEvenNumbers = false —> 5005
// N = 10.456, M = 100.987, skipEvenNumbers = false —> 5005
// N = any letters/0 -> запрашивает N снова
// N = 10, M = any letters/0 ->  запрашивает M снова