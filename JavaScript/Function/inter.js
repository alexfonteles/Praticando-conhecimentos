/*
//Estrutura clássica
function imprimirNoConsole() {
    console.log("olá, mundo!")
}
imprimirNoConsole();


//Usando parametro
function imprimirComParametro(num){
    console.log("O número é "+num)
}

imprimirComParametro(1);


//Funcção para gerar numero aleatório
const numeroAleatorio = function() {
    console.log(Math.random());
}
numeroAleatorio();

//Exemplo de função
const Habilitação = function(idade,cnh) {
    if (idade >= 18 && cnh == true) {
        return "Pode dirigir"
    }
    else{
        return "Não pode dirigir"
    }
}
console.log(Habilitação(18,true))
console.log(Habilitação(18,false))
console.log(Habilitação(15,true))
console.log(Habilitação(15,false))
console.log(Habilitação(30,true))


var numeroDaSorte = 18

if ((numeroDaSorte % 2) = 0){
    console.log("Par")
}
else{
    console.log("Ímpar")
}
 */

var listaDeGanhos = [10, 30, -10, -5, -1, 40];
var totalNegativos = 0;

for(var i = 0; i < listaDeGanhos.length; i++){
if (listaDeGanhos[i] < 0) {
    totalNegativos += listaDeGanhos[i]
    console.log(totalNegativos.length)
}
}


