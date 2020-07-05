let board=[];
let playerOne;
let playerTwo;
let actualTurnMark = "blank";
let lastTurnPlayer = "playerTwo";
let startButton = document.getElementById("startGame");

class Player {
    constructor(name, mark) {
        this.name = name;
        this.mark = mark;
    }
}
const checkPlayers = () => {
    const playerOneName = document.getElementById("playerOneName").value;
    const playerTwoName = document.getElementById("playerTwoName").value;
    if(playerOneName.length === 0 || playerTwoName.length === 0){
        alert('Names must have at least one character');
        console.log("test")
    }
    else{
        setPlayers();
        logicalGrid.generateBoard();
        displayControler.displayboard();
    }

}
startButton.addEventListener("click",checkPlayers);

const setPlayers = () => {
    const selectedMarkP1 = document.getElementById("X").checked;
    const playerOneMark = selectedMarkP1 ?"x" :"o";
    const playerTwoMark = !selectedMarkP1 ?"x" :"o";
    const playerOneName = document.getElementById("playerOneName").value;
    const playerTwoName = document.getElementById("playerTwoName").value;
    playerOne = new Player(playerOneName,playerOneMark);
    playerTwo = new Player(playerTwoName,playerTwoMark);
}
const logicalGrid = (function () {    
    const generateBoard = function(){
        board = [];
        mark="blank";
        while (board.length<9){
            boarpiece={
                mark:mark,
            }
            board.push(boarpiece)
        }       
    }
    generateBoard()  
    return {
        generateBoard : generateBoard,
      }
}());

const displayControler = (function () {
    let displayedBoard=document.getElementById("displayedBoard");

    const checkDisplay = pieceToCheck =>{
        switch (pieceToCheck) {
            case "blank":
                return "" 
            case "x":
                return "x"
            case "o":
                return "o"
        }
    }
    
    const cleanBoard = () => {
        displayedBoard=document.getElementById("displayedBoard");
        if (displayedBoard.hasChildNodes()){
            while (displayedBoard.firstChild) {
                displayedBoard.removeChild(displayedBoard.firstChild);
            }
        }
    }
    const playTurn = boardPiece => {
        let updateTurn = document.getElementById("actualturn");
        let tochange = boardPiece.firstChild.id;
        if(boardPiece.firstChild.innerHTML!=""||playerOne.name==undefined){
            return
            }
        switch (lastTurnPlayer) {
            case "playerOne":
                actualTurnMark= playerTwo.mark;
                actualname=playerTwo.name;
                board[tochange].mark=actualTurnMark; 
                lastTurnPlayer= "playerTwo"
                updateTurn.innerHTML=`Actual Turn: ${playerOne.name} "${playerOne.mark.toUpperCase()}"`
                break;
            case "playerTwo":
                actualTurnMark= playerOne.mark;
                actualname=playerOne.name;
                board[tochange].mark=actualTurnMark;
                lastTurnPlayer= "playerOne";
                updateTurn.innerHTML=`Actual Turn: ${playerTwo.name} "${playerTwo.mark.toUpperCase()}"`
                break;
            }
    }
    const handleTurn = function(){
        playTurn(this);
        displayboard();
        evualatorOfGame.checkGameStatus();  
    } 

    const displayPieceOfBoard = actualPiece =>{
        let boardPieceContainer=document.createElement('div');
            let boardPiece=document.createElement('h1');
            boardPieceContainer.classList.add('cardbox');
            boardPieceContainer.addEventListener("click",handleTurn);
            boardPiece.classList.add('mark');
            boardPiece.setAttribute("id", actualPiece);
            if(board[actualPiece].mark!=undefined){
                boardPiece.innerHTML=checkDisplay(board[actualPiece].mark);
            }
            boardPieceContainer.appendChild(boardPiece);
            displayedBoard.appendChild(boardPieceContainer);
    }
    const displayboard = function(){
        cleanBoard()
        let actualPositionToDisplay = 0;
        while (actualPositionToDisplay<=8){
            displayPieceOfBoard(actualPositionToDisplay);
            actualPositionToDisplay++;
        }
    }

    return {
        displayboard: displayboard
    }
        //passed for dymanic redraw
}());

const evualatorOfGame = (function () {    
    const winPositions=["012","345","678","036","147","258","048","246"];
    let res;
    let totalX = [];
    let totalO = [];
    function checkWinner(pieceToCheck){
        if(pieceToCheck=="x"){
            totalX.push(pieceToCheck)
            if(totalX.length>=3){
                if(playerOne.mark=="x"){
                    alert( `${playerOne.name} is the winner`)
                    logicalGrid.generateBoard();
                    displayControler.displayboard();
                }
                if(playerTwo.mark=="x"){
                    alert(`${playerTwo.name} is the winner`)
                    logicalGrid.generateBoard();
                    displayControler.displayboard();
                }
            }
        }
        if(pieceToCheck=="o"){
            totalO.push(pieceToCheck)
            if(totalO.length>=3){
                if(playerOne.mark=="o"){
                    alert( `${playerOne.name} is the winner`)
                    logicalGrid.generateBoard();
                    displayControler.displayboard();
                }
                if(playerTwo.mark=="o"){
                    alert( `${playerTwo.name} is the winner`)
                    logicalGrid.generateBoard();
                    displayControler.displayboard();
                }
            }
        }
    }

    function checkGameStatus() {
        winPositions.forEach( valor => {
            res=valor.split("");
            res.forEach(value=>{
                let actualMark=board[value].mark
                checkWinner(actualMark);
            });
            totalX = [];
            totalO = [];
        })
    };
    return{
        checkGameStatus:checkGameStatus
    }
}());
