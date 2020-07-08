let totalgrid=0
let test=document.documentElement.style.getPropertyValue("--trows");
let test1=document.documentElement.style.getPropertyValue("--sizerows");
let trows = document.querySelector('#rows').value;
let contain = document.querySelector('.container')
//-----------------------------------------------------
function sizeOfRows(trows){
    toret=440/trows
    return toret
}
//-----------------------------------------------------
function rowchange(){
    let size=sizeOfRows(trows)+"px"
    document.documentElement.style.setProperty('--sizerows', size);
    document.documentElement.style.setProperty('--trows', trows-1);
}
//----------------------------------------------------
function colorset(){
    let ascend = document.querySelector('#bwascendant').checked;
    let rainbow = document.querySelector('#rainbow').checked;
    let eraser = document.querySelector('#eraser').checked;
    if(ascend==true){
        let cellcolor= this.getAttribute("class")
        let actualcolor=cellcolor.slice(9)
        actualcolor=parseInt(actualcolor)
        if(actualcolor==1){
            actualcolor=11
        setter="content c"+actualcolor
        this.setAttribute('class', setter)
        }
        actualcolor=actualcolor-1
        setter="content c"+actualcolor
        this.setAttribute('class', setter)
    }
    if(rainbow==true){
        let r=Math.floor((Math.random() * 255) + 1);
        let g=Math.floor((Math.random() * 255) + 1);
        let b=Math.floor((Math.random() * 255) + 1);
        let rgbval="rgb("+r+" "+g+" "+b+")"
        this.style.backgroundColor=rgbval
    }
    if(eraser==true){
        this.style.backgroundColor=null
        this.setAttribute('class', "content c11")
    }
}
//-----------------------------------------------------
function generate(){
    contain = document.querySelector('.container')
    if(document.querySelector(".content")!=null){
        deleteChild()
    }
    trows = document.querySelector('#rows').value;
    let tcells=trows*trows
    rowchange()
    test=document.documentElement.style.getPropertyValue("--trows");
    test1=document.documentElement.style.getPropertyValue("--sizerows");
    while (totalgrid<tcells){
        const container = document.querySelector('.container');
        let content = document.createElement('div');
        content.classList.add('content');
        content.classList.add('c11');
        content.style.border= "1px solid black";
        content.addEventListener("mouseover", colorset)
        container.appendChild(content);
        totalgrid++
    }    tcells=0
    totalgrid=0
}
//-----------------------------------------------------
function deleteChild() { 
    contain = document.querySelector('.container')
    while (contain.hasChildNodes()) {  
        contain.removeChild(contain.firstChild);
      }
}
window.onload = generate() ;
