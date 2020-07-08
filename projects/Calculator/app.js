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
  let element = document.getElementById("displaybase").innerHTML;
  let n = element.search(".")
  if(toshow=="."&&n==-1 ){
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
  let element = document.getElementById("displaybase").innerHTML;
  element = element.substring(0, element.length - 1);
  document.getElementById("displaybase").innerHTML = element;
}
function pass(operation){
  let base = document.getElementById("displaybase").innerHTML;
  base=base+operation
  document.getElementById("displayup").innerHTML = base;
  clean("simple")
}
function result(){
  const firstOperator=document.getElementById("displayup") ;
  const secondOperator=document.getElementById("displaybase") ;
  const firstOperatorNormalized=getoperation(firstOperator.innerHTML)
  const secondOperatorNormalized=getoperation(secondOperator.innerHTML)
  const result=doOperation(firstOperatorNormalized,secondOperatorNormalized,actualOperation)
  firstOperator.innerHTML = result;
  secondOperator.innerHTML = result;
}
function getoperation(operator){
  let toReturn=""
  switch (true) {
    case /([+])/.test(operator) :
      actualOperation="+"
      operator=operator.slice(0, -1);
      toReturn=getoperator(operator)
      return toReturn
    case /([-])/.test(operator) :
      actualOperation="-"
      operator=operator.slice(0, -1);
      toReturn=getoperator(operator)
      return toReturn          
    case /([/])/.test(operator) :
      actualOperation="/"
      operator=operator.slice(0, -1);
      toReturn=getoperator(operator)
      return toReturn
    case /([*])/.test(operator) :
      actualOperation="*"
      operator=operator.slice(0, -1);
      toReturn=getoperator(operator)
      return toReturn
    default:
      toReturn=getoperator(operator)
      return toReturn

  }
}

function getoperator(operatorclean){
  let checkComma = operatorclean.search(".")
  if(checkComma==-1){
    operatorclean=parseInt(operatorclean)
    return operatorclean
  }
  if(checkComma!=-1){
    operatorclean=Number.parseFloat(operatorclean)
    return operatorclean
  }
}
function doOperation(op1,op2,op){
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