function sumar() {
let valor1=document.getElementById("numerouno").value;
let valor2=document.getElementById("numerodos").value;

let resultadofinal=document.getElementById("resultado");

let resultadosuma = parseFloat(valor1) + parseFloat(valor2);
if(valor1==false || valor2==false){
   alert("debes escribir algun numero")
}
else{
    resultadofinal.innerHTML="el resultado es: " + resultadosuma ;
}







}