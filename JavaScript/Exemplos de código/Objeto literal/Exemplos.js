/*
var aula = [
    id = 10,
    titulo = 'Objetos literais',
    tecnologia = 'JavaScript'
];

var colecao_jogos =[

    { titulo: "The Legend of Zelda: Ocarina of Time",   plataforma: "Nintendo Switch" },
    { titulo: "State of Decay",                         plataforma: "Xbox One" },
    { titulo: "Mario Kart 8 Deluxe",                    plataforma: "Nintendo Switch" },
    { titulo: "Quantum Brake",                          plataforma: "Xbox One" },
    { titulo: "Forza Horizon 4",                        plataforma: "Playstation 4" },
    { titulo: "Horizon Zero Dawn",                      plataforma: "Playstation 4" }
];

console.log(colecao_jogos);

console.log(colecao_jogos.length);



var colecao_series_programacao = [
    { nome: "Breaking Bad",           horario: "21h",     sinopse: "Um professor de química se transforma quando descobre ter um câncer terminal. Daí ele usa suas habilidades a favor do crime"},
    { nome: "Fargo",                  horario: "22h",     sinopse: "Uma sequência de crimes saem errado e são investigados por uma detetive."},
    { nome: "Lost",                   horario: "20h",     sinopse: "Um avião cai em uma ilha deserta e logo um grupo de passageiros precisa lutar para sobreviver." },
    { nome: "Prison Break",           horario: "23h",     sinopse: "Um homem cria um plano para tirar o irmão sentenciado à morte por um suposto assassinato do vice-presidente dos EUA"},
    { nome: "Black Mirror",           horario: "23h",     sinopse: "Contos de ficção científica que refletem o lado negro da tecnologia, mostrando que nem toda novidade traz só benefícios." },
    { nome: "Pessoa de interesse ",   horario: "20h",     sinopse: "Um ex-agente da CIA, dado como morto pelo governo dos EUA, é recrutado por um milionário, para um projeto ultrassecreto."},
    { nome: "Dark",                   horario: "22h",     sinopse: "O desaparecimento de crianças na cidade alemã de Winden remete a acontecimentos idênticos ocorridos há 33 anos e 66 anos."}
]

var tamanho_colecao = colecao_series_programacao.length;

var numero_sorteado = Math.floor(Math.random() * tamanho_colecao);

console.log(numero_sorteado)


var colecao_disciplinas = [
    { id: 1, nome: "Português",     carga_horaria: 240 },
    { id: 2, nome: "Matemática",    carga_horaria: 220 },
    { id: 3, nome: "História",      carga_horaria: 160 },
    { id: 4, nome: "Geografia",     carga_horaria: 140 },
    { id: 5, nome: "Química",       carga_horaria: 160 },
    { id: 6, nome: "Física",        carga_horaria: 150 },
    { id: 7, nome: "Inglês",        carga_horaria: 120 }
];

console.log(colecao_disciplinas[7]);

// Imprima false
console.log( 2000 <= 1000 && 5 <= 5 );
    
    // Imprima true
    console.log( true || false && false );
    
    // Imprima false
    console.log( 20 == '20' && false );
    
    // Imprima true
    console.log( false || true );
   

    var usuario = {  
    id: 2,
    nome: "Rafael Nogueira Lemos", 
    idade: 17
};

console.log("Olá " + usuario.nome);
 

var
jogo = {
  titulo: 'Metroid',
  valor: 350,
  plataforma: 'Wii'
}

console.log('Jogo ' + jogo.titulo + ' custa R$' + jogo.valor);

var numero_1 = 5;
var numero_2 = 3;
var numero_3 = 10;

var resultado = numero_3 * (numero_1 - numero_2);

console.log(resultado++);

var linguagens = [
    "PHP",
    "JavaScript",
    "Python",
    "Dart",
    "C#",
    "Java",
    "Ruby"
];

console.log(linguagens[0]);
console.log(linguagens[2]);
console.log(linguagens[6]);

var colecao_livros = [
    { id: 1, nome: "Dom Quixote",           numero_paginas: 863 },
    { id: 2, nome: "O Senhor dos Anéis",    numero_paginas: 1200 },
    { id: 3, nome: "As Crônicas de Nárnia", numero_paginas: 752 },
    { id: 4, nome: "O Caçador de Pipas",    numero_paginas: 371 },
    { id: 5, nome: "A Montanha Mágica",     numero_paginas: 848 }
];

console.log( colecao_livros[5].nome );


var cliente ={   
id: 40,
nome: 'Lucas Santos',
email: 'lucas@email.com'
};
console.log(cliente.email)

var colecao_produtos = [
    { id: 1, nome: "Cooktop",           preco: 380 },
    { id: 2, nome: "Geladeira",         preco: 1350 },
    { id: 3, nome: "Notebook",          preco: 2500 },
    { id: 4, nome: "Liquidificador",    preco: 100 }
];

console.log(colecao_produtos .length)
console.log(colecao_produtos[3])



var colecao_series_programacao = [
    { nome: "Breaking Bad",           horario: "21h",     sinopse: "Um professor de química se transforma quando descobre ter um câncer terminal. Daí ele usa suas habilidades a favor do crime"},
    { nome: "Fargo",                  horario: "22h",     sinopse: "Uma sequência de crimes saem errado e são investigados por uma detetive."},
    { nome: "Lost",                   horario: "20h",     sinopse: "Um avião cai em uma ilha deserta e logo um grupo de passageiros precisa lutar para sobreviver." },
    { nome: "Prison Break",           horario: "23h",     sinopse: "Um homem cria um plano para tirar o irmão sentenciado à morte por um suposto assassinato do vice-presidente dos EUA"},
    { nome: "Black Mirror",           horario: "23h",     sinopse: "Contos de ficção científica que refletem o lado negro da tecnologia, mostrando que nem toda novidade traz só benefícios." },
    { nome: "Pessoa de interesse ",   horario: "20h",     sinopse: "Um ex-agente da CIA, dado como morto pelo governo dos EUA, é recrutado por um milionário, para um projeto ultrassecreto."},
    { nome: "Dark",                   horario: "22h",     sinopse: "O desaparecimento de crianças na cidade alemã de Winden remete a acontecimentos idênticos ocorridos há 33 anos e 66 anos."}
];

var data_atual = new Date();

var dia_semana = data_atual.getDay();

// A série deve ser obtida aqui

var serie_do_dia = colecao_series_programacao[dia_semana];

var nome_serie = serie_do_dia.nome;
var horario_serie = serie_do_dia.horario;
var sinopse_serie = serie_do_dia.sinopse;

console.log("Hoje é dia de " + nome_serie + " às " + horario_serie);
console.log("A seguir uma visão geral da série: " + sinopse_serie);

var cliente = {
    id: 40,
    nome: "Jorge Mendes",
    telefone: "(21) 9999-9999"
};

console.log(cliente.id);
console.log(cliente.nome);
console.log(cliente.telefone);

var colecao_disciplinas = [
    { id: 1, nome: "Português",     carga_horaria: 240 },
    { id: 2, nome: "Matemática",    carga_horaria: 220 },
    { id: 3, nome: "História",      carga_horaria: 160 },
    { id: 4, nome: "Geografia",     carga_horaria: 140 },
    { id: 5, nome: "Química",       carga_horaria: 160 },
    { id: 6, nome: "Física",        carga_horaria: 150 },
    { id: 7, nome: "Inglês",        carga_horaria: 120 }
];

console.log( colecao_disciplinas[1].id );

console.log( colecao_disciplinas[4].nome );

console.log( colecao_disciplinas[6].carga_horaria );

var numero_1 = 10;
var numero_2 = 5;

var soma_resultado = numero_1 + numero_2;

var subtracao_resultado = numero_1 - numero_2;


console.log(soma_resultado, subtracao_resultado )

var times_rj = [
    "Bangu",
    "Boavista",
    "Botafogo",
    "Flamengo",
    "Fluminense",
    "Madureira",
    "Nova Iguaçu",
    "Resende",
    "Vasco",
    "Volta Redonda"
];

// 1º RESULTADO
console.log(times_rj[0]);

// 2º RESULTADO
console.log(times_rj[6]);

// 3º RESULTADO
console.log(times_rj[9]);

var curiosidades_pokemon = [
    { pokemon: "Kabuto",        curiosidade: "Pokémon regenerado a partir de um fóssil" },
    { pokemon: "Electabuzz",    curiosidade: "Possui seis dedos em cada mão" },
    { pokemon: "Ekans",         curiosidade: "Seu nome ao contrário significa cobra em inglês" },
    { pokemon: "Dragonite",     curiosidade: "Pode voar duas vezes a velocidade do som" },
    { pokemon: "Magikarp",      curiosidade: "Pula montanhas facilmente" },
    { pokemon: "Taillow",       curiosidade: "Voa mais de 180 milhas por dia" },
    { pokemon: "Muk",           curiosidade: "Uma gota desse pokémon pode poluir um lago inteiro" },
    { pokemon: "Slowbro",       curiosidade: "Único pokémon que pode voltar a evolução anterior" },
    { pokemon: "Zapdos",        curiosidade: "Tem maior vantagem de tipo entre os pássaros lendários" },
    { pokemon: "Spoink",        curiosidade: "Esse pokémon nunca para de pular" }
];

var tamanho_colecao = curiosidades_pokemon.length;

var numero_sorteado = Math.floor(Math.random() * tamanho_colecao);

var pokemon_escolhido = curiosidades_pokemon[numero_sorteado];

var nome_pokemon = pokemon_escolhido.pokemon;
var curiosidade_pokemon = pokemon_escolhido.curiosidade;

console.log("CURIOSIDADE SOBRE O UNIVERSO POKÉMON");
console.log("Pokémon: " + nome_pokemon);
console.log("Curiosidade: " + curiosidade_pokemon);

var colecao_series_programacao = [
    { nome: "Breaking Bad",           horario: "21h",     sinopse: "Um professor de química se transforma quando descobre ter um câncer terminal. Daí ele usa suas habilidades a favor do crime"},
    { nome: "Fargo",                  horario: "22h",     sinopse: "Uma sequência de crimes saem errado e são investigados por uma detetive."},
    { nome: "Lost",                   horario: "20h",     sinopse: "Um avião cai em uma ilha deserta e logo um grupo de passageiros precisa lutar para sobreviver." },
    { nome: "Prison Break",           horario: "23h",     sinopse: "Um homem cria um plano para tirar o irmão sentenciado à morte por um suposto assassinato do vice-presidente dos EUA"},
    { nome: "Black Mirror",           horario: "23h",     sinopse: "Contos de ficção científica que refletem o lado negro da tecnologia, mostrando que nem toda novidade traz só benefícios." },
    { nome: "Pessoa de interesse ",   horario: "20h",     sinopse: "Um ex-agente da CIA, dado como morto pelo governo dos EUA, é recrutado por um milionário, para um projeto ultrassecreto."},
    { nome: "Dark",                   horario: "22h",     sinopse: "O desaparecimento de crianças na cidade alemã de Winden remete a acontecimentos idênticos ocorridos há 33 anos e 66 anos."}
];

console.log(colecao_series_programacao[5].sinopse)

var tecnologias = [
    'PHP',
    'Python',
    'Node'
  ];
  
  // 1º RESULTADO
  console.log(tecnologias[0]);
  
  // 2º RESULTADO
  console.log(tecnologias[2]);
  
  // 3º RESULTADO
  console.log(tecnologias[3]);
 

  var produto = {
    id: 9,
    nome: "Cafeteira Elétrica",
    valor: 99.00
  };
  
  console.log( produto.nome );
 */
