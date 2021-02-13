console.log("game starts");

const thisTurn = {
    0: ['X','X','X'],
    1: ['O','O','X'],
    2: ['O','X','O']
};

function displayTurn (tileSet) {
    console.log(`this turn tile set is : ${JSON.stringify(tileSet)}`);
    const gameCase = document.getElementsByClassName('gameCase');

    for (let i = 0; i < gameCase.length; i++) {
        let tileValue;

        switch (i) {
            case 0: 
            case 1:
            case 2:
                tileValue = tileSet[0][i];
                break;
            case 3: 
            case 4:
            case 5:
                tileValue = tileSet[1][i-3];
                break;
            default:
                tileValue = tileSet[1][i-6];
                break;
        }

        gameCase[i].innerHTML = tileValue;

    }
}

displayTurn(thisTurn);