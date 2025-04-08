function hitung(){
    var a = parseInt(document.getElementById("pangkatdua").value);
    var b = parseInt(document.getElementById("pangkatsatu").value);
    var c = parseInt(document.getElementById("konstanta").value);
    var f; var x; var ftur; var D;

    D=(b*b)-(4*a*c);

if(D>=0){
x=c;
f=(a*x*x)+(b*x)+c;
ftur=(2*a*x)+(b*x);

while((f<-0.0001)||(f>0.0001)){
x=x-(f/ftur)
f=(a*x*x)+(b*x)+c;
ftur=(2*a*x)+b;
}

document.getElementById("hasil").innerHTML = ""+x.toFixed(4)+"";
alert("Akar penyelesaiannya adalah: "+x.toFixed(4)+"");
document.getElementById("hasil2").innerHTML = Math.abs(""+x.toFixed(4)+"");
}
else{
document.getElementById("hasil").innerHTML = "Tidak Punya Penyelesaian";
alert("Persamaan ini tidak memiliki penyelesaian");

}

}