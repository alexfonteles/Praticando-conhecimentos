// Criar uma função e chama-lá
/*
function desafio() {
    console.log("Vamos ao desafio")
}


//Sabe-se que a autonomia de um carro é dada pela distância que ele pode andar até que seu combustível acabe. Um carro é capaz de percorrer 10km por litro de gasolina. Como seria uma função que retornasse a autonomia desse carro a partir da quantidade de combustível presente no tanque?

function autonomia(qtdCombustivel) {
    
    return 10 * qtdCombustivel
}

autonomia(2);

var a1= true && true
var a2= true && false
var a3=false && true
var o1=true || true
var o2=false || true
var n2= !false
var n3= !"Gato"

//console.log(a1,a2,a3,o1,o2,n2,n3)

var anoNascimento = 2005;
var anoAtual = 2021;
if(anoAtual - anoNascimento < 18){
    console.log("Proibida a entrada")
}
else{console.log("Entrada permitida")
}


var x = 34
var y = ++x
var soma = x + y
//console.log(soma)

var resto = 13 % 8
//console.log(resto)

nomes = ["Alex", "Pedro", "Cris", "Tati", "Adriana"]
//console.log(nomes[nomes.length - 1])

var pares = [0,2,4,6,8,10];
var impares = [1,3,5,7,9,11]
//console.log(pares[2]+impares[4])

/*var nomes = ["Francisco", "Gabriel","João","José"]
for(var i=0; i<nomes.length;i++){
    if(nomes[i].length > 5){
        console.log(nomes[i])
    }
}


//1010101010
function misteriosa(arrayDeNumeros, n){
    var arrayResultado = [];
    for (var i=0; i < arrayDeNumeros.length; i++) {
        if(arrayDeNumeros[i]>n) {
            arrayResultado.push(arrayDeNumeros[i]);
        }
    }
    return arrayResultado
}


//11

function menorIdade(arrayDeIdades) {
    if(arrayDeIdades.length == 0) return undefined;

    var menor = arrayDeIdades[0];
    for (var i = 1; i < arrayDeIdades.length; i++) {
        if(menor > arrayDeIdades[i]) {
            menor = arrayDeIdades[i];
        }
    }
    return console.log(menor);
}

menorIdade([16, 18, 20, 15, 10, 30, 25, 5]);

//12
/*
function desconhecida() {
    var arrayDoRetorno = [];
    for (var i = 1; i <= 6; i++) {
        var numero = Math.floor(Math.random() * 61);
        arrayDoRetorno.push(numero);
    }
    return console.log(arrayDoRetorno)
}

*/
/*
//13
function oQueIssoFaz(arrayDeNomes) {
    if(arrayDeNomes.length == 0) return undefined;

    arrayDeNomes.forEach(nome => {
        console.log('Nome: ' + nome)
    });
}
*/

//{nome: 'Alex', profissao: 'Analista'}
/*
//14
function listarPersonagens() {
    var pessoas = [
        {nome: 'Josué', papel: 'Peter Pan'},
        {nome: 'Joselayne', papel: 'Wendy'},
        {nome: 'Guilherme', papel: 'Capitão Gancho'},
        {nome: 'Luiza', papel: 'Tinker Bell'}        
    ];
    pessoas.forEach(pessoa => {
        console.log('Ator: ' + pessoa.nome);
        console.log('Papel: ' + pessoa.papel)
    });
    
}
listarPersonagens();
*/
//15

/*
function maiorNome(arrayDeNomes){
    if(arrayDeNomes.length == 0) return undefined;

    var maior = arrayDeNomes[0];
    for(let i=0; i< arrayDeNomes.length; i++) {
        if(maior.length < arrayDeNomes[i]){
            maior = arrayDeNomes
        }
        return console.log(maior)
    }
}
maiorNome(["Alex","Sia", "Pedro","Francisco"]);
*/
/*function verNomes (nomeMaior) {
    return console.log(nomeMaior[1])
}

verNomes(["Alex","Pedro","Francisco"]);

function misteriosa(arrayDeNumeros, n){
    var arrayResultado = [];
    for (var i=0; i < arrayDeNumeros.length; i++) {
        if(arrayDeNumeros[i]>n) {
            arrayResultado.push(arrayDeNumeros[i]);
        }
    }
    return console.log(arrayResultado)
}

misteriosa([1,20,2,3,5,9,10], 10)


function maiorNome(arrayDeNomes){
    if(arrayDeNomes.length == 0) return undefined;

    var maior = arrayDeNomes[];
    for(let i=1; i< arrayDeNomes.length; i++) {
        if(maior.length < arrayDeNomes[i]){
            maior = arrayDeNomes
        }
        return console.log(maior)
    }
}
maiorNome(["Alex","Sia", "Pedro","Francisco"]);