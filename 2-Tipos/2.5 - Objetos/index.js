/* 
//Declara o objeto
let obj = {};
// exibe o tipo de objeto
typeof obj;
// Adiciona dado ao objeto
obj.name = "Rodrigo";

obj.age = 20;
// Exibe o objeto
console.log(obj);

Object.values(obj);
console.log(obj); */

// Declara o objeto e seus valores
let person = {
    name: "Rodrigo",
    age: 30,
    adress: "Rua 2"
}
// Exibe todos os dados
console.log(person);
// exibe somente dado especifico(forma 1)
console.log(person.name);
// exibe somente dado especifico(forma 2)
console.log(person["name"]);