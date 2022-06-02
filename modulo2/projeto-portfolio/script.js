let order = [];
let clickedOrder = [];
let score = 0;

//0- green
//1- blue
//2- red
//3-yellow

const blue = document.querySelector('.blue');
const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');

//criada ordem aletoria de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) +1);

    }

}

//acende a proxima cor
 let lightColor = (element, number) => {
     number = number * 500;
     setTimeout(() => {
         element.classList.add('selected');
     }, number -250);
     setTimeout(() => {
     element.classList.remove('selected');
     });
}

//verificar os botões clicados "os mesmos".
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;

        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciar próximo nível!`);
        nextLevel();
    
    }
}
//funçao p click do usuario
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
    
}

//função que retorna na cor.

let createColorElement = (color) => {
    if (color == 0) {
        return green;
    } else if (color == 1) {
        return blue;
    } else if (color ==2) {
        return red;
    } else if (color == 3) {
        return yellow;
    }
}

let nextLevel = ()  => {
    score++;
    shuffleOrder();

}

let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê errou!\nClick em OK para iniciar!`);
    order = [];
    clickedOrder = [];

    playGame();
}

let playGame = () => {
    alert('Bem vindo ao game! selecione Ok');
    score = 0;

    nextLevel();

}

green.onclick = () => click(0);
blue.onclick = () => click(1);
red.onclick = () => click(2);
yellow.onclick = () => click(3);

playGame();