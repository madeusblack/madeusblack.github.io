var board=[]
let logicalgrid = (function () {    
    
    let generateboard = function(){
        board = [];
        mark="blank";
        while (board.length<9){
            boarpiece={
                mark:mark,
                position:board.length
            }
            board.push(boarpiece)
        }       

    }
    generateboard()  
    return {
        generateboard : generateboard,
      }
  }());

  var actualmark="blank"
    let lastturn="p2"
var displaycontroller = (function () {
    domcont=document.getElementById("boardcontainer");
  
    var checkDisplay = function(posMark){
        switch (posMark) {
            case "blank":
                return "" 
            case "x":
                return "x"
            case "o":
                return "o"
        }
    }
    
    var removechilds = function(){
        var checkNodes = document.getElementById("boardcontainer").hasChildNodes();
        if (checkNodes==true){
         let element = document.getElementById("boardcontainer");
            while (element.firstChild) {
                element.removeChild(element.firstChild);
            }
        }
    }
    let actualname=""
    var myHandler=function (){
        let updateTurn=document.getElementById("actualturn")
        tochange=this.firstChild.id
        if(this.firstChild.innerHTML!=""||player.name==undefined)
            {
                return}
        switch (lastturn) {
            case "p1":
                actualmark=player2.mark;
                actualname=player2.name;
                board[tochange].mark=actualmark
                lastturn="p2"
                updateTurn.innerHTML="Actual Turn: "+player.name
                break;
        
            case "p2":
                actualmark=player.mark;
                actualname=player.name;
                board[tochange].mark=actualmark
                lastturn="p1"
                updateTurn.innerHTML="Actual Turn: "+player2.name
                break;
        }
        displayboard()
        evaluatormod.iterate()  
    }
        
    var displayboard = function(){
        removechilds()
        console.log("dboard")
        displayedpos=0;
        while (displayedpos<9){
            let boardPosCard=document.createElement('div');
            boardPosCard.classList.add('cardbox');
            let boardcheck=document.createElement('h1');
            boardcheck.classList.add('mark');
            boardcheck.setAttribute("id", displayedpos);
            boardPosCard.addEventListener("click",myHandler);
            if(board[displayedpos].mark!=undefined){
                boardcheck.innerHTML=checkDisplay(board[displayedpos].mark);
            }

            console.log(board[displayedpos])
            boardPosCard.appendChild(boardcheck);
            domcont.appendChild(boardPosCard);
            displayedpos++
        }
    }
    displayboard();
    return {
        displayboard: displayboard
    }
        //passed for dimanic redraw
  }());

function Player(name,mark){
    
    var name = name;
    var mark = mark;  
    
    return Object.freeze({
        name,
        mark
    });
}
var player=""
var player2=""
function setplayers(){
    logicalgrid.generateboard()
    displaycontroller.displayboard();
    function getmarkp1(){
        let getter = document.getElementById("X").checked 
        console.log(getter)
        if(getter==true){
            return "x"
        }else{
            return "o"
        }
    }
    function getmarkp2(){
        let getter = getmarkp1()
        if(getter=="x"){
            return "o"
        }else{
            return "x"
        }
    }
    let pname = document.getElementById("Pname").value
    let p2name = document.getElementById("P2name").value
    
     player = new Player(pname,getmarkp1())
     player2 = new Player(p2name,getmarkp2())
  
}

var evaluatormod = (function () {    
    winpositions=["012","345","678","036","147","258","048","246"]
    function iterate() {
    let totalx = []
    let totalo = []
    winpositions.forEach( function(valor, indice) {
        let res=valor.split("");
        let getmark=""
        res.forEach(function(value, index){
            getmark=board[value].mark
        if(getmark=="x"){
            totalx.push(getmark)
            if(totalx.length>=3){
                if(player.mark=="x"){
                    alert( player.name+" is the winner")
                    logicalgrid.generateboard();
                    displaycontroller.displayboard();


                }if(player2.mark=="x"){
                    alert( player2.name+" is the winner")
                    logicalgrid.generateboard();
                    displaycontroller.displayboard();

                }
                
            }
        }if(getmark=="o"){
            totalo.push(getmark)
            if(totalo.length>=3){
                if(player.mark=="o"){
                    alert( player.name+" is the winner")
                    logicalgrid.generateboard();
                    displaycontroller.displayboard();


                }if(player2.mark=="o"){
                    alert( player2.name+" is the winner")
                    logicalgrid.generateboard();
                    displaycontroller.displayboard();

                }
                
            }
        } 
    }); totalx=[]
    totalo=[]  
    });  
    }
   return{
    iterate:iterate
   }
  }());
