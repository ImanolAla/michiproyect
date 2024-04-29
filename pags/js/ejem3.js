var n,i,a,b,c;
alert(nom+" "+"ahora ingresa un rango n para el fibonassi");
n=parseInt(prompt("n:"));
a=-1;b=1;
for(i=1;i<=n;i++)
{
    c=a+b;
    a=b;
    b=c;

    document.write(" "+c+" ");
}