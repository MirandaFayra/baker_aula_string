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

// USANDO " " DENTRO DA STRING => "Ela disse: \"Olá!\""

// A. VERIFICAR TAMANHO =>  string.length
console.log(`Esse é o tamanho da string ${stringDeExemplo.length} caracteres`)

// B. STRING MAIUSCULA => string.toUpperCase()
console.log(`Esse é a  string maiúscula ${stringDeExemplo.toUpperCase()}`)

// C. STRING MINUSCULA => string.toLowerCase()
console.log(`Esse é a  string minúscula ${stringDeExemplo.toLowerCase()}`)

// D. REMOVER ESPAÇOS EM BRANCO => string.trim()
console.log(`Esse é a  string sem espaço no final ${stringDeExemplo.trim()}`)

// E. SUBSTITUIR UMA POR OUTRA => 1ª  OCORRÊNCIA =>
//string.replace("string atual", "string para subsutituir")
console.log(`Esse é a string substituida a primeira ocorrência ${stringDeExemplo.replace(" Baker", " bananinha")}`)


// F. SUBSTITUIR UMA POR OUTRA => TODAS AS OCORRÊNCIA => 
// string.replaceAll("string atual", "string para subsutituir")
console.log(`Esse é a string substituida em todas as ocorrências ${stringDeExemplo.replaceAll(" Baker", " bananinha")}`)

// G. VERIFICAR SE TEM O TERMO => string.includes("Termo a ser verificado")

console.log(`Esse é a string que vamos verificar ${stringDeExemplo.includes("ake")}`)

// H. CORTAR STRING =>  string.split(separador, limite)

console.log(`Esse é a string que vamos cortar ${stringDeExemplo.split(" ")}`)


//---------------- EXERCICIO 1 ------------- 


//---------------- EXERCICIO 2 ------------- 

//---------------- EXERCICIO 3 -------------

//---------------- EXERCICIO 3 -------------