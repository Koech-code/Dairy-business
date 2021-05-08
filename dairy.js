let shedA = document.getElementById("shedA").value
var totalProduction=function(shed, litres){
//  console.log("Your production in " + shed + litres + " litres per day");
return "Your production in " + shed + litres + " litres per day";
console.log("The total production is 1876 litres per day")
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

var yearly= {
    month: ["January","February","March","April","May","June","July","August","September","October","November","December"],
    amount: ["2617020","2448180","2617020","2532600","2617020","2532600","2617020","2617020","2532600","2617020","2532600","2617020"],
};
document.getElementById("jan").innerHTML ="Your income for "+yearly.month[0]+" is "+yearly.amount[0];
document.getElementById("feb").innerHTML ="Your income for "+yearly.month[1]+" is "+yearly.amount[1];
document.getElementById("march").innerHTML ="Your income for "+yearly.month[2]+" is "+yearly.amount[2];
document.getElementById("april").innerHTML ="Your income for "+yearly.month[3]+" is "+yearly.amount[3];
document.getElementById("may").innerHTML ="Your income for "+yearly.month[4]+" is "+yearly.amount[4];
document.getElementById("jun").innerHTML ="Your income for "+yearly.month[5]+" is "+yearly.amount[5];
document.getElementById("jul").innerHTML ="Your income for "+yearly.month[6]+" is "+yearly.amount[6];
document.getElementById("aug").innerHTML ="Your income for "+yearly.month[7]+" is "+yearly.amount[7];
document.getElementById("sep").innerHTML ="Your income for "+yearly.month[8]+" is "+yearly.amount[8];
document.getElementById("oct").innerHTML ="Your income for "+yearly.month[9]+" is "+yearly.amount[9];
document.getElementById("nov").innerHTML ="Your income for "+yearly.month[10]+" is "+yearly.amount[10];
document.getElementById("dec").innerHTML ="Your income for "+yearly.month[11]+" is "+yearly.amount[11];
