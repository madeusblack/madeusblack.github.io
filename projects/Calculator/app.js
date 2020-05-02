let actualOperation="";

function clean(mode){
    if (mode==="all"){
        document.getElementById("displayup").innerHTML = "";
        document.getElementById("displaybase").innerHTML = "";
    }
    if (mode==="simple"){
        document.getElementById("displaybase").innerHTML = "";
    }
}
function acdisplay(toshow){
    var element = document.getElementById("displaybase").innerHTML;
    let n = element.search(".")
    if(toshow=="."&&n==-1 ){
        console.log("return")
        return
    }
    if(element.length>12){
        return
    }
    toshowconver=toshow.toString()
    element=element+toshowconver
    document.getElementById("displaybase").innerHTML = element;
    
}
function backspace(){
    var element = document.getElementById("displaybase").innerHTML;
    console.log(element)
    element = element.substring(0, element.length - 1);
    document.getElementById("displaybase").innerHTML = element;
}
function pass(operation){
    var base = document.getElementById("displaybase").innerHTML;
    base=base+operation
    console.log(base)
    document.getElementById("displayup").innerHTML = base;
    clean("simple")
}
function result(){
    let firstOp=document.getElementById("displayup").innerHTML ;
    let secondOp=document.getElementById("displaybase").innerHTML ;
    let opclean=""
    let opclean2=""
    let result=""

    opclean=getoperation(firstOp)
    opclean2=getoperation(secondOp)
    console.log(actualOperation)
    result=doOperation(opclean,opclean2,actualOperation)
    document.getElementById("displaybase").innerHTML = result;
    document.getElementById("displayup").innerHTML = result;


}
function getoperation(operator){
    let checkadd = operator.search("\\+")
    let checksubs = operator.search("-")
    let checkdiv = operator.search("/")
    let checkmul = operator.search("x")
    let toret=""
    if(checkadd!=-1){
        actualOperation="+"
        operator=operator.slice(0, -1);
        console.log(operator)
        toret=getoperator(operator)
        return toret
        }
    if(checksubs!=-1){
        actualOperation="*"
        operator=operator.slice(0, -1);
        toret=getoperator(operator)
        return toret
    }
    if(checkdiv!=-1){
        actualOperation="/"
        operator=operator.slice(0, -1);
        toret=getoperator(operator)
        return toret
    }
    if(checkmul!=-1){
        actualOperation="*"
        operator=operator.slice(0, -1);
        toret=getoperator(operator)
        return toret
    }else{
        toret=getoperator(operator)
        return toret
    }
}
function getoperator(operatorclean){
    let checkComma = operatorclean.search(".")
    if(checkComma==-1){

        console.log("comma ignored")
        operatorclean=parseInt(operatorclean)
        console.log(operatorclean)

        return operatorclean
    }
    if(checkComma!=-1){
        console.log("comma pok")
        operatorclean=Number.parseFloat(operatorclean)
        console.log(operatorclean,"float")

        return operatorclean

    }
}
function doOperation(op1,op2,op){
    console.log(op)
    switch (op) {
        case "+":
        return op1+op2
        
        case "*":
            return op1*op2

        case "/":
            return op1/op2

        case "-":
            return op1-op2

    }
}