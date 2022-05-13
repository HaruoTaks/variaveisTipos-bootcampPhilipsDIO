let array = [];
// Inserir valor 3
array.push(3);

// Inserir valor 2
array.push(2);

// retirar o valor do final do array
array.pop();

// Adicionando o 2 novamente
array.push(2);

// adicionando o 5
array.push(5);

// retirando o 3 - shift retira o primeiro elemento
array.shift();

// adiciona o valor no inicio da lista
array.unshift(1);

// hiperabilidade (exibe um console log para cada item)
for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}

console.log(array);

