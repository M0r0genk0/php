let minValue = parseInt(prompt('Минимальное знание числа для игры','-999'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','999'));
if (minValue||maxValue != NaN) {
    minValue = -999
    maxValue = 999
};
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;





const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');






orderNumberField.innerText = orderNumber;
answerField.innerText = (minValue<-999)? `Вы загадали число ${answerNumber = -999}?`:
    (maxValue>999)? `Вы загадали число ${answerNumber = 999}?`:
    `Вы загадали число ${answerNumber}?`;
 
document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = parseInt(prompt('Минимальное знание числа для игры','-999'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры','999'));
    if (minValue||maxValue != NaN) {
        minValue = -999
        maxValue = 999
    };
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    orderNumberField.innerText = orderNumber;
    answerField.innerText = (minValue<-999)? `Вы загадали число ${answerNumber = -999}?`:
    (maxValue>999)? `Вы загадали число ${answerNumber = 999}?`:
    `Вы загадали число ${answerNumber}?`;
    orderNumber = 1;
    gameRun = true;
    
})


document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round(Math.random() * 3);
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                (phraseRandom === 2)? `Я сдаюсь..\n\u{1F92F}` :
                (phraseRandom === 3)? `Ты, по моему, что-то перепутал!\n\u{1F620}` :
                `Я так не играю!\n\u{1F644}`;
               
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round(Math.random() * 3);
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                (phraseRandom === 2)? `Я сдаюсь..\n\u{1F92F}` :
                (phraseRandom === 3)? `Ты, по моему, что-то перепутал!\n\u{1F620}` :
                `Я так не играю!\n\u{1F644}`;
               
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.round((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        answerField.innerText = `Я всегда угадываю\n\u{1F60E}`
        gameRun = false;
    }
})

