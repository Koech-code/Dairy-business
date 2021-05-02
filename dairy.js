let example = document.getElementById("shedA").value
var totalProduction=function(shed, litres){
//  console.log("Your production in " + shed + litres + " litres per day");
return "Your production in " + shed + litres + " litres per day";
}
document.getElementById("totalProduction").innerHTML=totalProduction("shed A ",shedA);
document.getElementById("total").innerHTML=totalProduction("shed B ","308");
document.getElementById("all").innerHTML=totalProduction("shed C ","486");
document.getElementById("last").innerHTML=totalProduction("shed D ","572");
// sum earnings per day
let array=[shedA,308,486,572];
let sum=array.reduce(function(a,b){
return a + b;
}, 0);
console.log("The total production is "+sum+"litres per day")
document.getElementById("sub").addEventListener("click", function(){
    let shedA= document.getElementById("shedA").value
console.log(shedA)

document.getElementById("totalProduction").innerHTML=totalProduction("shed A ",shedA);
console.log("The total production is "+sum+ "litres per day")
})
// earnings per week
let incomeOverTime=(income,time)=>
console.log("your "+time+"income will be "+income);
incomeOverTime("590940 ","weekly ")

// earnings per year
let yearlyIncome=[2617020,2448180,2617020,2532600,2617020,2532600,2617020,2617020,2532600,2617020,2532600,2617020]
let totals=yearly.reduce(function(jan,dec){
    return jan+dec;
}, 0);
console.log(totals);
var january={

}