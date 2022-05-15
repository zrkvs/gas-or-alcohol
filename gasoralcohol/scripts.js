function divideBy() {
    var inputGasolina = document.querySelector("#precoGasolina"); 
    var inputAlcool = document.querySelector("#precoAlcool");

    var precoGasolina = +inputGasolina.value;
    var precoAlcool = +inputAlcool.value;
    
    var relacao = precoAlcool / precoGasolina; 
    var precoAlcool = inputAlcool.value.replace(",", ".");
    
    if(relacao > 0.7) {
        alert(`Resultado: ${relacao.toFixed(2)} Gasolina compensa mais que álcool`);
    }
    else if(relacao === 0.7) {
        alert(`Resultado: ${relacao.toFixed(2)} Os dois compensam igualmente`);
    }
    else {
        alert(`Resultado: ${relacao.toFixed(2)} Álcool compensa mais que gasolina`);
    }


    var resposta = prompt('Deseja efetuar um novo cálculo? Responda com sim ou não.').toLowerCase();
    while(resposta !== "sim" && resposta !== "não") {
        alert("Responda com sim ou não");
        resposta = prompt('Deseja efetuar um novo cálculo?').toLowerCase();
    }
    if(resposta === "sim") {
        inputGasolina.value = "";
        inputAlcool.value = "";
    }
}