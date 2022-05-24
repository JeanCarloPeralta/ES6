
//Object literal shorthand 
var Auto = {type:"TOYOTA", model:"HILUX", color:"NEGRA"};

var USER = {
    firstName:"JEANCARLO",
    lastName:"PERALTA"
};

console.log(Auto)
console.log(USER)


//ES6 
var a = "12";
var b = 12;
var c = 155;
var d = "Hello World";
var id = "id value";

var myObject = {a,b,id,c,d};

console.log(myObject)





//Generators
function* generator(x) {
    yield x;
    yield x + 10;
  }
  
  const gen = generator(5);
  
  console.log(gen.next().value); //5
  console.log(gen.next().value); //15






  
  //Proxies
  const user = {
    firstName: 'Elon',
    lastName: 'Musk',
    email: 'elonmusk@gmail.com',
}

const handler = {
    get(target, property) {
        console.log(`Objeto ${property} es el siguiente.`);
        return target[property];
    }
}

const proxyUser = new Proxy(user, handler);
console.log(proxyUser.firstName);
console.log(proxyUser.lastName);

