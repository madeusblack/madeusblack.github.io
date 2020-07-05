//--------------------------Global variables area----------------
let games=0;
let gwon=0;
let glost=0;
let gdraw=0;
//--------------------------Functions area-----------------------
function getIDsetHtml(id,inHtml)
{
    document.getElementById(id).innerHTML=inHtml
}
function getIDsetSrc(id,src)
{
    document.getElementById(id).src=src;
}
function setImages(playerSel,cpuSel)
{
    switch (true) {
        case playerSel=="rock":
            getIDsetSrc("playerGame","rock.png")
            
            break;
        case playerSel=="paper":
            getIDsetSrc("playerGame","paper.png")
            
            break; 
        case playerSel=="scissors":
            getIDsetSrc("playerGame","scissors.png")
            
            break;
    }

    switch (true) {
        case cpuSel=="rock":
            
            getIDsetSrc("cpuGame","rock.png")
            break;
        case cpuSel=="paper":
            
            getIDsetSrc("cpuGame","paper.png")        
            break; 
        case cpuSel=="scissors":
            
            getIDsetSrc("cpuGame","scissors.png")            
            break;
        }
}
function resetGame()
{
    games=0;
    gwon=0;
    glost=0;
    gdraw=0;
    getIDsetHtml("gdraw",0);
    getIDsetHtml("gtotal",0);
    getIDsetHtml("glost",0);
    getIDsetHtml("gwon",0);
}

function checkGameStatus(){
if(games==5){
    if(gwon==glost)
        {
            alert("It's a Drawn Game")
            resetGame()
        }
        if(gwon>glost)
        {
            alert("Player Wins!")
            resetGame()
        }
        if(gwon<glost)
        {
            alert("Cpu Wins!")
            resetGame()
        }
    }
}

function computerPlay(){
    let renum=Math.floor(Math.random() * 3);
    let response="";
    switch (renum) {
        case 0:
            response="rock"; 
            break;
        case 1:
            response="paper";
            break;
        case 2:
            response="scissors";
            break;
    }
    return response
}

function updateBoard(result,tresults,tgames)
{
    switch (result) {
        case "draw":
            getIDsetHtml("gdraw",tresults)
            getIDsetHtml("gtotal",tgames)
            getIDsetHtml("resultGame","The Time (Draw Game)")
            break;
        case "cpuwon":
            getIDsetHtml("glost",tresults)
            getIDsetHtml("gtotal",tgames)
            getIDsetHtml("resultGame","The Cpu")
            break;
        case "pwon":
            getIDsetHtml("gwon",tresults)
            getIDsetHtml("gtotal",tgames)
            getIDsetHtml("resultGame","You , the Player")
            break;
    }

}

function game(computersel,PlayerSelection)
{   
    setImages(PlayerSelection,computersel)
    switch(true) 
    {
        case PlayerSelection==computersel:
            gdraw++;
            games++;
            
            updateBoard("draw",gdraw,games);
            break;
        case PlayerSelection=="rock"&&computersel=="paper":
            glost++;
            games++;
            updateBoard("cpuwon",glost,games);
            break;
        case PlayerSelection=="scissors"&&computersel=="paper":
            gwon++;
            games++;
            updateBoard("pwon",gwon,games);
            break;
        case PlayerSelection=="rock"&&computersel=="scissors":
            glost++;
            games++;
            updateBoard("cpuwon",glost,games);
            break;
        case PlayerSelection=="paper"&&computersel=="scissors":
            gwon++;
            games++
            updateBoard("pwon",gwon,games);
            break;
        case PlayerSelection=="scissors"&&computersel=="rock":
            glost++;
            games++
            updateBoard("cpuwon",glost,games);
            break;
        case PlayerSelection=="paper"&&computersel=="rock":
            gwon++;
            games++;
            updateBoard("pwon",gwon,games);
            break;
    }

}
