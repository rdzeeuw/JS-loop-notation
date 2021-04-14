//while-loop
const colors = ["yellow", "blue", "red", "orange"];
let i = 0;

while(i < colors.length){
    console.log(colors[i]);
    i++;
}

//for-loop
for(i = 0; i < colors.length; i++){
    console.log(colors[i]);
}

// array-method (nieuwe stijl)
colors.forEach(color => console.log(color));

// Antwoorden:
// 1. 4 en 3 regels
// 2. 1 regel
// 3. De array method is heel duidelijk gelinked aan 
//    de (lengte van de) array, waardoor je makkelijk ziet 
//    waar je overheen itereert.
// 4. 

//iterate over object keys
let person = {
    eyes: "blue",
    hair: "blonde",
    length: 1.80,
    weight: 80
}

console.log(Object.keys(person));