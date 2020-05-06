var vp= document.getElementById("villaPlatzi");
var papel = vp.getContext("2d");
document.addEventListener("keydown",dibujarTeclado)
var xCerdo=250
var yCerdo=250
var teclas=
{
UP:38,
DOWN:40,
RIGHT:39,
LEFT:37
};

function dibujarTeclado(evento)
{
    var movimiento=10;
    switch (evento.keyCode) 
    {
        case teclas.UP:
            yCerdo=yCerdo-movimiento
            dibujar()

            break;
        case teclas.DOWN:
            yCerdo=yCerdo+movimiento
            dibujar()

            break;
        case teclas.LEFT:
            xCerdo=xCerdo-movimiento
            dibujar()

            break;
        case teclas.RIGHT:
            xCerdo=xCerdo+movimiento
            dibujar()

            break;
    }
}

var fondo ={
    url:"tile.png",
    cargaOK:false
};
var vaca ={
    url:"vaca.png",
    cargaOK:false
}
var pollo ={
    url:"pollo.png",
    cargaOK:false
}
var cerdo ={
    url:"cerdo.png",
    cargaOK:false
}
fondo.imagen = new Image();
fondo.imagen.src=fondo.url;
fondo.imagen.addEventListener("load",cargarFondo);
pollo.imagen = new Image();
pollo.imagen.src=pollo.url;
pollo.imagen.addEventListener("load",cargarPollo);
cerdo.imagen = new Image();
cerdo.imagen.src=cerdo.url;
cerdo.imagen.addEventListener("load",cargarCerdo);


 vaca.imagen = new Image();
 vaca.imagen.src=vaca.url;
 vaca.imagen.addEventListener("load",cargarVacas);

function cargarVacas()
{
    vaca.cargaOK=true
    dibujar()

}
function cargarCerdo()
{
    cerdo.cargaOK=true
    dibujar()

}
function cargarPollo()
{
    pollo.cargaOK=true
    dibujar()

}


function cargarFondo()
{
    fondo.cargaOK=true
    dibujar()
}
function dibujar()
{
    if(fondo.cargaOK)
    {
        papel.drawImage(fondo.imagen,0,0)
    }
    if(vaca.cargaOK)
    {        
        var cantidad = aleatorio (1,5)

        console.log(cantidad)
        for(v=0;v<cantidad;v++)
        {
            x=aleatorio(0,7)
            y=aleatorio(0,7)
            x=x*60;
            y=y*60;
            papel.drawImage(vaca.imagen,x,y)
        }
       
    }
    if(cerdo.cargaOK)
    {        
        var cantidad = aleatorio (1,5)

        
            
            papel.drawImage(cerdo.imagen,xCerdo,yCerdo)

       
    }
    if(pollo.cargaOK)
    {        
        var cantidad = aleatorio (1,5)

        console.log(cantidad)
        for(v=0;v<cantidad;v++)
        {
            x=aleatorio(0,7)
            y=aleatorio(0,7)
            x=x*60;
            y=y*60;
            papel.drawImage(pollo.imagen,x,y)
        }
       
    }

}

function aleatorio(min,max)
{
    let resultado;
    resultado=Math.floor(Math.random()*max-min+1)+min;
    return resultado
}