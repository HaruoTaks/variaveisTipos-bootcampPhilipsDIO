/* numberOne = 1;

console.log(numberOne + 2);

var numberOne; */

/* //Se o let for declarado depois irá apresentar um erro, quando for utilizar o let é necessário declarar previamente
let numberOne; */

var firstName = 'João';
var lastName = 'Souza';

if(firstName === "João") {
    var firstName = 'Pedro';
    // Let é um scopo de bloco e por isso não será declarado, resultado esperado: Pedro Souza
    let lastName = 'Silva';
}

console.log(firstName, lastName);


