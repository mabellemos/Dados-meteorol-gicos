var texto = document.getElementById('texto').innerText;
var sol = document.getElementById('sol');
var nublado = document.getElementById('nublado');
var chuva = document.getElementById('chuva');
var tempo = document.getElementById('tempo');

function mudarEstado(){
    if((texto == "Céu limpo") || (texto == "Céu claro") || (texto == "Intensidade da luz") || (texto == "Poucas nuvens")){
        document.getElementById('sol').style.display = 'block';
    }
    else if((texto == "Nuvens nubladas") || (texto == "Nuvens quebradas") || (texto == "Nuvens dispersas")){
        document.getElementById('nublado').style.display = 'block';
    }
    else if(texto == "Chuva"){
        document.getElementById('chuva').style.display = 'block';
    }
    else {
        document.getElementById('tempo').style.display = 'block';
    }
}