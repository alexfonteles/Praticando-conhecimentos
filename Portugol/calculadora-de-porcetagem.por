programa
{
	
	funcao inicio()
	{
		real valor
		real porcentagem
		real desconto
		real juros = 25
		
		escreva("Informe o valor: ")
		leia(valor)

		escreva("informe a porcentagem ")
		leia(porcentagem)

		desconto = valor / 100 * porcentagem
		juros = valor + desconto

		escreva("\n"+valor+" com "+porcentagem+"% de desconto é "+desconto+"\n")
		escreva(valor+" com "+porcentagem+"% de juros é "+juros+"\n")
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 410; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */