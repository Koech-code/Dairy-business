let example = document.getElementById("example").value
var totalProduction=function(shed, litres){
//  console.log("Your production in " + shed + litres + " litres per day");
return "Your production in " + shed + litres + " litres per day";
}
document.getElementById("totalProduction").innerHTML=totalProduction("shed A ",example);
document.getElementById("total").innerHTML=totalProduction("shed B ","308");
document.getElementById("all").innerHTML=totalProduction("shed C ","486");
document.getElementById("last").innerHTML=totalProduction("shed D ","572");

let array=[example,308,486,572];
let sum=array.reduce(function(a,b){
return a + b;
}, 0);
console.log("The total production is "+sum+"litres per day")
document.getElementById("sub").addEventListener("click", function(){
    let example = document.getElementById("example").value
console.log(example)

document.getElementById("totalProduction").innerHTML=totalProduction("shed A ",example);
console.log("The total production is "+sum+ "litres per day")
})