class Billete
{
    constructor(valor,cantidad)
    {
        this.valor=valor;
        this.cantidad=cantidad;
    }
}

caja=[];
caja.push(new Billete(100,5));
caja.push(new Billete(50,5));
caja.push(new Billete(20,30));
caja.push(new Billete(10,30));


var dinero;
var button=document.getElementById("iniciar")
let container=document.getElementById("entregado");
let error=document.getElementById("error");
button.addEventListener("click",entregarBilletes)

function añadirDinero(e)
{
    dinero=parseInt(e.target.value)
}

function mostrarBilletes(valor,cantidad)

{
    let billetes=document.createElement("h5");
    billetes.innerHTML="Delivered "+cantidad+" bill of $"+ valor;
    container.appendChild(billetes);
}
function dibujarBilletes(valor)
{
    let billete=document.createElement("img");
    billete.src=valor+".jpg"
    billete.style.height="50px"
    container.appendChild(billete);

}

function entregarBilletes()
{   
    var din=document.getElementById("numero");
    dinero=din.value;
    var entregado=[];
    var interadorsec=0;
    var papeles=0;
    var cashCheck=0;
    console.log(dinero)
    for (b of caja)
    {
        var div;
        if(dinero>0&&b.cantidad>=1)
        {

            div=Math.floor(dinero/b.valor)
            console.log(div+"div")
            if (div>b.cantidad && (b.cantidad-div)<=0)
            {
                papeles=b.cantidad;
            }
            else
            {
                papeles=div;
                console.log(papeles,"else")

            }
            dinero=dinero-(b.valor*papeles);
            if(papeles>0)
            {
                mostrarBilletes(b.valor,papeles)
                dibujarBilletes(b.valor)
            }
        }
        entregado.push(new Billete(b.valor,papeles));
        caja[interadorsec].cantidad=caja[interadorsec].cantidad-papeles
        interadorsec+=1
        papeles=0;
        if(b.cantidad==0)
        {
            cashCheck++
        }

        
    }
   if(dinero>0)
   {
       let mensaje=document.createElement("h3");
       mensaje.innerHTML="I am a bad ATM and i could't give you $" + dinero  ;
       error.appendChild(mensaje)   

   }
   if(cashCheck==caja.length)
   {
        let mensaje=document.createElement("h3");
        mensaje.innerHTML="Please Feed me i am empty :C"  
        error.appendChild(mensaje)   
   }


}