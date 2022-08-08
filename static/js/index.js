var texto = document.getElementById('texto').text;
var sol = document.querySelector('#sol');
var nublado = document.querySelector('#nublado');
var chuva = document.querySelector('#chuva');
var tempo = document.querySelector('#tempo');

var botao = document.getElementById("botao");
botao.addEventListener('click', mudarEstado);

function mudarEstado(){
    if((texto == "Céu limpo") || (texto == "Céu claro") || (texto == "Intensidade da luz") || (texto == "Poucas nuvens")){
        sol = style.display = 'block';
    }
    else if((texto == "Nuvens nubladas") || (texto == "Poucas nuvens") || (texto == "Nuvens quebradas") || (texto == "Nuvens dispersas")){
       nublado = style.display = 'block';
    }
    else if(texto == "Chuva"){
        chuva = style.display = 'block';
    }
    else{
        tempo = style.display = 'block';
    }
}
