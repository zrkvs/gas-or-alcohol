/**
 * Retorna o preço de um input de preço.
 * @param {HTMLInputElement} input input que contém o preço.
 * @returns preço como um número ou null caso o valor não seja válido.
 */
function getPreco(input) {
    var preco = (input.value && +input.value !== NaN)
    ? +input.value.replace(",", ".")
    : null;

    return preco;
}

function divideBy() {
    var inputGasolina = document.querySelector("#precoGasolina");
    var inputAlcool = document.querySelector("#precoAlcool");

    var precoGasolina = getPreco(inputGasolina);
    var precoAlcool = getPreco(inputAlcool);

    if(precoGasolina === null || precoAlcool === null) {
        alert(`Insira um valor válido.`);
        return;
    }

    var relacao = precoAlcool / precoGasolina;
    var precoAlcool = inputAlcool.value.replace(",", ".");

    if (relacao > 0.7) {
        alert(`Resultado: ${relacao.toFixed(2)} Gasolina compensa mais que álcool`);
    }
    else if (relacao < 0.7) {
        alert(`Resultado: ${relacao.toFixed(2)} Álcool compensa mais que gasolina`);
    }
    else {
        alert(`Resultado: ${relacao.toFixed(2)} Compensa igualmente`);
    }

    var resposta = prompt('Deseja efetuar um novo cálculo? Responda com sim ou não.').toLowerCase();
    while (resposta !== "sim" && resposta !== "não") {
        alert("Responda com sim ou não");
        resposta = prompt('Deseja efetuar um novo cálculo?').toLowerCase();
    }
    if (resposta === "sim") {
        inputGasolina.value = "";
        inputAlcool.value = "";
    }
}