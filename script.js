// 3 modos diferentes de declarar função => tradicional | anonima | arrow function 
//function pegarDadosUsuarios(parametro1, parametro2){}
//pegarDadosUsuarios(2,'bananinha')

// Função => trechos de código reutilizáveis  => iniciar verbo infinitivo | camel case => pegarDadosUsuarios | getUserDate


// Parametros tá dentro do () quando definimos função 
// Argumentos tá dentro do () quando chamaos a função 


//--------------- RELEMBRANDO --------------

// DECLARANDO STRING => " " | ' ' | `String desejada ${variável} `
// toString => obj, number, boolean EM STRING 
// \n => quebra de liinha na string

let stringDeExemplo = 'Salveeee Baker, boa noite Baker!   '
let stringAConcatenar = 'Blz familia'

// USANDO " " DENTRO DA STRING => "Ela disse: \"Olá!\""

// CONCATENAR => Juntar => 
let stringResultadoPosConcatenacao = " AEEEEE" + stringDeExemplo + stringAConcatenar + " VLW FALOWS"

console.log(stringResultadoPosConcatenacao)

// A. VERIFICAR TAMANHO =>  string.length
//console.log(`Esse é o tamanho da string ${stringDeExemplo.length} caracteres`)

// B. STRING MAIUSCULA => string.toUpperCase()
//console.log(`Esse é a  string maiúscula ${stringDeExemplo.toUpperCase()}`)

// C. STRING MINUSCULA => string.toLowerCase()
//console.log(`Esse é a  string minúscula ${stringDeExemplo.toLowerCase()}`)

// D. REMOVER ESPAÇOS EM BRANCO => string.trim()
//console.log(`Esse é a  string sem espaço no final ${stringDeExemplo.trim()}`)

// E. SUBSTITUIR UMA POR OUTRA => 1ª  OCORRÊNCIA =>
//string.replace("string atual", "string para subsutituir")
//console.log(`Esse é a string substituida a primeira ocorrência ${stringDeExemplo.replace(" Baker", " bananinha")}`)


// F. SUBSTITUIR UMA POR OUTRA => TODAS AS OCORRÊNCIA => 
// string.replaceAll("string atual", "string para subsutituir")
//console.log(`Esse é a string substituida em todas as ocorrências ${stringDeExemplo.replaceAll(" Baker", " bananinha")}`)

// G. VERIFICAR SE TEM O TERMO => string.includes("Termo a ser verificado")

//console.log(`Esse é a string que vamos verificar ${stringDeExemplo.includes("ake")}`)

// H. CORTAR STRING =>  string.split(separador, limite)

//console.log(`Esse é a string que vamos cortar ${stringDeExemplo.split(" ")}`)


//---------------- EXERCICIO 1 ------------- 

/*Dentro da função imprimirPessoa, crie um programa que peça ao usuário para inserir seu nome, e sua cor favorita. Em seguida, o programa deve imprimir a mensagem:
"A cor favorita de pessoa é cor."

Faça o programa duas vezes! Na primeira, use concatenação, e na segunda, Template Strings.*/

/*function imprimirPessoa(nome, corFavorita){
    nome = prompt('Digite o seu nome')
    corFavorita = prompt('Digite a sua cor favorita')
    //console.log(" O nome da pessoa é "+ nome+ " a cor favorita de pessoa é: "+ corFavorita)
    console.log(`O nome da pessoa é : ${nome} , a cor favorita de pessoa é: ${corFavorita} `)
}*/ 

/*
const imprimirPessoa = (nome, corFavorita)=>{
    nome = prompt('Digite o seu nome')
    corFavorita = prompt('Digite a sua cor favorita')
    //console.log(" O nome da pessoa é "+ nome+ " a cor favorita de pessoa é: "+ corFavorita)
    console.log(`O nome da pessoa é : ${nome} , a cor favorita de pessoa é: ${corFavorita} `)
}

imprimirPessoa() */ 

//---------------- EXERCICIO 2 ------------- 

/*Altere a primeira versão do programa para que a pessoa também envie sua citação favorita. Essa citação deve ser impressa entre aspas, após a frase inicial.
Altere a segunda versão do programa para que a string seja impressa dessa forma (utilizando apenas um console.log):*/ 

/*function imprimirPessoa(nome, corFavorita, citacao){
    nome = prompt('Digite o seu nome')
    corFavorita = prompt('Digite a sua cor favorita')
    citacao = prompt('Digite a sua citação favorita')
    //console.log(" O nome da pessoa é "+ nome+ " a cor favorita de pessoa é: "+ corFavorita + " " + citacao + \")
    console.log(`O nome da pessoa é : ${nome} , a cor favorita de pessoa é: ${corFavorita} "${citacao}"`)
}*/ 

/*const imprimirPessoa = (nome, corFavorita, citacao)=>{
    nome = prompt('Digite o seu nome')
    corFavorita = prompt('Digite a sua cor favorita')
    citacao = prompt('Digite a sua citação favorita')
    console.log(`O nome da pessoa é : ${nome} , a cor favorita de pessoa é: ${corFavorita} "${citacao}"`)
}

imprimirPessoa()*/


//---------------- EXERCICIO 3 -------------

/*Faça com que o nome da pessoa sempre seja exibido em letras maiúsculas

Exiba no console quantos caracteres tem o nome da pessoa

Verifique se o nome da pessoa possui a letra A*/ 

/*
const imprimirPessoa = (nome, corFavorita, citacao)=>{
    nome = prompt('Digite o seu nome')
    corFavorita = prompt('Digite a sua cor favorita')
    citacao = prompt('Digite a sua citação favorita')

    // Modificações na string do nome
    let nomeEmMaiusculo = nome.toUpperCase()
    let quantidadeCaracteres = nome.length
    let incluiLetraA = nome.includes("a")

    console.log(`O nome da pessoa é : ${nomeEmMaiusculo}  que tem como quantidade de caracteres ${quantidadeCaracteres}. Esse nome contém a letra A : ${incluiLetraA}. A cor favorita de/da ${nome} é: ${corFavorita}. Sua citação favorita é :  "${citacao}"`)
}

imprimirPessoa()*/ 

//---------------- PRATICA EXTRA -------------

/*Crie uma função  que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima no console a mensagem no formato abaixo:
"O e-mail emailDoUsuario foi cadastrado com sucesso. 
Boas vindas, nomeDoUsuario!"
Adicione à mensagem anterior a quantidade de caracteres presente no nome da pessoa.
A seguir, faça o que se pede:
Substitua todas as letras R na frase criada, por letras X
Verifique se o e-mail da pessoa possui @, e imprima a resposta da verificação no console.*/ 

function perguntarNomeEEmail (nome,email){
    nome = prompt('Digite seu nome, pessoa usuária')
    email = prompt('Digite seu email, pessoa usuária')
    let quantidadeCaracteresDoNome = nome.length
    let subistituirLetraR = nome.replace("r", "x")
    let verificarSeTemArroba = email.includes('@')

    console.log(`O e-mail ${email} foi cadastrado com sucesso. Seu email possui o @ :  ${verificarSeTemArroba}
    Boas vindas, ${subistituirLetraR}! Seu nome possui ${quantidadeCaracteresDoNome} caracteres`)

}

perguntarNomeEEmail ()
