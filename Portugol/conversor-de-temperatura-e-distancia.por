programa

{
 
funcao
 inicio()
 {
 	real celsius
 	real fahrenheit
 	real quilometro
 	real milhas
 	inteiro opcao

 	faca
{
	escreva("\n\nCalculadora de conversões: \n")
	escreva("\nEscolha uma opção:")
	escreva("1 - Celsius para Fahrenheit\n")
	escreva("2 - Quilometros para Milhas\n")
	escreva("3 - Sair\n")
	leia(opcao)

	escolha(opcao)
	{
		caso 1:
		{
			escreva("\nInforme a temperatura em Celsius:\n")
			leia(celsius)

			fahrenheit = celsius * 1.8 + 32

			escreva(+celsius+" equivale a "+fahrenheit)
			pare
		}
		

		caso 2:
		{
			escreva("\n\nInforme a distancia em Quilometros:\n")
			leia(quilometro)

			milhas = quilometro / 32

			escreva(+quilometro+" equivale a "+milhas)
			pare
		}		
		
		caso 3:
		{
			escreva("Até a próxima\n")
			pare
		}
		
		caso contrario:
		escreva("\nDigite uma opção válida")
	}
	
}

enquanto(opcao != 3)
  
 }
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 186; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */