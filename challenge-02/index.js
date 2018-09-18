


// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
	
	function soma(n1,n2){
		return n1+n2;
	}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.

	var s = soma(5,5)+5;

// Qual o valor atualizado dessa variável?
	
	//15

// Declare uma nova variável, sem valor.

	var numero
	
/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
	
	function addValor(v){
		
		return `o valor da variável agora é ${numero = v}`;
		
	}

// Invoque a função criada acima.
	
	console.log(addValor(4));

// Qual o retorno da função? (Use comentários de bloco).

	// o valor da variável agora é 4
	
/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/

	function calculo(n1,n2,n3){
		if(n1===undefined || n2===undefined || n3===undefined){
			return 'Preencha todos os campos corretamente!';
		}else{
			return (n1*n2*n3)+2;
		}
	}


// Invoque a função criada acima, passando só dois números como argumento.
	
	console.log(calculo(4,5));
	
// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
	
	// "Preencha todos os campos corretamente!"
	
// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
	
	console.log(calculo(4,5,9));


// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
	
	// 182

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/


	function biscoito(n1,n2,n3){
		
		if(n1===undefined && n2===undefined && n3===undefined){
			return false;
		}else if(n2===undefined && n3===undefined){
			return n1;
		}else if(n3===undefined){
			return n1+n2;
		}else if(n1!==undefined && n2!==undefined && n3!==undefined){
			return (n1+n2)/n3;
		}else{
			return null;
		}
		
	}

	
// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.




















