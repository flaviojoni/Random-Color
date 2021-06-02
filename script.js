//Uma função que gera um código hexadecimal de cor
//Essa hexadecimal será passada para o span
//E também será passada como o style background do body
//A cada vez que eu clicar no botão
//Essa hex gerada vai ser concatenada dentro da variável hexColor, e será passada para o style e para o span.

//Como HEX funciona:
//Um caractere de Hex pode ser de 0-9 ou de A-F
//Para criar um Hex, preciso fazer com que seja gerado um random number, e que esse random number pegue um elemento da array

const hexChars = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//Tenho 16 opções

let hexColor = '#';

//Uma função que gera um número random entre 0 e 15, pega o valor do index desse número random, e concatena esse valor na variável hexColor, fazendo isso 6x.

let randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}


let hexConcat = (n) => {
    if (n > 6) {
        return;
    } else {
        let random = randomNumber(0, 16);
        let hexChar = hexChars[random];
        let stringTransform = hexChar.toString();
        hexColor += stringTransform;
        n++;
        hexConcat(n);
    }
}


let changeColor = () => {
    hexConcat(1);
    document.getElementById('color').textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
    hexColor = '#';
}