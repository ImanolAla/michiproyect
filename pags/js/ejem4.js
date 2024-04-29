//var x,d,s;
//x=parseInt(prompt("x;"));
//s=0;
//while(x!=0)
//{
//    d=x%10;
//    x=parseInt(x/10);
//  s=s+d;
//}
//document.write("LA SUMA DE LOS DIGITOS: ES: "+s)
dia=parseInt(prompt("Ingrese un numero de dia entre 1 y 7 para saber que dia de la semana es: "));
switch(dia)
{
    case 1: alert("Lunes");break;
    case 2: alert("Martes");break;
    case 3: alert("Miercoles");break;
    case 4: alert("Jueves");break;
    case 5: alert("Viernes");break;
    case 6: alert("Sabado");break;
    case 7: alert("Domingo");break;
    default: alert("Fuera de rango");
}