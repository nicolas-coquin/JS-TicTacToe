console.log("game starts");

const firstTurn = {
    0: ['X','','X'],
    1: ['','O',''],
    2: ['X','','X']
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
            default :
                tileValue = tileSet[2][i-6];
                break;
        }

        gameCase[i].innerHTML = tileValue;

    }
}

function victory(tileSet) {

    for (let i = 0; i < 3; i++){
        if(tileSet[i][0] == tileSet[i][1] && tileSet[i][1] == tileSet[i][2] ) {
            if (tileSet[i][0] != '') {
                console.log(`Victoire pour ${tileSet[i][0]}`);
                return true;
            }
        }
    }

    for (let i = 0; i < 3; i++){
        if(tileSet[0][i] == tileSet[1][i] && tileSet[1][i] == tileSet[2][i] ) {
            if (tileSet[0][i] != '') {
                console.log(`Victoire pour ${tileSet[0][i]}`);
                return true;
            }
        }
    }

}

displayTurn(firstTurn);
victory(firstTurn);