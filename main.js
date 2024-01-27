let arrayPhrase = ['Eu quero uma batata', 'Hoje vai chover', 'As coisas vão melhorar', 'O policial investigou o caso']

function getWord(word){
    for(let i = 0; i < arrayPhrase.length; i++){
        if(arrayPhrase[i].includes(word)){
            return console.log('A palavra está na frase: ' + "'" + arrayPhrase[i] + "'")
        }
    }
    return `A palavra ${word} não está em nenhuma frase`
}

getWord('vai')