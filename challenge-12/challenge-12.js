//(function(){}(

/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
// ?
	
	var person = {
		name:'Ailton',
		lastname:'Souza',
		age:24
	}
	
console.log( 'Propriedades de "person":');

/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
console.log(Object.keys(person)); // retorna as porpriedades do objeto

/*
Crie um array vazio chamado `books`.
*/
// ?
	var books = [];

/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
// ?
	books.push({name:'Harry potter', pages:456},{name:'O Amor',pages:874},{name:'A vida é bela',pages:343});
console.log( '\nLista de livros:' );

/*
Mostre no console todos os livros.
*/

	console.log(books);




console.log( '\nLivro que está sendo removido:' );
/*
Remova o último livro, e mostre-o no console.
*/
var lastBook = books.pop(); 
console.log(lastBook);

console.log( '\nAgora sobraram somente os livros:' );


/*
Mostre no console os livros restantes.
*/
console.log(books);


/*
Converta os objetos que ficaram em `books` para strings.
*/
// ?
console.log( '\nLivros em formato string:' );

var convertObj = JSON.stringify(books);


/*
Mostre os livros nesse formato no console:
*/
console.log(convertObj);

/*
Converta os livros novamente para objeto.
*/
// ?
console.log( '\nAgora os livros são objetos novamente:' );
books = JSON.parse(books);
console.log(books);

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
	for(var prop in books){
		console.log(books[prop]);
	}

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
// ?
console.log( '\nMeu nome é:' );
var myName = ['A','I','L','T','O','N'];

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
console.log(myName.join(''));

var nameJoin = myName.join('');

console.log( '\nMeu nome invertido é:',nameJoin.reverse );

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
// ?

console.log( '\nAgora em ordem alfabética:', myName.sort() );
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
// ?


//));
