function rollDice(){
    const numOfDice = document.getElementById('numOfDice').value;
    const imagesResult = document.getElementById('imageResult');
    const diceResult = document.getElementById('diceResult');
    const values = [];
    const images = [];
    if(numOfDice < 100000){
        for(let i  = 0; i < numOfDice; i++){
            const value = Math.floor(Math.random() * 6) + 1;
            values.push(value);
            images.push(`<img src="${value}.png" alt="Dice: ${value} , ">`)
        }
        diceResult.textContent =`Dices = ${values.join(' , ')}`;
        imagesResult.innerHTML = images.join('');
    }
    else {
        diceResult.textContent =`Please Enter number less than 100000`;
    }
}