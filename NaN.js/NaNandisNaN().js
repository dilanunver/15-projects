// NaN and isNan()
// NaN is a property of global object 
// it represents a value which is Not A Number
// it will be unequal !== to ANYTHING inside if ()

// isNaN() first converts the value to a Number
// next the coerced number is tested for NaN

let t = isNaN(true); // is it not a number? -  // 1
console.log(t); // false // 0
let f = isNaN(false); // false  // 0
console.log(f); // false 
let n = isNaN(null); 
console.log(n) // false  // 0
let u = isNaN(undefined); // true // NaN
let b = isNaN(23); // false
let c = isNaN('45'); // false
let d = isNaN('45.45'); // false
let e = isNaN(new Date()); // false
let z = isNaN(''); // 0 false
let g = isNaN('  '); // 0 false 
let h = isNaN(new Date('28 August, 2017')); // NaN true
let a = Number(true); // 1 

console.log(u);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(z);
console.log(g);
console.log(h);
console.log(a);


