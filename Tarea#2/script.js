//.find()

let arr = [2, 4, 6, 8, 9, 10, 12];

function isOdd(i) {
    return i % 2 !== 0;
  }
  
arr.find(isOdd);
//console.log(arr.find(isOdd)) // 9


//indexOf()

const colors = ['blue','green','red','yellow','white'];
//console.log(colors.indexOf('yellow'))

//.join()
let array = new Array("First","Second","Third"); 

let str = array.join();
//console.log("str : " + str );  

let str1 = array.join(", "); 
//console.log("str : " + str1 );  

let str2 = array.join(" + "); 
//console.log("str : " + str2 );

//.map()

const pokemon = [
  { name: 'squirtle', attack: 5},
  { name: 'bulbasaur', attack: 6},
  { name: 'charmander', attack: 8}
];

const powerUp = pokemon.map((poke) => poke.attack * 2);
//console.log(powerUp)


var numbers = [2, 4, 6, 8];
var doubles = numbers.map(function(x) {
   return x * 2;
});
//console.log(numbers,",",doubles)

// still [2, 4, 6, 8]
// now [4, 8, 6, 16]


