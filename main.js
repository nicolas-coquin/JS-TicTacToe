const firstTurn = {
    0: ['','',''],
    1: ['','',''],
    2: ['','','']
};

let thisTurn = {
    0: ['','',''],
    1: ['','',''],
    2: ['','','']
}

let lastTurn = 'X';

function displayTurn (tileSet) {
    //console.log(`this turn tile set is : ${JSON.stringify(tileSet)}`);
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

function checkVictory(tileSet) {

    for (let i = 0; i < 3; i++){
        if(tileSet[i][0] == tileSet[i][1] && tileSet[i][1] == tileSet[i][2] ) {

            if (tileSet[i][0] != '' && tileSet[i][1] != '' && tileSet[i][2] != '') {
                return true;
            }
        }
    }

    for (let i = 0; i < 3; i++){
        if(tileSet[0][i] == tileSet[1][i] && tileSet[1][i] == tileSet[2][i] ) {

            if (tileSet[0][i] != '' && tileSet[1][i] != '' && tileSet[2][i] != '') {
                //console.log(`Victoire pour ${tileSet[0][i]}`);
                return true;
            }
        }
    }

    if(tileSet[0][0] == tileSet[1][1] && tileSet[1][1] == tileSet[2][2] ) {

        if (tileSet[0][0] != '') {
            //console.log(`Victoire pour ${tileSet[0][0]}`);
            return true;
        }
    }

    if(tileSet[0][0] == tileSet[1][1] && tileSet[1][1] == tileSet[2][2] ) {

        if (tileSet[0][0] != '' && tileSet[1][1] != '' && tileSet[2][2] != '') {
            //console.log(`Victoire pour ${tileSet[1][1]}`);
            return true;
        }
    }

    if(tileSet[0][2] == tileSet[1][1] && tileSet[1][1] == tileSet[2][0] ) {

        if (tileSet[0][2] != '' && tileSet[1][1] != '' && tileSet[2][0] != '') {
            //console.log(`Victoire pour ${tileSet[1][1]}`);
            return true;
        }
    }

    //If no condition is met
    return false;


}

function checkDraw(tileSet) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (tileSet[i][j] == '') {
                return false;
            }
        }
    }

    //if no tile is empty
    return true;
}

function addTile (XO, row, col) {
    thisTurn[row][col] = XO;
}

function playTurn(row,col) {
    const XO = lastTurn;

    if (thisTurn[row][col] != '' || checkVictory(thisTurn)) {
        //Cannot play, so do nothing
    } else {
        addTile(XO,row,col);
        displayTurn(thisTurn);
        if (checkVictory(thisTurn)) {
            //Display the winner
            document.getElementById('messageBox').innerHTML = `${XO} is the winner !`

        } else if (checkDraw(thisTurn)) {
            //It's a draw
            document.getElementById('messageBox').innerHTML = `It's a draw !`
        }

        if (lastTurn == 'X') {
            lastTurn = 'O';
        } else {
            lastTurn = 'X';
        }

    }
}

function resetGame() {
    thisTurn = {
        0:['','',''],
        1:['','',''],
        2:['','','']
    }

    displayTurn(thisTurn);
    document.getElementById('messageBox').innerHTML = '';
    lastTurn = 'X';
}