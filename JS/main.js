let numberN = parseInt(prompt("Введите число N", ""),10);
let numberM = parseInt(prompt("Введите число M", ""),10);
let result= confirm("Пропускать парные числа?");
let sum = 0;

for (let i=numberN; i<=numberM; i++)
if(!result){
    sum=sum+i;
} else{
    if(i%2==1)
      sum=sum+i;
}
console.log(sum);























