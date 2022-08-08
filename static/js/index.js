var texto = document.getElementById("texto").value;
var sol = document.getElementById("sol");
var nublado = document.getElementById("nublado");
var chuva = document.getElementById("chuva");

if(texto === "céu limpo" || texto === "céu claro" || texto === "intensidade da luz"){
    sol.style.display = "block";
}
if(texto === "nuvens nubladas" || texto === "poucas nuvens" || texto === "nuvens quebradas" || texto === "nuvens dispersas" ){
    nublado.style.display = "block";
}
if(texto === "chuva"){
    chuva.style.display = "block";
}
