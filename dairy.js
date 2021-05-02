var totalProduction=function(shed, litres){
    console.log("Your production in " + shed + litres + " litres per day");
}
totalProduction("shed A ","510");
totalProduction("shed B ","308");
totalProduction("shed C ","486");
totalProduction("shed D ","572");

let array=[510,308,486,572];
let sum=array.reduce(function(a,b){
return a + b;
}, 0);
console.log("The total production is ",sum,"litres per day")