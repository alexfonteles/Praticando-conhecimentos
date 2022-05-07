import juros from 'readline-sync';

let taxaJuros

let divida = juros.question('Informe o valor devido: R$ ');

if (divida > 0){
   let diasAtraso = juros.question('Informe quantos dias se passaram desde o vencimento: ')
        if (diasAtraso > 0) {
            
                if(diasAtraso > 15) {
                    taxaJuros = 10
                }
                else {
                    taxaJuros = 5
                }

                let valorJuros = (divida/100) * taxaJuros
                let total = Number(divida) + valorJuros

                console.log("Valor original da divida: R$ "+divida);
                console.log("Dias de atraso: "+diasAtraso);
                console.log("Taxa de juros: "+taxaJuros+"%");
                console.log("Valor total com juros: "+total);
        }
        else {
            console.log("Você está em dias")
        }
    }

else{
    
    console.log("Você não possui dívidas para negociar")
}

