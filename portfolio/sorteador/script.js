function getRndInteger(min, max) {
    let numero = Math.floor(Math.random() * (max - min + 1) ) + min;
    return numero;
}

function Revelar(e){
    console.log(e);
    e.style.color="black";
}

function sortearNumero(){
    //representa os componentes na tela
    let cqtde = document.getElementById("qtde");
    let cmin = document.getElementById("min");
    let cmax = document.getElementById("max");
    let cnumeros = document.getElementById("numeros");
    //caixa que fala se é para esconder o número
    let crevelar = document.getElementById("revelar");
    
    //valores que estavam nos componentes
    let qtde = parseInt(cqtde.value);
    let min = parseInt(cmin.value);
    let max = parseInt(cmax.value);
    //sortear apenas um número
    let numero = 0;
    let texto = "";
    //mostrar os números na tela
    for (let i = 1; i <= qtde; i++){
        numero = getRndInteger(min,max);
        if (crevelar.checked==false){ //se for para mostrar usa essa classe
            texto += `<p class="numero" >${numero}</p>`;
        } else { //senão usa essa
            texto += `<p class="numerorevel" onclick="Revelar(this)">${numero}</p>`;
        }
    } 
    cnumeros.innerHTML = texto;
}
