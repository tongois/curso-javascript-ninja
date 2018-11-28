/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// ?

	let myvar = [true, 'Ailton', 24, 'danone', 3.4];


/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// ?
	function myfunction(arr){
		
		return arr;
	}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

	myfunction(myvar)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
// ?

	function myfunction2(arr,i){
		
		return arr[i];
	}


/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// ?

let valores = [353, 'pastel', false, 3.65, 'amor'];


/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// ?
	

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
// ?

	function book(nLivro){
		let livraria = {
			livro1:{
				quantidadePaginas:345,
				autor:'Paulo Coelho',
				editora:'rocco'
			},
			livro2:{
				quantidadePaginas:654,
				autor:'Amanda Klein',
				editora:'Compania k3'
			},
			livro3:{
				quantidadePaginas:554,
				autor:'Joao Klio',
				editora:'ABC Letras'
			}
		}
		
		if(nLivro){
			return livraria[nLivro];
		}else{
			return livraria;
		}
		
		
		
	}
	


	

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// book()


/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
 
console.log(`O livro livro1 tem ${book('livro1').quantidadePaginas} páginas!`);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor do livro livro2 é ${book('livro2').autor}` );

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

console.log(`O livro livro3 foi publicado pela editora ${book('livro3').editora}`);










