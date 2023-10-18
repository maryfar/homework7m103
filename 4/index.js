// let map = new Map();
// map.set("name", "John");
// let keys = map.keys();
// // Error: keys.push is not a function
// keys.push("more");


let map = new Map();
map.set("name", "John");
let keys = Array.from(map.keys()); // To use Posh, our variable must be of array type 
keys.push("more");

console.log(map);
console.log(keys);


